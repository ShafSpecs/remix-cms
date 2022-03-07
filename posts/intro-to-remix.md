---
id: 1
title: "Intro to Remix 💿"
description: Description
date: 2022-01-05
slug: intro-to-remix
image: "https://ucarecdn.com/8a55f300-8b4f-4285-89a1-b707c02855b6/remixrun.png"
published: false
---

# 🔰 Introduction:

This article is just an explanation and summary of *what* Remix is. You might have heard of the wonderkid framework that is taking React communities by storm, less than 3 months old, approx. 27K followers on Twitter, 10.3K stars on Github and they say it is *good* with a capital 'G'. 

What is it? And where do I find resources online besides the docs? Well, you are at your destination. This is a brief summary of Remix and what **it is.**

You could say this a theory article, so before you go opening VS Code, we aren't writing any code here, at least not in this article. The reason I decided to write this is due to the several misinformation about Remix which are going around in communities and they just keep getting weirder. 

> ...[@remix-run](https://twitter.com/remix_run) is the same as [@reactjs](https://twitter.com/reactjs) with just a different syntax
                                          
-Anonymous Twitter User



> ...[@nextjs](https://twitter.com/nextjs) is used for building todo apps, and from what I see, Remix is no different.

-Anonymous Discord User



> [@remix-run](https://twitter.com/remix_run) is a fullstack framework, meaning it is like React that renders to the Virtual DOM at the front and it is like Node.js at the back

-Anonymous Discord User


There are many more outrageous info and quotes like these (these are all true quotes!) and besides a handful of communities and expert developers, there aren't really any resource or reference out there to tell what's true from not true. Hopefully, that can change in the near coming future.

# What's Remix 💿?

A one-line answer, Remix is a full-stack web framework. To explain what a full-stack framework and what is soo special about it is:

1. A server framework 📶
2. A browser framework 🌍
3. A compiler ⚙
4. A server-side HTTP handler 📡

### <u>1. Server-side framework 📶:</u>

To understand what a server-side framework is, let me introduce you to the concept of MVC. MVC is is a pattern in software design commonly used to implement user interfaces, data, and controlling logic of an application. The full meaning of MVC is *Model*-_View_-*Controller*, and is a pattern that emphasizes a separation between the software’s business logic and display (UI).

Let's take a look at an example to further understand what MVCs really are: Imagine a simple shopping list app. All we want is a list of the name, quantity and price of each item we need to buy this week. Below we'll describe how we could implement some of this functionality using MVC.


![MVC example](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2w0ltua0i6bmi75lili2.png)

> Image sourced from [MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/MVC)


#### **The Model**

The model defines what data the app should contain. If the state of this data changes, then the model will usually notify the view (so the display can change as needed) and sometimes the controller (if different logic is needed to control the updated view).

Going back to our shopping list app, the model would specify what data the list items should contain — item, price, etc. — and what list items are already present.

#### **The View**

The view defines how the app's data should be displayed.

In our shopping list app, the view would define how the list is presented to the user, and receive the data to display from the model. It is the frontend endpoint that your users would see (UI)

#### **The Controller**

The controller contains logic that updates the model and/or view in response to input from the users of the app.

So for example, our shopping list could have input forms and buttons that allow us to add or delete items. These actions require the model to be updated, so the input is sent to the controller, which then manipulates the model as appropriate, which then sends updated data to the view.

You might however also want to just update the view to display the data in a different format, e.g., change the item order to alphabetical, or lowest to highest price. In this case the controller could handle this directly without needing to update the model. Whichever way, the controller is the first step outside your app's UI that accepts all inputs/changes from the user and notifies the model with the changes according to a specific criteria (logic).


Examples of server-side MVC frameworks include Laravel, Meteor, Ruby on Rails, etc.

Now that you have an idea about MVC, think of Remix as the view and controller but it leaves the model up to you. Meaning the schema (layout) of your data, databases, ORMs, etc. are left up to you the developer to tweak according to your taste and needs.

Another thing Remix does is unifying the view and the controller instead of seperating them as two different entities. So, the developer can simultaneously set up both the view (UI) and controller (APIs, fetch, data logic, etc.) in one codebase (in one project!)

Most server side frameworks are "*model focused*" - A controller manages multiple URLs for a single model. Remix on the other hand, is *UI focused*.

Remix routes can handle an entire URL or just a segment of the URL. When a route maps (points) to just a segment of the URL, the nested URL segments become nested layouts in the UI. In this way, each layout (view) can be its own controller and then Remix will aggregate the data and components to build the complete UI. To better undersatnd all these *tech-talk*, take a look at the GIF below:

![Layout GIF](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bbfdsdbgw6v2useccox0.gif)

Each URL segment is a seperate layout that inherits the general layout of it's parent. The reason I say inherit is due to the fact that it is nested in it's parent route and uses the page layout of the parent. That being said, it is it's own controller. Each URL segment (route) is it's own controller, it handles it's own data-fetching, error handling, etc. itself (independently)

More often than not, a Remix route module can contain both the UI and the interactions with the models in the same file, which leads to really nice developer ergonomics and productivity.

If you're not familiar with traditional back end web frameworks, you can think of Remix routes as React components that are already their own API route and already know how to load and submit data to themselves on the server. (*Amazing!*)

### <u>2. A Browser Framework 🌍:</u>

Once Remix has served the document to the browser, it "hydrates" the page with the browser build's JavaScript modules.

<u>What is hydration?</u> Hydration refers to the process of adding the JavaScript behavior back into the compiled HTML in the page when the HTML renders in the browser. 

Now that, is a way to speed up your site greatly. But it doesn't stop there, when the user clicks a link, instead of making a round trip to the server for the entire document and all of the assets, Remix simply fetches the data for the next page and updates the UI. 

This has many performance benefits over making a full document request:

1. Assets don't need to be re-downloaded (or pulled from cache)
2. Assets don't need to be parsed by the browser again
3. The data fetched is much smaller than the entire document (sometimes orders of magnitude)

To understand this point better, refer back to the GIF above:

We see our current URL: `example.com/sales/invoices/102000` and we see how Remix breaks down the site into small, bite-sized chunks that load simulataneously. Imagine we want to navigate to `example.com/sales/subscriptions/302900`, in our normal front-end framework, we request the new URL and the server responds with the page, the **whole page**. It takes time to load `example.com`, then the "sales" route, etc. And God help us if caching is disabled and our page is UI heavy (lots of animations, designs,transitions, etc.). In Remix, because the only route changing is `invoices/102000` => `subscriptions/302900`, the server doesn't need to re-fetch the entire document, just the segment it needs *because they all share the same layout*. This speeds up page load because the data fetched is obviously smaller, thus the Time-To-Interact (TTI) is much smaller which leads to a happier user experience.

Remix can also prefetch all resources for a page when the user is about to click a link. The browser framework knows about the compiler's asset manifest. It can match the URL of the link, read the manifest, and then prefetch all data, JavaScript modules, and even CSS resources for the next page. This is how Remix apps feel fast even when networks are slow.

### <u>3. A compiler ⚙:</u>

The compiling aspect is actually the first step of every, and any Remix app and what it does is:

1. To create a configurable server HTTP handler, that includes all routes (URL routes) and modules (external packages, etc.) together to be able to render on the server and handle any other server side requests for resources.
2. A browser build. This includes automatic code splitting by route, fingerprinted asset imports (like CSS and images), etc. Anything needed to run an application in the browser
3. An asset manifest. Both the client and the server use this manifest to know the entire dependency graph. This is useful for preloading resources in the initial server render as well as prefetching them for client side transitions. This is how Remix is able to eliminate the render+fetch waterfalls so common in web apps today.

### <u>4. HTTP Handler 📡:</u>

While Remix runs on the server, it is not actually a server. It's just a handler that is given to an actual JavaScript server.

It's built on the *Web Fetch API* instead of Node.js. This enables Remix to run in any Node.js server like Vercel, Netlify, Architect, etc. as well as non-Node.js environments like like Cloudflare Workers and Deno Deploy.

---

I have used Remix personally and I can say it's been quite the journey, I've been building some open-source projects with Remix and some open-source resources for Remix I would share when I can finish a good portion of it. What do I think? Should you or should you not use it? Firstly, I think Remix is the beginning of a new dawn in web development. Remix was developed by the team that created React Router so I can confidently say that we are in good hands. You should definitely try it out. In the coming days, I would try and regularly post tips, tricks and maybe a full-blown tutorial. Remix has an official [Youtube Channel](https://www.youtube.com/channel/UC_9cztXyAZCli9Cky6NWWwQ), you should definitely check it out. And if you don't mind a full blown course, [@kentcdodds](https://twitter.com/kentcdodds) did a full [6 hour](https://www.youtube.com/watch?v=hsIWJpuxNj0) tutorial on Remix covering A-Z. He is a great guy too, if you're on Twitter, give him a follow. Second question, should you use Remix? It depends, if you are creating a calculator app that has just buttons and an output screen and just simple maths calculations with 0 data-fetching, async backend operations, etc. Then no, for that project, React would be more than enough. If it's something that includes routing, nested layouts, data fetching, etc. Then you can definitely try out Remix. With that, I wish you happy learning and hunting 👋.

---

<u>References & Resources:</u>

1. [Remix Docs](https://remix.run/docs/en/v1)
2. [MDN Docs](https://developer.mozilla.org/en-US/)
3. [Twitter](https://twitter.com/home)
4. [Official Remix Discord](https://discord.gg/DBRRUV5j)
