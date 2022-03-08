import { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import { ClientOnly } from "remix-utils";

export default function Monaco({ set, val, triggerBtn }: any) {
  const [value, setValue] = useState(val);
  const options = {
    acceptSuggestionOnCommitCharacter: true,
    acceptSuggestionOnEnter: "on",
    accessibilitySupport: "auto",
    autoIndent: false,
    automaticLayout: true,
    codeLens: true,
    colorDecorators: true,
    contextmenu: true,
    cursorBlinking: "blink",
    cursorSmoothCaretAnimation: false,
    cursorStyle: "line",
    disableLayerHinting: false,
    disableMonospaceOptimizations: false,
    dragAndDrop: true,
    fixedOverflowWidgets: false,
    folding: true,
    foldingStrategy: "auto",
    fontLigatures: false,
    formatOnPaste: false,
    formatOnType: false,
    hideCursorInOverviewRuler: false,
    highlightActiveIndentGuide: true,
    links: true,
    mouseWheelZoom: false,
    multiCursorMergeOverlapping: true,
    multiCursorModifier: "alt",
    minimap: {
      enabled: false,
    },
    overviewRulerBorder: true,
    overviewRulerLanes: 2,
    quickSuggestions: true,
    quickSuggestionsDelay: 100,
    readOnly: false,
    renderControlCharacters: false,
    renderFinalNewline: true,
    renderIndentGuides: true,
    renderLineHighlight: "all",
    renderWhitespace: "none",
    revealHorizontalRightPadding: 30,
    roundedSelection: true,
    rulers: [],
    scrollBeyondLastColumn: 5,
    scrollBeyondLastLine: true,
    selectOnLineNumbers: true,
    selectionClipboard: true,
    selectionHighlight: true,
    showFoldingControls: "mouseover",
    smoothScrolling: false,
    suggestOnTriggerCharacters: true,
    wordBasedSuggestions: true,
    // eslint-disable-next-line
    wordSeparators: `~!@#$%^&*()-=+[{]}\|;:'",.<>/?`,
    wordWrap: "on",
    wordWrapBreakAfterCharacters: "\t})]?|&,;",
    wordWrapBreakBeforeCharacters: "{([+",
    wordWrapBreakObtrusiveCharacters: ".",
    wordWrapColumn: 80,
    wordWrapMinified: true,
    wrappingIndent: "none",
  };

  return (
    <ClientOnly>
      <MonacoEditor
        height="33.825rem"
        defaultValue={val}
        value={val}
        onChange={(val) => {
          setValue(val);
          set(val);
          triggerBtn();
        }}
        defaultLanguage="markdown"
        loading={<div className="spin"></div>}
        // @ts-ignore
        options={options}
        theme="tomorrow"
        beforeMount={(monaco) => {
          monaco.editor.defineTheme("tomorrow", {
            base: "vs-dark",
            inherit: true,
            rules: [
              {
                background: "1D1F21",
                token: "",
              },
              {
                foreground: "969896",
                token: "comment",
              },
              {
                foreground: "ced1cf",
                token: "keyword.operator.class",
              },
              {
                foreground: "ced1cf",
                token: "constant.other",
              },
              {
                foreground: "ced1cf",
                token: "source.php.embedded.line",
              },
              {
                foreground: "cc6666",
                token: "variable",
              },
              {
                foreground: "cc6666",
                token: "support.other.variable",
              },
              {
                foreground: "cc6666",
                token: "string.other.link",
              },
              {
                foreground: "cc6666",
                token: "string.regexp",
              },
              {
                foreground: "cc6666",
                token: "entity.name.tag",
              },
              {
                foreground: "cc6666",
                token: "entity.other.attribute-name",
              },
              {
                foreground: "cc6666",
                token: "meta.tag",
              },
              {
                foreground: "cc6666",
                token: "declaration.tag",
              },
              {
                foreground: "cc6666",
                token: "markup.deleted.git_gutter",
              },
              {
                foreground: "de935f",
                token: "constant.numeric",
              },
              {
                foreground: "de935f",
                token: "constant.language",
              },
              {
                foreground: "de935f",
                token: "support.constant",
              },
              {
                foreground: "de935f",
                token: "constant.character",
              },
              {
                foreground: "de935f",
                token: "variable.parameter",
              },
              {
                foreground: "de935f",
                token: "punctuation.section.embedded",
              },
              {
                foreground: "de935f",
                token: "keyword.other.unit",
              },
              {
                foreground: "f0c674",
                token: "entity.name.class",
              },
              {
                foreground: "f0c674",
                token: "entity.name.type.class",
              },
              {
                foreground: "f0c674",
                token: "support.type",
              },
              {
                foreground: "f0c674",
                token: "support.class",
              },
              {
                foreground: "b5bd68",
                token: "string",
              },
              {
                foreground: "b5bd68",
                token: "constant.other.symbol",
              },
              {
                foreground: "b5bd68",
                token: "entity.other.inherited-class",
              },
              {
                foreground: "b5bd68",
                token: "markup.heading",
              },
              {
                foreground: "b5bd68",
                token: "markup.inserted.git_gutter",
              },
              {
                foreground: "8abeb7",
                token: "keyword.operator",
              },
              {
                foreground: "8abeb7",
                token: "constant.other.color",
              },
              {
                foreground: "81a2be",
                token: "entity.name.function",
              },
              {
                foreground: "81a2be",
                token: "meta.function-call",
              },
              {
                foreground: "81a2be",
                token: "support.function",
              },
              {
                foreground: "81a2be",
                token: "keyword.other.special-method",
              },
              {
                foreground: "81a2be",
                token: "meta.block-level",
              },
              {
                foreground: "81a2be",
                token: "markup.changed.git_gutter",
              },
              {
                foreground: "b294bb",
                token: "keyword",
              },
              {
                foreground: "b294bb",
                token: "storage",
              },
              {
                foreground: "b294bb",
                token: "storage.type",
              },
              {
                foreground: "b294bb",
                token: "entity.name.tag.css",
              },
              {
                foreground: "ced2cf",
                background: "df5f5f",
                token: "invalid",
              },
              {
                foreground: "ced2cf",
                background: "82a3bf",
                token: "meta.separator",
              },
              {
                foreground: "ced2cf",
                background: "b798bf",
                token: "invalid.deprecated",
              },
              {
                foreground: "ffffff",
                token: "markup.inserted.diff",
              },
              {
                foreground: "ffffff",
                token: "markup.deleted.diff",
              },
              {
                foreground: "ffffff",
                token: "meta.diff.header.to-file",
              },
              {
                foreground: "ffffff",
                token: "meta.diff.header.from-file",
              },
              {
                foreground: "718c00",
                token: "markup.inserted.diff",
              },
              {
                foreground: "718c00",
                token: "meta.diff.header.to-file",
              },
              {
                foreground: "c82829",
                token: "markup.deleted.diff",
              },
              {
                foreground: "c82829",
                token: "meta.diff.header.from-file",
              },
              {
                foreground: "ffffff",
                background: "4271ae",
                token: "meta.diff.header.from-file",
              },
              {
                foreground: "ffffff",
                background: "4271ae",
                token: "meta.diff.header.to-file",
              },
              {
                foreground: "3e999f",
                fontStyle: "italic",
                token: "meta.diff.range",
              },
            ],
            colors: {
              "editor.foreground": "#C5C8C6",
              "editor.background": "#1D1F21",
              "editor.selectionBackground": "#373B41",
              "editor.lineHighlightBackground": "#282A2E",
              "editorCursor.foreground": "#AEAFAD",
              "editorWhitespace.foreground": "#4B4E55",
            },
          });
          monaco.editor.setTheme("tomorrow");
        }}
        onMount={(editor, monaco) => {
          editor.focus();
          editor.setPosition({ lineNumber: 10, column: 0 });
          function createDependencyProposals(range: any) {
            return [
              {
                label: "bolden",
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "Bolden your text",
                insertText: "**${1}**${2}",
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
              },
              {
                label: "italics",
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "Italics all the way!",
                insertText: "*${1:${TM_SELECTED_TEXT}}*$0",
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
              },
              {
                label: "code",
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "Show off your code knowledge, actually it's for anything",    
                insertText: "`${1:${TM_SELECTED_TEXT}}`$0",
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
              },
              {
                label: "block",
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "Code block for extra spice!",    
                insertText: "```${1:${TM_SELECTED_TEXT}}\n$2\n```$3",
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
              },
              {
                label: "h1",
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "Your big head",    
                insertText: "# ${1:${TM_SELECTED_TEXT}}",
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
              },
              {
                label: "h2",
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "Heading 2, ig.",    
                insertText: "## ${1:${TM_SELECTED_TEXT}}",
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
              },
              {
                label: "h3",
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "Heading 3, smartass!",    
                insertText: "### ${1:${TM_SELECTED_TEXT}}",
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
              },
              {
                label: "unordered-list",
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "Clumsy, distorted list",    
                insertText: "- ${1:${TM_SELECTED_TEXT}}\n- $2",
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
              },
              {
                label: "ordered-list",
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "Organized list like me",    
                insertText: "1. ${1:${TM_SELECTED_TEXT}}\n2. $2\n3. $3",
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
              },
              {
                label: "line",
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "Horizontal line, or vertical if you stand sideways",    
                insertText: "\n---\n${1:${TM_SELECTED_TEXT}}",
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
              },
              {
                label: "link",
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "Bring on those connections, boy!",    
                insertText: "[$1${TM_SELECTED_TEXT}]($2)",
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
              },
              {
                label: "image",
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "Colorful, happy times! Hopefully...",    
                insertText: "![$1${TM_SELECTED_TEXT}]($2)",
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
              },
              {
                label: "table",
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "Get those \"Gridular\" structures up and running!",    
                insertText: "| $1 | $2 |\n| $3 | $4 |\n| $5 | $6 |\n| $7 | $8 |\n| $9 | $10 |",
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range,
              },
            ];
          }
          monaco.languages.registerCompletionItemProvider("markdown", {
            //@ts-ignore
            provideCompletionItems: function (model, position) {
              const textUntilPosition = model.getValueInRange({
                startLineNumber: 1,
                startColumn: 1,
                endLineNumber: position.lineNumber,
                endColumn: position.column,
              });

              const word = model.getWordUntilPosition(position);
              const range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn,
              };
              return {
                suggestions: createDependencyProposals(range),
              };
            },
          });
        }}
      />
    </ClientOnly>
  );
}