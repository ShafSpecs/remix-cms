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
var import_react = require("react");
var links2 = () => {
  return [{ rel: "stylesheet", href: posts_default }];
};
function Posts() {
  const activeClassName2 = "active-post-route";
  const ulRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    var _a, _b, _c, _d;
    if (window.location.pathname.includes("/edit/")) {
      (_a = ulRef.current) == null ? void 0 : _a.children[2].classList.remove(activeClassName2);
      (_b = ulRef.current) == null ? void 0 : _b.children[0].classList.remove(activeClassName2);
      (_c = ulRef.current) == null ? void 0 : _c.children[1].classList.add(activeClassName2);
    } else {
      (_d = ulRef.current) == null ? void 0 : _d.children[1].classList.remove(activeClassName2);
    }
  });
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "title"
  }, "Posts"), /* @__PURE__ */ React.createElement("h3", {
    className: "desc"
  }, "Edit posts & articles. Review stats and feedback.."), /* @__PURE__ */ React.createElement("nav", {
    className: "navbar"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "post-ul",
    ref: ulRef
  }, /* @__PURE__ */ React.createElement(import_remix4.NavLink, {
    to: "/posts/overview",
    className: ({ isActive }) => isActive ? activeClassName2 : "",
    reloadDocument: true
  }, /* @__PURE__ */ React.createElement("li", null, "Overview")), /* @__PURE__ */ React.createElement(import_remix4.NavLink, {
    to: "/posts/edit/new",
    className: ({ isActive }) => isActive ? activeClassName2 : "",
    end: false,
    reloadDocument: true
  }, /* @__PURE__ */ React.createElement("li", null, "Write a post")), /* @__PURE__ */ React.createElement(import_remix4.NavLink, {
    to: "/posts/manage-posts",
    className: ({ isActive }) => isActive ? activeClassName2 : "",
    reloadDocument: true
  }, /* @__PURE__ */ React.createElement("li", null, "Manage articles")))), /* @__PURE__ */ React.createElement("div", {
    className: "outlet"
  }, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)));
}

// route:C:\Users\fash\Documents\remix-cms\app\routes\posts\manage-posts.tsx
var manage_posts_exports = {};
__export(manage_posts_exports, {
  Card: () => Card,
  default: () => Manage,
  links: () => links3,
  loader: () => loader2
});
init_react();
var import_remix5 = __toESM(require_remix());
var import_di = require("react-icons/di");

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
var grayMatter = require("gray-matter");
var octokit = new import_core.Octokit({ auth: process.env.GITHUB_TOKEN });
async function getPosts() {
  const postDir = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", __spreadProps(__spreadValues({}, Repo), {
    path: "posts"
  }));
  return postDir;
}
async function PostsData() {
  const posts = await getPosts();
  const postsInfo = Promise.all(posts.data.map(async (post) => {
    const { name, download_url, sha } = post;
    const content = await fetch(download_url).then((res) => res.text());
    const { data } = grayMatter(content);
    return { name, sha, frontmatter: data, content };
  }));
  return postsInfo;
}
async function createPost(slug, commit, content, published) {
  const post = Buffer.from(content).toString("base64");
  const createdPost = await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", __spreadProps(__spreadValues({}, Repo), {
    path: `posts/${slug}.md`,
    message: commit,
    content: post
  }));
  return createdPost;
}
async function updatePost(slug, commit, content, sha, published) {
  const post = Buffer.from(content).toString("base64");
  const updatedPost = await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", __spreadProps(__spreadValues({}, Repo), {
    path: `posts/${slug}.md`,
    message: commit,
    content: post,
    sha
  }));
  return updatedPost;
}
async function Md(text) {
  const texts = await octokit.request("POST /markdown", {
    text
  });
  return texts;
}

// route:C:\Users\fash\Documents\remix-cms\app\routes\posts\manage-posts.tsx
var import_date_fns = require("date-fns");

// app/styles/manage.css
var manage_default = "/build/_assets/manage-2K2RBM5A.css";

// route:C:\Users\fash\Documents\remix-cms\app\routes\posts\manage-posts.tsx
var import_react2 = require("react");
var links3 = () => {
  return [
    {
      rel: "stylesheet",
      href: manage_default
    }
  ];
};
var loader2 = async () => {
  const data = await PostsData();
  const frontmatter = data.map((post) => {
    const { frontmatter: frontmatter2 } = post;
    return frontmatter2;
  });
  return frontmatter;
};
function Card({ title, published, slug, date }) {
  const publishedRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    const stringedDate = date.toString();
    const match = stringedDate.match(/[^-]+/g);
    const formatted = (0, import_date_fns.format)(new Date(match[0], match[1] - 1, match[2].slice(0, 2)), "MMMM dd, yyyy");
    publishedRef.current && (publishedRef.current.innerText = `Published: ${formatted}`);
  }, [date]);
  return /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: `/posts/edit/${slug}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "title"
  }, title), /* @__PURE__ */ React.createElement("div", {
    className: "spans"
  }, /* @__PURE__ */ React.createElement("span", {
    ref: publishedRef
  })), /* @__PURE__ */ React.createElement("div", {
    className: "branch",
    style: published ? { color: "#008800" } : { color: "#800000" }
  }, /* @__PURE__ */ React.createElement(import_di.DiGitBranch, null))));
}
function Manage() {
  const data = (0, import_remix5.useLoaderData)();
  const mappedData = data.sort((a, b) => {
    return b.id - a.id;
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "manage"
  }, mappedData.map((post) => {
    return /* @__PURE__ */ React.createElement(Card, {
      key: post.id,
      title: post.title,
      published: post.published,
      slug: post.slug,
      date: post.date
    });
  }));
}

// route:C:\Users\fash\Documents\remix-cms\app\routes\posts\edit.$slug.tsx
var edit_slug_exports = {};
__export(edit_slug_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action,
  default: () => New,
  links: () => links4,
  loader: () => loader3
});
init_react();
var import_react3 = __toESM(require("react"));
var import_remix7 = __toESM(require_remix());
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
var import_di2 = require("react-icons/di");

// app/utils/server/session.server.ts
init_react();
var import_remix6 = __toESM(require_remix());
var { getSession, commitSession, destroySession } = (0, import_remix6.createCookieSessionStorage)({
  cookie: {
    name: "__path",
    secrets: ["r3m1x_s3cret"],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secure: true,
    maxAge: 3600 * 1e3
  }
});

// app/styles/new.css
var new_default = "/build/_assets/new-NPR5WBDX.css";

// app/styles/github.css
var github_default = "/build/_assets/github-ORK6C5NZ.css";

// route:C:\Users\fash\Documents\remix-cms\app\routes\posts\edit.$slug.tsx
var links4 = () => {
  return [
    { rel: "stylesheet", href: new_default },
    { rel: "stylesheet", href: github_default }
  ];
};
var action = async ({ request, params }) => {
  const body = await request.formData();
  const type = body.get("type");
  if (type === "PARSE_MARKDOWN") {
    const markdown = body.get("markdown");
    const parsed = await Md(markdown);
    return {
      data: parsed.data,
      type: "PARSE_MARKDOWN"
    };
  } else if (type === "COMMIT_POST") {
    const message = body.get("message");
    const sha = body.get("shaValue");
    const val = body.get("value");
    const title = body.get("title");
    const published = body.get("published");
    const slug = params.slug;
    const session = request.headers.get("Cookie");
    const sessionData = await getSession(session);
    if (slug === "new") {
      const data = await createPost(title, message, val, published);
      sessionData.set("new", true);
      sessionData.set("redirect", true);
      await new Promise((res) => setTimeout(res, 100));
      return (0, import_remix7.redirect)("/posts/edit/" + title, {
        headers: {
          "Set-Cookie": await commitSession(sessionData)
        }
      });
    } else {
      const data = await updatePost(slug, message, val, sha, published);
      sessionData.set("new", false);
      sessionData.set("redirect", true);
      await new Promise((res) => setTimeout(res, 100));
      return (0, import_remix7.redirect)("/posts/edit/" + title, {
        headers: {
          "Set-Cookie": await commitSession(sessionData)
        }
      });
    }
  }
  return { data: "No action", type: "NULL" };
};
var loader3 = async ({ params, request }) => {
  const slug = params.slug;
  if (slug === "new") {
    return {
      loaderData: null,
      sha: null,
      new: null
    };
  } else {
    const postsInfo = await PostsData();
    const currentPost = postsInfo.find((post) => post.name.split(".")[0] === slug);
    const postContent = currentPost.content;
    const session = await getSession(request.headers.get("Cookie"));
    if (!session.has("redirect") || session.get("redirect") === false || !session.has("new")) {
      request.headers.set("Cookie", await destroySession(session));
    }
    const newInfo = session.get("new");
    return {
      loaderData: postContent,
      sha: currentPost.sha,
      new: newInfo
    };
  }
};
function New() {
  var _a, _b;
  const { loaderData, sha, new: newExists } = (0, import_remix7.useLoaderData)();
  const transition = (0, import_remix7.useTransition)();
  const fetcher = (0, import_remix7.useFetcher)();
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
  const [value, setValue] = (0, import_react3.useState)(rawText);
  const [md, setMd] = (0, import_react3.useState)(content);
  const [parsed, setParsed] = (0, import_react3.useState)("");
  const [selectedTab, setSelectedTab] = useTabs(["Markdown", "Preview"]);
  const [slug, setSlug] = (0, import_react3.useState)("");
  const [status, setStatus] = (0, import_react3.useState)(0);
  const [triggered, setTriggered] = (0, import_react3.useState)(false);
  const editorRef = (0, import_react3.useRef)(null);
  const widgetRef = (0, import_react3.useRef)(null);
  const blogRef = (0, import_react3.useRef)(null);
  const firstRender = (0, import_react3.useRef)(true);
  const commitRef = (0, import_react3.useRef)(null);
  const submissionRef = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    submissionRef.current && value == rawText && !triggered ? submissionRef.current.disabled = true : submissionRef.current && value !== rawText && (submissionRef.current.disabled = false);
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
    const post = loaderData ? value.substring(loaderData.indexOf("---", 4) + 3).trim() : value.substring(value.indexOf("---", 4) + 3).trim();
    setMd(post);
  }, [value, triggered]);
  (0, import_react3.useEffect)(() => {
    if (data && type === "PARSE_MARKDOWN") {
      setParsed(data);
      blogRef.current.innerHTML = parsed;
    }
  }, [data, type, parsed]);
  (0, import_react3.useEffect)(() => {
    if (newExists !== null && window.performance.getEntriesByType("navigation")[0].type !== "back_forward") {
      if (sha) {
        setStatus(1);
        setTimeout(() => {
          setStatus(0);
        }, 5500);
      } else {
        setStatus(-1);
        setTimeout(() => {
          setStatus(0);
        }, 5500);
      }
    }
  }, [newExists, sha]);
  (0, import_react3.useEffect)(() => {
    setTriggered(false);
    value == rawText && setTriggered(false);
  }, [triggered, value, rawText]);
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
      return {
        title: res.slug,
        published: res.published
      };
    });
    fetcher.submit({
      type: "COMMIT_POST",
      message: commitMessage,
      shaValue,
      value,
      title: title.title,
      published: title.published
    }, { method: "post" });
  };
  const triggerBtn = () => {
    setTriggered(true);
  };
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "dive"
  }, status === 1 ? /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "pop-up success"
  }, /* @__PURE__ */ import_react3.default.createElement(import_di2.DiGitMerge, null), "\xA0", `Successfully pushed ${frontmatter.title} to GitHub`) : status === -1 ? /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "pop-up error"
  }, /* @__PURE__ */ import_react3.default.createElement(import_di2.DiGitPullRequest, null), "\xA0", `Failed to push ${frontmatter.title} to GitHub`) : null, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "monaco"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "editor-header"
  }, /* @__PURE__ */ import_react3.default.createElement(TabSelector, {
    isActive: selectedTab === "Markdown",
    onClick: () => setSelectedTab("Markdown")
  }, /* @__PURE__ */ import_react3.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    width: 24,
    height: 24
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
  })), "  ", /* @__PURE__ */ import_react3.default.createElement("span", null, "Edit Post")), /* @__PURE__ */ import_react3.default.createElement(TabSelector, {
    isActive: selectedTab === "Preview",
    onClick: () => {
      setSelectedTab("Preview");
      fetcher.submit({ type: "PARSE_MARKDOWN", markdown: md }, { method: "post" });
    }
  }, /* @__PURE__ */ import_react3.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    width: 24,
    height: 24
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }), /* @__PURE__ */ import_react3.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
  })), "  ", /* @__PURE__ */ import_react3.default.createElement("span", null, "Preview"))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "editor",
    ref: editorRef
  }, /* @__PURE__ */ import_react3.default.createElement(TabPanel, {
    hidden: selectedTab !== "Markdown"
  }, /* @__PURE__ */ import_react3.default.createElement(import_remix_utils2.ClientOnly, null, /* @__PURE__ */ import_react3.default.createElement(import_monaco.default, {
    set: setValue,
    val: value,
    triggerBtn
  }))), /* @__PURE__ */ import_react3.default.createElement(TabPanel, {
    hidden: selectedTab !== "Preview"
  }, /* @__PURE__ */ import_react3.default.createElement("section", {
    className: "markdown-body",
    ref: blogRef,
    dangerouslySetInnerHTML: { __html: parsed }
  }))), selectedTab === "Markdown" && /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "editor-footer",
    onClick: () => {
      var _a2;
      return (_a2 = widgetRef.current) == null ? void 0 : _a2.openDialog("file");
    }
  }, /* @__PURE__ */ import_react3.default.createElement("p", null, "Drop files to upload media files or click area to browse files")), /* @__PURE__ */ import_react3.default.createElement(import_react_widget.Widget, {
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
  })), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "commit"
  }, /* @__PURE__ */ import_react3.default.createElement(import_remix7.Form, {
    className: "form",
    onSubmit: commitPost
  }, /* @__PURE__ */ import_react3.default.createElement("input", {
    type: "text",
    placeholder: loaderData ? `Update ${slug}.md` : `Create a new blog post!`,
    className: "commit-input",
    name: "commit",
    ref: commitRef
  }), /* @__PURE__ */ import_react3.default.createElement("button", {
    type: "submit",
    className: "commit-submit",
    onClick: commitPost,
    ref: submissionRef,
    disabled: true
  }, loaderData ? "Update Post" : "Create Post"))));
}
var ErrorBoundary = ({ error }) => {
  return /* @__PURE__ */ import_react3.default.createElement("div", null, "Oh oh! ", error.message);
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
  loader: () => loader4
});
init_react();
var import_remix8 = __toESM(require_remix());
var loader4 = () => {
  return (0, import_remix8.redirect)("posts/overview");
};

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "5a2e7e5b", "entry": { "module": "/build/entry.client-CHVICGJJ.js", "imports": ["/build/_shared/chunk-XJSTKNBB.js", "/build/_shared/chunk-PWWGK5UF.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-MZJXRYAP.js", "imports": ["/build/_shared/chunk-MVGQYYJH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-Q5JOS22Q.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-WP2ATRKF.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/metrics": { "id": "routes/metrics", "parentId": "root", "path": "metrics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/metrics-7DJ4OU6V.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts": { "id": "routes/posts", "parentId": "root", "path": "posts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts-STTGX5TK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/edit.$slug": { "id": "routes/posts/edit.$slug", "parentId": "routes/posts", "path": "edit/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/edit.$slug-HPIC2Y6L.js", "imports": ["/build/_shared/chunk-CDTU5EJM.js", "/build/_shared/chunk-MVGQYYJH.js", "/build/_shared/chunk-4VY3SUW2.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/posts/index": { "id": "routes/posts/index", "parentId": "routes/posts", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/posts/index-MTCIIHFQ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/manage-posts": { "id": "routes/posts/manage-posts", "parentId": "routes/posts", "path": "manage-posts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/manage-posts-45N6RKMM.js", "imports": ["/build/_shared/chunk-4VY3SUW2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/overview": { "id": "routes/posts/overview", "parentId": "routes/posts", "path": "overview", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/overview-Q2XJQFXQ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/settings": { "id": "routes/settings", "parentId": "root", "path": "settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/settings-3YHTCVFH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-5A2E7E5B.js" };

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
  "routes/posts/manage-posts": {
    id: "routes/posts/manage-posts",
    parentId: "routes/posts",
    path: "manage-posts",
    index: void 0,
    caseSensitive: void 0,
    module: manage_posts_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6fi91dGlscy9jbGllbnQvbW9uYWNvLmNsaWVudCIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxyZW1peC1jbXNcXGFwcFxccm9vdC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHJlbWl4LWNtc1xcYXBwXFxyb3V0ZXNcXGRhc2hib2FyZC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHJlbWl4LWNtc1xcYXBwXFxyb3V0ZXNcXHNldHRpbmdzLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGZhc2hcXERvY3VtZW50c1xccmVtaXgtY21zXFxhcHBcXHJvdXRlc1xcbWV0cmljcy50c3giLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHJlbWl4LWNtc1xcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGZhc2hcXERvY3VtZW50c1xccmVtaXgtY21zXFxhcHBcXHJvdXRlc1xccG9zdHMudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxyZW1peC1jbXNcXGFwcFxccm91dGVzXFxwb3N0c1xcbWFuYWdlLXBvc3RzLnRzeCIsICIuLi9hcHAvdXRpbHMvc2VydmVyL2dpdGh1Yi5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2hhbmRsZXJzL2dpdGh1Yi1hcGkudHMiLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHJlbWl4LWNtc1xcYXBwXFxyb3V0ZXNcXHBvc3RzXFxlZGl0LiRzbHVnLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9UYWJTZWxlY3Rvci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvVGFiLnRzeCIsICIuLi9hcHAvdXRpbHMvc2VydmVyL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxyZW1peC1jbXNcXGFwcFxccm91dGVzXFxwb3N0c1xcb3ZlcnZpZXcudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxyZW1peC1jbXNcXGFwcFxccm91dGVzXFxwb3N0c1xcaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgIm1vZHVsZS5leHBvcnRzID0ge307IiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxccmVtaXgtY21zXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHJlbWl4LWNtc1xcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxccmVtaXgtY21zXFxcXGFwcFxcXFxyb3V0ZXNcXFxcZGFzaGJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxyZW1peC1jbXNcXFxcYXBwXFxcXHJvdXRlc1xcXFxzZXR0aW5ncy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxccmVtaXgtY21zXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWV0cmljcy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxccmVtaXgtY21zXFxcXGFwcFxcXFxyb3V0ZXNcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHJlbWl4LWNtc1xcXFxhcHBcXFxccm91dGVzXFxcXHBvc3RzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxyZW1peC1jbXNcXFxcYXBwXFxcXHJvdXRlc1xcXFxwb3N0c1xcXFxtYW5hZ2UtcG9zdHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHJlbWl4LWNtc1xcXFxhcHBcXFxccm91dGVzXFxcXHBvc3RzXFxcXGVkaXQuJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHJlbWl4LWNtc1xcXFxhcHBcXFxccm91dGVzXFxcXHBvc3RzXFxcXG92ZXJ2aWV3LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxyZW1peC1jbXNcXFxcYXBwXFxcXHJvdXRlc1xcXFxwb3N0c1xcXFxpbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2Rhc2hib2FyZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGFzaGJvYXJkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImRhc2hib2FyZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2V0dGluZ3NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NldHRpbmdzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNldHRpbmdzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9tZXRyaWNzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZXRyaWNzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1ldHJpY3NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL3Bvc3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb3N0c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwb3N0c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9zdHMvbWFuYWdlLXBvc3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb3N0cy9tYW5hZ2UtcG9zdHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wb3N0c1wiLFxuICAgICAgcGF0aDogXCJtYW5hZ2UtcG9zdHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL3Bvc3RzL2VkaXQuJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzL2VkaXQuJHNsdWdcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wb3N0c1wiLFxuICAgICAgcGF0aDogXCJlZGl0LzpzbHVnXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9wb3N0cy9vdmVydmlld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHMvb3ZlcnZpZXdcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wb3N0c1wiLFxuICAgICAgcGF0aDogXCJvdmVydmlld1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9zdHMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcG9zdHNcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTlcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59IiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICBOYXZMaW5rLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEV4dGVybmFsU2NyaXB0cyB9IGZyb20gXCJyZW1peC11dGlsc1wiO1xuXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiwgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgcm9vdFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvdmFyaWFibGVzLmNzc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvaW5kZXguY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogcm9vdFN0eWxlcyB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH0sXG4gIF07XG59O1xuXG5jb25zdCBhY3RpdmVDbGFzc05hbWU6IHN0cmluZyA9IFwiYWN0aXZlLXJvdXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2XCI+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoMVwiPlNoYWZTcGVjczwvaDE+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWxcIj5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz1cIi9kYXNoYm9hcmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT4gKGlzQWN0aXZlID8gYWN0aXZlQ2xhc3NOYW1lIDogXCJcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNOCA5bDMgMy0zIDNtNSAwaDNNNSAyMGgxNGEyIDIgMCAwMDItMlY2YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnpcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgIHRvPVwiL3Bvc3RzXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IGFjdGl2ZUNsYXNzTmFtZSA6IFwiXCIpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNlwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE5IDIwSDVhMiAyIDAgMDEtMi0yVjZhMiAyIDAgMDEyLTJoMTBhMiAyIDAgMDEyIDJ2MW0yIDEzYTIgMiAwIDAxLTItMlY3bTIgMTNhMiAyIDAgMDAyLTJWOWEyIDIgMCAwMC0yLTJoLTJtLTQtM0g5TTcgMTZoNk03IDhoNnY0SDdWOHpcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgUG9zdHNcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIvbWV0cmljc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PiAoaXNBY3RpdmUgPyBhY3RpdmVDbGFzc05hbWUgOiBcIlwiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk05IDE3di0ybTMgMnYtNG0zIDR2LTZtMiAxMEg3YTIgMiAwIDAxLTItMlY1YTIgMiAwIDAxMi0yaDUuNTg2YTEgMSAwIDAxLjcwNy4yOTNsNS40MTQgNS40MTRhMSAxIDAgMDEuMjkzLjcwN1YxOWEyIDIgMCAwMS0yIDJ6XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIE1ldHJpY3NcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIvc2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT4gKGlzQWN0aXZlID8gYWN0aXZlQ2xhc3NOYW1lIDogXCJcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAuMzI1IDQuMzE3Yy40MjYtMS43NTYgMi45MjQtMS43NTYgMy4zNSAwYTEuNzI0IDEuNzI0IDAgMDAyLjU3MyAxLjA2NmMxLjU0My0uOTQgMy4zMS44MjYgMi4zNyAyLjM3YTEuNzI0IDEuNzI0IDAgMDAxLjA2NSAyLjU3MmMxLjc1Ni40MjYgMS43NTYgMi45MjQgMCAzLjM1YTEuNzI0IDEuNzI0IDAgMDAtMS4wNjYgMi41NzNjLjk0IDEuNTQzLS44MjYgMy4zMS0yLjM3IDIuMzdhMS43MjQgMS43MjQgMCAwMC0yLjU3MiAxLjA2NWMtLjQyNiAxLjc1Ni0yLjkyNCAxLjc1Ni0zLjM1IDBhMS43MjQgMS43MjQgMCAwMC0yLjU3My0xLjA2NmMtMS41NDMuOTQtMy4zMS0uODI2LTIuMzctMi4zN2ExLjcyNCAxLjcyNCAwIDAwLTEuMDY1LTIuNTcyYy0xLjc1Ni0uNDI2LTEuNzU2LTIuOTI0IDAtMy4zNWExLjcyNCAxLjcyNCAwIDAwMS4wNjYtMi41NzNjLS45NC0xLjU0My44MjYtMy4zMSAyLjM3LTIuMzcuOTk2LjYwOCAyLjI5Ni4wNyAyLjU3Mi0xLjA2NXpcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNSAxMmEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vQGhpZ2hsaWdodGpzL2Nkbi1hc3NldHNAMTEuNC4wL2hpZ2hsaWdodC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdD5obGpzLmhpZ2hsaWdodEFsbCgpOzwvc2NyaXB0PlxuICAgICAgICA8RXh0ZXJuYWxTY3JpcHRzIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmdzICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXRyaWNzICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgIClcclxufSIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2Rhc2hib2FyZFwiKTtcbn0iLCAiaW1wb3J0IHsgTmF2TGluaywgT3V0bGV0LCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9wb3N0cy5jc3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGUgfV07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0cygpIHtcclxuICBjb25zdCBhY3RpdmVDbGFzc05hbWU6IHN0cmluZyA9IFwiYWN0aXZlLXBvc3Qtcm91dGVcIjtcclxuICBjb25zdCB1bFJlZiA9IHVzZVJlZjxIVE1MVUxpc3RFbGVtZW50PihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvZWRpdC9cIikpIHtcclxuICAgICAgdWxSZWYuY3VycmVudD8uY2hpbGRyZW5bMl0uY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzc05hbWUpO1xyXG4gICAgICB1bFJlZi5jdXJyZW50Py5jaGlsZHJlblswXS5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzTmFtZSk7XHJcbiAgICAgIHVsUmVmLmN1cnJlbnQ/LmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3NOYW1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVsUmVmLmN1cnJlbnQ/LmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3NOYW1lKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlBvc3RzPC9oMT5cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cImRlc2NcIj5cclxuICAgICAgICBFZGl0IHBvc3RzICYgYXJ0aWNsZXMuIFJldmlldyBzdGF0cyBhbmQgZmVlZGJhY2suLlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJwb3N0LXVsXCIgcmVmPXt1bFJlZn0+XHJcbiAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICB0bz1cIi9wb3N0cy9vdmVydmlld1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT4gKGlzQWN0aXZlID8gYWN0aXZlQ2xhc3NOYW1lIDogXCJcIil9XHJcbiAgICAgICAgICAgIHJlbG9hZERvY3VtZW50PXt0cnVlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8bGk+T3ZlcnZpZXc8L2xpPlxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgdG89XCIvcG9zdHMvZWRpdC9uZXdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IGFjdGl2ZUNsYXNzTmFtZSA6IFwiXCIpfVxyXG4gICAgICAgICAgICBlbmQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICByZWxvYWREb2N1bWVudD17dHJ1ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGxpPldyaXRlIGEgcG9zdDwvbGk+XHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICB0bz1cIi9wb3N0cy9tYW5hZ2UtcG9zdHNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IGFjdGl2ZUNsYXNzTmFtZSA6IFwiXCIpfVxyXG4gICAgICAgICAgICByZWxvYWREb2N1bWVudD17dHJ1ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGxpPk1hbmFnZSBhcnRpY2xlczwvbGk+XHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0bGV0XCI+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IExpbmssIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgRGlHaXRCcmFuY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvZGlcIjtcclxuaW1wb3J0IHsgUG9zdHNEYXRhIH0gZnJvbSBcIn4vdXRpbHMvc2VydmVyL2dpdGh1Yi5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9tYW5hZ2UuY3NzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcclxuICAgICAgaHJlZjogc3R5bGUsXHJcbiAgICB9LFxyXG4gIF07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgUG9zdHNEYXRhKCk7XHJcbiAgY29uc3QgZnJvbnRtYXR0ZXIgPSBkYXRhLm1hcCgocG9zdDogYW55KSA9PiB7XHJcbiAgICBjb25zdCB7IGZyb250bWF0dGVyIH0gPSBwb3N0O1xyXG4gICAgcmV0dXJuIGZyb250bWF0dGVyO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZnJvbnRtYXR0ZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2FyZCh7IHRpdGxlLCBwdWJsaXNoZWQsIHNsdWcsIGRhdGUgfTogYW55KSB7XHJcbiAgY29uc3QgcHVibGlzaGVkUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdHJpbmdlZERhdGUgPSBkYXRlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgY29uc3QgbWF0Y2ggPSBzdHJpbmdlZERhdGUubWF0Y2goL1teLV0rL2cpO1xyXG4gICAgY29uc3QgZm9ybWF0dGVkID0gZm9ybWF0KFxyXG4gICAgICBuZXcgRGF0ZShtYXRjaFswXSwgbWF0Y2hbMV0gLSAxLCBtYXRjaFsyXS5zbGljZSgwLCAyKSksXHJcbiAgICAgIFwiTU1NTSBkZCwgeXl5eVwiXHJcbiAgICApO1xyXG5cclxuICAgIHB1Ymxpc2hlZFJlZi5jdXJyZW50ICYmIChwdWJsaXNoZWRSZWYuY3VycmVudC5pbm5lclRleHQgPSBgUHVibGlzaGVkOiAke2Zvcm1hdHRlZH1gKVxyXG4gIH0sIFtkYXRlXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIHRvPXtgL3Bvc3RzL2VkaXQvJHtzbHVnfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYW5zXCI+XHJcbiAgICAgICAgICA8c3BhbiByZWY9e3B1Ymxpc2hlZFJlZn0+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJyYW5jaFwiXHJcbiAgICAgICAgICBzdHlsZT17cHVibGlzaGVkID8geyBjb2xvcjogXCIjMDA4ODAwXCIgfSA6IHsgY29sb3I6IFwiIzgwMDAwMFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPERpR2l0QnJhbmNoIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbmFnZSgpIHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IG1hcHBlZERhdGEgPSBkYXRhLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gYi5pZCAtIGEuaWQ7XHJcbiAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYW5hZ2VcIj5cclxuICAgICAge21hcHBlZERhdGEubWFwKChwb3N0OiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxyXG4gICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgcHVibGlzaGVkPXtwb3N0LnB1Ymxpc2hlZH1cclxuICAgICAgICAgICAgc2x1Zz17cG9zdC5zbHVnfVxyXG4gICAgICAgICAgICBkYXRlPXtwb3N0LmRhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT2N0b2tpdCB9IGZyb20gXCJAb2N0b2tpdC9jb3JlXCI7XHJcbmltcG9ydCB7IFJlcG8gfSBmcm9tIFwiLi4vaGFuZGxlcnMvZ2l0aHViLWFwaVwiO1xyXG5jb25zdCBncmF5TWF0dGVyID0gcmVxdWlyZShcImdyYXktbWF0dGVyXCIpXHJcblxyXG5jb25zdCBvY3Rva2l0ID0gbmV3IE9jdG9raXQoeyBhdXRoOiBwcm9jZXNzLmVudi5HSVRIVUJfVE9LRU4gfSk7XHJcblxyXG5pbnRlcmZhY2UgUG9zdERhdGEge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgc2hhOiBzdHJpbmc7XHJcbiAgc2l6ZTogbnVtYmVyO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGh0bWxfdXJsOiBzdHJpbmc7XHJcbiAgZ2l0X3VybDogc3RyaW5nO1xyXG4gIGRvd25sb2FkX3VybDogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBfbGlua3M6IHtcclxuICAgIGdpdDogc3RyaW5nO1xyXG4gICAgc2VsZjogc3RyaW5nO1xyXG4gICAgaHRtbDogc3RyaW5nO1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIEdldCBhbGwgcG9zdHMgZnJvbSB0aGUgcmVwb3NpdG9yeVxyXG5hc3luYyBmdW5jdGlvbiBnZXRQb3N0cygpIHtcclxuICBjb25zdCBwb3N0RGlyID0gYXdhaXQgb2N0b2tpdC5yZXF1ZXN0KFxyXG4gICAgXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3twYXRofVwiLFxyXG4gICAge1xyXG4gICAgICAuLi5SZXBvLFxyXG4gICAgICBwYXRoOiBcInBvc3RzXCIsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHBvc3REaXI7XHJcbn1cclxuXHJcbi8qXHJcbiAqICBFeHRyYWN0IHJlcXVpcmVkIHBvc3QgZGF0YSBmcm9tIHRoZSBHaXRIdWIgQVBJIHJlc3BvbnNlXHJcbiAqXHJcbiAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBvc3RzRGF0YSgpIHtcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldFBvc3RzKCk7XHJcblxyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIGNvbnN0IHBvc3RzSW5mbyA9IFByb21pc2UuYWxsKHBvc3RzLmRhdGEubWFwKGFzeW5jIChwb3N0OiBQb3N0RGF0YSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCBkb3dubG9hZF91cmwsIHNoYSB9ID0gcG9zdDtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmZXRjaChkb3dubG9hZF91cmwpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGdyYXlNYXR0ZXIoY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIHsgbmFtZSwgc2hhLCBmcm9udG1hdHRlcjogZGF0YSwgY29udGVudCB9O1xyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHBvc3RzSW5mbztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBvc3QoXHJcbiAgc2x1Zzogc3RyaW5nLFxyXG4gIGNvbW1pdDogc3RyaW5nLFxyXG4gIGNvbnRlbnQ6IHN0cmluZyxcclxuICBwdWJsaXNoZWQ6IGJvb2xlYW5cclxuKSB7XHJcbiAgY29uc3QgcG9zdCA9IEJ1ZmZlci5mcm9tKGNvbnRlbnQpLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xyXG4gIC8vIGlmIChwdWJsaXNoZWQpIHtcclxuICBjb25zdCBjcmVhdGVkUG9zdCA9IGF3YWl0IG9jdG9raXQucmVxdWVzdChcclxuICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250ZW50cy97cGF0aH1cIixcclxuICAgIHtcclxuICAgICAgLi4uUmVwbyxcclxuICAgICAgcGF0aDogYHBvc3RzLyR7c2x1Z30ubWRgLFxyXG4gICAgICBtZXNzYWdlOiBjb21taXQsXHJcbiAgICAgIGNvbnRlbnQ6IHBvc3QsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGNyZWF0ZWRQb3N0O1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBjb25zdCBtYWluID0gYXdhaXQgb2N0b2tpdC5yZXF1ZXN0KFxyXG4gIC8vICAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L3JlZi9oZWFkcy9tYWluXCIsXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICAuLi5SZXBvLFxyXG4gIC8vICAgICB9XHJcbiAgLy8gICApO1xyXG5cclxuICAvLyAgIC8vQHRzLWlnbm9yZVxyXG4gIC8vICAgY29uc3QgaGFzaCA9IG1haW4ub2JqZWN0LnNoYTtcclxuXHJcbiAgLy8gICBjb25zdCBuZXdCcmFuY2ggPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoXHJcbiAgLy8gICAgIFwiUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZ2l0L3JlZnNcIixcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgIC4uLlJlcG8sXHJcbiAgLy8gICAgICAgcmVmOiBgcmVmcy9oZWFkcy8ke3NsdWd9YCxcclxuICAvLyAgICAgICBzaGE6IGhhc2gsXHJcbiAgLy8gICAgIH1cclxuICAvLyAgICk7XHJcblxyXG4gIC8vICAgY29uc29sZS5sb2cobmV3QnJhbmNoKTtcclxuXHJcbiAgLy8gICBjb25zdCBjcmVhdGVkUG9zdCA9IGF3YWl0IG9jdG9raXQucmVxdWVzdChcclxuICAvLyAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3twYXRofVwiLFxyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgLi4uUmVwbyxcclxuICAvLyAgICAgICBwYXRoOiBgcG9zdHMvJHtzbHVnfS5tZGAsXHJcbiAgLy8gICAgICAgbWVzc2FnZTogY29tbWl0LFxyXG4gIC8vICAgICAgIGNvbnRlbnQ6IHBvc3QsXHJcbiAgLy8gICAgICAgYnJhbmNoOiBzbHVnLFxyXG4gIC8vICAgICB9XHJcbiAgLy8gICApO1xyXG5cclxuICAvLyAgIHJldHVybiBjcmVhdGVkUG9zdDtcclxuICAvLyB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQb3N0KFxyXG4gIHNsdWc6IHN0cmluZyxcclxuICBjb21taXQ6IHN0cmluZyxcclxuICBjb250ZW50OiBzdHJpbmcsXHJcbiAgc2hhOiBzdHJpbmcsXHJcbiAgcHVibGlzaGVkOiBib29sZWFuXHJcbikge1xyXG4gIGNvbnN0IHBvc3QgPSBCdWZmZXIuZnJvbShjb250ZW50KS50b1N0cmluZyhcImJhc2U2NFwiKTtcclxuXHJcbiAgLy8gaWYgKHB1Ymxpc2hlZCkge1xyXG4gIGNvbnN0IHVwZGF0ZWRQb3N0ID0gYXdhaXQgb2N0b2tpdC5yZXF1ZXN0KFxyXG4gICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3twYXRofVwiLFxyXG4gICAge1xyXG4gICAgICAuLi5SZXBvLFxyXG4gICAgICBwYXRoOiBgcG9zdHMvJHtzbHVnfS5tZGAsXHJcbiAgICAgIG1lc3NhZ2U6IGNvbW1pdCxcclxuICAgICAgY29udGVudDogcG9zdCxcclxuICAgICAgc2hhOiBzaGEsXHJcbiAgICB9XHJcbiAgKTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgY29uc3QgdXBkYXRlZFBvc3QgPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoXHJcbiAgLy8gICAgIFwiUFVUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250ZW50cy97cGF0aH1cIixcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgIC4uLlJlcG8sXHJcbiAgLy8gICAgICAgcGF0aDogYHBvc3RzLyR7c2x1Z30ubWRgLFxyXG4gIC8vICAgICAgIG1lc3NhZ2U6IGNvbW1pdCxcclxuICAvLyAgICAgICBjb250ZW50OiBwb3N0LFxyXG4gIC8vICAgICAgIHNoYTogc2hhLFxyXG4gIC8vICAgICAgIGJyYW5jaDogc2x1ZyxcclxuICAvLyAgICAgfVxyXG4gIC8vICAgKTtcclxuICByZXR1cm4gdXBkYXRlZFBvc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQb3N0KHNsdWc6IHN0cmluZykge1xyXG4gIGNvbnN0IGRlbGV0ZWRQb3N0ID0gYXdhaXQgb2N0b2tpdC5yZXF1ZXN0KFxyXG4gICAgXCJERUxFVEUgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3twYXRofVwiLFxyXG4gICAge1xyXG4gICAgICAuLi5SZXBvLFxyXG4gICAgICBwYXRoOiBgcG9zdHMvJHtzbHVnfS5tZGAsXHJcbiAgICAgIG1lc3NhZ2U6IGBEZWxldGVkIHBvc3Q6ICR7c2x1Z30ubWRgLFxyXG4gICAgICBzaGE6IFwic2hhXCIsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGRlbGV0ZWRQb3N0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gTWQodGV4dDogYW55KSB7XHJcbiAgY29uc3QgdGV4dHMgPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoXCJQT1NUIC9tYXJrZG93blwiLCB7XHJcbiAgICB0ZXh0LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdGV4dHM7XHJcbn1cclxuIiwgImV4cG9ydCBjb25zdCBSZXBvID0ge1xyXG4gICAgb3duZXI6IFwiU2hhZlNwZWNzXCIsXHJcbiAgICByZXBvOiBcInJlbWl4LWNtc1wiLFxyXG59IiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBGb3JtLFxyXG4gIGpzb24sXHJcbiAgcmVkaXJlY3QsXHJcbiAgdXNlRmV0Y2hlcixcclxuICB1c2VMb2FkZXJEYXRhLFxyXG4gIHVzZVRyYW5zaXRpb24sXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IENsaWVudE9ubHkgfSBmcm9tIFwicmVtaXgtdXRpbHNcIjtcclxuaW1wb3J0IE1vbmFjbyBmcm9tIFwifi91dGlscy9jbGllbnQvbW9uYWNvLmNsaWVudFwiO1xyXG5pbXBvcnQgeyBUYWJTZWxlY3RvciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvVGFiU2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgVGFiUGFuZWwsIHVzZVRhYnMgfSBmcm9tIFwifi9jb21wb25lbnRzL1RhYlwiO1xyXG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tIFwiQHVwbG9hZGNhcmUvcmVhY3Qtd2lkZ2V0XCI7XHJcbmltcG9ydCB7XHJcbiAgUG9zdHNEYXRhLFxyXG4gIGNyZWF0ZVBvc3QsXHJcbiAgdXBkYXRlUG9zdCxcclxuICBNZCxcclxufSBmcm9tIFwifi91dGlscy9zZXJ2ZXIvZ2l0aHViLnNlcnZlclwiO1xyXG5pbXBvcnQgeyBNYXJrZG93bkhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvc2VydmVyL21hcmtkb3duLnNlcnZlclwiO1xyXG5pbXBvcnQgeyBEaUdpdE1lcmdlLCBEaUdpdFB1bGxSZXF1ZXN0IH0gZnJvbSBcInJlYWN0LWljb25zL2RpXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0U2Vzc2lvbixcclxuICBjb21taXRTZXNzaW9uLFxyXG4gIGRlc3Ryb3lTZXNzaW9uLFxyXG59IGZyb20gXCJ+L3V0aWxzL3NlcnZlci9zZXNzaW9uLnNlcnZlclwiO1xyXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCJ+L3V0aWxzL2hhbmRsZXJzL1N1cGFiYXNlXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7XHJcbiAgTGlua3NGdW5jdGlvbixcclxuICBBY3Rpb25GdW5jdGlvbixcclxuICBMb2FkZXJGdW5jdGlvbixcclxuICBFcnJvckJvdW5kYXJ5Q29tcG9uZW50LFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgdHlwZSB7IFdpZGdldEFQSSB9IGZyb20gXCJAdXBsb2FkY2FyZS9yZWFjdC13aWRnZXRcIjtcclxuXHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL25ldy5jc3NcIjtcclxuaW1wb3J0IGdpdGh1YiBmcm9tIFwiLi4vLi4vc3R5bGVzL2dpdGh1Yi5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gW1xyXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZSB9LFxyXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBnaXRodWIgfSxcclxuICBdO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcblxyXG4gIGNvbnN0IHR5cGUgPSBib2R5LmdldChcInR5cGVcIik7XHJcblxyXG4gIGlmICh0eXBlID09PSBcIlBBUlNFX01BUktET1dOXCIpIHtcclxuICAgIGNvbnN0IG1hcmtkb3duID0gYm9keS5nZXQoXCJtYXJrZG93blwiKTtcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgLy8gY29uc3QgcGFyc2VkID0gTWFya2Rvd25IYW5kbGVyKG1hcmtkb3duKTtcclxuICAgIGNvbnN0IHBhcnNlZCA9IGF3YWl0IE1kKG1hcmtkb3duKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IHBhcnNlZC5kYXRhLFxyXG4gICAgICB0eXBlOiBcIlBBUlNFX01BUktET1dOXCIsXHJcbiAgICB9O1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJDT01NSVRfUE9TVFwiKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gYm9keS5nZXQoXCJtZXNzYWdlXCIpO1xyXG4gICAgY29uc3Qgc2hhID0gYm9keS5nZXQoXCJzaGFWYWx1ZVwiKTtcclxuICAgIGNvbnN0IHZhbCA9IGJvZHkuZ2V0KFwidmFsdWVcIik7XHJcbiAgICBjb25zdCB0aXRsZSA9IGJvZHkuZ2V0KFwidGl0bGVcIik7XHJcbiAgICBjb25zdCBwdWJsaXNoZWQgPSBib2R5LmdldChcInB1Ymxpc2hlZFwiKTtcclxuICAgIGNvbnN0IHNsdWcgPSBwYXJhbXMuc2x1ZztcclxuXHJcbiAgICBjb25zdCBzZXNzaW9uID0gcmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKTtcclxuICAgIGNvbnN0IHNlc3Npb25EYXRhID0gYXdhaXQgZ2V0U2Vzc2lvbihzZXNzaW9uKTtcclxuXHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIGlmIChzbHVnID09PSBcIm5ld1wiKSB7XHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgY3JlYXRlUG9zdCh0aXRsZSwgbWVzc2FnZSwgdmFsLCBwdWJsaXNoZWQpO1xyXG4gICAgICBzZXNzaW9uRGF0YS5zZXQoXCJuZXdcIiwgdHJ1ZSk7XHJcbiAgICAgIHNlc3Npb25EYXRhLnNldChcInJlZGlyZWN0XCIsIHRydWUpO1xyXG5cclxuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4gc2V0VGltZW91dChyZXMsIDEwMCkpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlZGlyZWN0KFwiL3Bvc3RzL2VkaXQvXCIgKyB0aXRsZSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb25EYXRhKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdXBkYXRlUG9zdChzbHVnLCBtZXNzYWdlLCB2YWwsIHNoYSwgcHVibGlzaGVkKTtcclxuICAgICAgc2Vzc2lvbkRhdGEuc2V0KFwibmV3XCIsIGZhbHNlKTtcclxuICAgICAgc2Vzc2lvbkRhdGEuc2V0KFwicmVkaXJlY3RcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiBzZXRUaW1lb3V0KHJlcywgMTAwKSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVkaXJlY3QoXCIvcG9zdHMvZWRpdC9cIiArIHRpdGxlLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbkRhdGEpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4geyBkYXRhOiBcIk5vIGFjdGlvblwiLCB0eXBlOiBcIk5VTExcIiB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMsIHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IHNsdWcgPSBwYXJhbXMuc2x1ZztcclxuXHJcbiAgaWYgKHNsdWcgPT09IFwibmV3XCIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxvYWRlckRhdGE6IG51bGwsXHJcbiAgICAgIHNoYTogbnVsbCxcclxuICAgICAgbmV3OiBudWxsLFxyXG4gICAgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcG9zdHNJbmZvID0gYXdhaXQgUG9zdHNEYXRhKCk7XHJcbiAgICBjb25zdCBjdXJyZW50UG9zdCA9IHBvc3RzSW5mby5maW5kKFxyXG4gICAgICAocG9zdDogYW55KSA9PiBwb3N0Lm5hbWUuc3BsaXQoXCIuXCIpWzBdID09PSBzbHVnXHJcbiAgICApO1xyXG4gICAgY29uc3QgcG9zdENvbnRlbnQgPSBjdXJyZW50UG9zdC5jb250ZW50O1xyXG5cclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xyXG4gICAgaWYgKFxyXG4gICAgICAhc2Vzc2lvbi5oYXMoXCJyZWRpcmVjdFwiKSB8fFxyXG4gICAgICBzZXNzaW9uLmdldChcInJlZGlyZWN0XCIpID09PSBmYWxzZSB8fFxyXG4gICAgICAhc2Vzc2lvbi5oYXMoXCJuZXdcIilcclxuICAgICkge1xyXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuc2V0KFwiQ29va2llXCIsIGF3YWl0IGRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdJbmZvID0gc2Vzc2lvbi5nZXQoXCJuZXdcIik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbG9hZGVyRGF0YTogcG9zdENvbnRlbnQsXHJcbiAgICAgIHNoYTogY3VycmVudFBvc3Quc2hhLFxyXG4gICAgICBuZXc6IG5ld0luZm8sXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ldygpIHtcclxuICBjb25zdCB7IGxvYWRlckRhdGEsIHNoYSwgbmV3OiBuZXdFeGlzdHMgfSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xyXG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBmZXRjaGVyLmRhdGE/LmRhdGE7XHJcbiAgY29uc3QgdHlwZSA9IGZldGNoZXIuZGF0YT8udHlwZTtcclxuXHJcbiAgY29uc3QgcmF3VGV4dCA9IGxvYWRlckRhdGFcclxuICAgID8gbG9hZGVyRGF0YVxyXG4gICAgOiBgLS0tXFxuaWQ6IHV1aWRcXG50aXRsZTogVGl0bGVcXG5kZXNjcmlwdGlvbjogRGVzY3JpcHRpb25cXG5kYXRlOiAyMDIyLTAxLTAxXFxuc2x1ZzogcG9zdC1zbHVnXFxuaW1hZ2U6IFwiUG9zdCdzIGJhbm5lciBVUkxcIlxcbnB1Ymxpc2hlZDogZmFsc2VcXG4tLS1cXG5cXG5gO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBsb2FkZXJEYXRhXHJcbiAgICA/IGxvYWRlckRhdGEuc3Vic3RyaW5nKGxvYWRlckRhdGEuaW5kZXhPZihcIi0tLVwiLCA0KSArIDMpLnRyaW0oKVxyXG4gICAgOiByYXdUZXh0LnN1YnN0cmluZyhyYXdUZXh0LmluZGV4T2YoXCItLS1cIiwgNCkgKyAzKS50cmltKCk7XHJcblxyXG4gIC8vIEluaXRpYXRlIGFuIGVtcHR5IG9iamVjdCBmb3IgdGhlIGZyb250bWF0dGVyIGNvbnRlbnRcclxuICBsZXQgZnJvbnRtYXR0ZXI6IGFueSA9IHt9O1xyXG5cclxuICAvLyBHZXQgdGhlIGZyb250LW1hdHRlciBmcm9tIHRoZSBwb3N0XHJcbiAgbGV0IHlhbWw6IHN0cmluZyB8IG51bGwgPSBsb2FkZXJEYXRhXHJcbiAgICA/IGxvYWRlckRhdGEuc3BsaXQoXCItLS1cIilbMV1cclxuICAgIDogcmF3VGV4dC5zcGxpdChcIi0tLVwiKVsxXTtcclxuXHJcbiAgLy8gVHJhbnNmb3JtIHRoZSBmcm9udC1tYXR0ZXIgaW50byBvYmplY3QtcmVhZHkgc3RhdGVcclxuICB5YW1sICYmXHJcbiAgICB5YW1sLnNwbGl0KC9cXHI/XFxuL2cpLm1hcCgobGluZSkgPT4ge1xyXG4gICAgICBpZiAobGluZS5sZW5ndGggPiAwICYmIGxpbmUuaW5jbHVkZXMoXCI6XCIpKSB7XHJcbiAgICAgICAgbGV0IGtleTogc3RyaW5nIHwgc3RyaW5nW10gPSBsaW5lLnNwbGl0KFwiOlwiKTtcclxuXHJcbiAgICAgICAgaWYgKGtleS5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICBrZXlbMV0gPSBrZXkuc2xpY2UoMSkuam9pbihcIjpcIik7XHJcbiAgICAgICAgICBrZXkuc3BsaWNlKC0xKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFB1c2ggZWFjaCBrZXktdmFsdWUgcGFpciBpbnRvIHRoZSBmcm9udG1hdHRlciBvYmplY3RcclxuICAgICAgICBmcm9udG1hdHRlcltrZXlbMF1dID0ga2V5WzFdLnJlcGxhY2UoXCIgXCIsIFwiXCIpO1xyXG4gICAgICAgIHJldHVybiBsaW5lO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsaW5lO1xyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihyYXdUZXh0KTtcclxuICBjb25zdCBbbWQsIHNldE1kXSA9IHVzZVN0YXRlPHN0cmluZz4oY29udGVudCk7XHJcbiAgY29uc3QgW3BhcnNlZCwgc2V0UGFyc2VkXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3NlbGVjdGVkVGFiLCBzZXRTZWxlY3RlZFRhYl0gPSB1c2VUYWJzKFtcIk1hcmtkb3duXCIsIFwiUHJldmlld1wiXSk7XHJcbiAgY29uc3QgW3NsdWcsIHNldFNsdWddID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICBjb25zdCBbdHJpZ2dlcmVkLCBzZXRUcmlnZ2VyZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwhKTtcclxuICBjb25zdCB3aWRnZXRSZWYgPSB1c2VSZWY8V2lkZ2V0QVBJIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgYmxvZ1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCEpO1xyXG4gIGNvbnN0IGZpcnN0UmVuZGVyID0gdXNlUmVmPGJvb2xlYW4+KHRydWUpO1xyXG4gIGNvbnN0IGNvbW1pdFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3Qgc3VibWlzc2lvblJlZiA9IHVzZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzdWJtaXNzaW9uUmVmLmN1cnJlbnQgJiYgdmFsdWUgPT0gcmF3VGV4dCAmJiAhdHJpZ2dlcmVkXHJcbiAgICAgID8gKHN1Ym1pc3Npb25SZWYuY3VycmVudC5kaXNhYmxlZCA9IHRydWUpXHJcbiAgICAgIDogc3VibWlzc2lvblJlZi5jdXJyZW50ICYmXHJcbiAgICAgICAgdmFsdWUgIT09IHJhd1RleHQgJiZcclxuICAgICAgICAoc3VibWlzc2lvblJlZi5jdXJyZW50LmRpc2FibGVkID0gZmFsc2UpO1xyXG5cclxuICAgIGlmIChmaXJzdFJlbmRlci5jdXJyZW50KSB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5yZWZlcnJlci5pbmNsdWRlcyhcIi9uZXdcIikpIHtcclxuICAgICAgICBzZXRTdGF0dXMoMSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTdGF0dXMoMCk7XHJcbiAgICAgICAgfSwgNzAwMCk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0U2x1Zyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzNdKTtcclxuICAgICAgZmlyc3RSZW5kZXIuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcG9zdCA9IGxvYWRlckRhdGFcclxuICAgICAgPyB2YWx1ZS5zdWJzdHJpbmcobG9hZGVyRGF0YS5pbmRleE9mKFwiLS0tXCIsIDQpICsgMykudHJpbSgpXHJcbiAgICAgIDogdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoXCItLS1cIiwgNCkgKyAzKS50cmltKCk7XHJcbiAgICBzZXRNZChwb3N0KTtcclxuICB9LCBbdmFsdWUsIHRyaWdnZXJlZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhdGEgJiYgdHlwZSA9PT0gXCJQQVJTRV9NQVJLRE9XTlwiKSB7XHJcbiAgICAgIHNldFBhcnNlZChkYXRhKTtcclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIGJsb2dSZWYuY3VycmVudC5pbm5lckhUTUwgPSBwYXJzZWQ7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGEsIHR5cGUsIHBhcnNlZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBuZXdFeGlzdHMgIT09IG51bGwgJiZcclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwibmF2aWdhdGlvblwiKVswXS50eXBlICE9PVxyXG4gICAgICAgIFwiYmFja19mb3J3YXJkXCJcclxuICAgICkge1xyXG4gICAgICBpZiAoc2hhKSB7XHJcbiAgICAgICAgc2V0U3RhdHVzKDEpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0U3RhdHVzKDApO1xyXG4gICAgICAgIH0sIDU1MDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFN0YXR1cygtMSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTdGF0dXMoMCk7XHJcbiAgICAgICAgfSwgNTUwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbbmV3RXhpc3RzLCBzaGFdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRyaWdnZXJlZChmYWxzZSk7XHJcbiAgICB2YWx1ZSA9PSByYXdUZXh0ICYmIHNldFRyaWdnZXJlZChmYWxzZSk7XHJcbiAgfSwgW3RyaWdnZXJlZCwgdmFsdWUsIHJhd1RleHRdKTtcclxuXHJcbiAgY29uc3QgeWFtbENvbnZlcnRlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGZyb250bWF0dGVyID0ge307XHJcblxyXG4gICAgY29uc3QgeWFtbCA9IHZhbHVlLnNwbGl0KFwiLS0tXCIpWzFdO1xyXG4gICAgeWFtbC5zcGxpdCgvXFxyP1xcbi9nKS5tYXAoKGxpbmUpID0+IHtcclxuICAgICAgaWYgKGxpbmUubGVuZ3RoID4gMCAmJiBsaW5lLmluY2x1ZGVzKFwiOlwiKSkge1xyXG4gICAgICAgIGxldCBrZXk6IHN0cmluZyB8IHN0cmluZ1tdID0gbGluZS5zcGxpdChcIjpcIik7XHJcblxyXG4gICAgICAgIGlmIChrZXkubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAga2V5WzFdID0ga2V5LnNsaWNlKDEpLmpvaW4oXCI6XCIpO1xyXG4gICAgICAgICAga2V5LnNwbGljZSgtMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQdXNoIGVhY2gga2V5LXZhbHVlIHBhaXIgaW50byB0aGUgZnJvbnRtYXR0ZXIgb2JqZWN0XHJcbiAgICAgICAgZnJvbnRtYXR0ZXJba2V5WzBdXSA9IGtleVsxXS5yZXBsYWNlKFwiIFwiLCBcIlwiKTtcclxuICAgICAgICByZXR1cm4gbGluZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbGluZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmcm9udG1hdHRlcjtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb21taXRQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXQgPSBjb21taXRSZWYuY3VycmVudD8udmFsdWU7XHJcbiAgICBjb25zdCBzaGFWYWx1ZSA9IHNoYSA/IHNoYSA6IFwiXCI7XHJcbiAgICBjb25zdCBjb21taXRNZXNzYWdlID1cclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIGlucHV0Lmxlbmd0aCA+IDAgJiYgaW5wdXQgIT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICA/IGlucHV0XHJcbiAgICAgICAgOiBjb21taXRSZWYuY3VycmVudD8ucGxhY2Vob2xkZXI7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBhd2FpdCB5YW1sQ29udmVydGVyKCkudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogcmVzLnNsdWcsXHJcbiAgICAgICAgcHVibGlzaGVkOiByZXMucHVibGlzaGVkLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJDT01NSVRfUE9TVFwiLFxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIG1lc3NhZ2U6IGNvbW1pdE1lc3NhZ2UsXHJcbiAgICAgICAgc2hhVmFsdWUsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLnRpdGxlLFxyXG4gICAgICAgIHB1Ymxpc2hlZDogdGl0bGUucHVibGlzaGVkLFxyXG4gICAgICB9LFxyXG4gICAgICB7IG1ldGhvZDogXCJwb3N0XCIgfVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0cmlnZ2VyQnRuID0gKCkgPT4ge1xyXG4gICAgc2V0VHJpZ2dlcmVkKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmVcIj5cclxuICAgICAge3N0YXR1cyA9PT0gMSA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcC11cCBzdWNjZXNzXCI+XHJcbiAgICAgICAgICA8RGlHaXRNZXJnZSAvPlxyXG4gICAgICAgICAgJm5ic3A7e2BTdWNjZXNzZnVsbHkgcHVzaGVkICR7ZnJvbnRtYXR0ZXIudGl0bGV9IHRvIEdpdEh1YmB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiBzdGF0dXMgPT09IC0xID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wLXVwIGVycm9yXCI+XHJcbiAgICAgICAgICA8RGlHaXRQdWxsUmVxdWVzdCAvPlxyXG4gICAgICAgICAgJm5ic3A7e2BGYWlsZWQgdG8gcHVzaCAke2Zyb250bWF0dGVyLnRpdGxlfSB0byBHaXRIdWJgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb25hY29cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRvci1oZWFkZXJcIj5cclxuICAgICAgICAgIDxUYWJTZWxlY3RvclxyXG4gICAgICAgICAgICBpc0FjdGl2ZT17c2VsZWN0ZWRUYWIgPT09IFwiTWFya2Rvd25cIn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRUYWIoXCJNYXJrZG93blwiKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXsyNH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezI0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMSA1SDZhMiAyIDAgMDAtMiAydjExYTIgMiAwIDAwMiAyaDExYTIgMiAwIDAwMi0ydi01bS0xLjQxNC05LjQxNGEyIDIgMCAxMTIuODI4IDIuODI4TDExLjgyOCAxNUg5di0yLjgyOGw4LjU4Ni04LjU4NnpcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgICA8c3Bhbj5FZGl0IFBvc3Q8L3NwYW4+XHJcbiAgICAgICAgICA8L1RhYlNlbGVjdG9yPlxyXG4gICAgICAgICAgPFRhYlNlbGVjdG9yXHJcbiAgICAgICAgICAgIGlzQWN0aXZlPXtzZWxlY3RlZFRhYiA9PT0gXCJQcmV2aWV3XCJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRhYihcIlByZXZpZXdcIik7XHJcbiAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICB7IHR5cGU6IFwiUEFSU0VfTUFSS0RPV05cIiwgbWFya2Rvd246IG1kIH0sXHJcbiAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJwb3N0XCIgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcclxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICB3aWR0aD17MjR9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICAgIGQ9XCJNMTUgMTJhMyAzIDAgMTEtNiAwIDMgMyAwIDAxNiAwelwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICBkPVwiTTIuNDU4IDEyQzMuNzMyIDcuOTQzIDcuNTIzIDUgMTIgNWM0LjQ3OCAwIDguMjY4IDIuOTQzIDkuNTQyIDctMS4yNzQgNC4wNTctNS4wNjQgNy05LjU0MiA3LTQuNDc3IDAtOC4yNjgtMi45NDMtOS41NDItN3pcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgICA8c3Bhbj5QcmV2aWV3PC9zcGFuPlxyXG4gICAgICAgICAgPC9UYWJTZWxlY3Rvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRvclwiIHJlZj17ZWRpdG9yUmVmfT5cclxuICAgICAgICAgIDxUYWJQYW5lbCBoaWRkZW49e3NlbGVjdGVkVGFiICE9PSBcIk1hcmtkb3duXCJ9PlxyXG4gICAgICAgICAgICA8Q2xpZW50T25seT5cclxuICAgICAgICAgICAgICA8TW9uYWNvIHNldD17c2V0VmFsdWV9IHZhbD17dmFsdWV9IHRyaWdnZXJCdG49e3RyaWdnZXJCdG59IC8+XHJcbiAgICAgICAgICAgIDwvQ2xpZW50T25seT5cclxuICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICA8VGFiUGFuZWwgaGlkZGVuPXtzZWxlY3RlZFRhYiAhPT0gXCJQcmV2aWV3XCJ9PlxyXG4gICAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcmtkb3duLWJvZHlcIlxyXG4gICAgICAgICAgICAgIHJlZj17YmxvZ1JlZn1cclxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBhcnNlZCB9fVxyXG4gICAgICAgICAgICA+PC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c2VsZWN0ZWRUYWIgPT09IFwiTWFya2Rvd25cIiAmJiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRvci1mb290ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aWRnZXRSZWYuY3VycmVudD8ub3BlbkRpYWxvZyhcImZpbGVcIil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIERyb3AgZmlsZXMgdG8gdXBsb2FkIG1lZGlhIGZpbGVzIG9yIGNsaWNrIGFyZWEgdG8gYnJvd3NlIGZpbGVzXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPFdpZGdldFxyXG4gICAgICAgICAgcHVibGljS2V5PVwiNTRhYjQ2YjgzODMyNjI3MDNiZmFcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFZhbHVlKGAke3ZhbHVlfSAhW2FsdCBkZXNjcmlwdGlvbl0oJHtpbmZvLmNkblVybH0pYCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgbXVsdGlwbGU9e3RydWV9XHJcbiAgICAgICAgICBpbWFnZXNPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgc3lzdGVtRGlhbG9nPXt0cnVlfVxyXG4gICAgICAgICAgY2xlYXJhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgcmVmPXt3aWRnZXRSZWZ9XHJcbiAgICAgICAgICBwcmVsb2FkZXI9e251bGx9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWl0XCI+XHJcbiAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZm9ybVwiIG9uU3VibWl0PXtjb21taXRQb3N0fT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcclxuICAgICAgICAgICAgICBsb2FkZXJEYXRhID8gYFVwZGF0ZSAke3NsdWd9Lm1kYCA6IGBDcmVhdGUgYSBuZXcgYmxvZyBwb3N0IWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb21taXQtaW5wdXRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiY29tbWl0XCJcclxuICAgICAgICAgICAgcmVmPXtjb21taXRSZWZ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tbWl0LXN1Ym1pdFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NvbW1pdFBvc3R9XHJcbiAgICAgICAgICAgIHJlZj17c3VibWlzc2lvblJlZn1cclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xvYWRlckRhdGEgPyBcIlVwZGF0ZSBQb3N0XCIgOiBcIkNyZWF0ZSBQb3N0XCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVycm9yQm91bmRhcnk6IEVycm9yQm91bmRhcnlDb21wb25lbnQgPSAoeyBlcnJvciB9KSA9PiB7XHJcbiAgcmV0dXJuIDxkaXY+T2ggb2ghIHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxufTtcclxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhYlNlbGVjdG9yID0gKHtcclxuICBpc0FjdGl2ZSxcclxuICBjaGlsZHJlbixcclxuICBvbkNsaWNrLFxyXG59OiB7XHJcbiAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xyXG59KSA9PiAoXHJcbiAgPGJ1dHRvblxyXG4gICAgY2xhc3NOYW1lPXtgdGFiLXNlbGVjdG9yICR7aXNBY3RpdmUgPyBcImFjdGl2ZS10YWJcIiA6IFwiXCJ9YH1cclxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICB0eXBlPVwic3VibWl0XCJcclxuICA+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9idXR0b24+XHJcbik7XHJcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZVByZXZpb3VzPFQ+KHZhbHVlOiBUKSB7XHJcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFQ+KCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcmVmLmN1cnJlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJzPEsgZXh0ZW5kcyBzdHJpbmc+KHRhYnM6IEtbXSwgZGVmYXVsdFRhYj86IEsgfCBudWxsKSB7XHJcbiAgY29uc3Qgc3RhdGUgPSBSZWFjdC51c2VTdGF0ZTxLIHwgbnVsbD4oKTtcclxuICBjb25zdCBbc2VsZWN0ZWRUYWIsIHNldFNlbGVjdGVkVGFiXSA9IHN0YXRlO1xyXG5cclxuICBjb25zdCBhY3RpdmVJbmRleCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkVGFiKSB7XHJcbiAgICAgIHJldHVybiB0YWJzLmluZGV4T2Yoc2VsZWN0ZWRUYWIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAtMTtcclxuICB9LCBbc2VsZWN0ZWRUYWIsIHRhYnNdKTtcclxuXHJcbiAgY29uc3QgcHJldmlvdXNBY3RpdmVJbmRleCA9IHVzZVByZXZpb3VzKGFjdGl2ZUluZGV4KTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0YWJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRTZWxlY3RlZFRhYih1bmRlZmluZWQpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWxlY3RlZFRhYiA9PT0gbnVsbCB8fCAoc2VsZWN0ZWRUYWIgJiYgdGFicy5pbmNsdWRlcyhzZWxlY3RlZFRhYikpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiBwcmV2aW91c0FjdGl2ZUluZGV4ID09PSBcIm51bWJlclwiICYmXHJcbiAgICAgIHByZXZpb3VzQWN0aXZlSW5kZXggPj0gMCAmJlxyXG4gICAgICAodGFic1twcmV2aW91c0FjdGl2ZUluZGV4XSB8fCB0YWJzW3ByZXZpb3VzQWN0aXZlSW5kZXggLSAxXSlcclxuICAgICkge1xyXG4gICAgICBzZXRTZWxlY3RlZFRhYihcclxuICAgICAgICB0YWJzW3ByZXZpb3VzQWN0aXZlSW5kZXhdIHx8IHRhYnNbcHJldmlvdXNBY3RpdmVJbmRleCAtIDFdXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlZmF1bHRUYWIgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlbGVjdGVkVGFiKFxyXG4gICAgICBkZWZhdWx0VGFiICYmIHRhYnMuaW5jbHVkZXMoZGVmYXVsdFRhYikgPyBkZWZhdWx0VGFiIDogdGFic1swXVxyXG4gICAgKTtcclxuICB9LCBbc2VsZWN0ZWRUYWIsIGRlZmF1bHRUYWIsIHRhYnNdKTtcclxuXHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGFiUGFuZWwoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIHJlbmRlciA9IFwibGF6eVwiLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiAmIHtcclxuICBoaWRkZW46IGJvb2xlYW47XHJcbiAgcmVuZGVyPzogXCJhbHdheXNcIiB8IFwibGF6eVwiO1xyXG59KSB7XHJcbiAgY29uc3QgW3Nob3VsZFJlbmRlciwgc2V0U2hvdWxkUmVuZGVyXSA9IFJlYWN0LnVzZVN0YXRlKHJlbmRlciA9PT0gXCJhbHdheXNcIik7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMuaGlkZGVuKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTaG91bGRSZW5kZXIodHJ1ZSk7XHJcbiAgfSwgW3Byb3BzLmhpZGRlbl0pO1xyXG5cclxuICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9PntzaG91bGRSZW5kZXIgPyBjaGlsZHJlbiA6IG51bGx9PC9kaXY+O1xyXG59IiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uLCBkZXN0cm95U2Vzc2lvbiB9ID1cclxuICBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XHJcbiAgICBjb29raWU6IHtcclxuICAgICAgbmFtZTogXCJfX3BhdGhcIixcclxuICAgICAgc2VjcmV0czogW1wicjNtMXhfczNjcmV0XCJdLFxyXG4gICAgICBzYW1lU2l0ZTogXCJsYXhcIixcclxuICAgICAgcGF0aDogXCIvXCIsXHJcbiAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICBzZWN1cmU6IHRydWUsXHJcbiAgICAgIG1heEFnZTogMzYwMCAqIDEwMDAsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgIClcclxufSIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwicG9zdHMvb3ZlcnZpZXdcIilcclxufSIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic1YTJlN2U1YicsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtQ0hWSUNHSkouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVhKU1RLTkJCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUFdXR0s1VUYuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LU1aSlhSWUFQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NVkdRWVlKSC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkJzp7J2lkJzoncm91dGVzL2Rhc2hib2FyZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkYXNoYm9hcmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGFzaGJvYXJkLVE1Sk9TMjJRLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtV1AyQVRSS0YuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21ldHJpY3MnOnsnaWQnOidyb3V0ZXMvbWV0cmljcycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZXRyaWNzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21ldHJpY3MtN0RKNE9VNlYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0cyc6eydpZCc6J3JvdXRlcy9wb3N0cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwb3N0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy1TVFRHWDVUSy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Bvc3RzL2VkaXQuJHNsdWcnOnsnaWQnOidyb3V0ZXMvcG9zdHMvZWRpdC4kc2x1ZycsJ3BhcmVudElkJzoncm91dGVzL3Bvc3RzJywncGF0aCc6J2VkaXQvOnNsdWcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9zdHMvZWRpdC4kc2x1Zy1IUElDMlk2TC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQ0RUVTVFSk0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NVkdRWVlKSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRWWTNTVVcyLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9wb3N0cy9pbmRleCc6eydpZCc6J3JvdXRlcy9wb3N0cy9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL3Bvc3RzJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Bvc3RzL2luZGV4LU1UQ0lJSEZRLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0cy9tYW5hZ2UtcG9zdHMnOnsnaWQnOidyb3V0ZXMvcG9zdHMvbWFuYWdlLXBvc3RzJywncGFyZW50SWQnOidyb3V0ZXMvcG9zdHMnLCdwYXRoJzonbWFuYWdlLXBvc3RzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Bvc3RzL21hbmFnZS1wb3N0cy00NU42UktNTS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNFZZM1NVVzIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9zdHMvb3ZlcnZpZXcnOnsnaWQnOidyb3V0ZXMvcG9zdHMvb3ZlcnZpZXcnLCdwYXJlbnRJZCc6J3JvdXRlcy9wb3N0cycsJ3BhdGgnOidvdmVydmlldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy9vdmVydmlldy1RMlhKUUZYUS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NldHRpbmdzJzp7J2lkJzoncm91dGVzL3NldHRpbmdzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NldHRpbmdzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NldHRpbmdzLTNZSFRDVkZILmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTVBMkU3RTVCLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7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
