# UserZoom background questions.

1. Your online references. Sites that you come back to, timeand time again, for inspiration or guidelines.
2. The last 3-5 articles/decks/videos/tweets/podcasts that have managed to caught your attention, and a short explanation on why they impressed you.
3.  Any public resources (code, articles, open-source products, etc) you may have contributed to, if any.

---

## Your online references. Sites that you come back to, timeand time again, for inspiration or guidelines.

To be honest from the close of Google Reader (I really used a lot) I don't have a place where read my fav resources.
I'm subscribed to some Newsletters and I use to follow a lot of great developers, designers, UX experts, or product people on Twitter (or YouTube) to follow their updates and interesting tweets. Last week I started to use [Pocket](https://getpocket.com/).

In fact many of them are content creators, so just following their tweets they links to their Medium blogs, YouTube channels, and so on. I mean people like @dan_abramov, @acdlite (Andrew Clark), @midudev (Miguel A. Durán), @ossia (Quincy Larson), @ryanflorence, @kentcdodds…

Also, I follow regularity the tweet accounts and directly webpages like:

- [Smashing Magazine](https://www.smashingmagazine.com/)
- [SitePoint Blog](https://www.sitepoint.com/blog)
- [CSS Tricks](https://css-tricks.com/)
- [Awwwards](https://www.awwwards.com/)
- [A List Apart](https://alistapart.com/)
- [David Walsh Blog](https://davidwalsh.name/)
- [Wired](https://www.wired.com/magazine/)

And I know that I'm forgetting a lot of great resources...

By the way, because of this question I made a picture of my old books about programming, usability, design...

![My old books at my shared office](https://pbs.twimg.com/media/FGPwyz4XEAMt8Yy?format=jpg)

This remember me I was subscribed to [Net Magazine](https://en.wikipedia.org/wiki/Net_magazine). The close of that magazine was the end of an era.

At last but not least, I also check with regularity new APIs at API Rapid to check something cool to do on my free time. 

I have a personal project in mind (just started) right now to make a comparative between inflation across the years and months by country and the price raise of S&P500 (as the most valuable reference index) and gold.
This is intended to be just a personal tool to check in a glimp what happened if an amount of dollars/euros, which probably has been devaluated in X months/years, were inverted in S&P500 index or gold. It is a fun tool to do, but right now is paused as the only API to get inflation values is not complete, and only have values until 2019. You can take a look at [Cost of living](https://github.com/albertofortes/Cost-of-living) but take into account that is just a prototype, paused and incomplete.

___

## The last 3-5 articles/decks/videos/tweets/podcasts that have managed to caught your attention, and a short explanation on why they impressed you.

One of the lastest articles I read was [How To Protect Your API Key In Production With Next.js API Route](https://www.smashingmagazine.com/2021/12/protect-api-key-production-nextjs-api-route/)

It caught my eye due to usually I like to make quick experiments with APIs and most of them need API Key, which I used to stored at the FE. I like to use NextJS as framework for these purposes, and this article provide a quick and easy to do way to protect the API key using [NextJS API route pattern](https://nextjs.org/docs/api-routes/dynamic-api-routes).
NextJS allow us to write the API call at the server-side  so we can call the API without the fear of our key is being revealed on the client-side.


The second reerence I want to share with you is this post: https://twitter.com/carlosredondo/status/1465675212138106882

![Personas](https://pbs.twimg.com/media/FFcfQwVXwAAe8rN?format=jpg&name=large)

It is simple but so eloquent, as the tweet says, 'Personas' shouldn't be based on demographic data but users whose goals and characteristics represent the needs of a larger group of users.

Third one maybe is a bit old, but at November of this year (2021), was launched the early version of [the new React Documentation](https://t.co/ql9wyiBk30). I think is amazing, full of new examples and with a learn by doing approach, updated to React Hooks and a functional programming approach (no classes), with many interactive examples, visual diagrams, and challenges. It's not yet complete but really cool, and it's intended to replace the current documentation once is 100% over.

Next one I want t share it is the [Rapid API State of APIs 2021](https://stateofapis.com/?utm_source=twitter.com/Rapid_API), as every year it's a really good snapshot of the technology used right now. This year the survey was answered by more than two thousands developer in 130 countries.
One more time JavaScript is the favourite language followed by Python, Java, and PHP.
Another interesting points are that REST continues as the most used in production approach but decreasing respect 2020, meanwhile AsyncAPI and GraphQL are increasing.

And at least maybe the most remmarcable: [Remix](https://remix.run/). A new React framework from the creators of React Router.

![Remix framework](https://remix.run/img/og.1.jpg)

To be honest I'm not sure if this is a good news or not (joke), as we are introducing one more new framework to an already complicated stack, but taking a look to some videos, it seems like it comes as another great full stack frameworks to fight with NextJs.

[Ryan Florence dis a demo on YouTube](https://www.youtube.com/watch?v=wsJaUjd1rUo) few weeks ago. It promises to be a new framework focused on the user interface, primitives, and aimed backing to web fundamentals and conventions. It seems [it looks more similar to Ruby on Rails than to Next](https://marbiano.dev/into-remix/on-rails): routes are Remix primitives, you can nest routes, each route decides which React component to render. Routes can fetch data, respond to actions, load styles, etc. Also like RoR, Remix has conventions, named here as colocations, with the intention to place the code as close to where it is relevant: *"Routes have loaders to fetch data, actions to handle user interactions, and a React component for building the user interface. All colocated in the same file"*.

I'm still investigating this new tool, but it seems nice the way it manages routes and nested routes, error boundaries, so it can eliminate most of the loading states. Instead of fetch inside components as most of the web apps do, Remix prefetch everything in parallel before, it loads data in parallel on the server and sends a fully formed HTML document. Remix runs the action on the server side...
Anyway I'm still investigating this tool and I'm aimed to start a learning by doing project or tutorial.
