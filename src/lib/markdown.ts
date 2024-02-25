import { unified } from "unified";
// remark plugins
import remarkBreaks from "remark-breaks";
import remarkCodeTitle from "remark-code-title";
import remarkToc from "remark-toc";
import remarkOembed from "remark-oembed";
import remarkParse from "remark-parse";
import remarkToRehype from "remark-rehype";
import remarkLinkCard from "remark-link-card";
// rehype plugins
import rehypeStringify from "rehype-stringify";
import rehypeShiki from "@stefanprobst/rehype-shiki";
// other
import * as shiki from "shiki";
import { getImage } from "astro/assets";
import rehypeParse from "rehype-parse";
import { visit } from "unist-util-visit";
import type { Element, Root } from "hast";
import { importImage } from "./import";
import { h } from "hastscript";

async function editRlcUrl(html: string) {
  const ast = unified().use(rehypeParse, { fragment: true }).parse(html);

  visit(ast, "element", (node) => {
    if (
      node.tagName === "span" &&
      node.properties?.className?.includes("rlc-url")
    ) {
      const url = new URL(node.children[0].value);
      node.children[0].value = url.hostname;
    }
  });

  return unified().use(rehypeStringify).stringify(ast);
}

async function optimizeImage(html: string) {
  const pictureDefault = {
    widths: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ["webp", "jpeg"],
  };

  const imageNodes: {
    node: Element;
    index: number | undefined;
    parent: Root | Element | undefined;
  }[] = [];

  const ast = unified().use(rehypeParse, { fragment: true }).parse(html);

  visit(ast, "element", (node, index, parent) => {
    if (node.tagName === "img") {
      imageNodes.push({ node, index, parent });
    }
  });

  const promises = imageNodes.map(async (nodeSet) => {
    const {
      node: {
        properties: { src, alt },
      },
      index,
      parent,
    } = nodeSet;

    if (
      src?.toString().startsWith("data:image/") ||
      src?.toString().startsWith("http")
    )
      return;

    const picture = await getImage({
      src: importImage(`${src}`),
      widths: pictureDefault.widths,
      formats: pictureDefault.formats,
    });

    const imgSrc = picture.srcSet.values[0].url;
    const imgOriginalResolutionSrc =
      picture.srcSet.values[picture.srcSet.values.length - 1].url;

    const imgNode = h("img", {
      src: imgSrc,
      alt: alt,
      loading: "lazy",
      decoding: "async",
      width: picture.attributes.width,
      height: picture.attributes.height,
    });
    const figureNode = h("figure", [
      h("figcaption", h("small", "画像をクリックして、元解像度で表示")),
      h(
        "a",
        {
          href: imgOriginalResolutionSrc,
          target: "_blank",
          rel: "noreferrer noopener",
        },
        imgNode
      ),
      h("figcaption", alt),
    ]);
    parent?.children.splice(index!, 1, figureNode);
  });

  await Promise.all(promises);

  return unified().use(rehypeStringify).stringify(ast);
}

async function editHtml(html: string) {
  let result = html;
  result = await editRlcUrl(result);
  result = await optimizeImage(result);
  return result;
}

export async function mdToHtml(md: string) {
  const highlighter = await shiki.getHighlighter({
    theme: "slack-dark",
  });

  const result = await unified()
    .use(remarkToc)
    .use(remarkBreaks)
    .use(remarkCodeTitle)
    .use(remarkOembed, { asyncImg: true, syncWidget: true })
    .use(remarkLinkCard)
    .use(remarkParse)
    .use(remarkToRehype, { allowDangerousHtml: true })
    .use(rehypeShiki, { highlighter })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(md);

  return await editHtml(result.toString());
}

export function remarkRender() {
  return (tree, file) => {};
}
