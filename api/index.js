var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// empty-module:~/utils/client/monaco.client
var require_monaco = __commonJS({
  "empty-module:~/utils/client/monaco.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
var import_config = require("dotenv/config");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\fash\Documents\remix-cms\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());
var import_remix_utils = require("remix-utils");

// app/styles/variables.css
var variables_default = "/build/_assets/variables-TALOLBZS.css";

// app/styles/index.css
var styles_default = "/build/_assets/index-KO5XRLD3.css";

// route:C:\Users\fash\Documents\remix-cms\app\root.tsx
var meta = () => {
  return { title: "New Remix App" };
};
var links = () => {
  return [
    { rel: "stylesheet", href: variables_default },
    { rel: "stylesheet", href: styles_default }
  ];
};
var activeClassName = "active-route";
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", {
    className: "div"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "nav"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "h1"
  }, "ShafSpecs"), /* @__PURE__ */ React.createElement("ul", {
    className: "ul"
  }, /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/dashboard",
    className: ({ isActive }) => isActive ? activeClassName : ""
  }, /* @__PURE__ */ React.createElement("li", {
    className: "li"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
  }))), " ", "Dashboard")), /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/posts",
    className: ({ isActive }) => isActive ? activeClassName : ""
  }, /* @__PURE__ */ React.createElement("li", {
    className: "li"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
  }))), " ", "Posts")), /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/metrics",
    className: ({ isActive }) => isActive ? activeClassName : ""
  }, /* @__PURE__ */ React.createElement("li", {
    className: "li"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  }))), " ", "Metrics")), /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/settings",
    className: ({ isActive }) => isActive ? activeClassName : ""
  }, /* @__PURE__ */ React.createElement("li", {
    className: "li"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  }), /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }))), " ", "Settings")))), /* @__PURE__ */ React.createElement("section", {
    className: "page"
  }, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null))), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix_utils.ExternalScripts, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:C:\Users\fash\Documents\remix-cms\app\routes\dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard
});
init_react();
function Dashboard() {
  return /* @__PURE__ */ React.createElement("div", null);
}

// route:C:\Users\fash\Documents\remix-cms\app\routes\settings.tsx
var settings_exports = {};
__export(settings_exports, {
  default: () => Settings
});
init_react();
function Settings() {
  return /* @__PURE__ */ React.createElement("div", null);
}

// route:C:\Users\fash\Documents\remix-cms\app\routes\metrics.tsx
var metrics_exports = {};
__export(metrics_exports, {
  default: () => Metrics
});
init_react();
function Metrics() {
  return /* @__PURE__ */ React.createElement("div", null);
}

// route:C:\Users\fash\Documents\remix-cms\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader
});
init_react();
var import_remix3 = __toESM(require_remix());
var loader = () => {
  return (0, import_remix3.redirect)("/dashboard");
};

// route:C:\Users\fash\Documents\remix-cms\app\routes\posts.tsx
var posts_exports = {};
__export(posts_exports, {
  default: () => Posts,
  links: () => links2
});
init_react();
var import_remix4 = __toESM(require_remix());

// app/styles/posts.css
var posts_default = "/build/_assets/posts-UZKVNU24.css";

// route:C:\Users\fash\Documents\remix-cms\app\routes\posts.tsx
var links2 = () => {
  return [{ rel: "stylesheet", href: posts_default }];
};
function Posts() {
  const activeClassName2 = "active-post-route";
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "title"
  }, "Posts"), /* @__PURE__ */ React.createElement("h3", {
    className: "desc"
  }, "Edit posts & articles. Review stats and feedback.."), /* @__PURE__ */ React.createElement("nav", {
    className: "navbar"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "post-ul"
  }, /* @__PURE__ */ React.createElement(import_remix4.NavLink, {
    to: "/posts/overview",
    className: ({ isActive }) => isActive ? activeClassName2 : ""
  }, /* @__PURE__ */ React.createElement("li", null, "Overview")), /* @__PURE__ */ React.createElement(import_remix4.NavLink, {
    to: "/posts/edit/new",
    className: ({ isActive }) => isActive ? activeClassName2 : "",
    end: false
  }, /* @__PURE__ */ React.createElement("li", null, "Write a post")), /* @__PURE__ */ React.createElement(import_remix4.NavLink, {
    to: "/posts/manage-post",
    className: ({ isActive }) => isActive ? activeClassName2 : ""
  }, /* @__PURE__ */ React.createElement("li", null, "Manage articles")))), /* @__PURE__ */ React.createElement("div", {
    className: "outlet"
  }, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)));
}

// route:C:\Users\fash\Documents\remix-cms\app\routes\posts\edit.$slug.tsx
var edit_slug_exports = {};
__export(edit_slug_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action,
  default: () => New,
  links: () => links3,
  loader: () => loader2
});
init_react();
var import_react = __toESM(require("react"));
var import_remix5 = __toESM(require_remix());
var import_remix_utils2 = require("remix-utils");
var import_monaco = __toESM(require_monaco());

// app/components/TabSelector.tsx
init_react();
var React2 = __toESM(require("react"));
var TabSelector = ({
  isActive,
  children,
  onClick
}) => /* @__PURE__ */ React2.createElement("button", {
  className: `tab-selector ${isActive ? "active-tab" : ""}`,
  onClick,
  type: "submit"
}, children);

// app/components/Tab.tsx
init_react();
var React3 = __toESM(require("react"));
function usePrevious(value) {
  const ref = React3.useRef();
  React3.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
function useTabs(tabs, defaultTab) {
  const state = React3.useState();
  const [selectedTab, setSelectedTab] = state;
  const activeIndex = React3.useMemo(() => {
    if (selectedTab) {
      return tabs.indexOf(selectedTab);
    }
    return -1;
  }, [selectedTab, tabs]);
  const previousActiveIndex = usePrevious(activeIndex);
  React3.useEffect(() => {
    if (tabs.length === 0) {
      setSelectedTab(void 0);
      return;
    }
    if (selectedTab === null || selectedTab && tabs.includes(selectedTab)) {
      return;
    }
    if (typeof previousActiveIndex === "number" && previousActiveIndex >= 0 && (tabs[previousActiveIndex] || tabs[previousActiveIndex - 1])) {
      setSelectedTab(tabs[previousActiveIndex] || tabs[previousActiveIndex - 1]);
      return;
    }
    if (defaultTab === null) {
      return;
    }
    setSelectedTab(defaultTab && tabs.includes(defaultTab) ? defaultTab : tabs[0]);
  }, [selectedTab, defaultTab, tabs]);
  return state;
}
function TabPanel(_a) {
  var _b = _a, {
    children,
    render = "lazy"
  } = _b, props = __objRest(_b, [
    "children",
    "render"
  ]);
  const [shouldRender, setShouldRender] = React3.useState(render === "always");
  React3.useEffect(() => {
    if (props.hidden) {
      return;
    }
    setShouldRender(true);
  }, [props.hidden]);
  return /* @__PURE__ */ React3.createElement("div", __spreadValues({}, props), shouldRender ? children : null);
}

// route:C:\Users\fash\Documents\remix-cms\app\routes\posts\edit.$slug.tsx
var import_react_widget = require("@uploadcare/react-widget");

// app/utils/server/markdown.server.ts
init_react();
var abbrList = {
  "HTML": "HyperText Markup Language"
};
var hljs = require("highlight.js");
hljs.registerLanguage("typescript", require("highlight.js/lib/languages/typescript"));
hljs.registerLanguage("javascript", require("highlight.js/lib/languages/javascript"));
hljs.registerLanguage("bash", require("highlight.js/lib/languages/bash"));
hljs.registerLanguage("css", require("highlight.js/lib/languages/css"));
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"));
var md = require("markdown-it")({
  html: true,
  typographer: true
}).use(require("markdown-it-toc-done-right")).use(require("markdown-it-alerts")).use(require("markdown-it-highlightjs"), { hljs }).use(require("markdown-it-multimd-table"), {
  multiline: false,
  rowspan: false,
  headerless: false
}).use(require("markdown-it-abbr"), abbrList).use(require("markdown-it-container"), "spoiler", {
  validate: function(params) {
    return params.trim().match(/^spoiler\s+(.*)$/);
  },
  render: function(tokens, idx) {
    var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
    if (tokens[idx].nesting === 1) {
      return "<details><summary>" + md.utils.escapeHtml(m[1]) + "</summary>\n";
    } else {
      return "</details>\n";
    }
  }
}).use(require("@gerhobbelt/markdown-it-github-headings")).use(require("markdown-it-container"), "dynamic", {
  validate: function() {
    return true;
  },
  render: function(tokens, idx) {
    var token = tokens[idx];
    if (token.nesting === 1) {
      return '<div class="' + token.info.trim() + '">';
    } else {
      return "</div>";
    }
  }
});
var grayMatter = require("gray-matter");
function Markdown(content) {
  const format = grayMatter(content);
  const parsed = md.render(format.content);
  return {
    parsed,
    data: format.data,
    content
  };
}

// app/utils/server/github.server.ts
init_react();
var import_core = require("@octokit/core");

// app/utils/handlers/github-api.ts
init_react();
var Repo = {
  owner: "ShafSpecs",
  repo: "remix-cms"
};

// app/utils/server/github.server.ts
var octokit = new import_core.Octokit({ auth: process.env.GITHUB_TOKEN });
async function getPosts() {
  const postDir = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", __spreadProps(__spreadValues({}, Repo), {
    path: "posts"
  }));
  return postDir;
}
async function PostsData() {
  const posts = await getPosts();
  const postsInfo = posts.data.map((post) => {
    const { name, download_url, sha } = post;
    return { name, download_url, sha };
  });
  return postsInfo;
}

// app/styles/new.css
var new_default = "/build/_assets/new-SHX2FERF.css";

// route:C:\Users\fash\Documents\remix-cms\app\routes\posts\edit.$slug.tsx
var links3 = () => {
  return [{ rel: "stylesheet", href: new_default }];
};
var action = async ({ request, params }) => {
  request.headers.set("Connection", "keep-alive");
  const body = await request.formData();
  const _a = Object.fromEntries(body), { _action } = _a, values = __objRest(_a, ["_action"]);
  if (_action === "mdx") {
    const code = body.get("value");
    const res = Markdown(code);
    return res;
  }
  return { message: "No action" };
};
var loader2 = async ({ params }) => {
  const slug = params.slug;
  if (slug === "new") {
    return {
      data: ""
    };
  } else {
    const postsInfo = await PostsData();
    const currentPost = postsInfo.find((post) => post.name.split(".")[0] === slug);
    const postContent = await fetch(currentPost.download_url).then((res) => res.text());
    return {
      data: postContent
    };
  }
};
function New() {
  const loaderData = (0, import_remix5.useLoaderData)();
  const fetcher = (0, import_remix5.useFetcher)();
  const transition = (0, import_remix5.useTransition)();
  const [value, setValue] = (0, import_react.useState)(loaderData.value);
  const [selectedTab, setSelectedTab] = useTabs(["Markdown", "Preview"]);
  const editorRef = (0, import_react.useRef)(null);
  const widgetRef = (0, import_react.useRef)(null);
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "dive"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "monaco"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "editor-header"
  }, /* @__PURE__ */ import_react.default.createElement(TabSelector, {
    isActive: selectedTab === "Markdown",
    onClick: () => setSelectedTab("Markdown")
  }, /* @__PURE__ */ import_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    width: 24,
    height: 24
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
  })), "  ", /* @__PURE__ */ import_react.default.createElement("span", null, "Edit Post")), /* @__PURE__ */ import_react.default.createElement(TabSelector, {
    isActive: selectedTab === "Preview",
    onClick: () => {
      setSelectedTab("Preview");
      fetcher.submit({ value, _action: "mdx" }, { method: "post" });
    }
  }, /* @__PURE__ */ import_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    width: 24,
    height: 24
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }), /* @__PURE__ */ import_react.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
  })), "  ", /* @__PURE__ */ import_react.default.createElement("span", null, "Preview"))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "editor",
    ref: editorRef
  }, /* @__PURE__ */ import_react.default.createElement(TabPanel, {
    hidden: selectedTab !== "Markdown"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix_utils2.ClientOnly, null, /* @__PURE__ */ import_react.default.createElement(import_monaco.default, {
    set: setValue,
    val: value
  }))), /* @__PURE__ */ import_react.default.createElement(TabPanel, {
    hidden: selectedTab !== "Preview"
  }, /* @__PURE__ */ import_react.default.createElement("div", null, "Hello World!"))), selectedTab === "Markdown" && /* @__PURE__ */ import_react.default.createElement("div", {
    className: "editor-footer",
    onClick: () => {
      var _a;
      return (_a = widgetRef.current) == null ? void 0 : _a.openDialog("file");
    }
  }, /* @__PURE__ */ import_react.default.createElement("p", null, "Drop files to upload media files or click area to browse files")), /* @__PURE__ */ import_react.default.createElement(import_react_widget.Widget, {
    publicKey: "54ab46b8383262703bfa",
    onChange: (info) => {
      setValue(`${value} ![alt description](${info.cdnUrl})`);
    },
    multiple: true,
    imagesOnly: true,
    systemDialog: true,
    clearable: true,
    ref: widgetRef,
    preloader: null
  })));
}
var ErrorBoundary = ({ error }) => {
  return /* @__PURE__ */ import_react.default.createElement("div", null, "Oh oh! ", error.message);
};

// route:C:\Users\fash\Documents\remix-cms\app\routes\posts\overview.tsx
var overview_exports = {};
__export(overview_exports, {
  default: () => Post
});
init_react();
function Post() {
  return /* @__PURE__ */ React.createElement("div", null);
}

// route:C:\Users\fash\Documents\remix-cms\app\routes\posts\index.tsx
var posts_exports2 = {};
__export(posts_exports2, {
  loader: () => loader3
});
init_react();
var import_remix6 = __toESM(require_remix());
var loader3 = () => {
  return (0, import_remix6.redirect)("posts/overview");
};

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "3da045c4", "entry": { "module": "/build/entry.client-UVNADAOE.js", "imports": ["/build/_shared/chunk-EJJROTIM.js", "/build/_shared/chunk-PWWGK5UF.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-R54DPQIO.js", "imports": ["/build/_shared/chunk-MVGQYYJH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-Q5JOS22Q.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-A5RPKZJQ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/metrics": { "id": "routes/metrics", "parentId": "root", "path": "metrics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/metrics-7DJ4OU6V.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts": { "id": "routes/posts", "parentId": "root", "path": "posts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts-UWM7LFDC.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/edit.$slug": { "id": "routes/posts/edit.$slug", "parentId": "routes/posts", "path": "edit/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/edit.$slug-KSZORMKE.js", "imports": ["/build/_shared/chunk-CDTU5EJM.js", "/build/_shared/chunk-MVGQYYJH.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/posts/index": { "id": "routes/posts/index", "parentId": "routes/posts", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/posts/index-XLZLCD6Q.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/overview": { "id": "routes/posts/overview", "parentId": "routes/posts", "path": "overview", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/overview-Q2XJQFXQ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/settings": { "id": "routes/settings", "parentId": "root", "path": "settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/settings-3YHTCVFH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-3DA045C4.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/settings": {
    id: "routes/settings",
    parentId: "root",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  },
  "routes/metrics": {
    id: "routes/metrics",
    parentId: "root",
    path: "metrics",
    index: void 0,
    caseSensitive: void 0,
    module: metrics_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/posts/edit.$slug": {
    id: "routes/posts/edit.$slug",
    parentId: "routes/posts",
    path: "edit/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: edit_slug_exports
  },
  "routes/posts/overview": {
    id: "routes/posts/overview",
    parentId: "routes/posts",
    path: "overview",
    index: void 0,
    caseSensitive: void 0,
    module: overview_exports
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "routes/posts",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: posts_exports2
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6fi91dGlscy9jbGllbnQvbW9uYWNvLmNsaWVudCIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxyZW1peC1jbXNcXGFwcFxccm9vdC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHJlbWl4LWNtc1xcYXBwXFxyb3V0ZXNcXGRhc2hib2FyZC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHJlbWl4LWNtc1xcYXBwXFxyb3V0ZXNcXHNldHRpbmdzLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGZhc2hcXERvY3VtZW50c1xccmVtaXgtY21zXFxhcHBcXHJvdXRlc1xcbWV0cmljcy50c3giLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHJlbWl4LWNtc1xcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGZhc2hcXERvY3VtZW50c1xccmVtaXgtY21zXFxhcHBcXHJvdXRlc1xccG9zdHMudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxyZW1peC1jbXNcXGFwcFxccm91dGVzXFxwb3N0c1xcZWRpdC4kc2x1Zy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvVGFiU2VsZWN0b3IudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1RhYi50c3giLCAiLi4vYXBwL3V0aWxzL3NlcnZlci9tYXJrZG93bi5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL3NlcnZlci9naXRodWIuc2VydmVyLnRzIiwgIi4uL2FwcC91dGlscy9oYW5kbGVycy9naXRodWItYXBpLnRzIiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxyZW1peC1jbXNcXGFwcFxccm91dGVzXFxwb3N0c1xcb3ZlcnZpZXcudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxyZW1peC1jbXNcXGFwcFxccm91dGVzXFxwb3N0c1xcaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgIm1vZHVsZS5leHBvcnRzID0ge307IiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxccmVtaXgtY21zXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHJlbWl4LWNtc1xcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxccmVtaXgtY21zXFxcXGFwcFxcXFxyb3V0ZXNcXFxcZGFzaGJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxyZW1peC1jbXNcXFxcYXBwXFxcXHJvdXRlc1xcXFxzZXR0aW5ncy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxccmVtaXgtY21zXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWV0cmljcy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxccmVtaXgtY21zXFxcXGFwcFxcXFxyb3V0ZXNcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHJlbWl4LWNtc1xcXFxhcHBcXFxccm91dGVzXFxcXHBvc3RzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxyZW1peC1jbXNcXFxcYXBwXFxcXHJvdXRlc1xcXFxwb3N0c1xcXFxlZGl0LiRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxyZW1peC1jbXNcXFxcYXBwXFxcXHJvdXRlc1xcXFxwb3N0c1xcXFxvdmVydmlldy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxccmVtaXgtY21zXFxcXGFwcFxcXFxyb3V0ZXNcXFxccG9zdHNcXFxcaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9kYXNoYm9hcmRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Rhc2hib2FyZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJkYXNoYm9hcmRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3NldHRpbmdzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zZXR0aW5nc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzZXR0aW5nc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWV0cmljc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWV0cmljc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZXRyaWNzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9wb3N0c1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicG9zdHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL3Bvc3RzL2VkaXQuJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzL2VkaXQuJHNsdWdcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wb3N0c1wiLFxuICAgICAgcGF0aDogXCJlZGl0LzpzbHVnXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9wb3N0cy9vdmVydmlld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHMvb3ZlcnZpZXdcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wb3N0c1wiLFxuICAgICAgcGF0aDogXCJvdmVydmlld1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9zdHMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcG9zdHNcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59IiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICBOYXZMaW5rLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEV4dGVybmFsU2NyaXB0cyB9IGZyb20gXCJyZW1peC11dGlsc1wiO1xuXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiwgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgcm9vdFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvdmFyaWFibGVzLmNzc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvaW5kZXguY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogcm9vdFN0eWxlcyB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH0sXG4gIF07XG59O1xuXG5jb25zdCBhY3RpdmVDbGFzc05hbWU6IHN0cmluZyA9IFwiYWN0aXZlLXJvdXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2XCI+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoMVwiPlNoYWZTcGVjczwvaDE+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWxcIj5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz1cIi9kYXNoYm9hcmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT4gKGlzQWN0aXZlID8gYWN0aXZlQ2xhc3NOYW1lIDogXCJcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNOCA5bDMgMy0zIDNtNSAwaDNNNSAyMGgxNGEyIDIgMCAwMDItMlY2YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnpcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgIHRvPVwiL3Bvc3RzXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IGFjdGl2ZUNsYXNzTmFtZSA6IFwiXCIpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNlwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE5IDIwSDVhMiAyIDAgMDEtMi0yVjZhMiAyIDAgMDEyLTJoMTBhMiAyIDAgMDEyIDJ2MW0yIDEzYTIgMiAwIDAxLTItMlY3bTIgMTNhMiAyIDAgMDAyLTJWOWEyIDIgMCAwMC0yLTJoLTJtLTQtM0g5TTcgMTZoNk03IDhoNnY0SDdWOHpcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgUG9zdHNcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIvbWV0cmljc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PiAoaXNBY3RpdmUgPyBhY3RpdmVDbGFzc05hbWUgOiBcIlwiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk05IDE3di0ybTMgMnYtNG0zIDR2LTZtMiAxMEg3YTIgMiAwIDAxLTItMlY1YTIgMiAwIDAxMi0yaDUuNTg2YTEgMSAwIDAxLjcwNy4yOTNsNS40MTQgNS40MTRhMSAxIDAgMDEuMjkzLjcwN1YxOWEyIDIgMCAwMS0yIDJ6XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIE1ldHJpY3NcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIvc2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT4gKGlzQWN0aXZlID8gYWN0aXZlQ2xhc3NOYW1lIDogXCJcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAuMzI1IDQuMzE3Yy40MjYtMS43NTYgMi45MjQtMS43NTYgMy4zNSAwYTEuNzI0IDEuNzI0IDAgMDAyLjU3MyAxLjA2NmMxLjU0My0uOTQgMy4zMS44MjYgMi4zNyAyLjM3YTEuNzI0IDEuNzI0IDAgMDAxLjA2NSAyLjU3MmMxLjc1Ni40MjYgMS43NTYgMi45MjQgMCAzLjM1YTEuNzI0IDEuNzI0IDAgMDAtMS4wNjYgMi41NzNjLjk0IDEuNTQzLS44MjYgMy4zMS0yLjM3IDIuMzdhMS43MjQgMS43MjQgMCAwMC0yLjU3MiAxLjA2NWMtLjQyNiAxLjc1Ni0yLjkyNCAxLjc1Ni0zLjM1IDBhMS43MjQgMS43MjQgMCAwMC0yLjU3My0xLjA2NmMtMS41NDMuOTQtMy4zMS0uODI2LTIuMzctMi4zN2ExLjcyNCAxLjcyNCAwIDAwLTEuMDY1LTIuNTcyYy0xLjc1Ni0uNDI2LTEuNzU2LTIuOTI0IDAtMy4zNWExLjcyNCAxLjcyNCAwIDAwMS4wNjYtMi41NzNjLS45NC0xLjU0My44MjYtMy4zMSAyLjM3LTIuMzcuOTk2LjYwOCAyLjI5Ni4wNyAyLjU3Mi0xLjA2NXpcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNSAxMmEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxFeHRlcm5hbFNjcmlwdHMgLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZ3MgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1ldHJpY3MgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgKVxyXG59IiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gcmVkaXJlY3QoXCIvZGFzaGJvYXJkXCIpO1xufSIsICJpbXBvcnQgeyBOYXZMaW5rLCBPdXRsZXQsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL3Bvc3RzLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZSB9XTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKCkge1xyXG4gIGNvbnN0IGFjdGl2ZUNsYXNzTmFtZTogc3RyaW5nID0gXCJhY3RpdmUtcG9zdC1yb3V0ZVwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+UG9zdHM8L2gxPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwiZGVzY1wiPlxyXG4gICAgICAgIEVkaXQgcG9zdHMgJiBhcnRpY2xlcy4gUmV2aWV3IHN0YXRzIGFuZCBmZWVkYmFjay4uXHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBvc3QtdWxcIj5cclxuICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgIHRvPVwiL3Bvc3RzL292ZXJ2aWV3XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PiAoaXNBY3RpdmUgPyBhY3RpdmVDbGFzc05hbWUgOiBcIlwiKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGxpPk92ZXJ2aWV3PC9saT5cclxuICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgIHRvPVwiL3Bvc3RzL2VkaXQvbmV3XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PiAoaXNBY3RpdmUgPyBhY3RpdmVDbGFzc05hbWUgOiBcIlwiKX1cclxuICAgICAgICAgICAgZW5kPXtmYWxzZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGxpPldyaXRlIGEgcG9zdDwvbGk+XHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICB0bz1cIi9wb3N0cy9tYW5hZ2UtcG9zdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT4gKGlzQWN0aXZlID8gYWN0aXZlQ2xhc3NOYW1lIDogXCJcIil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxsaT5NYW5hZ2UgYXJ0aWNsZXM8L2xpPlxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGxldFwiPlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICB1c2VGZXRjaGVyLFxyXG4gIHVzZUxvYWRlckRhdGEsXHJcbiAgdXNlVHJhbnNpdGlvbixcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgQ2xpZW50T25seSB9IGZyb20gXCJyZW1peC11dGlsc1wiO1xyXG5pbXBvcnQgTW9uYWNvIGZyb20gXCJ+L3V0aWxzL2NsaWVudC9tb25hY28uY2xpZW50XCI7XHJcbmltcG9ydCB7IFRhYlNlbGVjdG9yIH0gZnJvbSBcIn4vY29tcG9uZW50cy9UYWJTZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBUYWJQYW5lbCwgdXNlVGFicyB9IGZyb20gXCJ+L2NvbXBvbmVudHMvVGFiXCI7XHJcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gXCJAdXBsb2FkY2FyZS9yZWFjdC13aWRnZXRcIjtcclxuaW1wb3J0IHsgTWFya2Rvd24gYXMgUGFyc2VyIH0gZnJvbSBcIn4vdXRpbHMvc2VydmVyL21hcmtkb3duLnNlcnZlclwiO1xyXG5pbXBvcnQgeyBQb3N0c0RhdGEgfSBmcm9tIFwifi91dGlscy9zZXJ2ZXIvZ2l0aHViLnNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHR5cGUge1xyXG4gIExpbmtzRnVuY3Rpb24sIFxyXG4gIEFjdGlvbkZ1bmN0aW9uLFxyXG4gIExvYWRlckZ1bmN0aW9uLFxyXG4gIEVycm9yQm91bmRhcnlDb21wb25lbnQsXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB0eXBlIHsgV2lkZ2V0QVBJIH0gZnJvbSBcIkB1cGxvYWRjYXJlL3JlYWN0LXdpZGdldFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvbmV3LmNzc1wiO1xyXG5pbXBvcnQgZnJhbWUgZnJvbSBcIi4uLy4uL3N0eWxlcy9pZnJhbWUuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlIH1dO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xyXG4gIHJlcXVlc3QuaGVhZGVycy5zZXQoXCJDb25uZWN0aW9uXCIsIFwia2VlcC1hbGl2ZVwiKTtcclxuXHJcbiAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBjb25zdCB7IF9hY3Rpb24sIC4uLnZhbHVlcyB9ID0gT2JqZWN0LmZyb21FbnRyaWVzKGJvZHkpO1xyXG5cclxuICBpZiAoX2FjdGlvbiA9PT0gXCJtZHhcIikge1xyXG4gICAgY29uc3QgY29kZSA9IGJvZHkuZ2V0KFwidmFsdWVcIik7XHJcbiAgICBjb25zdCByZXMgPSBQYXJzZXIoY29kZSk7XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH0gXHJcblxyXG4gIC8vIGNvbnN0IGxpc3QgPSBwb3N0c0luZm8ubWFwKGFzeW5jIChwb3N0OiBhbnkpID0+IHtcclxuICAvLyAgIGNvbnN0IHBvc3RDb250ZW50ID0gYXdhaXQgZmV0Y2gocG9zdC5kb3dubG9hZF91cmwpLnRoZW4oKHJlcykgPT5cclxuICAvLyAgICAgcmVzLnRleHQoKVxyXG4gIC8vICAgKTtcclxuXHJcbiAgLy8gICByZXR1cm4gcG9zdENvbnRlbnQ7XHJcbiAgLy8gfSk7XHJcbiAgLy8gLy8gR2V0IHRoZSBmcm9udC1tYXR0ZXIgZnJvbSB0aGUgcG9zdFxyXG4gIC8vIGxldCB5YW1sID0gcG9zdENvbnRlbnQuc3BsaXQoXCItLS1cIilbMV07XHJcbiAgLy8gbGV0IGZyb250bWF0dGVyOiBhbnkgPSB7fTtcclxuXHJcbiAgLy8gLy8gVHJhbnNmb3JtIHRoZSBmcm9udC1tYXR0ZXIgaW50byBvYmplY3QtcmVhZHkgc3RhdGVcclxuICAvLyB5YW1sLnNwbGl0KC9cXHI/XFxuL2cpLm1hcCgobGluZSkgPT4ge1xyXG4gIC8vICAgaWYgKGxpbmUubGVuZ3RoID4gMCAmJiBsaW5lLmluY2x1ZGVzKFwiOlwiKSkge1xyXG4gIC8vICAgICBsZXQga2V5OiBzdHJpbmcgfCBzdHJpbmdbXSA9IGxpbmUuc3BsaXQoXCI6XCIpO1xyXG5cclxuICAvLyAgICAgaWYgKGtleS5sZW5ndGggPiAyKSB7XHJcbiAgLy8gICAgICAga2V5WzFdID0ga2V5LnNsaWNlKDEpLmpvaW4oXCI6XCIpO1xyXG4gIC8vICAgICAgIGtleS5zcGxpY2UoLTEpO1xyXG4gIC8vICAgICB9XHJcblxyXG4gIC8vICAgICAvLyBQdXNoIGVhY2gga2V5LXZhbHVlIHBhaXIgaW50byB0aGUgZGF0YSBvYmplY3RcclxuICAvLyAgICAgZnJvbnRtYXR0ZXJba2V5WzBdXSA9IGtleVsxXS5yZXBsYWNlKFwiIFwiLCBcIlwiKTtcclxuICAvLyAgICAgcmV0dXJuIGxpbmU7XHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgcmV0dXJuIGxpbmU7XHJcblxyXG4gIHJldHVybiB7IG1lc3NhZ2U6IFwiTm8gYWN0aW9uXCIgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBzbHVnID0gcGFyYW1zLnNsdWc7XHJcbiAgXHJcbiAgaWYoc2x1ZyA9PT0gXCJuZXdcIikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogXCJcIixcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcG9zdHNJbmZvID0gYXdhaXQgUG9zdHNEYXRhKCk7XHJcbiAgICBjb25zdCBjdXJyZW50UG9zdCA9IHBvc3RzSW5mby5maW5kKChwb3N0OiBhbnkpID0+IHBvc3QubmFtZS5zcGxpdChcIi5cIilbMF0gPT09IHNsdWcpO1xyXG4gICAgY29uc3QgcG9zdENvbnRlbnQgPSBhd2FpdCBmZXRjaChjdXJyZW50UG9zdC5kb3dubG9hZF91cmwpLnRoZW4oKHJlcykgPT5cclxuICAgICAgcmVzLnRleHQoKVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBwb3N0Q29udGVudCxcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBQb3N0KGNvbnRlbnQ6IHN0cmluZywgZnJvbnRtYXR0ZXI6IHN0cmluZykge1xyXG4gIHJldHVybiBgXHJcbiAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9JHtmcmFtZX0+XHJcbjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vQGhpZ2hsaWdodGpzL2Nkbi1hc3NldHNAMTEuNC4wL2hpZ2hsaWdodC5taW4uanNcIj48L3NjcmlwdD5cclxuPHNjcmlwdD5obGpzLmhpZ2hsaWdodEFsbCgpOzwvc2NyaXB0PlxyXG48bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2dpdGh1Yi1tYXJrZG93bi1jc3MvNS4xLjAvZ2l0aHViLW1hcmtkb3duLWRhcmsubWluLmNzc1wiIGludGVncml0eT1cInNoYTUxMi1VU1J2cFQ3ZEpGQTdtclJ4NCtlc215KzJtWXI4dmxnbURMRnBrTmVWRWQrRDVDZ1F2VUxLUFlWbkRWOTdZd2ZlaytlLy9IZFNBME5sYVBlNG9xa3dmUT09XCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyXCIgLz4gICAgXHJcbjxib2R5PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1hcmtkb3duLWJvZHlcIj5cclxuICAgICAgJHtjb250ZW50fVxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2JvZHk+XHJcbiAgIGA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ldygpIHtcclxuICBjb25zdCBsb2FkZXJEYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XHJcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KGxvYWRlckRhdGEudmFsdWUpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRhYiwgc2V0U2VsZWN0ZWRUYWJdID0gdXNlVGFicyhbXCJNYXJrZG93blwiLCBcIlByZXZpZXdcIl0pO1xyXG5cclxuICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwhKTtcclxuICBjb25zdCB3aWRnZXRSZWYgPSB1c2VSZWY8V2lkZ2V0QVBJIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb25hY29cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRvci1oZWFkZXJcIj5cclxuICAgICAgICAgIDxUYWJTZWxlY3RvclxyXG4gICAgICAgICAgICBpc0FjdGl2ZT17c2VsZWN0ZWRUYWIgPT09IFwiTWFya2Rvd25cIn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRUYWIoXCJNYXJrZG93blwiKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXsyNH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezI0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMSA1SDZhMiAyIDAgMDAtMiAydjExYTIgMiAwIDAwMiAyaDExYTIgMiAwIDAwMi0ydi01bS0xLjQxNC05LjQxNGEyIDIgMCAxMTIuODI4IDIuODI4TDExLjgyOCAxNUg5di0yLjgyOGw4LjU4Ni04LjU4NnpcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgICA8c3Bhbj5FZGl0IFBvc3Q8L3NwYW4+XHJcbiAgICAgICAgICA8L1RhYlNlbGVjdG9yPlxyXG4gICAgICAgICAgPFRhYlNlbGVjdG9yXHJcbiAgICAgICAgICAgIGlzQWN0aXZlPXtzZWxlY3RlZFRhYiA9PT0gXCJQcmV2aWV3XCJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRhYihcIlByZXZpZXdcIik7XHJcbiAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoeyB2YWx1ZSwgX2FjdGlvbjogXCJtZHhcIiB9LCB7IG1ldGhvZDogXCJwb3N0XCIgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcclxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICB3aWR0aD17MjR9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICAgIGQ9XCJNMTUgMTJhMyAzIDAgMTEtNiAwIDMgMyAwIDAxNiAwelwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICBkPVwiTTIuNDU4IDEyQzMuNzMyIDcuOTQzIDcuNTIzIDUgMTIgNWM0LjQ3OCAwIDguMjY4IDIuOTQzIDkuNTQyIDctMS4yNzQgNC4wNTctNS4wNjQgNy05LjU0MiA3LTQuNDc3IDAtOC4yNjgtMi45NDMtOS41NDItN3pcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgICA8c3Bhbj5QcmV2aWV3PC9zcGFuPlxyXG4gICAgICAgICAgPC9UYWJTZWxlY3Rvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRvclwiIHJlZj17ZWRpdG9yUmVmfT5cclxuICAgICAgICAgIDxUYWJQYW5lbCBoaWRkZW49e3NlbGVjdGVkVGFiICE9PSBcIk1hcmtkb3duXCJ9PlxyXG4gICAgICAgICAgICA8Q2xpZW50T25seT5cclxuICAgICAgICAgICAgICA8TW9uYWNvIHNldD17c2V0VmFsdWV9IHZhbD17dmFsdWV9IC8+XHJcbiAgICAgICAgICAgIDwvQ2xpZW50T25seT5cclxuICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICA8VGFiUGFuZWwgaGlkZGVuPXtzZWxlY3RlZFRhYiAhPT0gXCJQcmV2aWV3XCJ9PlxyXG4gICAgICAgICAgICA8ZGl2PkhlbGxvIFdvcmxkITwvZGl2PlxyXG4gICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c2VsZWN0ZWRUYWIgPT09IFwiTWFya2Rvd25cIiAmJiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRvci1mb290ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aWRnZXRSZWYuY3VycmVudD8ub3BlbkRpYWxvZyhcImZpbGVcIil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIERyb3AgZmlsZXMgdG8gdXBsb2FkIG1lZGlhIGZpbGVzIG9yIGNsaWNrIGFyZWEgdG8gYnJvd3NlIGZpbGVzXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPFdpZGdldFxyXG4gICAgICAgICAgcHVibGljS2V5PVwiNTRhYjQ2YjgzODMyNjI3MDNiZmFcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFZhbHVlKGAke3ZhbHVlfSAhW2FsdCBkZXNjcmlwdGlvbl0oJHtpbmZvLmNkblVybH0pYCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgbXVsdGlwbGU9e3RydWV9XHJcbiAgICAgICAgICBpbWFnZXNPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgc3lzdGVtRGlhbG9nPXt0cnVlfVxyXG4gICAgICAgICAgY2xlYXJhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgcmVmPXt3aWRnZXRSZWZ9XHJcbiAgICAgICAgICBwcmVsb2FkZXI9e251bGx9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRXJyb3JCb3VuZGFyeTogRXJyb3JCb3VuZGFyeUNvbXBvbmVudCA9ICh7IGVycm9yIH0pID0+IHtcclxuICByZXR1cm4gPGRpdj5PaCBvaCEge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG59O1xyXG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGFiU2VsZWN0b3IgPSAoe1xyXG4gIGlzQWN0aXZlLFxyXG4gIGNoaWxkcmVuLFxyXG4gIG9uQ2xpY2ssXHJcbn06IHtcclxuICBpc0FjdGl2ZTogYm9vbGVhbjtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XHJcbn0pID0+IChcclxuICA8YnV0dG9uXHJcbiAgICBjbGFzc05hbWU9e2B0YWItc2VsZWN0b3IgJHtpc0FjdGl2ZSA/IFwiYWN0aXZlLXRhYlwiIDogXCJcIn1gfVxyXG4gICAgb25DbGljaz17b25DbGlja31cclxuICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gID5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2J1dHRvbj5cclxuKTtcclxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gdXNlUHJldmlvdXM8VD4odmFsdWU6IFQpIHtcclxuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8VD4oKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZWYuY3VycmVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYnM8SyBleHRlbmRzIHN0cmluZz4odGFiczogS1tdLCBkZWZhdWx0VGFiPzogSyB8IG51bGwpIHtcclxuICBjb25zdCBzdGF0ZSA9IFJlYWN0LnVzZVN0YXRlPEsgfCBudWxsPigpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRhYiwgc2V0U2VsZWN0ZWRUYWJdID0gc3RhdGU7XHJcblxyXG4gIGNvbnN0IGFjdGl2ZUluZGV4ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRUYWIpIHtcclxuICAgICAgcmV0dXJuIHRhYnMuaW5kZXhPZihzZWxlY3RlZFRhYik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH0sIFtzZWxlY3RlZFRhYiwgdGFic10pO1xyXG5cclxuICBjb25zdCBwcmV2aW91c0FjdGl2ZUluZGV4ID0gdXNlUHJldmlvdXMoYWN0aXZlSW5kZXgpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRhYnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHNldFNlbGVjdGVkVGFiKHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkVGFiID09PSBudWxsIHx8IChzZWxlY3RlZFRhYiAmJiB0YWJzLmluY2x1ZGVzKHNlbGVjdGVkVGFiKSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIHByZXZpb3VzQWN0aXZlSW5kZXggPT09IFwibnVtYmVyXCIgJiZcclxuICAgICAgcHJldmlvdXNBY3RpdmVJbmRleCA+PSAwICYmXHJcbiAgICAgICh0YWJzW3ByZXZpb3VzQWN0aXZlSW5kZXhdIHx8IHRhYnNbcHJldmlvdXNBY3RpdmVJbmRleCAtIDFdKVxyXG4gICAgKSB7XHJcbiAgICAgIHNldFNlbGVjdGVkVGFiKFxyXG4gICAgICAgIHRhYnNbcHJldmlvdXNBY3RpdmVJbmRleF0gfHwgdGFic1twcmV2aW91c0FjdGl2ZUluZGV4IC0gMV1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGVmYXVsdFRhYiA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2VsZWN0ZWRUYWIoXHJcbiAgICAgIGRlZmF1bHRUYWIgJiYgdGFicy5pbmNsdWRlcyhkZWZhdWx0VGFiKSA/IGRlZmF1bHRUYWIgOiB0YWJzWzBdXHJcbiAgICApO1xyXG4gIH0sIFtzZWxlY3RlZFRhYiwgZGVmYXVsdFRhYiwgdGFic10pO1xyXG5cclxuICByZXR1cm4gc3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUYWJQYW5lbCh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgcmVuZGVyID0gXCJsYXp5XCIsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+ICYge1xyXG4gIGhpZGRlbjogYm9vbGVhbjtcclxuICByZW5kZXI/OiBcImFsd2F5c1wiIHwgXCJsYXp5XCI7XHJcbn0pIHtcclxuICBjb25zdCBbc2hvdWxkUmVuZGVyLCBzZXRTaG91bGRSZW5kZXJdID0gUmVhY3QudXNlU3RhdGUocmVuZGVyID09PSBcImFsd2F5c1wiKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9wcy5oaWRkZW4pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNob3VsZFJlbmRlcih0cnVlKTtcclxuICB9LCBbcHJvcHMuaGlkZGVuXSk7XHJcblxyXG4gIHJldHVybiA8ZGl2IHsuLi5wcm9wc30+e3Nob3VsZFJlbmRlciA/IGNoaWxkcmVuIDogbnVsbH08L2Rpdj47XHJcbn0iLCAiY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHZhbGlkYXRlOiBmdW5jdGlvbihwYXJhbXM6IHN0cmluZykge1xyXG4gICAgICByZXR1cm4gcGFyYW1zLnRyaW0oKS5tYXRjaCgvXnNwb2lsZXJcXHMrKC4qKSQvKTtcclxuICAgIH0sXHJcbiAgXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICh0b2tlbnM6IGFueVtdLCBpZHg6IGFueSkge1xyXG4gICAgICB2YXIgbSA9IHRva2Vuc1tpZHhdLmluZm8udHJpbSgpLm1hdGNoKC9ec3BvaWxlclxccysoLiopJC8pO1xyXG4gIFxyXG4gICAgICBpZiAodG9rZW5zW2lkeF0ubmVzdGluZyA9PT0gMSkge1xyXG4gICAgICAgIC8vIG9wZW5pbmcgdGFnXHJcbiAgICAgICAgcmV0dXJuICc8ZGV0YWlscz48c3VtbWFyeT4nICsgbWQudXRpbHMuZXNjYXBlSHRtbChtWzFdKSArICc8L3N1bW1hcnk+XFxuJztcclxuICBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjbG9zaW5nIHRhZ1xyXG4gICAgICAgIHJldHVybiAnPC9kZXRhaWxzPlxcbic7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuY29uc3QgYWJickxpc3QgPSB7XHJcbiAgICBcIkhUTUxcIjogXCJIeXBlclRleHQgTWFya3VwIExhbmd1YWdlXCIsXHJcbn1cclxuXHJcbmNvbnN0IGhsanMgPSByZXF1aXJlKCdoaWdobGlnaHQuanMnKTtcclxuXHJcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgndHlwZXNjcmlwdCcsIHJlcXVpcmUoJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3R5cGVzY3JpcHQnKSk7XHJcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgnamF2YXNjcmlwdCcsIHJlcXVpcmUoJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmFzY3JpcHQnKSk7XHJcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgnYmFzaCcsIHJlcXVpcmUoJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Jhc2gnKSk7XHJcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgnY3NzJywgcmVxdWlyZSgnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY3NzJykpO1xyXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ2h0bWwnLCByZXF1aXJlKFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMveG1sXCIpKTtcclxuXHJcbmNvbnN0IG1kID0gcmVxdWlyZShcIm1hcmtkb3duLWl0XCIpKHtcclxuICBodG1sOiB0cnVlLFxyXG4gIHR5cG9ncmFwaGVyOiB0cnVlLFxyXG59KVxyXG4gIC51c2UocmVxdWlyZShcIm1hcmtkb3duLWl0LXRvYy1kb25lLXJpZ2h0XCIpKVxyXG4gIC51c2UocmVxdWlyZShcIm1hcmtkb3duLWl0LWFsZXJ0c1wiKSlcclxuICAudXNlKHJlcXVpcmUoXCJtYXJrZG93bi1pdC1oaWdobGlnaHRqc1wiKSwgeyBobGpzIH0pXHJcbiAgLnVzZShyZXF1aXJlKCdtYXJrZG93bi1pdC1tdWx0aW1kLXRhYmxlJyksIHtcclxuICAgIG11bHRpbGluZTogIGZhbHNlLFxyXG4gICAgcm93c3BhbjogICAgZmFsc2UsXHJcbiAgICBoZWFkZXJsZXNzOiBmYWxzZSxcclxuICB9KVxyXG4gIC8vIC51c2UocmVxdWlyZShcIm1hcmtkb3duLWl0LW5hbWVkLWNvZGUtYmxvY2tzXCIpKVxyXG4gIC51c2UocmVxdWlyZSgnbWFya2Rvd24taXQtYWJicicpLCBhYmJyTGlzdClcclxuICAudXNlKHJlcXVpcmUoJ21hcmtkb3duLWl0LWNvbnRhaW5lcicpLCBcInNwb2lsZXJcIiwge1xyXG5cclxuICAgIHZhbGlkYXRlOiBmdW5jdGlvbihwYXJhbXM6IGFueSkge1xyXG4gICAgICByZXR1cm4gcGFyYW1zLnRyaW0oKS5tYXRjaCgvXnNwb2lsZXJcXHMrKC4qKSQvKTtcclxuICAgIH0sXHJcbiAgXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICh0b2tlbnM6IGFueSwgaWR4OiBhbnkpIHtcclxuICAgICAgdmFyIG0gPSB0b2tlbnNbaWR4XS5pbmZvLnRyaW0oKS5tYXRjaCgvXnNwb2lsZXJcXHMrKC4qKSQvKTtcclxuICBcclxuICAgICAgaWYgKHRva2Vuc1tpZHhdLm5lc3RpbmcgPT09IDEpIHtcclxuICAgICAgICAvLyBvcGVuaW5nIHRhZ1xyXG4gICAgICAgIHJldHVybiAnPGRldGFpbHM+PHN1bW1hcnk+JyArIG1kLnV0aWxzLmVzY2FwZUh0bWwobVsxXSkgKyAnPC9zdW1tYXJ5Plxcbic7XHJcbiAgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gY2xvc2luZyB0YWdcclxuICAgICAgICByZXR1cm4gJzwvZGV0YWlscz5cXG4nO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuICAudXNlKHJlcXVpcmUoJ0BnZXJob2JiZWx0L21hcmtkb3duLWl0LWdpdGh1Yi1oZWFkaW5ncycpKVxyXG4gIC51c2UocmVxdWlyZSgnbWFya2Rvd24taXQtY29udGFpbmVyJyksICdkeW5hbWljJywge1xyXG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfSxcclxuICAgIHJlbmRlcjogZnVuY3Rpb24odG9rZW5zOiBhbnksIGlkeDogYW55KSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2lkeF07XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi5uZXN0aW5nID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cIicgKyB0b2tlbi5pbmZvLnRyaW0oKSArICdcIj4nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPC9kaXY+JztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IGdyYXlNYXR0ZXIgPSByZXF1aXJlKFwiZ3JheS1tYXR0ZXJcIilcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYXJrZG93biAoY29udGVudDogRm9ybURhdGFFbnRyeVZhbHVlIHwgbnVsbCB8IHN0cmluZykge1xyXG4gIGNvbnN0IGZvcm1hdCA9IGdyYXlNYXR0ZXIoY29udGVudClcclxuICBjb25zdCBwYXJzZWQ6IHN0cmluZyA9IG1kLnJlbmRlcihmb3JtYXQuY29udGVudClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhcnNlZCxcclxuICAgICAgICBkYXRhOiBmb3JtYXQuZGF0YSxcclxuICAgICAgICBjb250ZW50XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB7IE9jdG9raXQgfSBmcm9tIFwiQG9jdG9raXQvY29yZVwiO1xyXG5pbXBvcnQgeyBSZXBvIH0gZnJvbSBcIi4uL2hhbmRsZXJzL2dpdGh1Yi1hcGlcIjtcclxuXHJcbmNvbnN0IG9jdG9raXQgPSBuZXcgT2N0b2tpdCh7IGF1dGg6IHByb2Nlc3MuZW52LkdJVEhVQl9UT0tFTiB9KTtcclxuXHJcbmludGVyZmFjZSBQb3N0RGF0YSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHBhdGg6IHN0cmluZztcclxuICBzaGE6IHN0cmluZztcclxuICBzaXplOiBudW1iZXI7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgaHRtbF91cmw6IHN0cmluZztcclxuICBnaXRfdXJsOiBzdHJpbmc7XHJcbiAgZG93bmxvYWRfdXJsOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIF9saW5rczoge1xyXG4gICAgZ2l0OiBzdHJpbmc7XHJcbiAgICBzZWxmOiBzdHJpbmc7XHJcbiAgICBodG1sOiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuLy8gR2V0IGFsbCBwb3N0cyBmcm9tIHRoZSByZXBvc2l0b3J5XHJcbmFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzKCkge1xyXG4gIGNvbnN0IHBvc3REaXIgPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoXHJcbiAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29udGVudHMve3BhdGh9XCIsXHJcbiAgICB7XHJcbiAgICAgIC4uLlJlcG8sXHJcbiAgICAgIHBhdGg6IFwicG9zdHNcIixcclxuICAgIH1cclxuICApO1xyXG5cclxuICByZXR1cm4gcG9zdERpcjtcclxufVxyXG5cclxuLypcclxuICogIEV4dHJhY3QgcmVxdWlyZWQgcG9zdCBkYXRhIGZyb20gdGhlIEdpdEh1YiBBUEkgcmVzcG9uc2VcclxuICpcclxuICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUG9zdHNEYXRhKCkge1xyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0UG9zdHMoKTtcclxuXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgY29uc3QgcG9zdHNJbmZvID0gcG9zdHMuZGF0YS5tYXAoKHBvc3Q6IFBvc3REYXRhKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGRvd25sb2FkX3VybCwgc2hhIH0gPSBwb3N0O1xyXG4gICAgcmV0dXJuIHsgbmFtZSwgZG93bmxvYWRfdXJsLCBzaGEgfTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHBvc3RzSW5mb1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUG9zdChzbHVnOiBzdHJpbmcpIHtcclxuICBjb25zdCBjcmVhdGVkUG9zdCA9IGF3YWl0IG9jdG9raXQucmVxdWVzdChcclxuICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250ZW50cy97cGF0aH1cIixcclxuICAgIHtcclxuICAgICAgLi4uUmVwbyxcclxuICAgICAgcGF0aDogYHBvc3RzLyR7c2x1Z30ubWRgLFxyXG4gICAgICBtZXNzYWdlOiBgQ3JlYXRlZCBuZXcgcG9zdDogJHtzbHVnfS5tZGAsXHJcbiAgICAgIGNvbnRlbnQ6IFwiY29udGVudFwiLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBjcmVhdGVkUG9zdDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBvc3Qoc2x1Zzogc3RyaW5nKSB7XHJcbiAgY29uc3QgdXBkYXRlZFBvc3QgPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoXHJcbiAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29udGVudHMve3BhdGh9XCIsXHJcbiAgICB7XHJcbiAgICAgIC4uLlJlcG8sXHJcbiAgICAgIHBhdGg6IGBwb3N0cy8ke3NsdWd9Lm1kYCxcclxuICAgICAgbWVzc2FnZTogYFVwZGF0ZWQgcG9zdDogJHtzbHVnfS5tZGAsXHJcbiAgICAgIGNvbnRlbnQ6IFwiY29udGVudFwiLFxyXG4gICAgICBzaGE6IFwic2hhXCIsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHVwZGF0ZWRQb3N0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUG9zdChzbHVnOiBzdHJpbmcpIHtcclxuICBjb25zdCBkZWxldGVkUG9zdCA9IGF3YWl0IG9jdG9raXQucmVxdWVzdChcclxuICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250ZW50cy97cGF0aH1cIixcclxuICAgIHtcclxuICAgICAgLi4uUmVwbyxcclxuICAgICAgcGF0aDogYHBvc3RzLyR7c2x1Z30ubWRgLFxyXG4gICAgICBtZXNzYWdlOiBgRGVsZXRlZCBwb3N0OiAke3NsdWd9Lm1kYCxcclxuICAgICAgc2hhOiBcInNoYVwiLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBkZWxldGVkUG9zdDtcclxufVxyXG4iLCAiZXhwb3J0IGNvbnN0IFJlcG8gPSB7XHJcbiAgICBvd25lcjogXCJTaGFmU3BlY3NcIixcclxuICAgIHJlcG86IFwicmVtaXgtY21zXCIsXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgIClcclxufSIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwicG9zdHMvb3ZlcnZpZXdcIilcclxufSIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOiczZGEwNDVjNCcsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtVVZOQURBT0UuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVKSlJPVElNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUFdXR0s1VUYuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVI1NERQUUlPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NVkdRWVlKSC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkJzp7J2lkJzoncm91dGVzL2Rhc2hib2FyZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkYXNoYm9hcmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGFzaGJvYXJkLVE1Sk9TMjJRLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtQTVSUEtaSlEuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21ldHJpY3MnOnsnaWQnOidyb3V0ZXMvbWV0cmljcycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZXRyaWNzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21ldHJpY3MtN0RKNE9VNlYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0cyc6eydpZCc6J3JvdXRlcy9wb3N0cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwb3N0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy1VV003TEZEQy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Bvc3RzL2VkaXQuJHNsdWcnOnsnaWQnOidyb3V0ZXMvcG9zdHMvZWRpdC4kc2x1ZycsJ3BhcmVudElkJzoncm91dGVzL3Bvc3RzJywncGF0aCc6J2VkaXQvOnNsdWcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9zdHMvZWRpdC4kc2x1Zy1LU1pPUk1LRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQ0RUVTVFSk0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NVkdRWVlKSC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvcG9zdHMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvcG9zdHMvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9wb3N0cycsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy9pbmRleC1YTFpMQ0Q2US5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9zdHMvb3ZlcnZpZXcnOnsnaWQnOidyb3V0ZXMvcG9zdHMvb3ZlcnZpZXcnLCdwYXJlbnRJZCc6J3JvdXRlcy9wb3N0cycsJ3BhdGgnOidvdmVydmlldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy9vdmVydmlldy1RMlhKUUZYUS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NldHRpbmdzJzp7J2lkJzoncm91dGVzL3NldHRpbmdzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NldHRpbmdzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NldHRpbmdzLTNZSFRDVkZILmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTNEQTA0NUM0LmpzJ307Il0s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
