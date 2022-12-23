# [odinbook-frontend](https://odinbooker.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a6de8db0-95f2-45c6-bfa1-03d75ad93b21/deploy-status)](https://app.netlify.com/sites/odinbooker/deploys)
![GitHub top language](https://img.shields.io/github/languages/top/lopezac/odinbook-frontend)

This project is part of the final exercise of [The Odin Project](https://www.theodinproject.com) curriculum. [Live website](https://odinbooker.netlify.app/), and [backend project](https://github.com/lopezac/odinbook-api/) repository.

# Features

This is a Facebook clone, I added many features, like messages, notifications, friend requests, posts, comments, likes.

I did authentication with [passport-js](https://www.passportjs.org/), users can register with email, or sign in as guests, I tried to add facebook login but my backend site was targeted as malicious and was not allowed.

Chat, notification, post creation and more things are done in real time, no need to refresh page thanks to socket.io.

- Users can create posts, edit posts, delete posts.
- Users can create comments and delete his post comments.
- Users can update and delete their account.
- Users can send messages.
- Users can send, accept and decline friend requests.
- Users can add and remove likes from post and comments.
- Users get notification when they receive a friend request.

# Learnings

It took me 4 weeks to do the [REST API backend](https://github.com/lopezac/odinbook-api/) and this frontend, is done with the Jamstack architecture, hosting the backend in [Railway](https://railway.app/), and the frontend in Netlify.

I learned TypeScript for this project, learning a strongly typed language was fun with the excellent documentation, it helps you develop faster, secure and less error-prone code.

I also learned the featured-sliced architectural methodology, it is something incredible useful, because my projects were starting to grow big and messy, so I needed a way to organize projects, and this agnostic language architecture helped a lot, learning concepts like entities, features, business logic, layers, slices, segments, modules, public API of each module, isolation of modules, and needs driven on user and business needs.

Featured-sliced also helped me learning DRY concepts, I learned concepts like separating the user from the viewer.

# Technology stack

- **UI**: [`react`](https://reactjs.org/), [`styled-components`](https://styled-components.com/), [`react-icons`](https://react-icons.github.io/react-icons/)
- **Language**: [`typescript`](https://www.typescriptlang.org/)
- **Data fetching**: [`faker`](https://fakerjs.dev/)
- **Routing**: [`react-router`](https://reactrouter.com/en/main)
- **Lint**: [`prettier`](https://prettier.io/), [`eslint`](https://eslint.org/)
- **Deployment**: [`netlify`](https://netlify.app/)
- **Architecture**: [`featured-sliced`](https://feature-sliced.design/), [`jamstack`](https://jamstack.org/)
- **Network requests**: [`socket.io`](https://socket.io/)
- **Database**: [`MongoDB`](https://www.mongodb.com/)

<div align="center">
  <img title="react" alt="react" height=48 src="https://cdn.auth0.com/blog/react-js/react.png"/>
  <img title="typescript" alt="typescript" height=48 src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png"/>
  <img title="eslint" alt="eslint" height=48 src="https://d33wubrfki0l68.cloudfront.net/204482ca413433c80cd14fe369e2181dd97a2a40/092e2/assets/img/logo.svg"/>
  <img title="prettier" alt="prettier" height=48 src="https://prettier.io/icon.png"/>
  <img title="feature-sliced" alt="feature-sliced" height=48 src="https://avatars.githubusercontent.com/u/60469024?s=200&v=4"/>
  <img title="styled-components" alt="styled-components" height=48 src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" />
  <img title="faker" alt="faker" height=48 src="https://raw.githubusercontent.com/faker-js/faker/4ce8e98fcc19d99bf6df3abb3e24c4667f586076/docs/public/logo.svg"/>
  <img title="socket.io" alt="socket.io" height=48 src="https://socket.io/images/logo-dark.svg"/>
  <img title="netlify" alt="netlify" height=48 src="https://www.netlify.com/v3/img/components/logomark.png"/>
  <img title="react-router" alt="react-router" height=48 src="https://reactrouter.com/_brand/react-router-mark-color-inverted.png"/>
  <img title="jamstack" alt="jamstack" height=48 src="https://jamstack.org/img/logo/transparent/Jamstack_Icon_Original_Transparent.png" />
  <img title="mongodb" alt="mongodb" height=48 src="https://storage-us-gcs.bfldr.com/hj345wvxsvpbc82vchqcj9qh/v/1069931054/original/MongoDB_Logomark_SpringGreen.png?Expires=1671903865&KeyName=gcs-bfldr-prod&Signature=-O31Zwc9X3M0olz245Q-R41lQwI=" />
</div>
