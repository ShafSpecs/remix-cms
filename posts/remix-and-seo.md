---
id: 4
title: "Remix and SEO: A Brief Guide"
description: Description
date: 2022-01-18
slug: remix-and-seo
image: "https://ucarecdn.com/10f15e2b-5754-43d2-9a0d-dd2866a466af/UntitledDesign1.png"
published: false
---

Search Engine Optimization is a feature lacking in a lot of today's frameworks, because pages are handled by the client in a lot of cases, search engines ususally don't have the means to access a page's data beforehand. This is something Remix takes care of easily.

## <u>How:</u>

Remix makes use of a special tag `<Meta />` that is stored in the root of your project (if you want SEO available, that is) and it is used *once*. 
```js
import { Meta, Outlet } from "remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  );
}
```

It accesses all meta information of your route by getting an exported "meta" function: 
```js
// A random route in your app

export function meta: MetaFunction () {
  return {
    title: "Something cool",
    description:
      "This becomes the nice preview on search results."
  };
}
```

The `meta` export would set the meta information of your route in a search browser.
And how does Remix handle the meta tags of several nested routes? Well, it accomplishes it by merging the tag information together hence removing the need to duplicate info in both parent and child route. 

There are also some special cases, as using a meta key of `title` returns a `<title>` tag (*sweet*).

---

That's the end of this *very* short article. I'm actually planning something worthwhile and I hope to release it to you guys soon. If you have any topic you would like a write-up on, tell me in the comments below. Like always, I wish you a happy learning and awesome reading 👋. 