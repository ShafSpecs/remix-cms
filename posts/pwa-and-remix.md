---
id: 7
title: "Progressive Web Apps & Remix"
description: "A full-stack framework and Progressive Web powers, what could go wrong? Or rather, what could not go wrong? Let's take a mild dive into it and discuss a bit including somethings I've been working on."
date: 2022-02-18
slug: pwa-and-remix
image: "https://ucarecdn.com/cc867923-ca22-440b-b414-467ebb5714c2/rocket1.jpg"
published: true
---

A Progressive Web App (PWA) is a web app that is enhanced by progressive web technologies that help deliver an experience that is on par with native apps. Web Applications are easily discoverable compared to Native Apps, it's easier to visit a site than install an app. It's also easier to share a web link than to share an app online. 

But again, Native apps have a seamless experience thanks to their integration with the device's operating system. They also have offline capabilities and they can be opened with one tap.

PWA allows web apps to be created with these advantages also.

> *PWAs are just enhanced Web Applications, cool!*

Remix is a full-stack framework that combines the true, raw power of the web with modern web practices and the limitless possibilities of the server to create an unparalleled experience, for both the developer and the user.

> *Remix is a cool framework on steroids, 👍*

## 🚀 What happens if you combine both?

What if we could combine PWA's capabilities & Remix power in one app? A new Developer & User Experience 🤯!

Delivering the power of Remix to native devices with Progressive enhancements has always been a want for a lot of Remix developers. Remix power & reach has been held back in aspects like multi-platform development, etc. 

PWA in Remix is now possible with the standalone npm package I put together, [`remix-pwa`](https://github.com/ShafSpecs/remix-pwa) (*with great help from Remix's team member, [Jacob](https://github.com/jacob-ebey)*).
Remix PWA integrates PWA services into Remix with minimal impact on perfomance. 

Let's look at how PWA in Remix works and in the next article, build a simple PWA.

## 📱 Remix PWA

PWA in Remix is surprisingly similar to how other SPA frameworks implements it. Remix is an SSR framework, it handles everything on the server before relaying the information back to the user. Remix PWA mixes SSR and CSR a bit but with an SSR-first-but-Cache mentality. 

Remix PWA is able to cache not just the client side of things but also Server responses, providing a fallback when the app goes offline. The process is almost instantaneous thanks to a "no-network" detection module present in Remix PWA.

The service worker is registered in the main client bundle of Remix when the app is instantiated, and thanks to Remix, there is no overlap of server and client during that process. Allowing the Service Worker registration to be as seamless and effortless as SPAa but with the advantage of the server.

The Remix's Service Worker itself caches responses and documents alongside static assets that could be transitioned to seamlessly with Remix hooks and transition handling. When an app hits an error 500 wall due to offline status, Remix still navigates it safely to the nearest `ErrorBoundary` but the app still remains and cached data is still available till when connection is restored. After that, the cache is purged and the process begins afresh. 

Remix PWA also allows for a dynamic manifest. **This feature is still in experimental stages as I am still working on moving it out of it's current state and allowing an expansion**. I won't go into details of that yet as I am changing how that would work and the feature is still in it's early stages.

---

Thanks y'all for reading this week's article. I hope you are having a great time, `remix-pwa` is an awesome journey and learning experience for me. Let's do our part for the Open Source of tomorrow, no matter how small.

I would also like to give another shoutout to Remix official team member [Jacob](https://github.com/jacob-ebey) for his help and contribution towards PWA in Remix. That's it for this week peeps, have fun learning, don't forget to play and see you in the next one 👋! 
