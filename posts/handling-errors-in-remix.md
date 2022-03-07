---
id: 3
title: "Handling Errors in Remix: A Guide"
description: Short description
date: 2022-01-10
slug: handling-errors-in-remix
image: "https://media.istockphoto.com/photos/computer-error-picture-id1222806141?k=20&m=1222806141&s=612x612&w=0&h=GoODCHnR0mSefDBLWJpnqVnfRKH9ttdYPO0-KEYbb7w="
published: true
---

Errors are an embedded part of our lifecycle in programming and like it or not, you run into plenty. With Remix 💿, things have been simplified a great deal but, by how much? Welcome to Error handling in Remix where we would cover how to address common errors we run into and how to use Remix to handle them.

## <u>404 Errors & Similar 🚫:</u>

One of the most common errors you would see when working with remix is the 404 error, thrown by the server when the specified route isn't found. There are two reasons this can happen in Remix: 

1. The URL requested by the user isn't found on the server.
2. Your `loader` function didn't find any data.

Remix handles the misplaced route issue well without needing you to do anything (👏) but you would have to go about handling the second one yourself. But don't worry, Remix got you covered most of the way!

![Error 404](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8i6q4tzy3ybnqmle7uvo.png)
 
> Default Error Page of a misplaced route

Let's inspect some code and get our hands greasy. Let's go over what a "loader" is in a jiffy. So, a loader function is a function that will be called on the server before rendering happens to provide data to the route. 

*Each route has their loader, so each route handles their calls, responses, errors independently and asynchronously* 🔥.

This function is only ever run on the server. On the initial server render it will provide data to the HTML document. On navigations in the browser, Remix will call the function via fetch. This means you can talk directly to your database, use server only API secrets, etc. A seperate article would be coming out soon on the server-side things of Remix, this article would also be updated to include it for further info.

Throwing an error from a loader can be handled from inside the loader itself, take the following as an example:
```js
export function loader ({ param }) {
const page = await db.post.findOne({
    where: { index: param.index }
});

  if (!page) {
    throw new Response("Not Found", {
      status: 404
    });
  }

  return page;
}
```

This is a simple loader function where we get a post's index from a database (*somewhere, I hope*) and we return it to be consumed in that route. It is very possible that page won't be found cause our `params` argument was a hoax and so, nothing was fetched. In that case, we throw an error of status of `404`. *Wait, just that?*. Not really, when the error is thrown, it is "intercepted" by a function in the Remix's app route called `CatchBoundary`.

It is simply a function that runs when a react component or a loader throws an error (*Nice planning ahead, Remix*)

```js
import { useCatch } from "remix";

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h1>Caught</h1>
      <p>Status: {caught.status}</p>
      <pre>
        <code>{JSON.stringify(caught.data, null, 2)}</code>
      </pre>
    </div>
  );
}
```

The catch boundary extends beyond just `404` errors, `403`, `402` just to mention a few other errors are also handled by the CatchBoundary. Now this is very awesome cause it means we can handle the different errors with a wanky style and still have them handled by one relatively short function.

```js
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

return (
  <Document title={`${caught.status} ${caught.statusText}`}>
      <div>
         <div>
            <h1>
               You&#x27;re alone here
            </h1>
            <p className='mt-4 text-white'>
              {message}
            </p>
            <h3>
               Go back Home
            </h3>
            <div>
             {caught.status}
            </div>
           </div>
         </div>
      </div>
   </Document>
  );
}
```

> Too much `<div>`s 😅

Take this somewhat long code snippet (*with no styling*), we make use of a `switch` statement to loop through the errors (it can be extended and customized easily too) and return something based on the error. I used 404 error as the scapegoat in this section but the same applies to similar errors that occur in this manner, either an error thrown from the server or a route or component linking, etc.

We also notice a `useCatch()` function lurking in the corner, well, it's a function for simply handling the Error object thrown and allowing us to destructure (I prefer the word, *dissect*) the Error object.

But that isn't just the end of it, remember I [said](https://dev.to/shafspecs/intro-to-remix-41l7) Remix routes can handle themselves independently including Errors without bringing down the entire page/site? Well, turns out it's with CachBoundary too. All that needs to happen is for the component to actually contain it's own CatchBoundary function and voila! You are handling it **in** that function. Take the first code snippet we wrote, we can add it's own CatchBounday to get an error in that component only:

```js
export function loader ({ param }) {
const page = await db.post.findOne({
    where: { index: param.index }
});

  if (!page) {
    throw new Response("Not Found", {
      status: 404
    });
  }

  return page;
}

export function CatchBoundary() {
  const params = useParams();

  return (
    <div>
      <h2>We couldn't find that page!</h2>
      <Form action="../create">
        <button
          type="submit"
          name="Post Index"
          value={param.index}
        >
          Create {param.index}?
        </button>
      </Form>
    </div>
  );
}

export default function Page() {
  return <PageView page={useLoaderData()} />;
}
```

To straighten some new terms up there, `useParams()` allow us to access the parameters of our current URL and we used the same function as before only added a Catch Boundary to the route.

**Thrown errors are always handled by their nearest CatchBoundary function**, so you can dynamically choose to shut down a whole section of a page or keep the page running, your call! There you go, customization in your hands, browser is happy, user is happy, developer is happy and SEO is happy, and no one gets grumpy. Everyone is happy. 

## <u>Unforseen, Surprise Errors 💥:</u>

Errors like this sometimes happen, thrown from the server or the browser or even a `loader`, and your site goes puff. In Remix, these nasty errors are caught by Remix 🥳 and then, it's up to you to deal with them. So, let's go deal with 'em errors.

Remix has a function called `ErrorBoundary` that is displayed when the an uncaught error is thrown. It has *some* principles of `CathBoundary` function in the sense that the error UI would be displayed in the nearest `ErrorBoundary` and the rest of the site would keep running

```js
export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Something weird happened...</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* Your Error UI comes here */}
        <Scripts />
      </body>
    </html>
  );
}
```

The error that is thrown would be caught here and the ErrorBoundary function would be mounted in it's place. If for whatever reason that I can't explain, your button component throws an uncaught server error, the nearest error boundary would catch it and render itself in place of the component.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8zgjc8kuici1cyftrjup.png)

Take a look at this image, we are on the route: http://example.com/sales/invoices/102000. Our `102000` error caught an unexpected error. The invoices route has an ErrorBoundary function that does the catching, renders itself and Voila! Our site is still up and the error has been handled.

---

That is the end of this article, if you guys want to get active with Remix, why not start now? It's as easy as spooling up a codesandbox, no need for preconfiguration and setup. Tell me what you guys think in the comments or if you have any addition or correction, not only would you improve yourself, but benefit others. Till then, like always, I wish you guys a happy learning experience and happy reading 👋.