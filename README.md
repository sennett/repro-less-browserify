repro-less-browserify
=====================

Reproduces current less parser incompatablity issue.  <code>npm install</code>, then try to run <code>grunt</code> and watch it fail:

```
Running "browserify:dist" (browserify) task
Fatal error: Cannot read property 'contents' of undefined
```

Seems to be due to <code>less.Parser</code> changes, specifically to the constructor.
