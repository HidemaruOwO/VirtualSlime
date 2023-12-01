import { unified } from "unified";
// remark plugins
import remarkBreaks from "remark-breaks";
import remarkCodeTitle from "remark-code-title";
import remarkToc from "remark-toc";
import remarkOembed from "remark-oembed";
import remarkParse from "remark-parse";
import remarkToRehype from "remark-rehype";
// rehype plugins
import rehypeStringify from "rehype-stringify";
import rehypeShiki from "@stefanprobst/rehype-shiki";
// other
import * as shiki from "shiki";
import { getImage } from "astro:assets";
import rehypeParse from "rehype-parse";
import { visit } from "unist-util-visit";
import { getPlaiceholder } from "plaiceholder";
import type { Element, Root } from "hast";
import { importImage } from "./import";
import { h } from "hastscript";

// async function optimizeImage(html: string) {
//   const pictureDefault = {
//     widths: [640, 750, 828, 1080, 1200, 1920],
//     formats: ["webp", "jpeg"],
//   };

//   const imageNodes: {
//     node: Element;
//     index: number | undefined;
//     parent: Root | Element | undefined;
//   }[] = [];

//   const ast = unified().use(rehypeParse, { fragment: true }).parse(html);

//   visit(ast, "element", (node, index, parent) => {
//     if (node.tagName === "img") {
//       imageNodes.push({ node, index, parent });
//     }
//   });

//   const promises = imageNodes.map(async (nodeSet) => {
//     const {
//       node: {
//         properties: { src, alt },
//       },
//       index,
//       parent,
//     } = nodeSet;

//     const picture = await getImage({
//       src: importImage(`${src}`),
//       widths: pictureDefault.widths,
//       formats: pictureDefault.formats,
//     });

//     const imgSrc = picture.srcSet.values[0].url;
//     // const originalResolutionSrc =
//     // picture.srcSet.values[picture.srcSet.values.length - 1].url;

//     const imgNode = h("img", {
//       src: imgSrc,
//       alt: alt,
//       loading: "lazy",
//       decoding: "async",
//       width: picture.attributes.width,
//       height: picture.attributes.height,
//     });
//     const figureNode = h("figure", [imgNode]);

//     parent?.children.splice(index!, 1, figureNode);
//   });

//   await Promise.all(promises);

//   return unified().use(rehypeStringify).stringify(ast);
// }

export async function mdToHtml(md: string) {
  const highlighter = await shiki.getHighlighter({
    theme: "slack-dark",
  });

  const result = await unified()
    .use(remarkToc)
    .use(remarkBreaks)
    .use(remarkCodeTitle)
    .use(remarkOembed, { asyncImg: true })
    .use(remarkParse)
    .use(remarkToRehype)
    .use(rehypeShiki, { highlighter })
    .use(rehypeStringify)
    .process(md);

  return result.toString();
  // return await optimizeImage(result.toString());
}
