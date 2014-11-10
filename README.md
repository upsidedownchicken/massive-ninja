# Massive Ninja

A simple nodejs simpleflake server using [Express 4](http://expressjs.com/) and [node-simpleflake](https://github.com/simonratner/node-simpleflake).

Built with Heroku's [node-js-getting-started](https://github.com/heroku/node-js-getting-started) repo.

## GET `/`

Responds in plain text with a base 58 GUID built with the current time and random bits.

```sh
~ $ curl -i http://localhost:5000/
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 11
ETag: W/"b-ffbb2e25"
Date: Mon, 10 Nov 2014 21:03:13 GMT
Connection: keep-alive

A8eBpSLprUR
```

## TODO

- remove `X-Powered-By` header
- change `Content-Type` to `text/plain`
- load test

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone git@github.com:wopr42/massive-ninja.git # or clone your own fork
$ cd massive-ninja
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
