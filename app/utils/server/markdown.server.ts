const options = {
    validate: function(params: string) {
      return params.trim().match(/^spoiler\s+(.*)$/);
    },
  
    render: function (tokens: any[], idx: any) {
      var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
  
      if (tokens[idx].nesting === 1) {
        // opening tag
        return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';
  
      } else {
        // closing tag
        return '</details>\n';
      }
    }
  };

const abbrList = {
    "HTML": "HyperText Markup Language",
}

const hljs = require('highlight.js');

hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('html', require("highlight.js/lib/languages/xml"));

const md = require("markdown-it")({
  html: true,
  typographer: true,
})
  .use(require("markdown-it-toc-done-right"))
  .use(require("markdown-it-alerts"))
  .use(require("markdown-it-highlightjs"), { hljs })
  .use(require('markdown-it-multimd-table'), {
    multiline:  false,
    rowspan:    false,
    headerless: false,
  })
  // .use(require("markdown-it-named-code-blocks"))
  .use(require('markdown-it-abbr'), abbrList)
  .use(require('markdown-it-container'), "spoiler", {

    validate: function(params: any) {
      return params.trim().match(/^spoiler\s+(.*)$/);
    },
  
    render: function (tokens: any, idx: any) {
      var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
  
      if (tokens[idx].nesting === 1) {
        // opening tag
        return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';
  
      } else {
        // closing tag
        return '</details>\n';
      }
    }
  })
  .use(require('@gerhobbelt/markdown-it-github-headings'))
  .use(require('markdown-it-container'), 'dynamic', {
    validate: function() { return true; },
    render: function(tokens: any, idx: any) {
        var token = tokens[idx];

        if (token.nesting === 1) {
            return '<div class="' + token.info.trim() + '">';
        } else {
            return '</div>';
        }
    },
});

const grayMatter = require("gray-matter")

export function Markdown (content: FormDataEntryValue | null | string) {
  const format = grayMatter(content)
  const parsed: string = md.render(format.content)

    return {
        parsed,
        data: format.data,
        content
    }
}
