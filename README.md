# Barcelona Public Transportation Challenge

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

I chosen a static site generation (SSG) with getStaticProps as the site data won't change frequently. The HTML is generated in build-time and reused for each request so a production build, every request is going to reuse that statically generated HTML file.
Pros of this strategy are that the site is always online and a faster initial load. Cons are that this solution needs to rebuild the data updated so it is applicable only fo simple sites. But in this case I think this is a good example of "use case".
Using this SSG strategy we can reduce the complexity of Redux, but we have to say that Redux became very intuitive and easy to manage with Toolkit. And also we reduce a lot the use of state management to show data.
I've used SSG strategy for many minisites and promotional pages, even Headless CMS for an old customer I had until mid 2021, due to their content almost never were updated.

Probably we would expect that I chosen the most common data fetching approach: Client-Side rendering, fetching and storing data with React Hooks or Redux. But the initial load of the page is a bit slow and the comms with the server happens in the run-time. In case of need, I can provide any other simple experiments and web apps using react Hooks or Redux (Toolkit for the newest).

### Metro Lines

- Getting all the lines with getStaticProps() and Apollo. It took more sense to me do a static website as the data doesn't change frequently.
- As this method only works for pages, passing as props to Component "MetroLines".
- Sorting Metro lines at MetroLines component. Note that array is frozen in strict mode. Using localeCompare as the name of the lines are not easy to order (L1, L10S, L2...).

### Bus Lines

- Getting all the lines with getStaticProps() and Apollo. It took more sense to me do a static website as the data doesn't change frequently.
- As this method only works for pages, passing as props to Component "BusLines".
- Sorting Bus lines by ID number. Simple sort algorithm for numbers.

### Maps

Google maps to show the location of the metro stations or the bus stops.

### Searching by bus stops or metro stations

To Do. Won't be done due to time limitation.

### Tests

I think I should do tests, but due to the time limitation I have for this home tests I decided to skip them.

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