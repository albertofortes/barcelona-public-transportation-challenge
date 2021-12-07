# Barcelona Public Transportation Challenge

![Barcelona Public transportation screenshot](https://raw.githubusercontent.com/albertofortes/barcelona-public-transportation-challenge/main/public/images/barcelona-challenge.png?token=AALAU7C5OWQPX42LFQROUTDBV4YT6)

You can take a look at: https://naughty-darwin-55ed0f.netlify.app/

The repo link at Github: https://github.com/albertofortes/barcelona-public-transportation-challenge

### Dependecies

- React 17
- NextJS 12
- TypeScript 4.5
- Apollo Client 3.5 (I didn’t use Redux for this challenge)
- GraphQL 16
- Material UI + Emotion
- Some SASS for material UI overrides. The rest of the styles are CSS in JS. I'm comfortable with both. Both have their pros and cons.
- [Google Map React component](https://www.npmjs.com/package/google-map-react)

### Data fetching strategy

I choose a static site generation (SSG) with getStaticProps as the site data won't change frecuently. The HTML is generated in build-time and reused for each request so a production build, every request is going to reuse that statically generated HTML file.
Pros of this strategy are that the site is always online and a faster initial load. Cons are that this solution needs to rebuild the data upadted so it is applicable only fo simple sitrs. But in this case I think this is a good example of "use case".
Using this SSG strategy we can reduce the complexity of Redux, but we have to say that Reduc became very intuitive and easy to manage with Toolkit. And also we reduce a lot the use of state management to show data.
I've used SSG strategy for many microsites and prommotional pages, even Headless CMS for an old customer I had until mid 2021, due to their content almost never were updated.

Probably we would expect that I choosed the most common data fetching approach: Client-Side rendering, fetching and storing data with React Hooks or Redux. But the initial load of the page is a bit slow and the comms with the server happens in the run-time. In case of need, I can provide any other simple experiments and web apss using react Hooks or Redux (Toolkint for the newest).

### Metro Lines

- Getting all the lines with getStaticProps() and Apollo. It tooks more sense to me do an static website as the data doesn't change frecuently.
- As this method only works for pages, passing as props to Component "MetroLines".
- Sorting Metro lines at MetroLines component. Note that array is frozen in strict mode. Using localeCompare as the name of the lines are not easy to order (L1, L10S, L2...).

### Bus Lines

- Getting all the lines with getStaticProps() and Apollo. It tooks more sense to me do an static website as the data doesn't change frecuently.
- As this method only works for pages, passing as props to Component "BusLines".
- Sorting Bus lines by ID number. Simple sort algorithm for numbers.

### Maps

Google maps show the location of the metro stations or the bus stops.

### How to set up

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Run the development server:

```bash
yarn dev
```

To build:

```bash
yarn build
```

To start server:

```bash
yarn start
```
