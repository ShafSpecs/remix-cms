---
id: 8
title: "Creating a PWA with Remix"
description: "Last week, we dwelled on the potential of cross-platform abilities and a web framework on steroids put together and the results were a bit elaborate. Let's go ahead this week and create a mock app by ourselves using a simple e-commerce app to showcase some of what is possible"
date: 2022-03-03
slug: creating-a-pwa-with-remix
image: "https://ucarecdn.com/4b38b97d-5214-43ef-905f-e595c4b817e6/matthewsichkarukh94pzyhtbrw.jpg"
published: true
---

Welcome to this week's article post, peeps. This week, we would be creating a small PWA app with Remix and `remix-pwa`. In the last article in this series, we talked about PWA in Remix a little bit and in this article, we would try and put that short talk together in an app. 

## <u>Getting Started:</u>  

To begin creating our app, we would navigate to the folder we want to create our Remix app in, my favourite directory is Documents (*always Documents folder*). Open up your terminal and using the `cd` command, navigate to your chosen directory. After that, install your Remix app by doing:
```sh
npx create-remix@latest
```
I am using "Vercel" as my deployment option for this project and would showcase the build after. I would also be using TypeScript as my language in this project (*always TS*). After installing, navigate into that folder and use the command `code .` to open it in your editor (*if you're VS code, which you should, btw*)

We are not done with the commands yet! Run the `npm` command:
```sh
npm run postinstall
``` 

Now you can sit back and smile, good job you have set up your Remix app! You are nowhere done. Yet. Before we start editing our files, let's install `remix-pwa`. Run the command:
```sh
npx remix-pwa@latest
```
and wait for the installation to finish. Halfway through, you would be required to choose the language you are using for this project
![remix-pwa options](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w5o9c7gwestt9t1qxvn3.png)
After selecting your chosen language, the remaining scripts would run and you are done with the installation. Now you have a PWA skeleton set up, and awaiting you!

Still one more scripts to run though, and that's for the dependencies needed, run:

```sh
npm run pwa
```
and you are finally done. Awesome job!

## <u>Inspection:</u>

Let's inspect our files a bit. If you've created a Remix app before, you would notice some subtle differences. First, we've got a new file in the app folder, `entry.worker.[j/t]s`. We also have a new folder, `resources` with a manifest file within the routes directory.  Add the following code to the `<head>` of your app, right above the `<Links />`:
```js
<link rel="manifest" href="/resources/manifest.json" />
```
You could go on to inspect the files, I won't talk about their contents right now, cause I expect them to change somewhat in the coming days.

To completely set it up, import `React` into your root file and head into the `import {...} from "remix"` statement at the top of the root file and make sure `useLocation` and `useMatches` are imported too (*You have to manually do that*).

Don't worry about upgrades to remix-pwa, you could always do `npm i --save-dev remix-pwa` after every major upgrade. Even if you choose not to upgrade, your app would work just fine.

That's that then, let's start. Run 
```sh
npm run dev
``` 
and let's watch our PWA code to life! 

## <u>Start Tooling:</u>

Open your browser and navigate to `localhost:3000`, Remix's default templates are open. But that's not what we are after, open your devtools and navigate to the "Application" tab

![SW](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hs4pwg938mijl1o66qnv.png)

Cool! We have our `manifest.json` file and also service workers up and running. Let's not stand and stare all day! Time to create our App.

> *This is a redo of the short "Remix App tutorial" I published last week*

I would be creating a fake e-commerce app complete with PWA features using the [Fake Store API](https://fakestoreapi.com/). I also won't show all my code steps but highlight my significant changes and decisions.

Let's get started. The first thing I love to do when creating an app is to pick a colour scheme, that allows me to easily visualize designs liberally within a set colour boundary. I love using [Coolors](https://coolors.co/) to generate my palettes. I would also be using a purple scheme for this one
![Palette](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v1oumzkfrqury1o62jao.png)
 
After that, I head over to [Figma](https://figma.com) to create my App icons and get the right resolutions I need. (*32x32, 48x48, 96x96, 120x120, 196x196, 512x512* px)

> *Thanks to pngtree for the icons too!*

![App icons](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bikx7hilxi6hiw1qdchj.png)
  
## <u>Building Time!</u>:

I have created the basic apps and routes with Remix already. We have 3 major routes, a Home page, a product page and finally a category page. Quite a Simple layout.

![Home Layout](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e6zkvcf15jjtrxk01kqs.png)
> Homepage Layout (*not the best of designs, it's a fake store anyway*)

Let's start talking about our PWA and customizing it.

First thing, I would edit the `manifest.json` file. We change our `name` and `short_name`. My app is called `Remix Fake Store`. Our short name would be `Fake Store`. The `start url` would be "/" cause our homepage would be the landing page of the app. `display` would be left as `standalone` because we want our app to have its unique interface. Our shortcuts would be a single shortcut, and that's to the homepage 😅.
```js
shortcuts: [
        {
          name: "Homepage",
          url: "/",
          icons: [
            {
              src: "/icons/icon-96x96.png",
              sizes: "96x96",
              type: "image/png",
              purpose: "any monochrome",
            },
          ],
        },
      ],
```

Finally, I set the icons to my customized icons and set the theme and background colour.

![Shortcut](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8chdzvegpfggnd6bxfaj.png)

> *Our shortcut looks good, we don't have much options anyway* 

I think our manifest is good to go. Another thing I want to add is `Web Share` feature. This allows us to share details straight from our app to supported apps. In my case, I would be sharing product links to other apps. We can handle that with `WebShareLink` API present in `remix-pwa`.

I create a button to handle the event and trigger the share API on click

```tsx
import { WebShareLink } from "~/utils/client/pwa-utils.client";

<button 
  className="share" 
  onClick={() => WebShareLink(window.location.href, `${data.title}`, `${data.description}`)}
>
   <BsShareFill />
 </button>
```

![Share API](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8wp9oqeu2uxzmvbnc44a.png)
 
Awesome! Now we can share products with other apps on our devices including native devices. Let's do something ~~naughty~~ next, we would send notifications to our users at a random time about a new product and when they click it, it opens up that project.
Since Fake Shop API can't edit its database, we would send random products to them. (You would use real products in your app)

We would use the Notifications API and send the message at a random time. Let's go

```ts
const [random, setRandom] = useState<number>(0);
  useEffect(() => {
    const randomNumber = Math.random() * 30000;
    const randomProduct = Math.random() * (data.length - 1);
    setTimeout(() => {
      setRandom(data => data + 1)
      SendNotification("Remix FakeShop", {
        body: `New Item Here! Check it out \n${window.location.href}products/${data[randomProduct]?.id}`,
        silent: false,
        image: data[randomProduct]?.image,
        badge: "/icons/icon-48x48.png",
        icon: "/icons/icon-48x48.png",
      });
    }, randomNumber * 1000);
  }, [random]);
```

I defined a random time (30000 seconds) in which the notification can be sent to the user, and I also defined a random state that changes every time a notification is sent. That means a notification is sent randomly to our user between every 0 seconds and 30000 seconds that contains a random product.

> In a real app, you would want to handle this via the server (Push API).

All this while, we've been testing our app in Chrome. Let's install our app and have a look!

![Installed App](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/61mrwvgpesjmfi3e7xqe.png)
 

![Our App!](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5pnw0omm4pw0sryx2mdg.png)
 
Let's add a navigation button to our App so users can move about from within the app.

![Back Navigation](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eg05ol8rbpaox7jk5vtz.png)
 
Looks much better. Let's add some optimistic UI to make our App a bit more friendly.

![Trasition](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/atbbykj6e2p9n85k0kyr.png)
 
> *Loving those transitions!* 😄
> *PS.: I did change them to something more appealing later*

Ok, let's deploy our App and re-cap a bit.

We created a Mock E-commerce app with Progressive Web Enhancement features including Share API and Notifications API. The site is fast and transitions make things look more like home. Lastly, it was fun to make.

Personally, building Remix sites before was fast 🔥 but there is something about adding PWA features that makes it even more appealing. Another interesting thing is that we didn't utilize up to 10% of `remix-pwa` features, yet we see & feel a big difference from our everyday web apps. I feel very happy contributing to the future of Open-Source and would continue to actively work on `remix-pwa`. I feel Progressive Web is the future of the Web and throwing Remix into that future would make for an exciting one yet! Can't wait to see what the future holds

---

That's this week's article peeps. Fun to write and fun to make. The code can be found on [github](https://github.com/ShafSpecs/Remix-FakeShop) and the site itself can be viewed on [https://remix-fakeshop.vercel.app](http://remix-fakeshop.vercel.app/). If you have any questions, feel free to ask them. This week's outro would be short 😆. Enjoy yourselves peeps and always remember to give something back, for all your achievements, milestones, support. Give something back to those that made it possible. Till next time 👋
