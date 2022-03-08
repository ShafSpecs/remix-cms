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
var import_react2 = require("react");
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
var import_moment = __toESM(require("moment"));
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
async function getCommit() {
  const oldDate = (0, import_moment.default)().subtract(2, "months").toISOString();
  const commits = await octokit.request("GET /repos/{owner}/{repo}/commits", __spreadProps(__spreadValues({}, Repo), {
    path: "posts",
    since: oldDate
  }));
  return commits;
}

// route:C:\Users\fash\Documents\remix-cms\app\routes\posts\manage-posts.tsx
var import_date_fns = require("date-fns");

// app/styles/manage.css
var manage_default = "/build/_assets/manage-2K2RBM5A.css";

// route:C:\Users\fash\Documents\remix-cms\app\routes\posts\manage-posts.tsx
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
  CommitCard: () => CommitCard,
  PostCard: () => PostCard,
  Streak: () => Streak,
  default: () => Post,
  links: () => links5,
  loader: () => loader4
});
init_react();
var import_react4 = require("react");
var import_remix8 = __toESM(require_remix());
var import_date_fns2 = require("date-fns");

// app/styles/overview.css
var overview_default = "/build/_assets/overview-A6D4NI5O.css";

// route:C:\Users\fash\Documents\remix-cms\app\routes\posts\overview.tsx
var import_di3 = require("react-icons/di");
var links5 = () => {
  return [
    {
      rel: "stylesheet",
      href: overview_default
    }
  ];
};
var loader4 = async () => {
  const commits = await getCommit();
  return {
    commits: commits.data
  };
};
function PostCard() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "card"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "front"
  }));
}
function Streak() {
  const squareRef = (0, import_react4.useRef)(null);
  const getWeekNumber = (d) => {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    let weekNo = Math.ceil(((d - yearStart) / 864e5 + 1) / 7);
    return [d.getUTCFullYear(), weekNo];
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "streak-card"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "square",
    ref: squareRef
  }), /* @__PURE__ */ React.createElement("div", {
    className: "square",
    ref: squareRef
  }), /* @__PURE__ */ React.createElement("div", {
    className: "square",
    ref: squareRef
  }), /* @__PURE__ */ React.createElement("div", {
    className: "square",
    ref: squareRef
  }), /* @__PURE__ */ React.createElement("div", {
    className: "square",
    ref: squareRef
  }), /* @__PURE__ */ React.createElement("div", {
    className: "square",
    ref: squareRef
  }), /* @__PURE__ */ React.createElement("div", {
    className: "square",
    ref: squareRef
  }));
}
function CommitCard({ commit }) {
  let date = new Date(commit.date);
  const newDate = (0, import_date_fns2.formatDistanceToNow)(new Date(date.toISOString()));
  return /* @__PURE__ */ React.createElement("div", {
    className: "commit"
  }, /* @__PURE__ */ React.createElement("h3", null, commit.message), /* @__PURE__ */ React.createElement("div", {
    className: "branch"
  }, /* @__PURE__ */ React.createElement("a", {
    href: commit.html_url,
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement(import_di3.DiGitBranch, null))), /* @__PURE__ */ React.createElement("div", {
    className: "author"
  }, /* @__PURE__ */ React.createElement("img", {
    src: `${commit.avatar_url}`,
    alt: "Author Alt."
  })), /* @__PURE__ */ React.createElement("div", {
    className: "date"
  }, newDate, " ago"), /* @__PURE__ */ React.createElement("div", {
    className: "foot"
  }));
}
function Post() {
  const data = (0, import_remix8.useLoaderData)();
  const commit = data == null ? void 0 : data.commits;
  const commits = commit.length >= 6 ? commit.slice(0, 6) : commit.slice(0, commit.length - 1);
  const commitData = commits == null ? void 0 : commits.map((commit2) => {
    return {
      url: commit2.url,
      html_url: commit2.html_url,
      comments_url: commit2.comments_url,
      message: commit2.commit.message,
      date: commit2.commit.author.date,
      comment_count: commit2.commit.comment_count,
      avatar_url: commit2.author.avatar_url
    };
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "overview"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "edited"
  }, /* @__PURE__ */ React.createElement("h2", null, "Recently Edited Posts:"), /* @__PURE__ */ React.createElement("div", {
    className: "posts"
  }, /* @__PURE__ */ React.createElement(PostCard, null), /* @__PURE__ */ React.createElement(PostCard, null), /* @__PURE__ */ React.createElement(PostCard, null), /* @__PURE__ */ React.createElement(PostCard, null))), /* @__PURE__ */ React.createElement("section", {
    className: "commits"
  }, /* @__PURE__ */ React.createElement("h2", null, "Recent Commits:"), /* @__PURE__ */ React.createElement("div", {
    className: "commit-card"
  }, commitData.map((commit2) => {
    return /* @__PURE__ */ React.createElement(CommitCard, {
      commit: commit2,
      key: commit2.url
    });
  }))));
}

// route:C:\Users\fash\Documents\remix-cms\app\routes\posts\index.tsx
var posts_exports2 = {};
__export(posts_exports2, {
  loader: () => loader5
});
init_react();
var import_remix9 = __toESM(require_remix());
var loader5 = () => {
  return (0, import_remix9.redirect)("posts/overview");
};

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "3a408649", "entry": { "module": "/build/entry.client-CHVICGJJ.js", "imports": ["/build/_shared/chunk-XJSTKNBB.js", "/build/_shared/chunk-PWWGK5UF.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-MZJXRYAP.js", "imports": ["/build/_shared/chunk-MVGQYYJH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-Q5JOS22Q.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-WP2ATRKF.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/metrics": { "id": "routes/metrics", "parentId": "root", "path": "metrics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/metrics-7DJ4OU6V.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts": { "id": "routes/posts", "parentId": "root", "path": "posts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts-STTGX5TK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/edit.$slug": { "id": "routes/posts/edit.$slug", "parentId": "routes/posts", "path": "edit/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/edit.$slug-HPIC2Y6L.js", "imports": ["/build/_shared/chunk-CDTU5EJM.js", "/build/_shared/chunk-MVGQYYJH.js", "/build/_shared/chunk-4VY3SUW2.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/posts/index": { "id": "routes/posts/index", "parentId": "routes/posts", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/posts/index-MTCIIHFQ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/manage-posts": { "id": "routes/posts/manage-posts", "parentId": "routes/posts", "path": "manage-posts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/manage-posts-MW67DULX.js", "imports": ["/build/_shared/chunk-SMHZTKML.js", "/build/_shared/chunk-4VY3SUW2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/overview": { "id": "routes/posts/overview", "parentId": "routes/posts", "path": "overview", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/overview-NU7P5KAZ.js", "imports": ["/build/_shared/chunk-SMHZTKML.js", "/build/_shared/chunk-4VY3SUW2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/settings": { "id": "routes/settings", "parentId": "root", "path": "settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/settings-3YHTCVFH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-3A408649.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6fi91dGlscy9jbGllbnQvbW9uYWNvLmNsaWVudCIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxyZW1peC1jbXNcXGFwcFxccm9vdC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHJlbWl4LWNtc1xcYXBwXFxyb3V0ZXNcXGRhc2hib2FyZC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHJlbWl4LWNtc1xcYXBwXFxyb3V0ZXNcXHNldHRpbmdzLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGZhc2hcXERvY3VtZW50c1xccmVtaXgtY21zXFxhcHBcXHJvdXRlc1xcbWV0cmljcy50c3giLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHJlbWl4LWNtc1xcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGZhc2hcXERvY3VtZW50c1xccmVtaXgtY21zXFxhcHBcXHJvdXRlc1xccG9zdHMudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxyZW1peC1jbXNcXGFwcFxccm91dGVzXFxwb3N0c1xcbWFuYWdlLXBvc3RzLnRzeCIsICIuLi9hcHAvdXRpbHMvc2VydmVyL2dpdGh1Yi5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2hhbmRsZXJzL2dpdGh1Yi1hcGkudHMiLCAicm91dGU6QzpcXFVzZXJzXFxmYXNoXFxEb2N1bWVudHNcXHJlbWl4LWNtc1xcYXBwXFxyb3V0ZXNcXHBvc3RzXFxlZGl0LiRzbHVnLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9UYWJTZWxlY3Rvci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvVGFiLnRzeCIsICIuLi9hcHAvdXRpbHMvc2VydmVyL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxyZW1peC1jbXNcXGFwcFxccm91dGVzXFxwb3N0c1xcb3ZlcnZpZXcudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcZmFzaFxcRG9jdW1lbnRzXFxyZW1peC1jbXNcXGFwcFxccm91dGVzXFxwb3N0c1xcaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgIm1vZHVsZS5leHBvcnRzID0ge307IiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxccmVtaXgtY21zXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHJlbWl4LWNtc1xcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxccmVtaXgtY21zXFxcXGFwcFxcXFxyb3V0ZXNcXFxcZGFzaGJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxyZW1peC1jbXNcXFxcYXBwXFxcXHJvdXRlc1xcXFxzZXR0aW5ncy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxccmVtaXgtY21zXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWV0cmljcy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZmFzaFxcXFxEb2N1bWVudHNcXFxccmVtaXgtY21zXFxcXGFwcFxcXFxyb3V0ZXNcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHJlbWl4LWNtc1xcXFxhcHBcXFxccm91dGVzXFxcXHBvc3RzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxyZW1peC1jbXNcXFxcYXBwXFxcXHJvdXRlc1xcXFxwb3N0c1xcXFxtYW5hZ2UtcG9zdHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHJlbWl4LWNtc1xcXFxhcHBcXFxccm91dGVzXFxcXHBvc3RzXFxcXGVkaXQuJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGZhc2hcXFxcRG9jdW1lbnRzXFxcXHJlbWl4LWNtc1xcXFxhcHBcXFxccm91dGVzXFxcXHBvc3RzXFxcXG92ZXJ2aWV3LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxmYXNoXFxcXERvY3VtZW50c1xcXFxyZW1peC1jbXNcXFxcYXBwXFxcXHJvdXRlc1xcXFxwb3N0c1xcXFxpbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2Rhc2hib2FyZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGFzaGJvYXJkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImRhc2hib2FyZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2V0dGluZ3NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NldHRpbmdzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNldHRpbmdzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9tZXRyaWNzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZXRyaWNzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1ldHJpY3NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL3Bvc3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb3N0c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwb3N0c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9zdHMvbWFuYWdlLXBvc3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb3N0cy9tYW5hZ2UtcG9zdHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wb3N0c1wiLFxuICAgICAgcGF0aDogXCJtYW5hZ2UtcG9zdHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL3Bvc3RzL2VkaXQuJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzL2VkaXQuJHNsdWdcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wb3N0c1wiLFxuICAgICAgcGF0aDogXCJlZGl0LzpzbHVnXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9wb3N0cy9vdmVydmlld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHMvb3ZlcnZpZXdcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wb3N0c1wiLFxuICAgICAgcGF0aDogXCJvdmVydmlld1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9zdHMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3RzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcG9zdHNcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTlcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59IiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICBOYXZMaW5rLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEV4dGVybmFsU2NyaXB0cyB9IGZyb20gXCJyZW1peC11dGlsc1wiO1xuXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiwgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgcm9vdFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvdmFyaWFibGVzLmNzc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvaW5kZXguY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogcm9vdFN0eWxlcyB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH0sXG4gIF07XG59O1xuXG5jb25zdCBhY3RpdmVDbGFzc05hbWU6IHN0cmluZyA9IFwiYWN0aXZlLXJvdXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2XCI+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoMVwiPlNoYWZTcGVjczwvaDE+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWxcIj5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz1cIi9kYXNoYm9hcmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT4gKGlzQWN0aXZlID8gYWN0aXZlQ2xhc3NOYW1lIDogXCJcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNOCA5bDMgMy0zIDNtNSAwaDNNNSAyMGgxNGEyIDIgMCAwMDItMlY2YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnpcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgIHRvPVwiL3Bvc3RzXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IGFjdGl2ZUNsYXNzTmFtZSA6IFwiXCIpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNlwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE5IDIwSDVhMiAyIDAgMDEtMi0yVjZhMiAyIDAgMDEyLTJoMTBhMiAyIDAgMDEyIDJ2MW0yIDEzYTIgMiAwIDAxLTItMlY3bTIgMTNhMiAyIDAgMDAyLTJWOWEyIDIgMCAwMC0yLTJoLTJtLTQtM0g5TTcgMTZoNk03IDhoNnY0SDdWOHpcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgUG9zdHNcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIvbWV0cmljc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PiAoaXNBY3RpdmUgPyBhY3RpdmVDbGFzc05hbWUgOiBcIlwiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk05IDE3di0ybTMgMnYtNG0zIDR2LTZtMiAxMEg3YTIgMiAwIDAxLTItMlY1YTIgMiAwIDAxMi0yaDUuNTg2YTEgMSAwIDAxLjcwNy4yOTNsNS40MTQgNS40MTRhMSAxIDAgMDEuMjkzLjcwN1YxOWEyIDIgMCAwMS0yIDJ6XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIE1ldHJpY3NcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIvc2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT4gKGlzQWN0aXZlID8gYWN0aXZlQ2xhc3NOYW1lIDogXCJcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAuMzI1IDQuMzE3Yy40MjYtMS43NTYgMi45MjQtMS43NTYgMy4zNSAwYTEuNzI0IDEuNzI0IDAgMDAyLjU3MyAxLjA2NmMxLjU0My0uOTQgMy4zMS44MjYgMi4zNyAyLjM3YTEuNzI0IDEuNzI0IDAgMDAxLjA2NSAyLjU3MmMxLjc1Ni40MjYgMS43NTYgMi45MjQgMCAzLjM1YTEuNzI0IDEuNzI0IDAgMDAtMS4wNjYgMi41NzNjLjk0IDEuNTQzLS44MjYgMy4zMS0yLjM3IDIuMzdhMS43MjQgMS43MjQgMCAwMC0yLjU3MiAxLjA2NWMtLjQyNiAxLjc1Ni0yLjkyNCAxLjc1Ni0zLjM1IDBhMS43MjQgMS43MjQgMCAwMC0yLjU3My0xLjA2NmMtMS41NDMuOTQtMy4zMS0uODI2LTIuMzctMi4zN2ExLjcyNCAxLjcyNCAwIDAwLTEuMDY1LTIuNTcyYy0xLjc1Ni0uNDI2LTEuNzU2LTIuOTI0IDAtMy4zNWExLjcyNCAxLjcyNCAwIDAwMS4wNjYtMi41NzNjLS45NC0xLjU0My44MjYtMy4zMSAyLjM3LTIuMzcuOTk2LjYwOCAyLjI5Ni4wNyAyLjU3Mi0xLjA2NXpcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNSAxMmEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vQGhpZ2hsaWdodGpzL2Nkbi1hc3NldHNAMTEuNC4wL2hpZ2hsaWdodC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdD5obGpzLmhpZ2hsaWdodEFsbCgpOzwvc2NyaXB0PlxuICAgICAgICA8RXh0ZXJuYWxTY3JpcHRzIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmdzICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgIClcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXRyaWNzICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgIClcclxufSIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2Rhc2hib2FyZFwiKTtcbn0iLCAiaW1wb3J0IHsgTmF2TGluaywgT3V0bGV0LCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9wb3N0cy5jc3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGUgfV07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0cygpIHtcclxuICBjb25zdCBhY3RpdmVDbGFzc05hbWU6IHN0cmluZyA9IFwiYWN0aXZlLXBvc3Qtcm91dGVcIjtcclxuICBjb25zdCB1bFJlZiA9IHVzZVJlZjxIVE1MVUxpc3RFbGVtZW50PihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvZWRpdC9cIikpIHtcclxuICAgICAgdWxSZWYuY3VycmVudD8uY2hpbGRyZW5bMl0uY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzc05hbWUpO1xyXG4gICAgICB1bFJlZi5jdXJyZW50Py5jaGlsZHJlblswXS5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzTmFtZSk7XHJcbiAgICAgIHVsUmVmLmN1cnJlbnQ/LmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3NOYW1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVsUmVmLmN1cnJlbnQ/LmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3NOYW1lKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlBvc3RzPC9oMT5cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cImRlc2NcIj5cclxuICAgICAgICBFZGl0IHBvc3RzICYgYXJ0aWNsZXMuIFJldmlldyBzdGF0cyBhbmQgZmVlZGJhY2suLlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJwb3N0LXVsXCIgcmVmPXt1bFJlZn0+XHJcbiAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICB0bz1cIi9wb3N0cy9vdmVydmlld1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT4gKGlzQWN0aXZlID8gYWN0aXZlQ2xhc3NOYW1lIDogXCJcIil9XHJcbiAgICAgICAgICAgIHJlbG9hZERvY3VtZW50PXt0cnVlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8bGk+T3ZlcnZpZXc8L2xpPlxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgdG89XCIvcG9zdHMvZWRpdC9uZXdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IGFjdGl2ZUNsYXNzTmFtZSA6IFwiXCIpfVxyXG4gICAgICAgICAgICBlbmQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICByZWxvYWREb2N1bWVudD17dHJ1ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGxpPldyaXRlIGEgcG9zdDwvbGk+XHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICB0bz1cIi9wb3N0cy9tYW5hZ2UtcG9zdHNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IGFjdGl2ZUNsYXNzTmFtZSA6IFwiXCIpfVxyXG4gICAgICAgICAgICByZWxvYWREb2N1bWVudD17dHJ1ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGxpPk1hbmFnZSBhcnRpY2xlczwvbGk+XHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0bGV0XCI+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmssIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgRGlHaXRCcmFuY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvZGlcIjtcclxuaW1wb3J0IHsgUG9zdHNEYXRhIH0gZnJvbSBcIn4vdXRpbHMvc2VydmVyL2dpdGh1Yi5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9tYW5hZ2UuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcclxuICAgICAgaHJlZjogc3R5bGUsXHJcbiAgICB9LFxyXG4gIF07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgUG9zdHNEYXRhKCk7XHJcbiAgY29uc3QgZnJvbnRtYXR0ZXIgPSBkYXRhLm1hcCgocG9zdDogYW55KSA9PiB7XHJcbiAgICBjb25zdCB7IGZyb250bWF0dGVyIH0gPSBwb3N0O1xyXG4gICAgcmV0dXJuIGZyb250bWF0dGVyO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZnJvbnRtYXR0ZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2FyZCh7IHRpdGxlLCBwdWJsaXNoZWQsIHNsdWcsIGRhdGUgfTogYW55KSB7XHJcbiAgY29uc3QgcHVibGlzaGVkUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdHJpbmdlZERhdGUgPSBkYXRlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgY29uc3QgbWF0Y2ggPSBzdHJpbmdlZERhdGUubWF0Y2goL1teLV0rL2cpO1xyXG4gICAgY29uc3QgZm9ybWF0dGVkID0gZm9ybWF0KFxyXG4gICAgICBuZXcgRGF0ZShtYXRjaFswXSwgbWF0Y2hbMV0gLSAxLCBtYXRjaFsyXS5zbGljZSgwLCAyKSksXHJcbiAgICAgIFwiTU1NTSBkZCwgeXl5eVwiXHJcbiAgICApO1xyXG5cclxuICAgIHB1Ymxpc2hlZFJlZi5jdXJyZW50ICYmIChwdWJsaXNoZWRSZWYuY3VycmVudC5pbm5lclRleHQgPSBgUHVibGlzaGVkOiAke2Zvcm1hdHRlZH1gKVxyXG4gIH0sIFtkYXRlXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIHRvPXtgL3Bvc3RzL2VkaXQvJHtzbHVnfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYW5zXCI+XHJcbiAgICAgICAgICA8c3BhbiByZWY9e3B1Ymxpc2hlZFJlZn0+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJyYW5jaFwiXHJcbiAgICAgICAgICBzdHlsZT17cHVibGlzaGVkID8geyBjb2xvcjogXCIjMDA4ODAwXCIgfSA6IHsgY29sb3I6IFwiIzgwMDAwMFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPERpR2l0QnJhbmNoIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbmFnZSgpIHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IG1hcHBlZERhdGEgPSBkYXRhLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gYi5pZCAtIGEuaWQ7XHJcbiAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYW5hZ2VcIj5cclxuICAgICAge21hcHBlZERhdGEubWFwKChwb3N0OiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxyXG4gICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgcHVibGlzaGVkPXtwb3N0LnB1Ymxpc2hlZH1cclxuICAgICAgICAgICAgc2x1Zz17cG9zdC5zbHVnfVxyXG4gICAgICAgICAgICBkYXRlPXtwb3N0LmRhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT2N0b2tpdCB9IGZyb20gXCJAb2N0b2tpdC9jb3JlXCI7XHJcbmltcG9ydCB7IFJlcG8gfSBmcm9tIFwiLi4vaGFuZGxlcnMvZ2l0aHViLWFwaVwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmNvbnN0IGdyYXlNYXR0ZXIgPSByZXF1aXJlKFwiZ3JheS1tYXR0ZXJcIilcclxuXHJcbmNvbnN0IG9jdG9raXQgPSBuZXcgT2N0b2tpdCh7IGF1dGg6IHByb2Nlc3MuZW52LkdJVEhVQl9UT0tFTiB9KTtcclxuXHJcbmludGVyZmFjZSBQb3N0RGF0YSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHBhdGg6IHN0cmluZztcclxuICBzaGE6IHN0cmluZztcclxuICBzaXplOiBudW1iZXI7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgaHRtbF91cmw6IHN0cmluZztcclxuICBnaXRfdXJsOiBzdHJpbmc7XHJcbiAgZG93bmxvYWRfdXJsOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIF9saW5rczoge1xyXG4gICAgZ2l0OiBzdHJpbmc7XHJcbiAgICBzZWxmOiBzdHJpbmc7XHJcbiAgICBodG1sOiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuLy8gR2V0IGFsbCBwb3N0cyBmcm9tIHRoZSByZXBvc2l0b3J5XHJcbmFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzKCkge1xyXG4gIGNvbnN0IHBvc3REaXIgPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoXHJcbiAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29udGVudHMve3BhdGh9XCIsXHJcbiAgICB7XHJcbiAgICAgIC4uLlJlcG8sXHJcbiAgICAgIHBhdGg6IFwicG9zdHNcIixcclxuICAgIH1cclxuICApO1xyXG5cclxuICByZXR1cm4gcG9zdERpcjtcclxufVxyXG5cclxuLypcclxuICogIEV4dHJhY3QgcmVxdWlyZWQgcG9zdCBkYXRhIGZyb20gdGhlIEdpdEh1YiBBUEkgcmVzcG9uc2VcclxuICpcclxuICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUG9zdHNEYXRhKCkge1xyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0UG9zdHMoKTtcclxuXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgY29uc3QgcG9zdHNJbmZvID0gUHJvbWlzZS5hbGwocG9zdHMuZGF0YS5tYXAoYXN5bmMgKHBvc3Q6IFBvc3REYXRhKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGRvd25sb2FkX3VybCwgc2hhIH0gPSBwb3N0O1xyXG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IGZldGNoKGRvd25sb2FkX3VybCkudGhlbihyZXMgPT4gcmVzLnRleHQoKSlcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gZ3JheU1hdHRlcihjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4geyBuYW1lLCBzaGEsIGZyb250bWF0dGVyOiBkYXRhLCBjb250ZW50IH07XHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4gcG9zdHNJbmZvO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUG9zdChcclxuICBzbHVnOiBzdHJpbmcsXHJcbiAgY29tbWl0OiBzdHJpbmcsXHJcbiAgY29udGVudDogc3RyaW5nLFxyXG4gIHB1Ymxpc2hlZDogYm9vbGVhblxyXG4pIHtcclxuICBjb25zdCBwb3N0ID0gQnVmZmVyLmZyb20oY29udGVudCkudG9TdHJpbmcoXCJiYXNlNjRcIik7XHJcbiAgLy8gaWYgKHB1Ymxpc2hlZCkge1xyXG4gIGNvbnN0IGNyZWF0ZWRQb3N0ID0gYXdhaXQgb2N0b2tpdC5yZXF1ZXN0KFxyXG4gICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3twYXRofVwiLFxyXG4gICAge1xyXG4gICAgICAuLi5SZXBvLFxyXG4gICAgICBwYXRoOiBgcG9zdHMvJHtzbHVnfS5tZGAsXHJcbiAgICAgIG1lc3NhZ2U6IGNvbW1pdCxcclxuICAgICAgY29udGVudDogcG9zdCxcclxuICAgIH1cclxuICApO1xyXG5cclxuICByZXR1cm4gY3JlYXRlZFBvc3Q7XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIGNvbnN0IG1haW4gPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoXHJcbiAgLy8gICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvcmVmL2hlYWRzL21haW5cIixcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgIC4uLlJlcG8sXHJcbiAgLy8gICAgIH1cclxuICAvLyAgICk7XHJcblxyXG4gIC8vICAgLy9AdHMtaWdub3JlXHJcbiAgLy8gICBjb25zdCBoYXNoID0gbWFpbi5vYmplY3Quc2hhO1xyXG5cclxuICAvLyAgIGNvbnN0IG5ld0JyYW5jaCA9IGF3YWl0IG9jdG9raXQucmVxdWVzdChcclxuICAvLyAgICAgXCJQT1NUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9naXQvcmVmc1wiLFxyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgLi4uUmVwbyxcclxuICAvLyAgICAgICByZWY6IGByZWZzL2hlYWRzLyR7c2x1Z31gLFxyXG4gIC8vICAgICAgIHNoYTogaGFzaCxcclxuICAvLyAgICAgfVxyXG4gIC8vICAgKTtcclxuXHJcbiAgLy8gICBjb25zb2xlLmxvZyhuZXdCcmFuY2gpO1xyXG5cclxuICAvLyAgIGNvbnN0IGNyZWF0ZWRQb3N0ID0gYXdhaXQgb2N0b2tpdC5yZXF1ZXN0KFxyXG4gIC8vICAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29udGVudHMve3BhdGh9XCIsXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICAuLi5SZXBvLFxyXG4gIC8vICAgICAgIHBhdGg6IGBwb3N0cy8ke3NsdWd9Lm1kYCxcclxuICAvLyAgICAgICBtZXNzYWdlOiBjb21taXQsXHJcbiAgLy8gICAgICAgY29udGVudDogcG9zdCxcclxuICAvLyAgICAgICBicmFuY2g6IHNsdWcsXHJcbiAgLy8gICAgIH1cclxuICAvLyAgICk7XHJcblxyXG4gIC8vICAgcmV0dXJuIGNyZWF0ZWRQb3N0O1xyXG4gIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBvc3QoXHJcbiAgc2x1Zzogc3RyaW5nLFxyXG4gIGNvbW1pdDogc3RyaW5nLFxyXG4gIGNvbnRlbnQ6IHN0cmluZyxcclxuICBzaGE6IHN0cmluZyxcclxuICBwdWJsaXNoZWQ6IGJvb2xlYW5cclxuKSB7XHJcbiAgY29uc3QgcG9zdCA9IEJ1ZmZlci5mcm9tKGNvbnRlbnQpLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xyXG5cclxuICAvLyBpZiAocHVibGlzaGVkKSB7XHJcbiAgY29uc3QgdXBkYXRlZFBvc3QgPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoXHJcbiAgICBcIlBVVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29udGVudHMve3BhdGh9XCIsXHJcbiAgICB7XHJcbiAgICAgIC4uLlJlcG8sXHJcbiAgICAgIHBhdGg6IGBwb3N0cy8ke3NsdWd9Lm1kYCxcclxuICAgICAgbWVzc2FnZTogY29tbWl0LFxyXG4gICAgICBjb250ZW50OiBwb3N0LFxyXG4gICAgICBzaGE6IHNoYSxcclxuICAgIH1cclxuICApO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBjb25zdCB1cGRhdGVkUG9zdCA9IGF3YWl0IG9jdG9raXQucmVxdWVzdChcclxuICAvLyAgICAgXCJQVVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3twYXRofVwiLFxyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgLi4uUmVwbyxcclxuICAvLyAgICAgICBwYXRoOiBgcG9zdHMvJHtzbHVnfS5tZGAsXHJcbiAgLy8gICAgICAgbWVzc2FnZTogY29tbWl0LFxyXG4gIC8vICAgICAgIGNvbnRlbnQ6IHBvc3QsXHJcbiAgLy8gICAgICAgc2hhOiBzaGEsXHJcbiAgLy8gICAgICAgYnJhbmNoOiBzbHVnLFxyXG4gIC8vICAgICB9XHJcbiAgLy8gICApO1xyXG4gIHJldHVybiB1cGRhdGVkUG9zdDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBvc3Qoc2x1Zzogc3RyaW5nKSB7XHJcbiAgY29uc3QgZGVsZXRlZFBvc3QgPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoXHJcbiAgICBcIkRFTEVURSAvcmVwb3Mve293bmVyfS97cmVwb30vY29udGVudHMve3BhdGh9XCIsXHJcbiAgICB7XHJcbiAgICAgIC4uLlJlcG8sXHJcbiAgICAgIHBhdGg6IGBwb3N0cy8ke3NsdWd9Lm1kYCxcclxuICAgICAgbWVzc2FnZTogYERlbGV0ZWQgcG9zdDogJHtzbHVnfS5tZGAsXHJcbiAgICAgIHNoYTogXCJzaGFcIixcclxuICAgIH1cclxuICApO1xyXG5cclxuICByZXR1cm4gZGVsZXRlZFBvc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBNZCh0ZXh0OiBhbnkpIHtcclxuICBjb25zdCB0ZXh0cyA9IGF3YWl0IG9jdG9raXQucmVxdWVzdChcIlBPU1QgL21hcmtkb3duXCIsIHtcclxuICAgIHRleHQsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB0ZXh0cztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbW1pdCAoKSB7XHJcbiAgY29uc3Qgb2xkRGF0ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDIsIFwibW9udGhzXCIpLnRvSVNPU3RyaW5nKCk7XHJcblxyXG4gIGNvbnN0IGNvbW1pdHMgPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoXCJHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbW1pdHNcIiwge1xyXG4gICAgLi4uUmVwbyxcclxuICAgIHBhdGg6IFwicG9zdHNcIixcclxuICAgIHNpbmNlOiBvbGREYXRlXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIGNvbW1pdHNcclxufSIsICJleHBvcnQgY29uc3QgUmVwbyA9IHtcclxuICAgIG93bmVyOiBcIlNoYWZTcGVjc1wiLFxyXG4gICAgcmVwbzogXCJyZW1peC1jbXNcIixcclxufSIsICJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBqc29uLFxyXG4gIHJlZGlyZWN0LFxyXG4gIHVzZUZldGNoZXIsXHJcbiAgdXNlTG9hZGVyRGF0YSxcclxuICB1c2VUcmFuc2l0aW9uLFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBDbGllbnRPbmx5IH0gZnJvbSBcInJlbWl4LXV0aWxzXCI7XHJcbmltcG9ydCBNb25hY28gZnJvbSBcIn4vdXRpbHMvY2xpZW50L21vbmFjby5jbGllbnRcIjtcclxuaW1wb3J0IHsgVGFiU2VsZWN0b3IgfSBmcm9tIFwifi9jb21wb25lbnRzL1RhYlNlbGVjdG9yXCI7XHJcbmltcG9ydCB7IFRhYlBhbmVsLCB1c2VUYWJzIH0gZnJvbSBcIn4vY29tcG9uZW50cy9UYWJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSBcIkB1cGxvYWRjYXJlL3JlYWN0LXdpZGdldFwiO1xyXG5pbXBvcnQge1xyXG4gIFBvc3RzRGF0YSxcclxuICBjcmVhdGVQb3N0LFxyXG4gIHVwZGF0ZVBvc3QsXHJcbiAgTWQsXHJcbn0gZnJvbSBcIn4vdXRpbHMvc2VydmVyL2dpdGh1Yi5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgTWFya2Rvd25IYW5kbGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3NlcnZlci9tYXJrZG93bi5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgRGlHaXRNZXJnZSwgRGlHaXRQdWxsUmVxdWVzdCB9IGZyb20gXCJyZWFjdC1pY29ucy9kaVwiO1xyXG5pbXBvcnQge1xyXG4gIGdldFNlc3Npb24sXHJcbiAgY29tbWl0U2Vzc2lvbixcclxuICBkZXN0cm95U2Vzc2lvbixcclxufSBmcm9tIFwifi91dGlscy9zZXJ2ZXIvc2Vzc2lvbi5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwifi91dGlscy9oYW5kbGVycy9TdXBhYmFzZVwiO1xyXG5cclxuaW1wb3J0IHR5cGUge1xyXG4gIExpbmtzRnVuY3Rpb24sXHJcbiAgQWN0aW9uRnVuY3Rpb24sXHJcbiAgTG9hZGVyRnVuY3Rpb24sXHJcbiAgRXJyb3JCb3VuZGFyeUNvbXBvbmVudCxcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBXaWRnZXRBUEkgfSBmcm9tIFwiQHVwbG9hZGNhcmUvcmVhY3Qtd2lkZ2V0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9uZXcuY3NzXCI7XHJcbmltcG9ydCBnaXRodWIgZnJvbSBcIi4uLy4uL3N0eWxlcy9naXRodWIuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGUgfSxcclxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogZ2l0aHViIH0sXHJcbiAgXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG5cclxuICBjb25zdCB0eXBlID0gYm9keS5nZXQoXCJ0eXBlXCIpO1xyXG5cclxuICBpZiAodHlwZSA9PT0gXCJQQVJTRV9NQVJLRE9XTlwiKSB7XHJcbiAgICBjb25zdCBtYXJrZG93biA9IGJvZHkuZ2V0KFwibWFya2Rvd25cIik7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIC8vIGNvbnN0IHBhcnNlZCA9IE1hcmtkb3duSGFuZGxlcihtYXJrZG93bik7XHJcbiAgICBjb25zdCBwYXJzZWQgPSBhd2FpdCBNZChtYXJrZG93bik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBwYXJzZWQuZGF0YSxcclxuICAgICAgdHlwZTogXCJQQVJTRV9NQVJLRE9XTlwiLFxyXG4gICAgfTtcclxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiQ09NTUlUX1BPU1RcIikge1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGJvZHkuZ2V0KFwibWVzc2FnZVwiKTtcclxuICAgIGNvbnN0IHNoYSA9IGJvZHkuZ2V0KFwic2hhVmFsdWVcIik7XHJcbiAgICBjb25zdCB2YWwgPSBib2R5LmdldChcInZhbHVlXCIpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBib2R5LmdldChcInRpdGxlXCIpO1xyXG4gICAgY29uc3QgcHVibGlzaGVkID0gYm9keS5nZXQoXCJwdWJsaXNoZWRcIik7XHJcbiAgICBjb25zdCBzbHVnID0gcGFyYW1zLnNsdWc7XHJcblxyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIik7XHJcbiAgICBjb25zdCBzZXNzaW9uRGF0YSA9IGF3YWl0IGdldFNlc3Npb24oc2Vzc2lvbik7XHJcblxyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBpZiAoc2x1ZyA9PT0gXCJuZXdcIikge1xyXG4gICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNyZWF0ZVBvc3QodGl0bGUsIG1lc3NhZ2UsIHZhbCwgcHVibGlzaGVkKTtcclxuICAgICAgc2Vzc2lvbkRhdGEuc2V0KFwibmV3XCIsIHRydWUpO1xyXG4gICAgICBzZXNzaW9uRGF0YS5zZXQoXCJyZWRpcmVjdFwiLCB0cnVlKTtcclxuXHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQocmVzLCAxMDApKTtcclxuXHJcbiAgICAgIHJldHVybiByZWRpcmVjdChcIi9wb3N0cy9lZGl0L1wiICsgdGl0bGUsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgY29tbWl0U2Vzc2lvbihzZXNzaW9uRGF0YSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHVwZGF0ZVBvc3Qoc2x1ZywgbWVzc2FnZSwgdmFsLCBzaGEsIHB1Ymxpc2hlZCk7XHJcbiAgICAgIHNlc3Npb25EYXRhLnNldChcIm5ld1wiLCBmYWxzZSk7XHJcbiAgICAgIHNlc3Npb25EYXRhLnNldChcInJlZGlyZWN0XCIsIHRydWUpO1xyXG5cclxuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4gc2V0VGltZW91dChyZXMsIDEwMCkpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlZGlyZWN0KFwiL3Bvc3RzL2VkaXQvXCIgKyB0aXRsZSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb25EYXRhKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHsgZGF0YTogXCJObyBhY3Rpb25cIiwgdHlwZTogXCJOVUxMXCIgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zLCByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBzbHVnID0gcGFyYW1zLnNsdWc7XHJcblxyXG4gIGlmIChzbHVnID09PSBcIm5ld1wiKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsb2FkZXJEYXRhOiBudWxsLFxyXG4gICAgICBzaGE6IG51bGwsXHJcbiAgICAgIG5ldzogbnVsbCxcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHBvc3RzSW5mbyA9IGF3YWl0IFBvc3RzRGF0YSgpO1xyXG4gICAgY29uc3QgY3VycmVudFBvc3QgPSBwb3N0c0luZm8uZmluZChcclxuICAgICAgKHBvc3Q6IGFueSkgPT4gcG9zdC5uYW1lLnNwbGl0KFwiLlwiKVswXSA9PT0gc2x1Z1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBvc3RDb250ZW50ID0gY3VycmVudFBvc3QuY29udGVudDtcclxuXHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcclxuICAgIGlmIChcclxuICAgICAgIXNlc3Npb24uaGFzKFwicmVkaXJlY3RcIikgfHxcclxuICAgICAgc2Vzc2lvbi5nZXQoXCJyZWRpcmVjdFwiKSA9PT0gZmFsc2UgfHxcclxuICAgICAgIXNlc3Npb24uaGFzKFwibmV3XCIpXHJcbiAgICApIHtcclxuICAgICAgcmVxdWVzdC5oZWFkZXJzLnNldChcIkNvb2tpZVwiLCBhd2FpdCBkZXN0cm95U2Vzc2lvbihzZXNzaW9uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3SW5mbyA9IHNlc3Npb24uZ2V0KFwibmV3XCIpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxvYWRlckRhdGE6IHBvc3RDb250ZW50LFxyXG4gICAgICBzaGE6IGN1cnJlbnRQb3N0LnNoYSxcclxuICAgICAgbmV3OiBuZXdJbmZvLFxyXG4gICAgfTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXcoKSB7XHJcbiAgY29uc3QgeyBsb2FkZXJEYXRhLCBzaGEsIG5ldzogbmV3RXhpc3RzIH0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcclxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xyXG5cclxuICBjb25zdCBkYXRhID0gZmV0Y2hlci5kYXRhPy5kYXRhO1xyXG4gIGNvbnN0IHR5cGUgPSBmZXRjaGVyLmRhdGE/LnR5cGU7XHJcblxyXG4gIGNvbnN0IHJhd1RleHQgPSBsb2FkZXJEYXRhXHJcbiAgICA/IGxvYWRlckRhdGFcclxuICAgIDogYC0tLVxcbmlkOiB1dWlkXFxudGl0bGU6IFRpdGxlXFxuZGVzY3JpcHRpb246IERlc2NyaXB0aW9uXFxuZGF0ZTogMjAyMi0wMS0wMVxcbnNsdWc6IHBvc3Qtc2x1Z1xcbmltYWdlOiBcIlBvc3QncyBiYW5uZXIgVVJMXCJcXG5wdWJsaXNoZWQ6IGZhbHNlXFxuLS0tXFxuXFxuYDtcclxuICBjb25zdCBjb250ZW50ID0gbG9hZGVyRGF0YVxyXG4gICAgPyBsb2FkZXJEYXRhLnN1YnN0cmluZyhsb2FkZXJEYXRhLmluZGV4T2YoXCItLS1cIiwgNCkgKyAzKS50cmltKClcclxuICAgIDogcmF3VGV4dC5zdWJzdHJpbmcocmF3VGV4dC5pbmRleE9mKFwiLS0tXCIsIDQpICsgMykudHJpbSgpO1xyXG5cclxuICAvLyBJbml0aWF0ZSBhbiBlbXB0eSBvYmplY3QgZm9yIHRoZSBmcm9udG1hdHRlciBjb250ZW50XHJcbiAgbGV0IGZyb250bWF0dGVyOiBhbnkgPSB7fTtcclxuXHJcbiAgLy8gR2V0IHRoZSBmcm9udC1tYXR0ZXIgZnJvbSB0aGUgcG9zdFxyXG4gIGxldCB5YW1sOiBzdHJpbmcgfCBudWxsID0gbG9hZGVyRGF0YVxyXG4gICAgPyBsb2FkZXJEYXRhLnNwbGl0KFwiLS0tXCIpWzFdXHJcbiAgICA6IHJhd1RleHQuc3BsaXQoXCItLS1cIilbMV07XHJcblxyXG4gIC8vIFRyYW5zZm9ybSB0aGUgZnJvbnQtbWF0dGVyIGludG8gb2JqZWN0LXJlYWR5IHN0YXRlXHJcbiAgeWFtbCAmJlxyXG4gICAgeWFtbC5zcGxpdCgvXFxyP1xcbi9nKS5tYXAoKGxpbmUpID0+IHtcclxuICAgICAgaWYgKGxpbmUubGVuZ3RoID4gMCAmJiBsaW5lLmluY2x1ZGVzKFwiOlwiKSkge1xyXG4gICAgICAgIGxldCBrZXk6IHN0cmluZyB8IHN0cmluZ1tdID0gbGluZS5zcGxpdChcIjpcIik7XHJcblxyXG4gICAgICAgIGlmIChrZXkubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAga2V5WzFdID0ga2V5LnNsaWNlKDEpLmpvaW4oXCI6XCIpO1xyXG4gICAgICAgICAga2V5LnNwbGljZSgtMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQdXNoIGVhY2gga2V5LXZhbHVlIHBhaXIgaW50byB0aGUgZnJvbnRtYXR0ZXIgb2JqZWN0XHJcbiAgICAgICAgZnJvbnRtYXR0ZXJba2V5WzBdXSA9IGtleVsxXS5yZXBsYWNlKFwiIFwiLCBcIlwiKTtcclxuICAgICAgICByZXR1cm4gbGluZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbGluZTtcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4ocmF3VGV4dCk7XHJcbiAgY29uc3QgW21kLCBzZXRNZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KGNvbnRlbnQpO1xyXG4gIGNvbnN0IFtwYXJzZWQsIHNldFBhcnNlZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRhYiwgc2V0U2VsZWN0ZWRUYWJdID0gdXNlVGFicyhbXCJNYXJrZG93blwiLCBcIlByZXZpZXdcIl0pO1xyXG4gIGNvbnN0IFtzbHVnLCBzZXRTbHVnXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgY29uc3QgW3RyaWdnZXJlZCwgc2V0VHJpZ2dlcmVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZWRpdG9yUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsISk7XHJcbiAgY29uc3Qgd2lkZ2V0UmVmID0gdXNlUmVmPFdpZGdldEFQSSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IGJsb2dSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwhKTtcclxuICBjb25zdCBmaXJzdFJlbmRlciA9IHVzZVJlZjxib29sZWFuPih0cnVlKTtcclxuICBjb25zdCBjb21taXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IHN1Ym1pc3Npb25SZWYgPSB1c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc3VibWlzc2lvblJlZi5jdXJyZW50ICYmIHZhbHVlID09IHJhd1RleHQgJiYgIXRyaWdnZXJlZFxyXG4gICAgICA/IChzdWJtaXNzaW9uUmVmLmN1cnJlbnQuZGlzYWJsZWQgPSB0cnVlKVxyXG4gICAgICA6IHN1Ym1pc3Npb25SZWYuY3VycmVudCAmJlxyXG4gICAgICAgIHZhbHVlICE9PSByYXdUZXh0ICYmXHJcbiAgICAgICAgKHN1Ym1pc3Npb25SZWYuY3VycmVudC5kaXNhYmxlZCA9IGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZmlyc3RSZW5kZXIuY3VycmVudCkge1xyXG4gICAgICBpZiAoZG9jdW1lbnQucmVmZXJyZXIuaW5jbHVkZXMoXCIvbmV3XCIpKSB7XHJcbiAgICAgICAgc2V0U3RhdHVzKDEpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0U3RhdHVzKDApO1xyXG4gICAgICAgIH0sIDcwMDApO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFNsdWcod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVszXSk7XHJcbiAgICAgIGZpcnN0UmVuZGVyLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvc3QgPSBsb2FkZXJEYXRhXHJcbiAgICAgID8gdmFsdWUuc3Vic3RyaW5nKGxvYWRlckRhdGEuaW5kZXhPZihcIi0tLVwiLCA0KSArIDMpLnRyaW0oKVxyXG4gICAgICA6IHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKFwiLS0tXCIsIDQpICsgMykudHJpbSgpO1xyXG4gICAgc2V0TWQocG9zdCk7XHJcbiAgfSwgW3ZhbHVlLCB0cmlnZ2VyZWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkYXRhICYmIHR5cGUgPT09IFwiUEFSU0VfTUFSS0RPV05cIikge1xyXG4gICAgICBzZXRQYXJzZWQoZGF0YSk7XHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICBibG9nUmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gcGFyc2VkO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhLCB0eXBlLCBwYXJzZWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgbmV3RXhpc3RzICE9PSBudWxsICYmXHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcIm5hdmlnYXRpb25cIilbMF0udHlwZSAhPT1cclxuICAgICAgICBcImJhY2tfZm9yd2FyZFwiXHJcbiAgICApIHtcclxuICAgICAgaWYgKHNoYSkge1xyXG4gICAgICAgIHNldFN0YXR1cygxKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHNldFN0YXR1cygwKTtcclxuICAgICAgICB9LCA1NTAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRTdGF0dXMoLTEpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0U3RhdHVzKDApO1xyXG4gICAgICAgIH0sIDU1MDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW25ld0V4aXN0cywgc2hhXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUcmlnZ2VyZWQoZmFsc2UpO1xyXG4gICAgdmFsdWUgPT0gcmF3VGV4dCAmJiBzZXRUcmlnZ2VyZWQoZmFsc2UpO1xyXG4gIH0sIFt0cmlnZ2VyZWQsIHZhbHVlLCByYXdUZXh0XSk7XHJcblxyXG4gIGNvbnN0IHlhbWxDb252ZXJ0ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBmcm9udG1hdHRlciA9IHt9O1xyXG5cclxuICAgIGNvbnN0IHlhbWwgPSB2YWx1ZS5zcGxpdChcIi0tLVwiKVsxXTtcclxuICAgIHlhbWwuc3BsaXQoL1xccj9cXG4vZykubWFwKChsaW5lKSA9PiB7XHJcbiAgICAgIGlmIChsaW5lLmxlbmd0aCA+IDAgJiYgbGluZS5pbmNsdWRlcyhcIjpcIikpIHtcclxuICAgICAgICBsZXQga2V5OiBzdHJpbmcgfCBzdHJpbmdbXSA9IGxpbmUuc3BsaXQoXCI6XCIpO1xyXG5cclxuICAgICAgICBpZiAoa2V5Lmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgIGtleVsxXSA9IGtleS5zbGljZSgxKS5qb2luKFwiOlwiKTtcclxuICAgICAgICAgIGtleS5zcGxpY2UoLTEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHVzaCBlYWNoIGtleS12YWx1ZSBwYWlyIGludG8gdGhlIGZyb250bWF0dGVyIG9iamVjdFxyXG4gICAgICAgIGZyb250bWF0dGVyW2tleVswXV0gPSBrZXlbMV0ucmVwbGFjZShcIiBcIiwgXCJcIik7XHJcbiAgICAgICAgcmV0dXJuIGxpbmU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxpbmU7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZnJvbnRtYXR0ZXI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29tbWl0UG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGlucHV0ID0gY29tbWl0UmVmLmN1cnJlbnQ/LnZhbHVlO1xyXG4gICAgY29uc3Qgc2hhVmFsdWUgPSBzaGEgPyBzaGEgOiBcIlwiO1xyXG4gICAgY29uc3QgY29tbWl0TWVzc2FnZSA9XHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICBpbnB1dC5sZW5ndGggPiAwICYmIGlucHV0ICE9PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgPyBpbnB1dFxyXG4gICAgICAgIDogY29tbWl0UmVmLmN1cnJlbnQ/LnBsYWNlaG9sZGVyO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gYXdhaXQgeWFtbENvbnZlcnRlcigpLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGU6IHJlcy5zbHVnLFxyXG4gICAgICAgIHB1Ymxpc2hlZDogcmVzLnB1Ymxpc2hlZCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiQ09NTUlUX1BPU1RcIixcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBtZXNzYWdlOiBjb21taXRNZXNzYWdlLFxyXG4gICAgICAgIHNoYVZhbHVlLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIHRpdGxlOiB0aXRsZS50aXRsZSxcclxuICAgICAgICBwdWJsaXNoZWQ6IHRpdGxlLnB1Ymxpc2hlZCxcclxuICAgICAgfSxcclxuICAgICAgeyBtZXRob2Q6IFwicG9zdFwiIH1cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdHJpZ2dlckJ0biA9ICgpID0+IHtcclxuICAgIHNldFRyaWdnZXJlZCh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkaXZlXCI+XHJcbiAgICAgIHtzdGF0dXMgPT09IDEgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3AtdXAgc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgPERpR2l0TWVyZ2UgLz5cclxuICAgICAgICAgICZuYnNwO3tgU3VjY2Vzc2Z1bGx5IHB1c2hlZCAke2Zyb250bWF0dGVyLnRpdGxlfSB0byBHaXRIdWJgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogc3RhdHVzID09PSAtMSA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcC11cCBlcnJvclwiPlxyXG4gICAgICAgICAgPERpR2l0UHVsbFJlcXVlc3QgLz5cclxuICAgICAgICAgICZuYnNwO3tgRmFpbGVkIHRvIHB1c2ggJHtmcm9udG1hdHRlci50aXRsZX0gdG8gR2l0SHViYH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9uYWNvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3ItaGVhZGVyXCI+XHJcbiAgICAgICAgICA8VGFiU2VsZWN0b3JcclxuICAgICAgICAgICAgaXNBY3RpdmU9e3NlbGVjdGVkVGFiID09PSBcIk1hcmtkb3duXCJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkVGFiKFwiTWFya2Rvd25cIil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcclxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICB3aWR0aD17MjR9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICAgIGQ9XCJNMTEgNUg2YTIgMiAwIDAwLTIgMnYxMWEyIDIgMCAwMDIgMmgxMWEyIDIgMCAwMDItMnYtNW0tMS40MTQtOS40MTRhMiAyIDAgMTEyLjgyOCAyLjgyOEwxMS44MjggMTVIOXYtMi44MjhsOC41ODYtOC41ODZ6XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAge1wiICBcIn1cclxuICAgICAgICAgICAgPHNwYW4+RWRpdCBQb3N0PC9zcGFuPlxyXG4gICAgICAgICAgPC9UYWJTZWxlY3Rvcj5cclxuICAgICAgICAgIDxUYWJTZWxlY3RvclxyXG4gICAgICAgICAgICBpc0FjdGl2ZT17c2VsZWN0ZWRUYWIgPT09IFwiUHJldmlld1wifVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYWIoXCJQcmV2aWV3XCIpO1xyXG4gICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgeyB0eXBlOiBcIlBBUlNFX01BUktET1dOXCIsIG1hcmtkb3duOiBtZCB9LFxyXG4gICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwicG9zdFwiIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNlwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezI0fVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MjR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICBkPVwiTTE1IDEyYTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHpcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgICAgZD1cIk0yLjQ1OCAxMkMzLjczMiA3Ljk0MyA3LjUyMyA1IDEyIDVjNC40NzggMCA4LjI2OCAyLjk0MyA5LjU0MiA3LTEuMjc0IDQuMDU3LTUuMDY0IDctOS41NDIgNy00LjQ3NyAwLTguMjY4LTIuOTQzLTkuNTQyLTd6XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAge1wiICBcIn1cclxuICAgICAgICAgICAgPHNwYW4+UHJldmlldzwvc3Bhbj5cclxuICAgICAgICAgIDwvVGFiU2VsZWN0b3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3JcIiByZWY9e2VkaXRvclJlZn0+XHJcbiAgICAgICAgICA8VGFiUGFuZWwgaGlkZGVuPXtzZWxlY3RlZFRhYiAhPT0gXCJNYXJrZG93blwifT5cclxuICAgICAgICAgICAgPENsaWVudE9ubHk+XHJcbiAgICAgICAgICAgICAgPE1vbmFjbyBzZXQ9e3NldFZhbHVlfSB2YWw9e3ZhbHVlfSB0cmlnZ2VyQnRuPXt0cmlnZ2VyQnRufSAvPlxyXG4gICAgICAgICAgICA8L0NsaWVudE9ubHk+XHJcbiAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgPFRhYlBhbmVsIGhpZGRlbj17c2VsZWN0ZWRUYWIgIT09IFwiUHJldmlld1wifT5cclxuICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJrZG93bi1ib2R5XCJcclxuICAgICAgICAgICAgICByZWY9e2Jsb2dSZWZ9XHJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwYXJzZWQgfX1cclxuICAgICAgICAgICAgPjwvc2VjdGlvbj5cclxuICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3NlbGVjdGVkVGFiID09PSBcIk1hcmtkb3duXCIgJiYgKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0b3ItZm9vdGVyXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2lkZ2V0UmVmLmN1cnJlbnQ/Lm9wZW5EaWFsb2coXCJmaWxlXCIpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBEcm9wIGZpbGVzIHRvIHVwbG9hZCBtZWRpYSBmaWxlcyBvciBjbGljayBhcmVhIHRvIGJyb3dzZSBmaWxlc1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxXaWRnZXRcclxuICAgICAgICAgIHB1YmxpY0tleT1cIjU0YWI0NmI4MzgzMjYyNzAzYmZhXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoaW5mbykgPT4ge1xyXG4gICAgICAgICAgICBzZXRWYWx1ZShgJHt2YWx1ZX0gIVthbHQgZGVzY3JpcHRpb25dKCR7aW5mby5jZG5Vcmx9KWApO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG11bHRpcGxlPXt0cnVlfVxyXG4gICAgICAgICAgaW1hZ2VzT25seT17dHJ1ZX1cclxuICAgICAgICAgIHN5c3RlbURpYWxvZz17dHJ1ZX1cclxuICAgICAgICAgIGNsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgIHJlZj17d2lkZ2V0UmVmfVxyXG4gICAgICAgICAgcHJlbG9hZGVyPXtudWxsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1pdFwiPlxyXG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm1cIiBvblN1Ym1pdD17Y29tbWl0UG9zdH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17XHJcbiAgICAgICAgICAgICAgbG9hZGVyRGF0YSA/IGBVcGRhdGUgJHtzbHVnfS5tZGAgOiBgQ3JlYXRlIGEgbmV3IGJsb2cgcG9zdCFgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tbWl0LWlucHV0XCJcclxuICAgICAgICAgICAgbmFtZT1cImNvbW1pdFwiXHJcbiAgICAgICAgICAgIHJlZj17Y29tbWl0UmVmfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbW1pdC1zdWJtaXRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjb21taXRQb3N0fVxyXG4gICAgICAgICAgICByZWY9e3N1Ym1pc3Npb25SZWZ9XHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsb2FkZXJEYXRhID8gXCJVcGRhdGUgUG9zdFwiIDogXCJDcmVhdGUgUG9zdFwifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFcnJvckJvdW5kYXJ5OiBFcnJvckJvdW5kYXJ5Q29tcG9uZW50ID0gKHsgZXJyb3IgfSkgPT4ge1xyXG4gIHJldHVybiA8ZGl2Pk9oIG9oISB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbn07XHJcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUYWJTZWxlY3RvciA9ICh7XHJcbiAgaXNBY3RpdmUsXHJcbiAgY2hpbGRyZW4sXHJcbiAgb25DbGljayxcclxufToge1xyXG4gIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgb25DbGljazogKCkgPT4gdm9pZDtcclxufSkgPT4gKFxyXG4gIDxidXR0b25cclxuICAgIGNsYXNzTmFtZT17YHRhYi1zZWxlY3RvciAke2lzQWN0aXZlID8gXCJhY3RpdmUtdGFiXCIgOiBcIlwifWB9XHJcbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgPlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvYnV0dG9uPlxyXG4pO1xyXG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiB1c2VQcmV2aW91czxUPih2YWx1ZTogVCkge1xyXG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxUPigpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlZi5jdXJyZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFiczxLIGV4dGVuZHMgc3RyaW5nPih0YWJzOiBLW10sIGRlZmF1bHRUYWI/OiBLIHwgbnVsbCkge1xyXG4gIGNvbnN0IHN0YXRlID0gUmVhY3QudXNlU3RhdGU8SyB8IG51bGw+KCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkVGFiLCBzZXRTZWxlY3RlZFRhYl0gPSBzdGF0ZTtcclxuXHJcbiAgY29uc3QgYWN0aXZlSW5kZXggPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChzZWxlY3RlZFRhYikge1xyXG4gICAgICByZXR1cm4gdGFicy5pbmRleE9mKHNlbGVjdGVkVGFiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfSwgW3NlbGVjdGVkVGFiLCB0YWJzXSk7XHJcblxyXG4gIGNvbnN0IHByZXZpb3VzQWN0aXZlSW5kZXggPSB1c2VQcmV2aW91cyhhY3RpdmVJbmRleCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodGFicy5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0U2VsZWN0ZWRUYWIodW5kZWZpbmVkKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRUYWIgPT09IG51bGwgfHwgKHNlbGVjdGVkVGFiICYmIHRhYnMuaW5jbHVkZXMoc2VsZWN0ZWRUYWIpKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0eXBlb2YgcHJldmlvdXNBY3RpdmVJbmRleCA9PT0gXCJudW1iZXJcIiAmJlxyXG4gICAgICBwcmV2aW91c0FjdGl2ZUluZGV4ID49IDAgJiZcclxuICAgICAgKHRhYnNbcHJldmlvdXNBY3RpdmVJbmRleF0gfHwgdGFic1twcmV2aW91c0FjdGl2ZUluZGV4IC0gMV0pXHJcbiAgICApIHtcclxuICAgICAgc2V0U2VsZWN0ZWRUYWIoXHJcbiAgICAgICAgdGFic1twcmV2aW91c0FjdGl2ZUluZGV4XSB8fCB0YWJzW3ByZXZpb3VzQWN0aXZlSW5kZXggLSAxXVxyXG4gICAgICApO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkZWZhdWx0VGFiID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWxlY3RlZFRhYihcclxuICAgICAgZGVmYXVsdFRhYiAmJiB0YWJzLmluY2x1ZGVzKGRlZmF1bHRUYWIpID8gZGVmYXVsdFRhYiA6IHRhYnNbMF1cclxuICAgICk7XHJcbiAgfSwgW3NlbGVjdGVkVGFiLCBkZWZhdWx0VGFiLCB0YWJzXSk7XHJcblxyXG4gIHJldHVybiBzdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRhYlBhbmVsKHtcclxuICBjaGlsZHJlbixcclxuICByZW5kZXIgPSBcImxhenlcIixcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4gJiB7XHJcbiAgaGlkZGVuOiBib29sZWFuO1xyXG4gIHJlbmRlcj86IFwiYWx3YXlzXCIgfCBcImxhenlcIjtcclxufSkge1xyXG4gIGNvbnN0IFtzaG91bGRSZW5kZXIsIHNldFNob3VsZFJlbmRlcl0gPSBSZWFjdC51c2VTdGF0ZShyZW5kZXIgPT09IFwiYWx3YXlzXCIpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLmhpZGRlbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2hvdWxkUmVuZGVyKHRydWUpO1xyXG4gIH0sIFtwcm9wcy5oaWRkZW5dKTtcclxuXHJcbiAgcmV0dXJuIDxkaXYgey4uLnByb3BzfT57c2hvdWxkUmVuZGVyID8gY2hpbGRyZW4gOiBudWxsfTwvZGl2PjtcclxufSIsICJpbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfSA9XHJcbiAgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xyXG4gICAgY29va2llOiB7XHJcbiAgICAgIG5hbWU6IFwiX19wYXRoXCIsXHJcbiAgICAgIHNlY3JldHM6IFtcInIzbTF4X3MzY3JldFwiXSxcclxuICAgICAgc2FtZVNpdGU6IFwibGF4XCIsXHJcbiAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgc2VjdXJlOiB0cnVlLFxyXG4gICAgICBtYXhBZ2U6IDM2MDAgKiAxMDAwLFxyXG4gICAgfSxcclxuICB9KTtcclxuIiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBMaW5rLCB1c2VGZXRjaGVyLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldENvbW1pdCwgUG9zdHNEYXRhIH0gZnJvbSBcIn4vdXRpbHMvc2VydmVyL2dpdGh1Yi5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgZm9ybWF0LCBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9vdmVydmlldy5jc3NcIjtcclxuaW1wb3J0IHsgRGlHaXRCcmFuY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvZGlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxyXG4gICAgICBocmVmOiBzdHlsZSxcclxuICAgIH0sXHJcbiAgXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGNvbW1pdHMgPSBhd2FpdCBnZXRDb21taXQoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbW1pdHM6IGNvbW1pdHMuZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RDYXJkKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcm9udFwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFN0cmVhaygpIHtcclxuICBjb25zdCBzcXVhcmVSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IGdldFdlZWtOdW1iZXIgPSAoZDogYW55KSA9PiB7XHJcbiAgICBkID0gbmV3IERhdGUoRGF0ZS5VVEMoZC5nZXRGdWxsWWVhcigpLCBkLmdldE1vbnRoKCksIGQuZ2V0RGF0ZSgpKSk7XHJcblxyXG4gICAgZC5zZXRVVENEYXRlKGQuZ2V0VVRDRGF0ZSgpICsgNCAtIChkLmdldFVUQ0RheSgpIHx8IDcpKTtcclxuXHJcbiAgICBsZXQgeWVhclN0YXJ0ID0gbmV3IERhdGUoRGF0ZS5VVEMoZC5nZXRVVENGdWxsWWVhcigpLCAwLCAxKSk7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIGxldCB3ZWVrTm8gPSBNYXRoLmNlaWwoKChkIC0geWVhclN0YXJ0KSAvIDg2NDAwMDAwICsgMSkgLyA3KTtcclxuXHJcbiAgICByZXR1cm4gW2QuZ2V0VVRDRnVsbFllYXIoKSwgd2Vla05vXTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cmVhay1jYXJkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3F1YXJlXCIgcmVmPXtzcXVhcmVSZWZ9PjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNxdWFyZVwiIHJlZj17c3F1YXJlUmVmfT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcXVhcmVcIiByZWY9e3NxdWFyZVJlZn0+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3F1YXJlXCIgcmVmPXtzcXVhcmVSZWZ9PjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNxdWFyZVwiIHJlZj17c3F1YXJlUmVmfT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcXVhcmVcIiByZWY9e3NxdWFyZVJlZn0+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3F1YXJlXCIgcmVmPXtzcXVhcmVSZWZ9PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbW1pdENhcmQoeyBjb21taXQgfTogYW55KSB7XHJcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZShjb21taXQuZGF0ZSk7XHJcbiAgY29uc3QgbmV3RGF0ZSA9IGZvcm1hdERpc3RhbmNlVG9Ob3cobmV3IERhdGUoZGF0ZS50b0lTT1N0cmluZygpKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1pdFwiPlxyXG4gICAgICA8aDM+e2NvbW1pdC5tZXNzYWdlfTwvaDM+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmNoXCI+XHJcbiAgICAgICAgPGEgaHJlZj17Y29tbWl0Lmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICA8RGlHaXRCcmFuY2ggLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtgJHtjb21taXQuYXZhdGFyX3VybH1gfSBhbHQ9XCJBdXRob3IgQWx0LlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj57bmV3RGF0ZX0gYWdvPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdFwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCgpIHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICBjb25zdCBjb21taXQ6IGFueVtdID0gZGF0YT8uY29tbWl0cztcclxuICBjb25zdCBjb21taXRzID1cclxuICAgIGNvbW1pdC5sZW5ndGggPj0gNlxyXG4gICAgICA/IGNvbW1pdC5zbGljZSgwLCA2KVxyXG4gICAgICA6IGNvbW1pdC5zbGljZSgwLCBjb21taXQubGVuZ3RoIC0gMSk7XHJcblxyXG4gIGNvbnN0IGNvbW1pdERhdGEgPSBjb21taXRzPy5tYXAoKGNvbW1pdDogYW55KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAvLyB0aXRsZTogY29tbWl0LmNvbnRlbnQubmFtZSxcclxuICAgICAgdXJsOiBjb21taXQudXJsLFxyXG5cdFx0XHRodG1sX3VybDogY29tbWl0Lmh0bWxfdXJsLFxyXG4gICAgICBjb21tZW50c191cmw6IGNvbW1pdC5jb21tZW50c191cmwsXHJcbiAgICAgIG1lc3NhZ2U6IGNvbW1pdC5jb21taXQubWVzc2FnZSxcclxuICAgICAgZGF0ZTogY29tbWl0LmNvbW1pdC5hdXRob3IuZGF0ZSxcclxuICAgICAgY29tbWVudF9jb3VudDogY29tbWl0LmNvbW1pdC5jb21tZW50X2NvdW50LFxyXG4gICAgICBhdmF0YXJfdXJsOiBjb21taXQuYXV0aG9yLmF2YXRhcl91cmwsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdmVydmlld1wiPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJlZGl0ZWRcIj5cclxuICAgICAgICA8aDI+UmVjZW50bHkgRWRpdGVkIFBvc3RzOjwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0c1wiPlxyXG4gICAgICAgICAgPFBvc3RDYXJkIC8+XHJcbiAgICAgICAgICA8UG9zdENhcmQgLz5cclxuICAgICAgICAgIDxQb3N0Q2FyZCAvPlxyXG4gICAgICAgICAgPFBvc3RDYXJkIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgey8qIDxzZWN0aW9uIGNsYXNzTmFtZT1cInN0cmVha1wiPlxyXG4gICAgICAgIDxoMj5CbG9nZ2luZyBTdHJlYWsgXHVEODNEXHVERDI1OjwvaDI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxTdHJlYWsgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2Pkdvb2QgSm9iITwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+ICovfVxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb21taXRzXCI+XHJcbiAgICAgICAgPGgyPlJlY2VudCBDb21taXRzOjwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21taXQtY2FyZFwiPlxyXG4gICAgICAgICAge2NvbW1pdERhdGEubWFwKChjb21taXQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxDb21taXRDYXJkIGNvbW1pdD17Y29tbWl0fSBrZXk9e2NvbW1pdC51cmx9IC8+O1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCJwb3N0cy9vdmVydmlld1wiKVxyXG59IiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzNhNDA4NjQ5JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1DSFZJQ0dKSi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWEpTVEtOQkIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QV1dHSzVVRi5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtTVpKWFJZQVAuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU1WR1FZWUpILmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kYXNoYm9hcmQnOnsnaWQnOidyb3V0ZXMvZGFzaGJvYXJkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Rhc2hib2FyZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kYXNoYm9hcmQtUTVKT1MyMlEuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1XUDJBVFJLRi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWV0cmljcyc6eydpZCc6J3JvdXRlcy9tZXRyaWNzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21ldHJpY3MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWV0cmljcy03REo0T1U2Vi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Bvc3RzJzp7J2lkJzoncm91dGVzL3Bvc3RzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Bvc3RzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Bvc3RzLVNUVEdYNVRLLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9zdHMvZWRpdC4kc2x1Zyc6eydpZCc6J3JvdXRlcy9wb3N0cy9lZGl0LiRzbHVnJywncGFyZW50SWQnOidyb3V0ZXMvcG9zdHMnLCdwYXRoJzonZWRpdC86c2x1ZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0cy9lZGl0LiRzbHVnLUhQSUMyWTZMLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1DRFRVNUVKTS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU1WR1FZWUpILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFZZM1NVVzIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL3Bvc3RzL2luZGV4Jzp7J2lkJzoncm91dGVzL3Bvc3RzL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvcG9zdHMnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9zdHMvaW5kZXgtTVRDSUlIRlEuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Bvc3RzL21hbmFnZS1wb3N0cyc6eydpZCc6J3JvdXRlcy9wb3N0cy9tYW5hZ2UtcG9zdHMnLCdwYXJlbnRJZCc6J3JvdXRlcy9wb3N0cycsJ3BhdGgnOidtYW5hZ2UtcG9zdHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9zdHMvbWFuYWdlLXBvc3RzLU1XNjdEVUxYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1TTUhaVEtNTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRWWTNTVVcyLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Bvc3RzL292ZXJ2aWV3Jzp7J2lkJzoncm91dGVzL3Bvc3RzL292ZXJ2aWV3JywncGFyZW50SWQnOidyb3V0ZXMvcG9zdHMnLCdwYXRoJzonb3ZlcnZpZXcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9zdHMvb3ZlcnZpZXctTlU3UDVLQVouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVNNSFpUS01MLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFZZM1NVVzIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2V0dGluZ3MnOnsnaWQnOidyb3V0ZXMvc2V0dGluZ3MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2V0dGluZ3MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2V0dGluZ3MtM1lIVENWRkguanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtM0E0MDg2NDkuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxnQkFBZ0IsUUFBUTtBQUk1QixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLHdCQUF3QjtBQUFBLE1BQ3JELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFHMUMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxVQUFVO0FBQUEsTUFDdkMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsb0JBQW9CO0FBQUEsTUFDakQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ3RPbEM7QUFBQTtBQUFBO0FBQUEsWUFBTyxVQUFVO0FBQUE7QUFBQTs7O0FDQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUErQjtBQUMvQixtQkFBNEI7QUFFNUIsb0JBQU87QUFFUSx1QkFDYixTQUNBLG9CQUNBLGlCQUNBLGNBQ0E7QUFDQSxRQUFNLFNBQVMsa0NBQ2Isb0NBQUMsMEJBQUQ7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFjLEtBQUssUUFBUTtBQUFBO0FBR25ELGtCQUFnQixJQUFJLGdCQUFnQjtBQUVwQyxTQUFPLElBQUksU0FBUyxvQkFBb0IsUUFBUTtBQUFBLElBQzlDLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQTtBQUFBOzs7QUNuQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFRTztBQUNQLHlCQUFnQzs7Ozs7Ozs7O0FBT3pCLElBQU0sT0FBcUIsTUFBTTtBQUN0QyxTQUFPLEVBQUUsT0FBTztBQUFBO0FBR1gsSUFBTSxRQUF1QixNQUFNO0FBQ3hDLFNBQU87QUFBQSxJQUNMLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQSxJQUMzQixFQUFFLEtBQUssY0FBYyxNQUFNO0FBQUE7QUFBQTtBQUkvQixJQUFNLGtCQUEwQjtBQUVqQixlQUFlO0FBQzVCLFNBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLEtBQ1Qsb0NBQUMsUUFBRCxNQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFNBQVE7QUFBQSxNQUNkLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxJQUFXLFNBQVE7QUFBQSxNQUM5QixvQ0FBQyxvQkFBRCxPQUNBLG9DQUFDLHFCQUFELFFBRUYsb0NBQUMsUUFBRCxNQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUFLLGNBQ25CLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNaLG9DQUFDLHVCQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFXLENBQUMsRUFBRSxlQUFnQixXQUFXLGtCQUFrQjtBQUFBLEtBRTNELG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNaLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxPQUFNO0FBQUEsSUFDTixXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxTQUFRO0FBQUEsSUFDUixRQUFPO0FBQUEsS0FFUCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxlQUFjO0FBQUEsSUFDZCxnQkFBZTtBQUFBLElBQ2YsYUFBYTtBQUFBLElBQ2IsR0FBRTtBQUFBLFFBR0QsS0FBSSxlQUlmLG9DQUFDLHVCQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFXLENBQUMsRUFBRSxlQUFnQixXQUFXLGtCQUFrQjtBQUFBLEtBRTNELG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNaLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxPQUFNO0FBQUEsSUFDTixXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxTQUFRO0FBQUEsSUFDUixRQUFPO0FBQUEsS0FFUCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxlQUFjO0FBQUEsSUFDZCxnQkFBZTtBQUFBLElBQ2YsYUFBYTtBQUFBLElBQ2IsR0FBRTtBQUFBLFFBR0QsS0FBSSxXQUlmLG9DQUFDLHVCQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFXLENBQUMsRUFBRSxlQUFnQixXQUFXLGtCQUFrQjtBQUFBLEtBRTNELG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNaLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxPQUFNO0FBQUEsSUFDTixXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxTQUFRO0FBQUEsSUFDUixRQUFPO0FBQUEsS0FFUCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxlQUFjO0FBQUEsSUFDZCxnQkFBZTtBQUFBLElBQ2YsYUFBYTtBQUFBLElBQ2IsR0FBRTtBQUFBLFFBR0QsS0FBSSxhQUlmLG9DQUFDLHVCQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFXLENBQUMsRUFBRSxlQUFnQixXQUFXLGtCQUFrQjtBQUFBLEtBRTNELG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNaLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxPQUFNO0FBQUEsSUFDTixXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxTQUFRO0FBQUEsSUFDUixRQUFPO0FBQUEsS0FFUCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxlQUFjO0FBQUEsSUFDZCxnQkFBZTtBQUFBLElBQ2YsYUFBYTtBQUFBLElBQ2IsR0FBRTtBQUFBLE1BRUosb0NBQUMsUUFBRDtBQUFBLElBQ0UsZUFBYztBQUFBLElBQ2QsZ0JBQWU7QUFBQSxJQUNmLGFBQWE7QUFBQSxJQUNiLEdBQUU7QUFBQSxRQUdELEtBQUksZ0JBTW5CLG9DQUFDLFdBQUQ7QUFBQSxJQUFTLFdBQVU7QUFBQSxLQUNqQixvQ0FBQyxzQkFBRCxTQUdKLG9DQUFDLGlDQUFELE9BQ0Esb0NBQUMsVUFBRDtBQUFBLElBQVEsS0FBSTtBQUFBLE1BQ1osb0NBQUMsVUFBRCxNQUFRLHlCQUNSLG9DQUFDLG9DQUFELE9BQ0Esb0NBQUMsdUJBQUQsT0FDMkMsb0NBQUMsMEJBQUQ7QUFBQTs7O0FDNUpuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWUscUJBQXNCO0FBQ2pDLFNBQ0ksb0NBQUMsT0FBRDtBQUFBOzs7QUNGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWUsb0JBQXFCO0FBQ2hDLFNBQ0ksb0NBQUMsT0FBRDtBQUFBOzs7QUNGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWUsbUJBQW9CO0FBQy9CLFNBQ0ksb0NBQUMsT0FBRDtBQUFBOzs7QUNGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXlCO0FBR2xCLElBQU0sU0FBeUIsTUFBTTtBQUMxQyxTQUFPLDRCQUFTO0FBQUE7OztBQ0psQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBMEM7Ozs7OztBQUkxQyxtQkFBa0M7QUFFM0IsSUFBTSxTQUF1QixNQUFNO0FBQ3hDLFNBQU8sQ0FBQyxFQUFFLEtBQUssY0FBYyxNQUFNO0FBQUE7QUFHdEIsaUJBQWlCO0FBQzlCLFFBQU0sbUJBQTBCO0FBQ2hDLFFBQU0sUUFBUSx5QkFBeUI7QUFFdkMsOEJBQVUsTUFBTTtBQWRsQjtBQWVJLFFBQUksT0FBTyxTQUFTLFNBQVMsU0FBUyxXQUFXO0FBQy9DLGtCQUFNLFlBQU4sbUJBQWUsU0FBUyxHQUFHLFVBQVUsT0FBTztBQUM1QyxrQkFBTSxZQUFOLG1CQUFlLFNBQVMsR0FBRyxVQUFVLE9BQU87QUFDNUMsa0JBQU0sWUFBTixtQkFBZSxTQUFTLEdBQUcsVUFBVSxJQUFJO0FBQUEsV0FDcEM7QUFDTCxrQkFBTSxZQUFOLG1CQUFlLFNBQVMsR0FBRyxVQUFVLE9BQU87QUFBQTtBQUFBO0FBSWhELFNBQ0Usb0NBQUMsT0FBRCxNQUNFLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUFRLFVBQ3RCLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUFPLHVEQUdyQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsSUFBVSxLQUFLO0FBQUEsS0FDM0Isb0NBQUMsdUJBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILFdBQVcsQ0FBQyxFQUFFLGVBQWdCLFdBQVcsbUJBQWtCO0FBQUEsSUFDM0QsZ0JBQWdCO0FBQUEsS0FFaEIsb0NBQUMsTUFBRCxNQUFJLGNBRU4sb0NBQUMsdUJBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILFdBQVcsQ0FBQyxFQUFFLGVBQWdCLFdBQVcsbUJBQWtCO0FBQUEsSUFDM0QsS0FBSztBQUFBLElBQ0wsZ0JBQWdCO0FBQUEsS0FFaEIsb0NBQUMsTUFBRCxNQUFJLGtCQUVOLG9DQUFDLHVCQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFXLENBQUMsRUFBRSxlQUFnQixXQUFXLG1CQUFrQjtBQUFBLElBQzNELGdCQUFnQjtBQUFBLEtBRWhCLG9DQUFDLE1BQUQsTUFBSSx1QkFJVixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxzQkFBRDtBQUFBOzs7QUN6RFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFrQztBQUNsQyxvQkFBb0M7QUFDcEMsZ0JBQTRCOzs7QUNGNUI7QUFBQSxrQkFBd0I7OztBQ0F4QjtBQUFPLElBQU0sT0FBTztBQUFBLEVBQ2hCLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQTs7O0FEQVYsb0JBQW1CO0FBQ25CLElBQU0sYUFBYSxRQUFRO0FBRTNCLElBQU0sVUFBVSxJQUFJLG9CQUFRLEVBQUUsTUFBTSxRQUFRLElBQUk7QUFvQmhELDBCQUEwQjtBQUN4QixRQUFNLFVBQVUsTUFBTSxRQUFRLFFBQzVCLDZDQUNBLGlDQUNLLE9BREw7QUFBQSxJQUVFLE1BQU07QUFBQTtBQUlWLFNBQU87QUFBQTtBQVFULDJCQUFrQztBQUNoQyxRQUFNLFFBQVEsTUFBTTtBQUdwQixRQUFNLFlBQVksUUFBUSxJQUFJLE1BQU0sS0FBSyxJQUFJLE9BQU8sU0FBbUI7QUFDckUsVUFBTSxFQUFFLE1BQU0sY0FBYyxRQUFRO0FBQ3BDLFVBQU0sVUFBVSxNQUFNLE1BQU0sY0FBYyxLQUFLLFNBQU8sSUFBSTtBQUMxRCxVQUFNLEVBQUUsU0FBUyxXQUFXO0FBRTVCLFdBQU8sRUFBRSxNQUFNLEtBQUssYUFBYSxNQUFNO0FBQUE7QUFHekMsU0FBTztBQUFBO0FBR1QsMEJBQ0UsTUFDQSxRQUNBLFNBQ0EsV0FDQTtBQUNBLFFBQU0sT0FBTyxPQUFPLEtBQUssU0FBUyxTQUFTO0FBRTNDLFFBQU0sY0FBYyxNQUFNLFFBQVEsUUFDaEMsNkNBQ0EsaUNBQ0ssT0FETDtBQUFBLElBRUUsTUFBTSxTQUFTO0FBQUEsSUFDZixTQUFTO0FBQUEsSUFDVCxTQUFTO0FBQUE7QUFJYixTQUFPO0FBQUE7QUFzQ1QsMEJBQ0UsTUFDQSxRQUNBLFNBQ0EsS0FDQSxXQUNBO0FBQ0EsUUFBTSxPQUFPLE9BQU8sS0FBSyxTQUFTLFNBQVM7QUFHM0MsUUFBTSxjQUFjLE1BQU0sUUFBUSxRQUNoQyw2Q0FDQSxpQ0FDSyxPQURMO0FBQUEsSUFFRSxNQUFNLFNBQVM7QUFBQSxJQUNmLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNUO0FBQUE7QUFlSixTQUFPO0FBQUE7QUFpQlQsa0JBQXlCLE1BQVc7QUFDbEMsUUFBTSxRQUFRLE1BQU0sUUFBUSxRQUFRLGtCQUFrQjtBQUFBLElBQ3BEO0FBQUE7QUFHRixTQUFPO0FBQUE7QUFHVCwyQkFBbUM7QUFDakMsUUFBTSxVQUFVLDZCQUFTLFNBQVMsR0FBRyxVQUFVO0FBRS9DLFFBQU0sVUFBVSxNQUFNLFFBQVEsUUFBUSxxQ0FBcUMsaUNBQ3RFLE9BRHNFO0FBQUEsSUFFekUsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBO0FBR1QsU0FBTztBQUFBOzs7QUQvS1Qsc0JBQXVCOzs7Ozs7QUFNaEIsSUFBTSxTQUF1QixNQUFNO0FBQ3hDLFNBQU87QUFBQSxJQUNMO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBS0wsSUFBTSxVQUF5QixZQUFZO0FBQ2hELFFBQU0sT0FBTyxNQUFNO0FBQ25CLFFBQU0sY0FBYyxLQUFLLElBQUksQ0FBQyxTQUFjO0FBQzFDLFVBQU0sRUFBRSw4QkFBZ0I7QUFDeEIsV0FBTztBQUFBO0FBR1QsU0FBTztBQUFBO0FBR0YsY0FBYyxFQUFFLE9BQU8sV0FBVyxNQUFNLFFBQWE7QUFDMUQsUUFBTSxlQUFlLDBCQUF1QjtBQUU1QywrQkFBVSxNQUFNO0FBQ2QsVUFBTSxlQUFlLEtBQUs7QUFFMUIsVUFBTSxRQUFRLGFBQWEsTUFBTTtBQUNqQyxVQUFNLFlBQVksNEJBQ2hCLElBQUksS0FBSyxNQUFNLElBQUksTUFBTSxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxLQUNuRDtBQUdGLGlCQUFhLFdBQVksY0FBYSxRQUFRLFlBQVksY0FBYztBQUFBLEtBQ3ZFLENBQUM7QUFDSixTQUNFLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFJLGVBQWU7QUFBQSxLQUN2QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBUyxRQUN2QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxLQUFLO0FBQUEsT0FFYixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFPLFlBQVksRUFBRSxPQUFPLGNBQWMsRUFBRSxPQUFPO0FBQUEsS0FFbkQsb0NBQUMsdUJBQUQ7QUFBQTtBQU9LLGtCQUFrQjtBQUMvQixRQUFNLE9BQU87QUFDYixRQUFNLGFBQWEsS0FBSyxLQUFLLENBQUMsR0FBUSxNQUFXO0FBQy9DLFdBQU8sRUFBRSxLQUFLLEVBQUU7QUFBQTtBQUVsQixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLFdBQVcsSUFBSSxDQUFDLFNBQWM7QUFDN0IsV0FDRSxvQ0FBQyxNQUFEO0FBQUEsTUFDRSxLQUFLLEtBQUs7QUFBQSxNQUNWLE9BQU8sS0FBSztBQUFBLE1BQ1osV0FBVyxLQUFLO0FBQUEsTUFDaEIsTUFBTSxLQUFLO0FBQUEsTUFDWCxNQUFNLEtBQUs7QUFBQTtBQUFBO0FBQUE7OztBRzNFdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQW1EO0FBQ25ELG9CQU9PO0FBQ1AsMEJBQTJCO0FBQzNCLG9CQUFtQjs7O0FDVm5CO0FBQUEsYUFBdUI7QUFFaEIsSUFBTSxjQUFjLENBQUM7QUFBQSxFQUMxQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsTUFNQSxxQ0FBQyxVQUFEO0FBQUEsRUFDRSxXQUFXLGdCQUFnQixXQUFXLGVBQWU7QUFBQSxFQUNyRDtBQUFBLEVBQ0EsTUFBSztBQUFBLEdBRUo7OztBQ2hCTDtBQUFBLGFBQXVCO0FBRXZCLHFCQUF3QixPQUFVO0FBQ2hDLFFBQU0sTUFBTSxBQUFNO0FBRWxCLEVBQU0saUJBQVUsTUFBTTtBQUNwQixRQUFJLFVBQVU7QUFBQTtBQUdoQixTQUFPLElBQUk7QUFBQTtBQUdOLGlCQUFtQyxNQUFXLFlBQXVCO0FBQzFFLFFBQU0sUUFBUSxBQUFNO0FBQ3BCLFFBQU0sQ0FBQyxhQUFhLGtCQUFrQjtBQUV0QyxRQUFNLGNBQWMsQUFBTSxlQUFRLE1BQU07QUFDdEMsUUFBSSxhQUFhO0FBQ2YsYUFBTyxLQUFLLFFBQVE7QUFBQTtBQUd0QixXQUFPO0FBQUEsS0FDTixDQUFDLGFBQWE7QUFFakIsUUFBTSxzQkFBc0IsWUFBWTtBQUV4QyxFQUFNLGlCQUFVLE1BQU07QUFDcEIsUUFBSSxLQUFLLFdBQVcsR0FBRztBQUNyQixxQkFBZTtBQUVmO0FBQUE7QUFHRixRQUFJLGdCQUFnQixRQUFTLGVBQWUsS0FBSyxTQUFTLGNBQWU7QUFDdkU7QUFBQTtBQUdGLFFBQ0UsT0FBTyx3QkFBd0IsWUFDL0IsdUJBQXVCLEtBQ3RCLE1BQUssd0JBQXdCLEtBQUssc0JBQXNCLEtBQ3pEO0FBQ0EscUJBQ0UsS0FBSyx3QkFBd0IsS0FBSyxzQkFBc0I7QUFHMUQ7QUFBQTtBQUdGLFFBQUksZUFBZSxNQUFNO0FBQ3ZCO0FBQUE7QUFHRixtQkFDRSxjQUFjLEtBQUssU0FBUyxjQUFjLGFBQWEsS0FBSztBQUFBLEtBRTdELENBQUMsYUFBYSxZQUFZO0FBRTdCLFNBQU87QUFBQTtBQUdGLGtCQUFrQixJQU90QjtBQVBzQixlQUN2QjtBQUFBO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFGYyxJQUdwQixrQkFIb0IsSUFHcEI7QUFBQSxJQUZIO0FBQUEsSUFDQTtBQUFBO0FBTUEsUUFBTSxDQUFDLGNBQWMsbUJBQW1CLEFBQU0sZ0JBQVMsV0FBVztBQUVsRSxFQUFNLGlCQUFVLE1BQU07QUFDcEIsUUFBSSxNQUFNLFFBQVE7QUFDaEI7QUFBQTtBQUdGLG9CQUFnQjtBQUFBLEtBQ2YsQ0FBQyxNQUFNO0FBRVYsU0FBTyxxQ0FBQyxPQUFELG1CQUFTLFFBQVEsZUFBZSxXQUFXO0FBQUE7OztBRmxFcEQsMEJBQXVCO0FBUXZCLGlCQUE2Qzs7O0FHckI3QztBQUFBLG9CQUEyQztBQUVwQyxJQUFNLEVBQUUsWUFBWSxlQUFlLG1CQUN4Qyw4Q0FBMkI7QUFBQSxFQUN6QixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixTQUFTLENBQUM7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVEsT0FBTztBQUFBO0FBQUE7Ozs7Ozs7OztBSDZCZCxJQUFNLFNBQXVCLE1BQU07QUFDeEMsU0FBTztBQUFBLElBQ0wsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBLElBQzNCLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTtBQUFBO0FBSXhCLElBQU0sU0FBeUIsT0FBTyxFQUFFLFNBQVMsYUFBYTtBQUNuRSxRQUFNLE9BQU8sTUFBTSxRQUFRO0FBRTNCLFFBQU0sT0FBTyxLQUFLLElBQUk7QUFFdEIsTUFBSSxTQUFTLGtCQUFrQjtBQUM3QixVQUFNLFdBQVcsS0FBSyxJQUFJO0FBRzFCLFVBQU0sU0FBUyxNQUFNLEdBQUc7QUFDeEIsV0FBTztBQUFBLE1BQ0wsTUFBTSxPQUFPO0FBQUEsTUFDYixNQUFNO0FBQUE7QUFBQSxhQUVDLFNBQVMsZUFBZTtBQUNqQyxVQUFNLFVBQVUsS0FBSyxJQUFJO0FBQ3pCLFVBQU0sTUFBTSxLQUFLLElBQUk7QUFDckIsVUFBTSxNQUFNLEtBQUssSUFBSTtBQUNyQixVQUFNLFFBQVEsS0FBSyxJQUFJO0FBQ3ZCLFVBQU0sWUFBWSxLQUFLLElBQUk7QUFDM0IsVUFBTSxPQUFPLE9BQU87QUFFcEIsVUFBTSxVQUFVLFFBQVEsUUFBUSxJQUFJO0FBQ3BDLFVBQU0sY0FBYyxNQUFNLFdBQVc7QUFHckMsUUFBSSxTQUFTLE9BQU87QUFFbEIsWUFBTSxPQUFPLE1BQU0sV0FBVyxPQUFPLFNBQVMsS0FBSztBQUNuRCxrQkFBWSxJQUFJLE9BQU87QUFDdkIsa0JBQVksSUFBSSxZQUFZO0FBRTVCLFlBQU0sSUFBSSxRQUFRLENBQUMsUUFBUSxXQUFXLEtBQUs7QUFFM0MsYUFBTyw0QkFBUyxpQkFBaUIsT0FBTztBQUFBLFFBQ3RDLFNBQVM7QUFBQSxVQUNQLGNBQWMsTUFBTSxjQUFjO0FBQUE7QUFBQTtBQUFBLFdBR2pDO0FBRUwsWUFBTSxPQUFPLE1BQU0sV0FBVyxNQUFNLFNBQVMsS0FBSyxLQUFLO0FBQ3ZELGtCQUFZLElBQUksT0FBTztBQUN2QixrQkFBWSxJQUFJLFlBQVk7QUFFNUIsWUFBTSxJQUFJLFFBQVEsQ0FBQyxRQUFRLFdBQVcsS0FBSztBQUUzQyxhQUFPLDRCQUFTLGlCQUFpQixPQUFPO0FBQUEsUUFDdEMsU0FBUztBQUFBLFVBQ1AsY0FBYyxNQUFNLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUsxQyxTQUFPLEVBQUUsTUFBTSxhQUFhLE1BQU07QUFBQTtBQUc3QixJQUFNLFVBQXlCLE9BQU8sRUFBRSxRQUFRLGNBQWM7QUFDbkUsUUFBTSxPQUFPLE9BQU87QUFFcEIsTUFBSSxTQUFTLE9BQU87QUFDbEIsV0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLE1BQ1osS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBO0FBQUEsU0FFRjtBQUNMLFVBQU0sWUFBWSxNQUFNO0FBQ3hCLFVBQU0sY0FBYyxVQUFVLEtBQzVCLENBQUMsU0FBYyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU87QUFFN0MsVUFBTSxjQUFjLFlBQVk7QUFFaEMsVUFBTSxVQUFVLE1BQU0sV0FBVyxRQUFRLFFBQVEsSUFBSTtBQUNyRCxRQUNFLENBQUMsUUFBUSxJQUFJLGVBQ2IsUUFBUSxJQUFJLGdCQUFnQixTQUM1QixDQUFDLFFBQVEsSUFBSSxRQUNiO0FBQ0EsY0FBUSxRQUFRLElBQUksVUFBVSxNQUFNLGVBQWU7QUFBQTtBQUdyRCxVQUFNLFVBQVUsUUFBUSxJQUFJO0FBRTVCLFdBQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLEtBQUssWUFBWTtBQUFBLE1BQ2pCLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFLSSxlQUFlO0FBM0k5QjtBQTRJRSxRQUFNLEVBQUUsWUFBWSxLQUFLLEtBQUssY0FBYztBQUM1QyxRQUFNLGFBQWE7QUFDbkIsUUFBTSxVQUFVO0FBRWhCLFFBQU0sT0FBTyxjQUFRLFNBQVIsbUJBQWM7QUFDM0IsUUFBTSxPQUFPLGNBQVEsU0FBUixtQkFBYztBQUUzQixRQUFNLFVBQVUsYUFDWixhQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSixRQUFNLFVBQVUsYUFDWixXQUFXLFVBQVUsV0FBVyxRQUFRLE9BQU8sS0FBSyxHQUFHLFNBQ3ZELFFBQVEsVUFBVSxRQUFRLFFBQVEsT0FBTyxLQUFLLEdBQUc7QUFHckQsTUFBSSxjQUFtQjtBQUd2QixNQUFJLE9BQXNCLGFBQ3RCLFdBQVcsTUFBTSxPQUFPLEtBQ3hCLFFBQVEsTUFBTSxPQUFPO0FBR3pCLFVBQ0UsS0FBSyxNQUFNLFVBQVUsSUFBSSxDQUFDLFNBQVM7QUFDakMsUUFBSSxLQUFLLFNBQVMsS0FBSyxLQUFLLFNBQVMsTUFBTTtBQUN6QyxVQUFJLE1BQXlCLEtBQUssTUFBTTtBQUV4QyxVQUFJLElBQUksU0FBUyxHQUFHO0FBQ2xCLFlBQUksS0FBSyxJQUFJLE1BQU0sR0FBRyxLQUFLO0FBQzNCLFlBQUksT0FBTztBQUFBO0FBSWIsa0JBQVksSUFBSSxNQUFNLElBQUksR0FBRyxRQUFRLEtBQUs7QUFDMUMsYUFBTztBQUFBO0FBRVQsV0FBTztBQUFBO0FBR1gsUUFBTSxDQUFDLE9BQU8sWUFBWSw0QkFBaUI7QUFDM0MsUUFBTSxDQUFDLElBQUksU0FBUyw0QkFBaUI7QUFDckMsUUFBTSxDQUFDLFFBQVEsYUFBYSw0QkFBaUI7QUFDN0MsUUFBTSxDQUFDLGFBQWEsa0JBQWtCLFFBQVEsQ0FBQyxZQUFZO0FBQzNELFFBQU0sQ0FBQyxNQUFNLFdBQVcsNEJBQWlCO0FBQ3pDLFFBQU0sQ0FBQyxRQUFRLGFBQWEsNEJBQWlCO0FBQzdDLFFBQU0sQ0FBQyxXQUFXLGdCQUFnQiw0QkFBa0I7QUFFcEQsUUFBTSxZQUFZLDBCQUF1QjtBQUN6QyxRQUFNLFlBQVksMEJBQXlCO0FBQzNDLFFBQU0sVUFBVSwwQkFBdUI7QUFDdkMsUUFBTSxjQUFjLDBCQUFnQjtBQUNwQyxRQUFNLFlBQVksMEJBQWdDO0FBQ2xELFFBQU0sZ0JBQWdCLDBCQUEwQjtBQUVoRCwrQkFBVSxNQUFNO0FBQ2Qsa0JBQWMsV0FBVyxTQUFTLFdBQVcsQ0FBQyxZQUN6QyxjQUFjLFFBQVEsV0FBVyxPQUNsQyxjQUFjLFdBQ2QsVUFBVSxXQUNULGVBQWMsUUFBUSxXQUFXO0FBRXRDLFFBQUksWUFBWSxTQUFTO0FBQ3ZCLFVBQUksU0FBUyxTQUFTLFNBQVMsU0FBUztBQUN0QyxrQkFBVTtBQUNWLG1CQUFXLE1BQU07QUFDZixvQkFBVTtBQUFBLFdBQ1Q7QUFBQTtBQUVMLGNBQVEsT0FBTyxTQUFTLFNBQVMsTUFBTSxLQUFLO0FBQzVDLGtCQUFZLFVBQVU7QUFDdEI7QUFBQTtBQUdGLFVBQU0sT0FBTyxhQUNULE1BQU0sVUFBVSxXQUFXLFFBQVEsT0FBTyxLQUFLLEdBQUcsU0FDbEQsTUFBTSxVQUFVLE1BQU0sUUFBUSxPQUFPLEtBQUssR0FBRztBQUNqRCxVQUFNO0FBQUEsS0FDTCxDQUFDLE9BQU87QUFFWCwrQkFBVSxNQUFNO0FBQ2QsUUFBSSxRQUFRLFNBQVMsa0JBQWtCO0FBQ3JDLGdCQUFVO0FBRVYsY0FBUSxRQUFRLFlBQVk7QUFBQTtBQUFBLEtBRTdCLENBQUMsTUFBTSxNQUFNO0FBRWhCLCtCQUFVLE1BQU07QUFDZCxRQUNFLGNBQWMsUUFFZCxPQUFPLFlBQVksaUJBQWlCLGNBQWMsR0FBRyxTQUNuRCxnQkFDRjtBQUNBLFVBQUksS0FBSztBQUNQLGtCQUFVO0FBQ1YsbUJBQVcsTUFBTTtBQUNmLG9CQUFVO0FBQUEsV0FDVDtBQUFBLGFBQ0U7QUFDTCxrQkFBVTtBQUNWLG1CQUFXLE1BQU07QUFDZixvQkFBVTtBQUFBLFdBQ1Q7QUFBQTtBQUFBO0FBQUEsS0FHTixDQUFDLFdBQVc7QUFFZiwrQkFBVSxNQUFNO0FBQ2QsaUJBQWE7QUFDYixhQUFTLFdBQVcsYUFBYTtBQUFBLEtBQ2hDLENBQUMsV0FBVyxPQUFPO0FBRXRCLFFBQU0sZ0JBQWdCLFlBQVk7QUFDaEMsa0JBQWM7QUFFZCxVQUFNLFFBQU8sTUFBTSxNQUFNLE9BQU87QUFDaEMsVUFBSyxNQUFNLFVBQVUsSUFBSSxDQUFDLFNBQVM7QUFDakMsVUFBSSxLQUFLLFNBQVMsS0FBSyxLQUFLLFNBQVMsTUFBTTtBQUN6QyxZQUFJLE1BQXlCLEtBQUssTUFBTTtBQUV4QyxZQUFJLElBQUksU0FBUyxHQUFHO0FBQ2xCLGNBQUksS0FBSyxJQUFJLE1BQU0sR0FBRyxLQUFLO0FBQzNCLGNBQUksT0FBTztBQUFBO0FBSWIsb0JBQVksSUFBSSxNQUFNLElBQUksR0FBRyxRQUFRLEtBQUs7QUFDMUMsZUFBTztBQUFBO0FBRVQsYUFBTztBQUFBO0FBR1QsV0FBTztBQUFBO0FBR1QsUUFBTSxhQUFhLFlBQVk7QUFyUmpDO0FBc1JJLFVBQU0sUUFBUSxpQkFBVSxZQUFWLG9CQUFtQjtBQUNqQyxVQUFNLFdBQVcsTUFBTSxNQUFNO0FBQzdCLFVBQU0sZ0JBRUosTUFBTSxTQUFTLEtBQUssVUFBVSxjQUMxQixRQUNBLGlCQUFVLFlBQVYsb0JBQW1CO0FBRXpCLFVBQU0sUUFBUSxNQUFNLGdCQUFnQixLQUFLLENBQUMsUUFBYTtBQUNyRCxhQUFPO0FBQUEsUUFDTCxPQUFPLElBQUk7QUFBQSxRQUNYLFdBQVcsSUFBSTtBQUFBO0FBQUE7QUFJbkIsWUFBUSxPQUVOO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFFTixTQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxNQUNBLE9BQU8sTUFBTTtBQUFBLE1BQ2IsV0FBVyxNQUFNO0FBQUEsT0FFbkIsRUFBRSxRQUFRO0FBQUE7QUFJZCxRQUFNLGFBQWEsTUFBTTtBQUN2QixpQkFBYTtBQUFBO0FBR2YsU0FDRSxvREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWixXQUFXLElBQ1Ysb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0RBQUMsdUJBQUQsT0FBYyxRQUNQLHVCQUF1QixZQUFZLHFCQUUxQyxXQUFXLEtBQ2Isb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0RBQUMsNkJBQUQsT0FBb0IsUUFDYixrQkFBa0IsWUFBWSxxQkFFckMsTUFDSixvREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvREFBQyxhQUFEO0FBQUEsSUFDRSxVQUFVLGdCQUFnQjtBQUFBLElBQzFCLFNBQVMsTUFBTSxlQUFlO0FBQUEsS0FFOUIsb0RBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTTtBQUFBLElBQ04sV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsU0FBUTtBQUFBLElBQ1IsUUFBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLEtBRVIsb0RBQUMsUUFBRDtBQUFBLElBQ0UsZUFBYztBQUFBLElBQ2QsZ0JBQWU7QUFBQSxJQUNmLGFBQWE7QUFBQSxJQUNiLEdBQUU7QUFBQSxPQUdMLE1BQ0Qsb0RBQUMsUUFBRCxNQUFNLGVBRVIsb0RBQUMsYUFBRDtBQUFBLElBQ0UsVUFBVSxnQkFBZ0I7QUFBQSxJQUMxQixTQUFTLE1BQU07QUFDYixxQkFBZTtBQUNmLGNBQVEsT0FDTixFQUFFLE1BQU0sa0JBQWtCLFVBQVUsTUFDcEMsRUFBRSxRQUFRO0FBQUE7QUFBQSxLQUlkLG9EQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU07QUFBQSxJQUNOLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLFNBQVE7QUFBQSxJQUNSLFFBQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxLQUVSLG9EQUFDLFFBQUQ7QUFBQSxJQUNFLGVBQWM7QUFBQSxJQUNkLGdCQUFlO0FBQUEsSUFDZixhQUFhO0FBQUEsSUFDYixHQUFFO0FBQUEsTUFFSixvREFBQyxRQUFEO0FBQUEsSUFDRSxlQUFjO0FBQUEsSUFDZCxnQkFBZTtBQUFBLElBQ2YsYUFBYTtBQUFBLElBQ2IsR0FBRTtBQUFBLE9BR0wsTUFDRCxvREFBQyxRQUFELE1BQU0sY0FHVixvREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBUyxLQUFLO0FBQUEsS0FDM0Isb0RBQUMsVUFBRDtBQUFBLElBQVUsUUFBUSxnQkFBZ0I7QUFBQSxLQUNoQyxvREFBQyxnQ0FBRCxNQUNFLG9EQUFDLHVCQUFEO0FBQUEsSUFBUSxLQUFLO0FBQUEsSUFBVSxLQUFLO0FBQUEsSUFBTztBQUFBLFFBR3ZDLG9EQUFDLFVBQUQ7QUFBQSxJQUFVLFFBQVEsZ0JBQWdCO0FBQUEsS0FDaEMsb0RBQUMsV0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsS0FBSztBQUFBLElBQ0wseUJBQXlCLEVBQUUsUUFBUTtBQUFBLFFBSXhDLGdCQUFnQixjQUNmLG9EQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsTUFBRztBQW5aeEI7QUFtWjJCLDhCQUFVLFlBQVYsb0JBQW1CLFdBQVc7QUFBQTtBQUFBLEtBRTdDLG9EQUFDLEtBQUQsTUFBRyxvRUFLUCxvREFBQyw0QkFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsVUFBVSxDQUFDLFNBQVM7QUFDbEIsZUFBUyxHQUFHLDRCQUE0QixLQUFLO0FBQUE7QUFBQSxJQUUvQyxVQUFVO0FBQUEsSUFDVixZQUFZO0FBQUEsSUFDWixjQUFjO0FBQUEsSUFDZCxXQUFXO0FBQUEsSUFDWCxLQUFLO0FBQUEsSUFDTCxXQUFXO0FBQUEsT0FHZixvREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvREFBQyxvQkFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLElBQU8sVUFBVTtBQUFBLEtBQy9CLG9EQUFDLFNBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLGFBQ0UsYUFBYSxVQUFVLFlBQVk7QUFBQSxJQUVyQyxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFFUCxvREFBQyxVQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsSUFDVixTQUFTO0FBQUEsSUFDVCxLQUFLO0FBQUEsSUFDTCxVQUFRO0FBQUEsS0FFUCxhQUFhLGdCQUFnQjtBQUFBO0FBUW5DLElBQU0sZ0JBQXdDLENBQUMsRUFBRSxZQUFZO0FBQ2xFLFNBQU8sb0RBQUMsT0FBRCxNQUFLLFdBQVEsTUFBTTtBQUFBOzs7QUlsYzVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQTRDO0FBQzVDLG9CQUErRDtBQUUvRCx1QkFBNEM7Ozs7OztBQUs1QyxpQkFBNEI7QUFFckIsSUFBTSxTQUF1QixNQUFNO0FBQ3hDLFNBQU87QUFBQSxJQUNMO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBS0wsSUFBTSxVQUF5QixZQUFZO0FBQ2hELFFBQU0sVUFBVSxNQUFNO0FBRXRCLFNBQU87QUFBQSxJQUNMLFNBQVMsUUFBUTtBQUFBO0FBQUE7QUFJZCxvQkFBb0I7QUFDekIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUE7QUFBQTtBQUtkLGtCQUFrQjtBQUN2QixRQUFNLFlBQVksMEJBQXVCO0FBQ3pDLFFBQU0sZ0JBQWdCLENBQUMsTUFBVztBQUNoQyxRQUFJLElBQUksS0FBSyxLQUFLLElBQUksRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFO0FBRXZELE1BQUUsV0FBVyxFQUFFLGVBQWUsSUFBSyxHQUFFLGVBQWU7QUFFcEQsUUFBSSxZQUFZLElBQUksS0FBSyxLQUFLLElBQUksRUFBRSxrQkFBa0IsR0FBRztBQUV6RCxRQUFJLFNBQVMsS0FBSyxLQUFPLE1BQUksYUFBYSxRQUFXLEtBQUs7QUFFMUQsV0FBTyxDQUFDLEVBQUUsa0JBQWtCO0FBQUE7QUFFOUIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBUyxLQUFLO0FBQUEsTUFDN0Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQVMsS0FBSztBQUFBLE1BQzdCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxJQUFTLEtBQUs7QUFBQSxNQUM3QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBUyxLQUFLO0FBQUEsTUFDN0Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQVMsS0FBSztBQUFBLE1BQzdCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxJQUFTLEtBQUs7QUFBQSxNQUM3QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBUyxLQUFLO0FBQUE7QUFBQTtBQUs1QixvQkFBb0IsRUFBRSxVQUFlO0FBQzFDLE1BQUksT0FBTyxJQUFJLEtBQUssT0FBTztBQUMzQixRQUFNLFVBQVUsMENBQW9CLElBQUksS0FBSyxLQUFLO0FBRWxELFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRCxNQUFLLE9BQU8sVUFDWixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFNLE9BQU87QUFBQSxJQUFVLFFBQU87QUFBQSxJQUFTLEtBQUk7QUFBQSxLQUM1QyxvQ0FBQyx3QkFBRCxTQUdKLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUssR0FBRyxPQUFPO0FBQUEsSUFBYyxLQUFJO0FBQUEsT0FFeEMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQVEsU0FBUSxTQUMvQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUE7QUFBQTtBQUtOLGdCQUFnQjtBQUM3QixRQUFNLE9BQU87QUFFYixRQUFNLFNBQWdCLDZCQUFNO0FBQzVCLFFBQU0sVUFDSixPQUFPLFVBQVUsSUFDYixPQUFPLE1BQU0sR0FBRyxLQUNoQixPQUFPLE1BQU0sR0FBRyxPQUFPLFNBQVM7QUFFdEMsUUFBTSxhQUFhLG1DQUFTLElBQUksQ0FBQyxZQUFnQjtBQUMvQyxXQUFPO0FBQUEsTUFFTCxLQUFLLFFBQU87QUFBQSxNQUNmLFVBQVUsUUFBTztBQUFBLE1BQ2QsY0FBYyxRQUFPO0FBQUEsTUFDckIsU0FBUyxRQUFPLE9BQU87QUFBQSxNQUN2QixNQUFNLFFBQU8sT0FBTyxPQUFPO0FBQUEsTUFDM0IsZUFBZSxRQUFPLE9BQU87QUFBQSxNQUM3QixZQUFZLFFBQU8sT0FBTztBQUFBO0FBQUE7QUFJOUIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxXQUFEO0FBQUEsSUFBUyxXQUFVO0FBQUEsS0FDakIsb0NBQUMsTUFBRCxNQUFJLDJCQUNKLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFVBQUQsT0FDQSxvQ0FBQyxVQUFELE9BQ0Esb0NBQUMsVUFBRCxPQUNBLG9DQUFDLFVBQUQsU0FVSixvQ0FBQyxXQUFEO0FBQUEsSUFBUyxXQUFVO0FBQUEsS0FDakIsb0NBQUMsTUFBRCxNQUFJLG9CQUNKLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLFdBQVcsSUFBSSxDQUFDLFlBQVc7QUFDMUIsV0FBTyxvQ0FBQyxZQUFEO0FBQUEsTUFBWSxRQUFRO0FBQUEsTUFBUSxLQUFLLFFBQU87QUFBQTtBQUFBO0FBQUE7OztBQzlIM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF5QztBQUVsQyxJQUFNLFVBQXlCLE1BQU07QUFDeEMsU0FBTyw0QkFBUztBQUFBOzs7QUNIcEI7QUFBQSxJQUFPLDBCQUFRLEVBQUMsV0FBVSxZQUFXLFNBQVEsRUFBQyxVQUFTLG1DQUFrQyxXQUFVLENBQUMsb0NBQW1DLHVDQUFxQyxVQUFTLEVBQUMsUUFBTyxFQUFDLE1BQUssUUFBTyxZQUFXLFFBQVUsUUFBTyxJQUFHLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLDJCQUEwQixXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sb0JBQW1CLEVBQUMsTUFBSyxvQkFBbUIsWUFBVyxRQUFPLFFBQU8sYUFBWSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyx1Q0FBc0MsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0JBQWUsRUFBQyxNQUFLLGdCQUFlLFlBQVcsUUFBTyxRQUFPLFFBQVUsU0FBUSxNQUFLLGlCQUFnQixRQUFVLFVBQVMsbUNBQWtDLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGtCQUFpQixFQUFDLE1BQUssa0JBQWlCLFlBQVcsUUFBTyxRQUFPLFdBQVUsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMscUNBQW9DLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGdCQUFlLEVBQUMsTUFBSyxnQkFBZSxZQUFXLFFBQU8sUUFBTyxTQUFRLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLG1DQUFrQyxXQUFVLFFBQVUsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTywyQkFBMEIsRUFBQyxNQUFLLDJCQUEwQixZQUFXLGdCQUFlLFFBQU8sY0FBYSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyw4Q0FBNkMsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFFBQU0sc0JBQXFCLEVBQUMsTUFBSyxzQkFBcUIsWUFBVyxnQkFBZSxRQUFPLFFBQVUsU0FBUSxNQUFLLGlCQUFnQixRQUFVLFVBQVMseUNBQXdDLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLDZCQUE0QixFQUFDLE1BQUssNkJBQTRCLFlBQVcsZ0JBQWUsUUFBTyxnQkFBZSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxnREFBK0MsV0FBVSxDQUFDLG9DQUFtQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyx5QkFBd0IsRUFBQyxNQUFLLHlCQUF3QixZQUFXLGdCQUFlLFFBQU8sWUFBVyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyw0Q0FBMkMsV0FBVSxDQUFDLG9DQUFtQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxtQkFBa0IsRUFBQyxNQUFLLG1CQUFrQixZQUFXLFFBQU8sUUFBTyxZQUFXLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLHNDQUFxQyxXQUFVLFFBQVUsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsV0FBUSxPQUFNOzs7QWpCYW5wRyxJQUFNLFFBQVEsRUFBRSxRQUFRO0FBQ3hCLElBQU0sU0FBUztBQUFBLEVBQ3BCLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosb0JBQW9CO0FBQUEsSUFDaEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixtQkFBbUI7QUFBQSxJQUNmLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosa0JBQWtCO0FBQUEsSUFDZCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixnQkFBZ0I7QUFBQSxJQUNaLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosNkJBQTZCO0FBQUEsSUFDekIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWiwyQkFBMkI7QUFBQSxJQUN2QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHlCQUF5QjtBQUFBLElBQ3JCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosc0JBQXNCO0FBQUEsSUFDbEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
