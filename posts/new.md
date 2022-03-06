---
id: 2
title: Why Remix 💿?
description: Why Remix desc.
date: 2022-01-06
slug: why-remix
image: "https://ucarecdn.com/0a872f6c-4c15-49f5-bb13-9ea1370d7dd9/remixrun2.png"
published: true
---

In the the [first part](https://dev.to/shafspecs/intro-to-remix-41l7) of this post series (yes, it's now a series), we talked briefly about what Remix is and a little bit of what it adds to the web development eco-system as a whole. In this post, we will indulge ourselves more answering the question *Why Remix*, and why you should start using it today.

## <u>What does Remix 💿 bring to the table?:</u>

Remix is a server-side rendered (SSR) framework (*yes, just like Next.js and Sveltekit*). This implies that both the backend and the frontend can be made using a single Remix app. Unlike vanilla React, where data is fetched on the frontend and then rendered on the screen, Remix fetches data on the backend and serves the HTML directly to the user (Remix has no static support hence it requires a server...) Hold up, what's so special about all this?
**Because there is so much more**.

### Routing 🖇:

A number one advantage of Remix 💿 in my opinion. I've used several JS frameworks including React, Next.js and a little bit of Vue with some spices of here and there with regard to frameworks, and I can say none comes even close to how Remix single-handedly (no external packages included) handles it's routing. Remix makes use of something known as nested routing that simply means embedding a component route in another (paren route) which leads to much faster loading times

![Remix GIF](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xfsf53mncd5c0e88ag5b.gif)

And with this nested routing comes another goodybag, even though these components are nested in one another, they are all seperate entities that handle their own state and data. This leads to an extra decrease in page loading time due to the dynamic handling and fetching of these "routes" by Remix 💿 at the cost of nothing!

![Remix Loading Time animated](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bpgwv70adn9pw7pfbs6x.gif)

Yea! Now that's what we're talking about 😄.

### Error Boundaries and Handling 🚫:

I have written thousands of lines of code in React and Next.js mainly and I can say Error handling has always been a pain. It is something you don't always remember, breaks your entire site even if it's just a button component and even when you remember, it's just another hard task that's been added to your todos. 

With Remix, error handling is built-in. Wait a second, we actually have a framework where the maintainers realize errors would happen even in production stage? Hell, yeah!

With Remix, your errors don't break your site so your page doesn't need to be refreshed. And Remix handles errors while Server Rendering. Errors while Client Rendering. Even errors in your server side data handling. All those nasty errors finally in your hands and you can plan ahead of how to handle them just fine. Ah, Remix 😌.

### Transitions 🔄:

Another advantage Remix has (*yes, there is so much more* 🤤) is how it handles transition and loading states of your browser, this ia also handled single-handedly by Remix too! All you have to do is sit back and tell Remix what to do (or show) while your app is loading (*and grab a glass of iced tea to relax while you're at it*).

### Forms, Forms, Forms 📝:

Remeber those cringy moment when implementing forms, where for some weird reasons, `onClick` event just did nothing or your form data getting hanged somewhere between the input and the server? Well, Remix 💿 is here for that. By implementing functions to handle server-side operations (*known to some as `loader` and `action`*), Remix is able to eaasily deal and harness your form data with no need for Javascript involvement. *Wait, what!*, that's right, no Javascript is needed for your form to work. I guess this should be another segment of it's own but another thing Remix achieves is the fact that it totally removes that javascript-first motive that we have been seeing for a long time in our frameworks, hence, reducing the browser load tremendously leading to a happier user experience and a happier developer experience (*you might want to start by cutting down that outrageously long dependency list in your `package.json`*)

---

What's next in store for Remix? I don't know exactly but I can say it's good. The thing that excites me is that this is v1 of Remix, first release, and we have a bunch ton of features and improvements to be excited for. Can't wait to see what the future holds for the Remix community. I hope you finally agree with me about *why remix* and the good stuff that lay in store for it and web development as a whole. With that, I wish you happy reading and coding 👋. 