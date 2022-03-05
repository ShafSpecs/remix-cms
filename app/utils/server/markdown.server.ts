import { AbbrDictionary } from "../client/dictionary.client";
const hljs = require("highlight.js");

const md = require("markdown-it")({
  html: true,
  typographer: true,
})
  .use(require("markdown-it-toc-done-right"))
  .use(require("markdown-it-alerts"))
  .use(require("markdown-it-highlightjs"), { hljs })
  .use(require("markdown-it-multimd-table"), {
    multiline: false,
    rowspan: false,
    headerless: false,
  })
  .use(require("markdown-it-abbr"), AbbrDictionary)
  .use(require("markdown-it-container"), "spoiler", {
    validate: function (params: any) {
      return params.trim().match(/^spoiler\s+(.*)$/);
    },

    render: function (tokens: any, idx: any) {
      var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);

      if (tokens[idx].nesting === 1) {
        // opening tag
        return (
          "<details><summary>" + md.utils.escapeHtml(m[1]) + "</summary>\n"
        );
      } else {
        // closing tag
        return "</details>\n";
      }
    },
  })
  .use(require("@gerhobbelt/markdown-it-github-headings"))
  .use(require("markdown-it-container"), "dynamic", {
    validate: function () {
      return true;
    },
    render: function (tokens: any, idx: any) {
      var token = tokens[idx];

      if (token.nesting === 1) {
        return '<div class="' + token.info.trim() + '">';
      } else {
        return "</div>";
      }
    },
  });

export function MarkdownHandler(markdown: string) {
  const rendered = md.render(markdown);
  return rendered;
}
