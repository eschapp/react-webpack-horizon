# React Webpack Horizon (w/dokku)

This is a React/Webpack project using Horizon.io (RethinkDB). It is designed specifically so that can be used on Digital Ocean in a dokku (Heroku clone) environment.

See rough instructions and notes here:

 https://gist.github.com/jimthedev/f36c2ebd5fd5a4b4183b0145932277bb

# Production deployment workflow

These assume you've already added a new git remote called `deploy` that points to dokku.

```
npm run build:prod
git add .
git commit -m "My changes here."
npm run deploy
```

 Author:

 https://twitter.com/jimthedev
