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

// empty-module:../client/dictionary.client
var require_dictionary = __commonJS({
  "empty-module:../client/dictionary.client"(exports, module2) {
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
  }, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null))), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement("script", {
    src: "https://unpkg.com/@highlightjs/cdn-assets@11.4.0/highlight.min.js"
  }), /* @__PURE__ */ React.createElement("script", null, "hljs.highlightAll();"), /* @__PURE__ */ React.createElement(import_remix_utils.ExternalScripts, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
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
var import_sha512 = __toESM(require("crypto-js/sha512"));
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
async function createPost(slug, commit, content) {
  const post = Buffer.from(content).toString("base64");
  const sha = (0, import_sha512.default)(post).toString();
  const createdPost = await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", __spreadProps(__spreadValues({}, Repo), {
    path: `posts/${slug}.md`,
    message: commit,
    content: post
  }));
  return createdPost;
}
async function updatePost(slug, commit, content, sha) {
  const post = Buffer.from(content).toString("base64");
  const updatedPost = await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", __spreadProps(__spreadValues({}, Repo), {
    path: `posts/${slug}.md`,
    message: commit,
    content: post,
    sha
  }));
  return updatedPost;
}

// app/utils/server/markdown.server.ts
init_react();
var import_dictionary = __toESM(require_dictionary());
var hljs = require("highlight.js");
var md = require("markdown-it")({
  html: true,
  typographer: true
}).use(require("markdown-it-toc-done-right")).use(require("markdown-it-alerts")).use(require("markdown-it-highlightjs"), { hljs }).use(require("markdown-it-multimd-table"), {
  multiline: false,
  rowspan: false,
  headerless: false
}).use(require("markdown-it-abbr"), import_dictionary.AbbrDictionary).use(require("markdown-it-container"), "spoiler", {
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
function MarkdownHandler(markdown) {
  const rendered = md.render(markdown);
  return rendered;
}

// route:C:\Users\fash\Documents\remix-cms\app\routes\posts\edit.$slug.tsx
var import_di = require("react-icons/di");

// app/styles/new.css
var new_default = "/build/_assets/new-FBIEUPBA.css";

// app/styles/github.css
var github_default = "/build/_assets/github-ULFX4O24.css";

// route:C:\Users\fash\Documents\remix-cms\app\routes\posts\edit.$slug.tsx
var links3 = () => {
  return [
    { rel: "stylesheet", href: new_default },
    { rel: "stylesheet", href: github_default }
  ];
};
var action = async ({ request, params }) => {
  const body = await request.formData();
  const type = body.get("type");
  console.log(type);
  if (type === "PARSE_MARKDOWN") {
    console.log(params.slug);
    const markdown = body.get("markdown");
    const parsed = MarkdownHandler(markdown);
    return {
      data: parsed,
      type: "PARSE_MARKDOWN"
    };
  } else if (type === "COMMIT_POST") {
    const message = body.get("message");
    const sha = body.get("shaValue");
    const val = body.get("value");
    const title = body.get("title");
    const slug = params.slug;
    if (slug === "new") {
      const data = await createPost(title, message, val);
      console.log("Created");
      return (0, import_remix5.redirect)("/posts/edit/" + title);
    } else {
      const data = await updatePost(slug, message, val, sha);
      console.log("Updated");
      return (0, import_remix5.redirect)("/posts/edit/" + title);
    }
  }
  return { data: "No action", type: "NULL" };
};
var loader2 = async ({ params }) => {
  const slug = params.slug;
  if (slug === "new") {
    return {
      loaderData: null,
      sha: null
    };
  } else {
    const postsInfo = await PostsData();
    const currentPost = postsInfo.find((post) => post.name.split(".")[0] === slug);
    const postContent = await fetch(currentPost.download_url).then((res) => res.text());
    return {
      loaderData: postContent,
      sha: currentPost.sha
    };
  }
};
function New() {
  var _a, _b;
  const { loaderData, sha } = (0, import_remix5.useLoaderData)();
  const transition = (0, import_remix5.useTransition)();
  const fetcher = (0, import_remix5.useFetcher)();
  const data = (_a = fetcher.data) == null ? void 0 : _a.data;
  const type = (_b = fetcher.data) == null ? void 0 : _b.type;
  const rawText = loaderData ? loaderData : `---
id: uuid
title: Title
description: Description
date: 2022-01-01
slug: post-slug
image: "Post's banner URL"
published: false
---

`;
  const content = loaderData ? loaderData.substring(loaderData.indexOf("---", 4) + 3).trim() : rawText.substring(rawText.indexOf("---", 4) + 3).trim();
  let frontmatter = {};
  let yaml = loaderData ? loaderData.split("---")[1] : rawText.split("---")[1];
  yaml && yaml.split(/\r?\n/g).map((line) => {
    if (line.length > 0 && line.includes(":")) {
      let key = line.split(":");
      if (key.length > 2) {
        key[1] = key.slice(1).join(":");
        key.splice(-1);
      }
      frontmatter[key[0]] = key[1].replace(" ", "");
      return line;
    }
    return line;
  });
  const [value, setValue] = (0, import_react.useState)(rawText);
  const [md2, setMd] = (0, import_react.useState)(content);
  const [parsed, setParsed] = (0, import_react.useState)("");
  const [selectedTab, setSelectedTab] = useTabs(["Markdown", "Preview"]);
  const [slug, setSlug] = (0, import_react.useState)("");
  const [status, setStatus] = (0, import_react.useState)(0);
  const editorRef = (0, import_react.useRef)(null);
  const widgetRef = (0, import_react.useRef)(null);
  const blogRef = (0, import_react.useRef)(null);
  const firstRender = (0, import_react.useRef)(true);
  const commitRef = (0, import_react.useRef)(null);
  const submissionRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (firstRender.current) {
      if (document.referrer.includes("/new")) {
        setStatus(1);
        setTimeout(() => {
          setStatus(0);
        }, 7e3);
      }
      setSlug(window.location.pathname.split("/")[3]);
      firstRender.current = false;
      return;
    }
    submissionRef.current && value === rawText ? submissionRef.current.disabled = true : submissionRef.current && value !== rawText && (submissionRef.current.disabled = false);
    const post = loaderData ? value.substring(loaderData.indexOf("---", 4) + 3).trim() : value.substring(value.indexOf("---", 4) + 3).trim();
    setMd(post);
  }, [value, loaderData]);
  (0, import_react.useEffect)(() => {
    console.log(data);
    if (data && type === "PARSE_MARKDOWN") {
      setParsed(data);
      blogRef.current.innerHTML = parsed;
    } else if (data && type === "COMMIT_POST") {
      if (window.location.pathname.includes("/new"))
        window.location.pathname = `/posts/edit/${data.content.name.split(".")[0]}`;
      console.log(data);
      if (data.status === 200 || data.status === 201) {
        setStatus(1);
        setTimeout(() => {
          setStatus(0);
        }, 7e3);
      } else if (data.status === 404 || data.status === 409 || data.status === 422) {
        setStatus(-1);
        setTimeout(() => {
          setStatus(0);
        }, 7e3);
      } else {
        setStatus(0);
      }
    }
  }, [data, type, parsed]);
  const yamlConverter = async () => {
    frontmatter = {};
    const yaml2 = value.split("---")[1];
    yaml2.split(/\r?\n/g).map((line) => {
      if (line.length > 0 && line.includes(":")) {
        let key = line.split(":");
        if (key.length > 2) {
          key[1] = key.slice(1).join(":");
          key.splice(-1);
        }
        frontmatter[key[0]] = key[1].replace(" ", "");
        return line;
      }
      return line;
    });
    return frontmatter;
  };
  const commitPost = async () => {
    var _a2, _b2;
    const input = (_a2 = commitRef.current) == null ? void 0 : _a2.value;
    const shaValue = sha ? sha : "";
    const commitMessage = input.length > 0 && input !== "undefined" ? input : (_b2 = commitRef.current) == null ? void 0 : _b2.placeholder;
    const title = await yamlConverter().then((res) => {
      return res.slug;
    });
    fetcher.submit({
      type: "COMMIT_POST",
      message: commitMessage,
      shaValue,
      value,
      title
    }, { method: "post" });
  };
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "dive"
  }, status === 1 ? /* @__PURE__ */ import_react.default.createElement("div", {
    className: "pop-up success"
  }, /* @__PURE__ */ import_react.default.createElement(import_di.DiGitMerge, null), "\xA0", `Successfully pushed ${frontmatter.title} to GitHub`) : status === -1 ? /* @__PURE__ */ import_react.default.createElement("div", {
    className: "pop-up error"
  }, /* @__PURE__ */ import_react.default.createElement(import_di.DiGitPullRequest, null), "\xA0", `Failed to push ${frontmatter.title} to GitHub`) : null, /* @__PURE__ */ import_react.default.createElement("div", {
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
      fetcher.submit({ type: "PARSE_MARKDOWN", markdown: md2 }, { method: "post" });
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
  }, /* @__PURE__ */ import_react.default.createElement("section", {
    className: "markdown-body",
    ref: blogRef,
    dangerouslySetInnerHTML: { __html: parsed }
  }))), selectedTab === "Markdown" && /* @__PURE__ */ import_react.default.createElement("div", {
    className: "editor-footer",
    onClick: () => {
      var _a2;
      return (_a2 = widgetRef.current) == null ? void 0 : _a2.openDialog("file");
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
  })), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "commit"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix5.Form, {
    className: "form",
    onSubmit: commitPost
  }, /* @__PURE__ */ import_react.default.createElement("input", {
    type: "text",
    placeholder: loaderData ? `Update ${slug}.md post` : `Create a new blog post!`,
    className: "commit-input",
    name: "commit",
    ref: commitRef
  }), /* @__PURE__ */ import_react.default.createElement("button", {
    type: "submit",
    className: "commit-submit",
    onClick: commitPost,
    ref: submissionRef,
    disabled: true
  }, loaderData ? "Update Post" : "Create Post"))));
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
var assets_manifest_default = { "version": "cb7139ae", "entry": { "module": "/build/entry.client-D7OPJ4F2.js", "imports": ["/build/_shared/chunk-BZXJ4JGG.js", "/build/_shared/chunk-PWWGK5UF.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-7MWCIZRH.js", "imports": ["/build/_shared/chunk-MVGQYYJH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-Q5JOS22Q.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-A3SXTS32.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/metrics": { "id": "routes/metrics", "parentId": "root", "path": "metrics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/metrics-7DJ4OU6V.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts": { "id": "routes/posts", "parentId": "root", "path": "posts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts-KGYMAPXH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/edit.$slug": { "id": "routes/posts/edit.$slug", "parentId": "routes/posts", "path": "edit/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/edit.$slug-SZGVQZSS.js", "imports": ["/build/_shared/chunk-CDTU5EJM.js", "/build/_shared/chunk-MVGQYYJH.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/posts/index": { "id": "routes/posts/index", "parentId": "routes/posts", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/posts/index-OH5JSEFN.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/overview": { "id": "routes/posts/overview", "parentId": "routes/posts", "path": "overview", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/overview-Q2XJQFXQ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/settings": { "id": "routes/settings", "parentId": "root", "path": "settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/settings-3YHTCVFH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-CB7139AE.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6fi91dGlscy9jbGllbnQvbW9uYWNvLmNsaWVudCIsICJlbXB0eS1tb2R1bGU6Li4vY2xpZW50L2RpY3Rpb25hcnkuY2xpZW50IiwgIjxzdGRpbj4iLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHJlbWl4LWNtc1xcYXBwXFxyb290LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGZhc2hcXERvY3VtZW50c1xccmVtaXgtY21zXFxhcHBcXHJvdXRlc1xcZGFzaGJvYXJkLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGZhc2hcXERvY3VtZW50c1xccmVtaXgtY21zXFxhcHBcXHJvdXRlc1xcc2V0dGluZ3MudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxyZW1peC1jbXNcXGFwcFxccm91dGVzXFxtZXRyaWNzLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGZhc2hcXERvY3VtZW50c1xccmVtaXgtY21zXFxhcHBcXHJvdXRlc1xcaW5kZXgudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxyZW1peC1jbXNcXGFwcFxccm91dGVzXFxwb3N0cy50c3giLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHJlbWl4LWNtc1xcYXBwXFxyb3V0ZXNcXHBvc3RzXFxlZGl0LiRzbHVnLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9UYWJTZWxlY3Rvci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvVGFiLnRzeCIsICIuLi9hcHAvdXRpbHMvc2VydmVyL2dpdGh1Yi5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2hhbmRsZXJzL2dpdGh1Yi1hcGkudHMiLCAiLi4vYXBwL3V0aWxzL3NlcnZlci9tYXJrZG93bi5zZXJ2ZXIudHMiLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHJlbWl4LWNtc1xcYXBwXFxyb3V0ZXNcXHBvc3RzXFxvdmVydmlldy50c3giLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHJlbWl4LWNtc1xcYXBwXFxyb3V0ZXNcXHBvc3RzXFxpbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCAibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxyZW1peC1jbXNcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxccmVtaXgtY21zXFxcXGFwcFxcXFxyb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxyZW1peC1jbXNcXFxcYXBwXFxcXHJvdXRlc1xcXFxkYXNoYm9hcmQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHJlbWl4LWNtc1xcXFxhcHBcXFxccm91dGVzXFxcXHNldHRpbmdzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxyZW1peC1jbXNcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZXRyaWNzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxyZW1peC1jbXNcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxccmVtaXgtY21zXFxcXGFwcFxcXFxyb3V0ZXNcXFxccG9zdHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHJlbWl4LWNtc1xcXFxhcHBcXFxccm91dGVzXFxcXHBvc3RzXFxcXGVkaXQuJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHJlbWl4LWNtc1xcXFxhcHBcXFxccm91dGVzXFxcXHBvc3RzXFxcXG92ZXJ2aWV3LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxyZW1peC1jbXNcXFxcYXBwXFxcXHJvdXRlc1xcXFxwb3N0c1xcXFxpbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2Rhc2hib2FyZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGFzaGJvYXJkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImRhc2hib2FyZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2V0dGluZ3NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NldHRpbmdzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNldHRpbmdzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9tZXRyaWNzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZXRyaWNzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1ldHJpY3NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL3Bvc3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb3N0c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwb3N0c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9zdHMvZWRpdC4kc2x1Z1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHMvZWRpdC4kc2x1Z1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3Bvc3RzXCIsXG4gICAgICBwYXRoOiBcImVkaXQvOnNsdWdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL3Bvc3RzL292ZXJ2aWV3XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb3N0cy9vdmVydmlld1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3Bvc3RzXCIsXG4gICAgICBwYXRoOiBcIm92ZXJ2aWV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9wb3N0cy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wb3N0c1wiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgXCJkb3RlbnYvY29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn0iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIE5hdkxpbmssXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgRXh0ZXJuYWxTY3JpcHRzIH0gZnJvbSBcInJlbWl4LXV0aWxzXCI7XG5cbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uLCBMaW5rc0Z1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCByb290U3R5bGVzIGZyb20gXCIuL3N0eWxlcy92YXJpYWJsZXMuY3NzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9pbmRleC5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiTmV3IFJlbWl4IEFwcFwiIH07XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiByb290U3R5bGVzIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfSxcbiAgXTtcbn07XG5cbmNvbnN0IGFjdGl2ZUNsYXNzTmFtZTogc3RyaW5nID0gXCJhY3RpdmUtcm91dGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZcIj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgxXCI+U2hhZlNwZWNzPC9oMT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1bFwiPlxuICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgIHRvPVwiL2Rhc2hib2FyZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PiAoaXNBY3RpdmUgPyBhY3RpdmVDbGFzc05hbWUgOiBcIlwiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk04IDlsMyAzLTMgM201IDBoM001IDIwaDE0YTIgMiAwIDAwMi0yVjZhMiAyIDAgMDAtMi0ySDVhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyelwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIvcG9zdHNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT4gKGlzQWN0aXZlID8gYWN0aXZlQ2xhc3NOYW1lIDogXCJcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTkgMjBINWEyIDIgMCAwMS0yLTJWNmEyIDIgMCAwMTItMmgxMGEyIDIgMCAwMTIgMnYxbTIgMTNhMiAyIDAgMDEtMi0yVjdtMiAxM2EyIDIgMCAwMDItMlY5YTIgMiAwIDAwLTItMmgtMm0tNC0zSDlNNyAxNmg2TTcgOGg2djRIN1Y4elwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICBQb3N0c1xuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz1cIi9tZXRyaWNzXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IGFjdGl2ZUNsYXNzTmFtZSA6IFwiXCIpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNlwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTkgMTd2LTJtMyAydi00bTMgNHYtNm0yIDEwSDdhMiAyIDAgMDEtMi0yVjVhMiAyIDAgMDEyLTJoNS41ODZhMSAxIDAgMDEuNzA3LjI5M2w1LjQxNCA1LjQxNGExIDEgMCAwMS4yOTMuNzA3VjE5YTIgMiAwIDAxLTIgMnpcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgTWV0cmljc1xuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz1cIi9zZXR0aW5nc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PiAoaXNBY3RpdmUgPyBhY3RpdmVDbGFzc05hbWUgOiBcIlwiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMC4zMjUgNC4zMTdjLjQyNi0xLjc1NiAyLjkyNC0xLjc1NiAzLjM1IDBhMS43MjQgMS43MjQgMCAwMDIuNTczIDEuMDY2YzEuNTQzLS45NCAzLjMxLjgyNiAyLjM3IDIuMzdhMS43MjQgMS43MjQgMCAwMDEuMDY1IDIuNTcyYzEuNzU2LjQyNiAxLjc1NiAyLjkyNCAwIDMuMzVhMS43MjQgMS43MjQgMCAwMC0xLjA2NiAyLjU3M2MuOTQgMS41NDMtLjgyNiAzLjMxLTIuMzcgMi4zN2ExLjcyNCAxLjcyNCAwIDAwLTIuNTcyIDEuMDY1Yy0uNDI2IDEuNzU2LTIuOTI0IDEuNzU2LTMuMzUgMGExLjcyNCAxLjcyNCAwIDAwLTIuNTczLTEuMDY2Yy0xLjU0My45NC0zLjMxLS44MjYtMi4zNy0yLjM3YTEuNzI0IDEuNzI0IDAgMDAtMS4wNjUtMi41NzJjLTEuNzU2LS40MjYtMS43NTYtMi45MjQgMC0zLjM1YTEuNzI0IDEuNzI0IDAgMDAxLjA2Ni0yLjU3M2MtLjk0LTEuNTQzLjgyNi0zLjMxIDIuMzctMi4zNy45OTYuNjA4IDIuMjk2LjA3IDIuNTcyLTEuMDY1elwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE1IDEyYTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHpcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgU2V0dGluZ3NcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS9AaGlnaGxpZ2h0anMvY2RuLWFzc2V0c0AxMS40LjAvaGlnaGxpZ2h0Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0PmhsanMuaGlnaGxpZ2h0QWxsKCk7PC9zY3JpcHQ+XG4gICAgICAgIDxFeHRlcm5hbFNjcmlwdHMgLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZ3MgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1ldHJpY3MgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgKVxyXG59IiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gcmVkaXJlY3QoXCIvZGFzaGJvYXJkXCIpO1xufSIsICJpbXBvcnQgeyBOYXZMaW5rLCBPdXRsZXQsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL3Bvc3RzLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZSB9XTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKCkge1xyXG4gIGNvbnN0IGFjdGl2ZUNsYXNzTmFtZTogc3RyaW5nID0gXCJhY3RpdmUtcG9zdC1yb3V0ZVwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+UG9zdHM8L2gxPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwiZGVzY1wiPlxyXG4gICAgICAgIEVkaXQgcG9zdHMgJiBhcnRpY2xlcy4gUmV2aWV3IHN0YXRzIGFuZCBmZWVkYmFjay4uXHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBvc3QtdWxcIj5cclxuICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgIHRvPVwiL3Bvc3RzL292ZXJ2aWV3XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PiAoaXNBY3RpdmUgPyBhY3RpdmVDbGFzc05hbWUgOiBcIlwiKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGxpPk92ZXJ2aWV3PC9saT5cclxuICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgIHRvPVwiL3Bvc3RzL2VkaXQvbmV3XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PiAoaXNBY3RpdmUgPyBhY3RpdmVDbGFzc05hbWUgOiBcIlwiKX1cclxuICAgICAgICAgICAgZW5kPXtmYWxzZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGxpPldyaXRlIGEgcG9zdDwvbGk+XHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICB0bz1cIi9wb3N0cy9tYW5hZ2UtcG9zdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT4gKGlzQWN0aXZlID8gYWN0aXZlQ2xhc3NOYW1lIDogXCJcIil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxsaT5NYW5hZ2UgYXJ0aWNsZXM8L2xpPlxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGxldFwiPlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICByZWRpcmVjdCxcclxuICB1c2VBY3Rpb25EYXRhLFxyXG4gIHVzZUZldGNoZXIsXHJcbiAgdXNlTG9hZGVyRGF0YSxcclxuICB1c2VUcmFuc2l0aW9uLFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBDbGllbnRPbmx5IH0gZnJvbSBcInJlbWl4LXV0aWxzXCI7XHJcbmltcG9ydCBNb25hY28gZnJvbSBcIn4vdXRpbHMvY2xpZW50L21vbmFjby5jbGllbnRcIjtcclxuaW1wb3J0IHsgVGFiU2VsZWN0b3IgfSBmcm9tIFwifi9jb21wb25lbnRzL1RhYlNlbGVjdG9yXCI7XHJcbmltcG9ydCB7IFRhYlBhbmVsLCB1c2VUYWJzIH0gZnJvbSBcIn4vY29tcG9uZW50cy9UYWJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSBcIkB1cGxvYWRjYXJlL3JlYWN0LXdpZGdldFwiO1xyXG5pbXBvcnQge1xyXG4gIFBvc3RzRGF0YSxcclxuICBjcmVhdGVQb3N0LFxyXG4gIHVwZGF0ZVBvc3QsXHJcbn0gZnJvbSBcIn4vdXRpbHMvc2VydmVyL2dpdGh1Yi5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgTWFya2Rvd25IYW5kbGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3NlcnZlci9tYXJrZG93bi5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgRGlHaXRNZXJnZSwgRGlHaXRQdWxsUmVxdWVzdCB9IGZyb20gXCJyZWFjdC1pY29ucy9kaVwiO1xyXG5cclxuaW1wb3J0IHR5cGUge1xyXG4gIExpbmtzRnVuY3Rpb24sXHJcbiAgQWN0aW9uRnVuY3Rpb24sXHJcbiAgTG9hZGVyRnVuY3Rpb24sXHJcbiAgRXJyb3JCb3VuZGFyeUNvbXBvbmVudCxcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBXaWRnZXRBUEkgfSBmcm9tIFwiQHVwbG9hZGNhcmUvcmVhY3Qtd2lkZ2V0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9uZXcuY3NzXCI7XHJcbmltcG9ydCBnaXRodWIgZnJvbSBcIi4uLy4uL3N0eWxlcy9naXRodWIuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGUgfSxcclxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogZ2l0aHViIH0sXHJcbiAgXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG5cclxuICBjb25zdCB0eXBlID0gYm9keS5nZXQoXCJ0eXBlXCIpO1xyXG4gIGNvbnNvbGUubG9nKHR5cGUpO1xyXG5cclxuICBpZiAodHlwZSA9PT0gXCJQQVJTRV9NQVJLRE9XTlwiKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMuc2x1Zyk7XHJcbiAgICBjb25zdCBtYXJrZG93biA9IGJvZHkuZ2V0KFwibWFya2Rvd25cIik7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIGNvbnN0IHBhcnNlZCA9IE1hcmtkb3duSGFuZGxlcihtYXJrZG93bik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBwYXJzZWQsXHJcbiAgICAgIHR5cGU6IFwiUEFSU0VfTUFSS0RPV05cIixcclxuICAgIH07XHJcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkNPTU1JVF9QT1NUXCIpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBib2R5LmdldChcIm1lc3NhZ2VcIik7XHJcbiAgICBjb25zdCBzaGEgPSBib2R5LmdldChcInNoYVZhbHVlXCIpO1xyXG4gICAgY29uc3QgdmFsID0gYm9keS5nZXQoXCJ2YWx1ZVwiKTtcclxuICAgIGNvbnN0IHRpdGxlID0gYm9keS5nZXQoXCJ0aXRsZVwiKTtcclxuICAgIGNvbnN0IHNsdWcgPSBwYXJhbXMuc2x1ZztcclxuXHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIGlmIChzbHVnID09PSBcIm5ld1wiKSB7XHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgY3JlYXRlUG9zdCh0aXRsZSwgbWVzc2FnZSwgdmFsKTtcclxuICAgICAgY29uc29sZS5sb2coXCJDcmVhdGVkXCIpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlZGlyZWN0KFwiL3Bvc3RzL2VkaXQvXCIgKyB0aXRsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHVwZGF0ZVBvc3Qoc2x1ZywgbWVzc2FnZSwgdmFsLCBzaGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlVwZGF0ZWRcIik7XHJcblxyXG4gICAgICByZXR1cm4gcmVkaXJlY3QoXCIvcG9zdHMvZWRpdC9cIiArIHRpdGxlKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHsgZGF0YTogXCJObyBhY3Rpb25cIiwgdHlwZTogXCJOVUxMXCIgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBzbHVnID0gcGFyYW1zLnNsdWc7XHJcblxyXG4gIGlmIChzbHVnID09PSBcIm5ld1wiKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsb2FkZXJEYXRhOiBudWxsLFxyXG4gICAgICBzaGE6IG51bGwsXHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBwb3N0c0luZm8gPSBhd2FpdCBQb3N0c0RhdGEoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRQb3N0ID0gcG9zdHNJbmZvLmZpbmQoXHJcbiAgICAgIChwb3N0OiBhbnkpID0+IHBvc3QubmFtZS5zcGxpdChcIi5cIilbMF0gPT09IHNsdWdcclxuICAgICk7XHJcbiAgICBjb25zdCBwb3N0Q29udGVudCA9IGF3YWl0IGZldGNoKGN1cnJlbnRQb3N0LmRvd25sb2FkX3VybCkudGhlbigocmVzKSA9PlxyXG4gICAgICByZXMudGV4dCgpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxvYWRlckRhdGE6IHBvc3RDb250ZW50LFxyXG4gICAgICBzaGE6IGN1cnJlbnRQb3N0LnNoYSxcclxuICAgIH07XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3KCkge1xyXG4gIGNvbnN0IHsgbG9hZGVyRGF0YSwgc2hhIH0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcclxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xyXG5cclxuICBjb25zdCBkYXRhID0gZmV0Y2hlci5kYXRhPy5kYXRhO1xyXG4gIGNvbnN0IHR5cGUgPSBmZXRjaGVyLmRhdGE/LnR5cGU7XHJcblxyXG4gIGNvbnN0IHJhd1RleHQgPSBsb2FkZXJEYXRhXHJcbiAgICA/IGxvYWRlckRhdGFcclxuICAgIDogYC0tLVxcbmlkOiB1dWlkXFxudGl0bGU6IFRpdGxlXFxuZGVzY3JpcHRpb246IERlc2NyaXB0aW9uXFxuZGF0ZTogMjAyMi0wMS0wMVxcbnNsdWc6IHBvc3Qtc2x1Z1xcbmltYWdlOiBcIlBvc3QncyBiYW5uZXIgVVJMXCJcXG5wdWJsaXNoZWQ6IGZhbHNlXFxuLS0tXFxuXFxuYDtcclxuICBjb25zdCBjb250ZW50ID0gbG9hZGVyRGF0YVxyXG4gICAgPyBsb2FkZXJEYXRhLnN1YnN0cmluZyhsb2FkZXJEYXRhLmluZGV4T2YoXCItLS1cIiwgNCkgKyAzKS50cmltKClcclxuICAgIDogcmF3VGV4dC5zdWJzdHJpbmcocmF3VGV4dC5pbmRleE9mKFwiLS0tXCIsIDQpICsgMykudHJpbSgpO1xyXG5cclxuICAvLyBJbml0aWF0ZSBhbiBlbXB0eSBvYmplY3QgZm9yIHRoZSBmcm9udG1hdHRlciBjb250ZW50XHJcbiAgbGV0IGZyb250bWF0dGVyOiBhbnkgPSB7fTtcclxuXHJcbiAgLy8gR2V0IHRoZSBmcm9udC1tYXR0ZXIgZnJvbSB0aGUgcG9zdFxyXG4gIGxldCB5YW1sOiBzdHJpbmcgfCBudWxsID0gbG9hZGVyRGF0YVxyXG4gICAgPyBsb2FkZXJEYXRhLnNwbGl0KFwiLS0tXCIpWzFdXHJcbiAgICA6IHJhd1RleHQuc3BsaXQoXCItLS1cIilbMV07XHJcblxyXG4gIC8vIFRyYW5zZm9ybSB0aGUgZnJvbnQtbWF0dGVyIGludG8gb2JqZWN0LXJlYWR5IHN0YXRlXHJcbiAgeWFtbCAmJlxyXG4gICAgeWFtbC5zcGxpdCgvXFxyP1xcbi9nKS5tYXAoKGxpbmUpID0+IHtcclxuICAgICAgaWYgKGxpbmUubGVuZ3RoID4gMCAmJiBsaW5lLmluY2x1ZGVzKFwiOlwiKSkge1xyXG4gICAgICAgIGxldCBrZXk6IHN0cmluZyB8IHN0cmluZ1tdID0gbGluZS5zcGxpdChcIjpcIik7XHJcblxyXG4gICAgICAgIGlmIChrZXkubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAga2V5WzFdID0ga2V5LnNsaWNlKDEpLmpvaW4oXCI6XCIpO1xyXG4gICAgICAgICAga2V5LnNwbGljZSgtMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQdXNoIGVhY2gga2V5LXZhbHVlIHBhaXIgaW50byB0aGUgZnJvbnRtYXR0ZXIgb2JqZWN0XHJcbiAgICAgICAgZnJvbnRtYXR0ZXJba2V5WzBdXSA9IGtleVsxXS5yZXBsYWNlKFwiIFwiLCBcIlwiKTtcclxuICAgICAgICByZXR1cm4gbGluZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbGluZTtcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4ocmF3VGV4dCk7XHJcbiAgY29uc3QgW21kLCBzZXRNZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KGNvbnRlbnQpO1xyXG4gIGNvbnN0IFtwYXJzZWQsIHNldFBhcnNlZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRhYiwgc2V0U2VsZWN0ZWRUYWJdID0gdXNlVGFicyhbXCJNYXJrZG93blwiLCBcIlByZXZpZXdcIl0pO1xyXG4gIGNvbnN0IFtzbHVnLCBzZXRTbHVnXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG4gIGNvbnN0IGVkaXRvclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCEpO1xyXG4gIGNvbnN0IHdpZGdldFJlZiA9IHVzZVJlZjxXaWRnZXRBUEkgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBibG9nUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsISk7XHJcbiAgY29uc3QgZmlyc3RSZW5kZXIgPSB1c2VSZWY8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgY29uc3QgY29tbWl0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBzdWJtaXNzaW9uUmVmID0gdXNlUmVmPEhUTUxCdXR0b25FbGVtZW50PihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChmaXJzdFJlbmRlci5jdXJyZW50KSB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5yZWZlcnJlci5pbmNsdWRlcyhcIi9uZXdcIikpIHtcclxuICAgICAgICBzZXRTdGF0dXMoMSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTdGF0dXMoMClcclxuICAgICAgICB9LCA3MDAwKVxyXG4gICAgICB9XHJcbiAgICAgIHNldFNsdWcod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVszXSk7XHJcbiAgICAgIGZpcnN0UmVuZGVyLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pc3Npb25SZWYuY3VycmVudCAmJiB2YWx1ZSA9PT0gcmF3VGV4dFxyXG4gICAgICA/IChzdWJtaXNzaW9uUmVmLmN1cnJlbnQuZGlzYWJsZWQgPSB0cnVlKVxyXG4gICAgICA6IHN1Ym1pc3Npb25SZWYuY3VycmVudCAmJlxyXG4gICAgICAgIHZhbHVlICE9PSByYXdUZXh0ICYmXHJcbiAgICAgICAgKHN1Ym1pc3Npb25SZWYuY3VycmVudC5kaXNhYmxlZCA9IGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBwb3N0ID0gbG9hZGVyRGF0YVxyXG4gICAgICA/IHZhbHVlLnN1YnN0cmluZyhsb2FkZXJEYXRhLmluZGV4T2YoXCItLS1cIiwgNCkgKyAzKS50cmltKClcclxuICAgICAgOiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZihcIi0tLVwiLCA0KSArIDMpLnRyaW0oKTtcclxuICAgIHNldE1kKHBvc3QpO1xyXG4gIH0sIFt2YWx1ZSwgbG9hZGVyRGF0YV0pO1xyXG5cclxuICAvLyBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgLy8gICBmZXRjaGVyLnN1Ym1pdChcclxuICAvLyAgICAgeyB0eXBlOiBcIlBBUlNFX01BUktET1dOXCIsIG1hcmtkb3duOiBtZCB9LFxyXG4gIC8vICAgICB7IG1ldGhvZDogXCJwb3N0XCIgfVxyXG4gIC8vICAgKTtcclxuICAvLyB9LCA5MCAqIDEwMDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBpZiAoZGF0YSAmJiB0eXBlID09PSBcIlBBUlNFX01BUktET1dOXCIpIHtcclxuICAgICAgc2V0UGFyc2VkKGRhdGEpO1xyXG4gICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgYmxvZ1JlZi5jdXJyZW50LmlubmVySFRNTCA9IHBhcnNlZDtcclxuICAgIH0gZWxzZSBpZiAoZGF0YSAmJiB0eXBlID09PSBcIkNPTU1JVF9QT1NUXCIpIHtcclxuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9uZXdcIikpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gYC9wb3N0cy9lZGl0LyR7XHJcbiAgICAgICAgICBkYXRhLmNvbnRlbnQubmFtZS5zcGxpdChcIi5cIilbMF1cclxuICAgICAgICB9YDtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gMjAwIHx8IGRhdGEuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBzZXRTdGF0dXMoMSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTdGF0dXMoMCk7XHJcbiAgICAgICAgfSwgNzAwMCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgZGF0YS5zdGF0dXMgPT09IDQwNCB8fFxyXG4gICAgICAgIGRhdGEuc3RhdHVzID09PSA0MDkgfHxcclxuICAgICAgICBkYXRhLnN0YXR1cyA9PT0gNDIyXHJcbiAgICAgICkge1xyXG4gICAgICAgIHNldFN0YXR1cygtMSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTdGF0dXMoMCk7XHJcbiAgICAgICAgfSwgNzAwMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U3RhdHVzKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2RhdGEsIHR5cGUsIHBhcnNlZF0pO1xyXG5cclxuICBjb25zdCB5YW1sQ29udmVydGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgZnJvbnRtYXR0ZXIgPSB7fTtcclxuXHJcbiAgICBjb25zdCB5YW1sID0gdmFsdWUuc3BsaXQoXCItLS1cIilbMV07XHJcbiAgICB5YW1sLnNwbGl0KC9cXHI/XFxuL2cpLm1hcCgobGluZSkgPT4ge1xyXG4gICAgICBpZiAobGluZS5sZW5ndGggPiAwICYmIGxpbmUuaW5jbHVkZXMoXCI6XCIpKSB7XHJcbiAgICAgICAgbGV0IGtleTogc3RyaW5nIHwgc3RyaW5nW10gPSBsaW5lLnNwbGl0KFwiOlwiKTtcclxuXHJcbiAgICAgICAgaWYgKGtleS5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICBrZXlbMV0gPSBrZXkuc2xpY2UoMSkuam9pbihcIjpcIik7XHJcbiAgICAgICAgICBrZXkuc3BsaWNlKC0xKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFB1c2ggZWFjaCBrZXktdmFsdWUgcGFpciBpbnRvIHRoZSBmcm9udG1hdHRlciBvYmplY3RcclxuICAgICAgICBmcm9udG1hdHRlcltrZXlbMF1dID0ga2V5WzFdLnJlcGxhY2UoXCIgXCIsIFwiXCIpO1xyXG4gICAgICAgIHJldHVybiBsaW5lO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsaW5lO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZyb250bWF0dGVyXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29tbWl0UG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGlucHV0ID0gY29tbWl0UmVmLmN1cnJlbnQ/LnZhbHVlO1xyXG4gICAgY29uc3Qgc2hhVmFsdWUgPSBzaGEgPyBzaGEgOiBcIlwiO1xyXG4gICAgY29uc3QgY29tbWl0TWVzc2FnZSA9XHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAoaW5wdXQubGVuZ3RoID4gMCAmJiBpbnB1dCAhPT0gXCJ1bmRlZmluZWRcIikgPyBpbnB1dCA6IGNvbW1pdFJlZi5jdXJyZW50Py5wbGFjZWhvbGRlcjtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGF3YWl0IHlhbWxDb252ZXJ0ZXIoKS50aGVuKChyZXM6IGFueSkgPT4ge3JldHVybiByZXMuc2x1Z30pXHJcblxyXG4gICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJDT01NSVRfUE9TVFwiLFxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIG1lc3NhZ2U6IGNvbW1pdE1lc3NhZ2UsXHJcbiAgICAgICAgc2hhVmFsdWUsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICB9LFxyXG4gICAgICB7IG1ldGhvZDogXCJwb3N0XCIgfVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkaXZlXCI+XHJcbiAgICAgIHtzdGF0dXMgPT09IDEgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3AtdXAgc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgPERpR2l0TWVyZ2UgLz5cclxuICAgICAgICAgICZuYnNwO3tgU3VjY2Vzc2Z1bGx5IHB1c2hlZCAke2Zyb250bWF0dGVyLnRpdGxlfSB0byBHaXRIdWJgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogc3RhdHVzID09PSAtMSA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcC11cCBlcnJvclwiPlxyXG4gICAgICAgICAgPERpR2l0UHVsbFJlcXVlc3QgLz5cclxuICAgICAgICAgICZuYnNwO3tgRmFpbGVkIHRvIHB1c2ggJHtmcm9udG1hdHRlci50aXRsZX0gdG8gR2l0SHViYH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9uYWNvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3ItaGVhZGVyXCI+XHJcbiAgICAgICAgICA8VGFiU2VsZWN0b3JcclxuICAgICAgICAgICAgaXNBY3RpdmU9e3NlbGVjdGVkVGFiID09PSBcIk1hcmtkb3duXCJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkVGFiKFwiTWFya2Rvd25cIil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcclxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICB3aWR0aD17MjR9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICAgIGQ9XCJNMTEgNUg2YTIgMiAwIDAwLTIgMnYxMWEyIDIgMCAwMDIgMmgxMWEyIDIgMCAwMDItMnYtNW0tMS40MTQtOS40MTRhMiAyIDAgMTEyLjgyOCAyLjgyOEwxMS44MjggMTVIOXYtMi44MjhsOC41ODYtOC41ODZ6XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAge1wiICBcIn1cclxuICAgICAgICAgICAgPHNwYW4+RWRpdCBQb3N0PC9zcGFuPlxyXG4gICAgICAgICAgPC9UYWJTZWxlY3Rvcj5cclxuICAgICAgICAgIDxUYWJTZWxlY3RvclxyXG4gICAgICAgICAgICBpc0FjdGl2ZT17c2VsZWN0ZWRUYWIgPT09IFwiUHJldmlld1wifVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYWIoXCJQcmV2aWV3XCIpO1xyXG4gICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgeyB0eXBlOiBcIlBBUlNFX01BUktET1dOXCIsIG1hcmtkb3duOiBtZCB9LFxyXG4gICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwicG9zdFwiIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNlwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezI0fVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MjR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICBkPVwiTTE1IDEyYTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHpcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgICAgZD1cIk0yLjQ1OCAxMkMzLjczMiA3Ljk0MyA3LjUyMyA1IDEyIDVjNC40NzggMCA4LjI2OCAyLjk0MyA5LjU0MiA3LTEuMjc0IDQuMDU3LTUuMDY0IDctOS41NDIgNy00LjQ3NyAwLTguMjY4LTIuOTQzLTkuNTQyLTd6XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAge1wiICBcIn1cclxuICAgICAgICAgICAgPHNwYW4+UHJldmlldzwvc3Bhbj5cclxuICAgICAgICAgIDwvVGFiU2VsZWN0b3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3JcIiByZWY9e2VkaXRvclJlZn0+XHJcbiAgICAgICAgICA8VGFiUGFuZWwgaGlkZGVuPXtzZWxlY3RlZFRhYiAhPT0gXCJNYXJrZG93blwifT5cclxuICAgICAgICAgICAgPENsaWVudE9ubHk+XHJcbiAgICAgICAgICAgICAgPE1vbmFjbyBzZXQ9e3NldFZhbHVlfSB2YWw9e3ZhbHVlfSAvPlxyXG4gICAgICAgICAgICA8L0NsaWVudE9ubHk+XHJcbiAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgPFRhYlBhbmVsIGhpZGRlbj17c2VsZWN0ZWRUYWIgIT09IFwiUHJldmlld1wifT5cclxuICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJrZG93bi1ib2R5XCJcclxuICAgICAgICAgICAgICByZWY9e2Jsb2dSZWZ9XHJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwYXJzZWQgfX1cclxuICAgICAgICAgICAgPjwvc2VjdGlvbj5cclxuICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3NlbGVjdGVkVGFiID09PSBcIk1hcmtkb3duXCIgJiYgKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0b3ItZm9vdGVyXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2lkZ2V0UmVmLmN1cnJlbnQ/Lm9wZW5EaWFsb2coXCJmaWxlXCIpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBEcm9wIGZpbGVzIHRvIHVwbG9hZCBtZWRpYSBmaWxlcyBvciBjbGljayBhcmVhIHRvIGJyb3dzZSBmaWxlc1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxXaWRnZXRcclxuICAgICAgICAgIHB1YmxpY0tleT1cIjU0YWI0NmI4MzgzMjYyNzAzYmZhXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoaW5mbykgPT4ge1xyXG4gICAgICAgICAgICBzZXRWYWx1ZShgJHt2YWx1ZX0gIVthbHQgZGVzY3JpcHRpb25dKCR7aW5mby5jZG5Vcmx9KWApO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG11bHRpcGxlPXt0cnVlfVxyXG4gICAgICAgICAgaW1hZ2VzT25seT17dHJ1ZX1cclxuICAgICAgICAgIHN5c3RlbURpYWxvZz17dHJ1ZX1cclxuICAgICAgICAgIGNsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgIHJlZj17d2lkZ2V0UmVmfVxyXG4gICAgICAgICAgcHJlbG9hZGVyPXtudWxsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1pdFwiPlxyXG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm1cIiBvblN1Ym1pdD17Y29tbWl0UG9zdH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17XHJcbiAgICAgICAgICAgICAgbG9hZGVyRGF0YSA/IGBVcGRhdGUgJHtzbHVnfS5tZCBwb3N0YCA6IGBDcmVhdGUgYSBuZXcgYmxvZyBwb3N0IWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb21taXQtaW5wdXRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiY29tbWl0XCJcclxuICAgICAgICAgICAgcmVmPXtjb21taXRSZWZ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tbWl0LXN1Ym1pdFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NvbW1pdFBvc3R9XHJcbiAgICAgICAgICAgIHJlZj17c3VibWlzc2lvblJlZn1cclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xvYWRlckRhdGEgPyBcIlVwZGF0ZSBQb3N0XCIgOiBcIkNyZWF0ZSBQb3N0XCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVycm9yQm91bmRhcnk6IEVycm9yQm91bmRhcnlDb21wb25lbnQgPSAoeyBlcnJvciB9KSA9PiB7XHJcbiAgcmV0dXJuIDxkaXY+T2ggb2ghIHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxufTtcclxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhYlNlbGVjdG9yID0gKHtcclxuICBpc0FjdGl2ZSxcclxuICBjaGlsZHJlbixcclxuICBvbkNsaWNrLFxyXG59OiB7XHJcbiAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xyXG59KSA9PiAoXHJcbiAgPGJ1dHRvblxyXG4gICAgY2xhc3NOYW1lPXtgdGFiLXNlbGVjdG9yICR7aXNBY3RpdmUgPyBcImFjdGl2ZS10YWJcIiA6IFwiXCJ9YH1cclxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICB0eXBlPVwic3VibWl0XCJcclxuICA+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9idXR0b24+XHJcbik7XHJcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZVByZXZpb3VzPFQ+KHZhbHVlOiBUKSB7XHJcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFQ+KCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcmVmLmN1cnJlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJzPEsgZXh0ZW5kcyBzdHJpbmc+KHRhYnM6IEtbXSwgZGVmYXVsdFRhYj86IEsgfCBudWxsKSB7XHJcbiAgY29uc3Qgc3RhdGUgPSBSZWFjdC51c2VTdGF0ZTxLIHwgbnVsbD4oKTtcclxuICBjb25zdCBbc2VsZWN0ZWRUYWIsIHNldFNlbGVjdGVkVGFiXSA9IHN0YXRlO1xyXG5cclxuICBjb25zdCBhY3RpdmVJbmRleCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkVGFiKSB7XHJcbiAgICAgIHJldHVybiB0YWJzLmluZGV4T2Yoc2VsZWN0ZWRUYWIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAtMTtcclxuICB9LCBbc2VsZWN0ZWRUYWIsIHRhYnNdKTtcclxuXHJcbiAgY29uc3QgcHJldmlvdXNBY3RpdmVJbmRleCA9IHVzZVByZXZpb3VzKGFjdGl2ZUluZGV4KTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0YWJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRTZWxlY3RlZFRhYih1bmRlZmluZWQpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWxlY3RlZFRhYiA9PT0gbnVsbCB8fCAoc2VsZWN0ZWRUYWIgJiYgdGFicy5pbmNsdWRlcyhzZWxlY3RlZFRhYikpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiBwcmV2aW91c0FjdGl2ZUluZGV4ID09PSBcIm51bWJlclwiICYmXHJcbiAgICAgIHByZXZpb3VzQWN0aXZlSW5kZXggPj0gMCAmJlxyXG4gICAgICAodGFic1twcmV2aW91c0FjdGl2ZUluZGV4XSB8fCB0YWJzW3ByZXZpb3VzQWN0aXZlSW5kZXggLSAxXSlcclxuICAgICkge1xyXG4gICAgICBzZXRTZWxlY3RlZFRhYihcclxuICAgICAgICB0YWJzW3ByZXZpb3VzQWN0aXZlSW5kZXhdIHx8IHRhYnNbcHJldmlvdXNBY3RpdmVJbmRleCAtIDFdXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlZmF1bHRUYWIgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlbGVjdGVkVGFiKFxyXG4gICAgICBkZWZhdWx0VGFiICYmIHRhYnMuaW5jbHVkZXMoZGVmYXVsdFRhYikgPyBkZWZhdWx0VGFiIDogdGFic1swXVxyXG4gICAgKTtcclxuICB9LCBbc2VsZWN0ZWRUYWIsIGRlZmF1bHRUYWIsIHRhYnNdKTtcclxuXHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGFiUGFuZWwoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIHJlbmRlciA9IFwibGF6eVwiLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiAmIHtcclxuICBoaWRkZW46IGJvb2xlYW47XHJcbiAgcmVuZGVyPzogXCJhbHdheXNcIiB8IFwibGF6eVwiO1xyXG59KSB7XHJcbiAgY29uc3QgW3Nob3VsZFJlbmRlciwgc2V0U2hvdWxkUmVuZGVyXSA9IFJlYWN0LnVzZVN0YXRlKHJlbmRlciA9PT0gXCJhbHdheXNcIik7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMuaGlkZGVuKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTaG91bGRSZW5kZXIodHJ1ZSk7XHJcbiAgfSwgW3Byb3BzLmhpZGRlbl0pO1xyXG5cclxuICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9PntzaG91bGRSZW5kZXIgPyBjaGlsZHJlbiA6IG51bGx9PC9kaXY+O1xyXG59IiwgImltcG9ydCB7IE9jdG9raXQgfSBmcm9tIFwiQG9jdG9raXQvY29yZVwiO1xyXG5pbXBvcnQgeyBPY3Rva2l0IGFzIFJlc3RPY3RvIH0gZnJvbSBcIkBvY3Rva2l0L3Jlc3RcIjtcclxuaW1wb3J0IHsgUmVwbyB9IGZyb20gXCIuLi9oYW5kbGVycy9naXRodWItYXBpXCI7XHJcbmltcG9ydCBzaGE1MTIgZnJvbSAnY3J5cHRvLWpzL3NoYTUxMic7XHJcblxyXG5jb25zdCBvY3Rva2l0ID0gbmV3IE9jdG9raXQoeyBhdXRoOiBwcm9jZXNzLmVudi5HSVRIVUJfVE9LRU4gfSk7XHJcblxyXG5pbnRlcmZhY2UgUG9zdERhdGEge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgc2hhOiBzdHJpbmc7XHJcbiAgc2l6ZTogbnVtYmVyO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGh0bWxfdXJsOiBzdHJpbmc7XHJcbiAgZ2l0X3VybDogc3RyaW5nO1xyXG4gIGRvd25sb2FkX3VybDogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBfbGlua3M6IHtcclxuICAgIGdpdDogc3RyaW5nO1xyXG4gICAgc2VsZjogc3RyaW5nO1xyXG4gICAgaHRtbDogc3RyaW5nO1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIEdldCBhbGwgcG9zdHMgZnJvbSB0aGUgcmVwb3NpdG9yeVxyXG5hc3luYyBmdW5jdGlvbiBnZXRQb3N0cygpIHtcclxuICBjb25zdCBwb3N0RGlyID0gYXdhaXQgb2N0b2tpdC5yZXF1ZXN0KFxyXG4gICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3twYXRofVwiLFxyXG4gICAge1xyXG4gICAgICAuLi5SZXBvLFxyXG4gICAgICBwYXRoOiBcInBvc3RzXCIsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHBvc3REaXI7XHJcbn1cclxuXHJcbi8qXHJcbiAqICBFeHRyYWN0IHJlcXVpcmVkIHBvc3QgZGF0YSBmcm9tIHRoZSBHaXRIdWIgQVBJIHJlc3BvbnNlXHJcbiAqXHJcbiAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBvc3RzRGF0YSgpIHtcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldFBvc3RzKCk7XHJcblxyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIGNvbnN0IHBvc3RzSW5mbyA9IHBvc3RzLmRhdGEubWFwKChwb3N0OiBQb3N0RGF0YSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCBkb3dubG9hZF91cmwsIHNoYSB9ID0gcG9zdDtcclxuICAgIHJldHVybiB7IG5hbWUsIGRvd25sb2FkX3VybCwgc2hhIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBwb3N0c0luZm9cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBvc3Qoc2x1Zzogc3RyaW5nLCBjb21taXQ6IHN0cmluZywgY29udGVudDogc3RyaW5nKSB7XHJcbiAgY29uc3QgcG9zdCA9IEJ1ZmZlci5mcm9tKGNvbnRlbnQpLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xyXG4gIGNvbnN0IHNoYSA9IHNoYTUxMihwb3N0KS50b1N0cmluZygpO1xyXG5cclxuICBjb25zdCBjcmVhdGVkUG9zdCA9IGF3YWl0IG9jdG9raXQucmVxdWVzdChcclxuICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250ZW50cy97cGF0aH1cIixcclxuICAgIHtcclxuICAgICAgLi4uUmVwbyxcclxuICAgICAgcGF0aDogYHBvc3RzLyR7c2x1Z30ubWRgLFxyXG4gICAgICBtZXNzYWdlOiBjb21taXQsXHJcbiAgICAgIGNvbnRlbnQ6IHBvc3RcclxuICAgIH1cclxuICApO1xyXG5cclxuICByZXR1cm4gY3JlYXRlZFBvc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQb3N0KHNsdWc6IHN0cmluZywgY29tbWl0OiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgc2hhOiBzdHJpbmcpIHtcclxuICBjb25zdCBwb3N0ID0gQnVmZmVyLmZyb20oY29udGVudCkudG9TdHJpbmcoXCJiYXNlNjRcIik7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZWRQb3N0ID0gYXdhaXQgb2N0b2tpdC5yZXF1ZXN0KFxyXG4gICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3twYXRofVwiLFxyXG4gICAge1xyXG4gICAgICAuLi5SZXBvLFxyXG4gICAgICBwYXRoOiBgcG9zdHMvJHtzbHVnfS5tZGAsXHJcbiAgICAgIG1lc3NhZ2U6IGNvbW1pdCxcclxuICAgICAgY29udGVudDogcG9zdCxcclxuICAgICAgc2hhOiBzaGEsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHVwZGF0ZWRQb3N0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUG9zdChzbHVnOiBzdHJpbmcpIHtcclxuICBjb25zdCBkZWxldGVkUG9zdCA9IGF3YWl0IG9jdG9raXQucmVxdWVzdChcclxuICAgIFwiREVMRVRFIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250ZW50cy97cGF0aH1cIixcclxuICAgIHtcclxuICAgICAgLi4uUmVwbyxcclxuICAgICAgcGF0aDogYHBvc3RzLyR7c2x1Z30ubWRgLFxyXG4gICAgICBtZXNzYWdlOiBgRGVsZXRlZCBwb3N0OiAke3NsdWd9Lm1kYCxcclxuICAgICAgc2hhOiBcInNoYVwiLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBkZWxldGVkUG9zdDtcclxufVxyXG4iLCAiZXhwb3J0IGNvbnN0IFJlcG8gPSB7XHJcbiAgICBvd25lcjogXCJTaGFmU3BlY3NcIixcclxuICAgIHJlcG86IFwicmVtaXgtY21zXCIsXHJcbn0iLCAiaW1wb3J0IHsgQWJickRpY3Rpb25hcnkgfSBmcm9tIFwiLi4vY2xpZW50L2RpY3Rpb25hcnkuY2xpZW50XCI7XHJcbmNvbnN0IGhsanMgPSByZXF1aXJlKFwiaGlnaGxpZ2h0LmpzXCIpO1xyXG5cclxuY29uc3QgbWQgPSByZXF1aXJlKFwibWFya2Rvd24taXRcIikoe1xyXG4gIGh0bWw6IHRydWUsXHJcbiAgdHlwb2dyYXBoZXI6IHRydWUsXHJcbn0pXHJcbiAgLnVzZShyZXF1aXJlKFwibWFya2Rvd24taXQtdG9jLWRvbmUtcmlnaHRcIikpXHJcbiAgLnVzZShyZXF1aXJlKFwibWFya2Rvd24taXQtYWxlcnRzXCIpKVxyXG4gIC51c2UocmVxdWlyZShcIm1hcmtkb3duLWl0LWhpZ2hsaWdodGpzXCIpLCB7IGhsanMgfSlcclxuICAudXNlKHJlcXVpcmUoXCJtYXJrZG93bi1pdC1tdWx0aW1kLXRhYmxlXCIpLCB7XHJcbiAgICBtdWx0aWxpbmU6IGZhbHNlLFxyXG4gICAgcm93c3BhbjogZmFsc2UsXHJcbiAgICBoZWFkZXJsZXNzOiBmYWxzZSxcclxuICB9KVxyXG4gIC51c2UocmVxdWlyZShcIm1hcmtkb3duLWl0LWFiYnJcIiksIEFiYnJEaWN0aW9uYXJ5KVxyXG4gIC51c2UocmVxdWlyZShcIm1hcmtkb3duLWl0LWNvbnRhaW5lclwiKSwgXCJzcG9pbGVyXCIsIHtcclxuICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIHtcclxuICAgICAgcmV0dXJuIHBhcmFtcy50cmltKCkubWF0Y2goL15zcG9pbGVyXFxzKyguKikkLyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKHRva2VuczogYW55LCBpZHg6IGFueSkge1xyXG4gICAgICB2YXIgbSA9IHRva2Vuc1tpZHhdLmluZm8udHJpbSgpLm1hdGNoKC9ec3BvaWxlclxccysoLiopJC8pO1xyXG5cclxuICAgICAgaWYgKHRva2Vuc1tpZHhdLm5lc3RpbmcgPT09IDEpIHtcclxuICAgICAgICAvLyBvcGVuaW5nIHRhZ1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBcIjxkZXRhaWxzPjxzdW1tYXJ5PlwiICsgbWQudXRpbHMuZXNjYXBlSHRtbChtWzFdKSArIFwiPC9zdW1tYXJ5PlxcblwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjbG9zaW5nIHRhZ1xyXG4gICAgICAgIHJldHVybiBcIjwvZGV0YWlscz5cXG5cIjtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KVxyXG4gIC51c2UocmVxdWlyZShcIkBnZXJob2JiZWx0L21hcmtkb3duLWl0LWdpdGh1Yi1oZWFkaW5nc1wiKSlcclxuICAudXNlKHJlcXVpcmUoXCJtYXJrZG93bi1pdC1jb250YWluZXJcIiksIFwiZHluYW1pY1wiLCB7XHJcbiAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICh0b2tlbnM6IGFueSwgaWR4OiBhbnkpIHtcclxuICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2lkeF07XHJcblxyXG4gICAgICBpZiAodG9rZW4ubmVzdGluZyA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cIicgKyB0b2tlbi5pbmZvLnRyaW0oKSArICdcIj4nO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcIjwvZGl2PlwiO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1hcmtkb3duSGFuZGxlcihtYXJrZG93bjogc3RyaW5nKSB7XHJcbiAgY29uc3QgcmVuZGVyZWQgPSBtZC5yZW5kZXIobWFya2Rvd24pO1xyXG4gIHJldHVybiByZW5kZXJlZDtcclxufVxyXG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgIClcclxufSIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwicG9zdHMvb3ZlcnZpZXdcIilcclxufSIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidjYjcxMzlhZScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtRDdPUEo0RjIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUJaWEo0SkdHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUFdXR0s1VUYuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LTdNV0NJWlJILmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NVkdRWVlKSC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkJzp7J2lkJzoncm91dGVzL2Rhc2hib2FyZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkYXNoYm9hcmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGFzaGJvYXJkLVE1Sk9TMjJRLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtQTNTWFRTMzIuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21ldHJpY3MnOnsnaWQnOidyb3V0ZXMvbWV0cmljcycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZXRyaWNzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21ldHJpY3MtN0RKNE9VNlYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0cyc6eydpZCc6J3JvdXRlcy9wb3N0cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwb3N0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy1LR1lNQVBYSC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Bvc3RzL2VkaXQuJHNsdWcnOnsnaWQnOidyb3V0ZXMvcG9zdHMvZWRpdC4kc2x1ZycsJ3BhcmVudElkJzoncm91dGVzL3Bvc3RzJywncGF0aCc6J2VkaXQvOnNsdWcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9zdHMvZWRpdC4kc2x1Zy1TWkdWUVpTUy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQ0RUVTVFSk0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NVkdRWVlKSC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvcG9zdHMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvcG9zdHMvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9wb3N0cycsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy9pbmRleC1PSDVKU0VGTi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9zdHMvb3ZlcnZpZXcnOnsnaWQnOidyb3V0ZXMvcG9zdHMvb3ZlcnZpZXcnLCdwYXJlbnRJZCc6J3JvdXRlcy9wb3N0cycsJ3BhdGgnOidvdmVydmlldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy9vdmVydmlldy1RMlhKUUZYUS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NldHRpbmdzJzp7J2lkJzoncm91dGVzL3NldHRpbmdzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NldHRpbmdzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NldHRpbmdzLTNZSFRDVkZILmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUNCNzEzOUFFLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FB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
