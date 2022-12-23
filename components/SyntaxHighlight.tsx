import path from "path";
import React, { useEffect, useState } from "react";
import { loadTheme, getHighlighter } from "shiki";

type Props = {
  code: string;
  languagesProps: {
    id: string;
    scopeName: string;
    aliases?: string[];
  };
};

type ShikiLanguages = {
  id: string;
  scopeName: string;
  path: string;
  aliases?: string[];
};

const shikiDirectory = path.join(process.cwd(), "src/lib/shiki");

const theme = loadTheme(path.join(shikiDirectory, "/themes/material-palenight.json"));
const languages: ShikiLanguages[] = [];

export default function SyntaxHighlight(props: Props) {
  let language: ShikiLanguages = {
    id: props.languagesProps.id,
    scopeName: props.languagesProps.scopeName,
    path: path.join(
      shikiDirectory,
      `/languages/${props.languagesProps.id}.tmLanguage.json`
    ),
  };

  if (props.languagesProps.aliases) {
    language.aliases = props.languagesProps.aliases;
  }

  languages.push(language);

  //  const [highlightedCode, setHighlightedCode] = useState();

  useEffect(() => {
    const hl = async () => {
      const highlighter = await getHighlighter({
        theme: await theme,
        langs: languages,
      });
      console.log(highlighter.codeToHtml(props.code, {
        lang: props.languagesProps.aliases
          ? language.aliases![0]
          : props.languagesProps.id,
      }))
    };
    hl();
  }, []);

  return (
    <p>unko</p>
  )
}
