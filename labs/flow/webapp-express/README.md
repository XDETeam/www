# Developing

```
yarn db:up
yarn dev
```

# Testing

```
yarn db:up
yarn dev
yarn test
```

# Performance testing

See `tmp-perf`

Also `yarn start:inspect` and Google Chrome `chrome://inspect`, select Remote Target and use profiler and memory (leaks testing)

# TODO

Split into:

-   base `webapp-express` as module, react-agnostic
-   separate `my-app` describing the current app
