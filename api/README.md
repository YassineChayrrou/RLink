# NodeJs api Directory

This readme presents you with guideline to successfully install the backend nodejs api to run this project.

## Technologies:

- Nodejs
- Express
- Mongoose

## Installation:

To install backend server api simply type:

```
$ cd api/
$ npm install
```

## Setup configuration:

This api is using 3rd party services which require authentication, you can easily subscribe to the services and they will provide you with your specific api keys.
first open the config.env.backup file you will something like this:

```
$ cat config.env.backup && echo
PORT=5000
MONGO_URI=
JWT_SECRET=
JWT_EXPIRE=20min
DOMAIN=
API_KEY=
EMAIL_FROM=
```

- Modify all the required fields with there respective values as below:

  - MONGO_URI: presents the value of your mongodb uri either on the atlas mongodb, or your local mongodb install add it there no quotes
  - JWT_SECRET: this JWT_SECRET is used to generate your tokens along with expiration JWT_EXPIRE to generate your secret open node console and type:

  ```
  require("crypto").randomBytes(20).toString("hex")
  ```

  copy paste the return to your config.env

  - DOMAIN: it is provided by the email server client that you subscribe to, just subscribe to mailgun or any other convenient email client and copy their provided domain to this variable.
  - API_KEY: the key provided by MailGun to verify smtp connections
  - EMAIL_FROM: your or your company mail that you want to send email with.

- Lastly rename `config.env.backup` to `config.env`

## Notes:

I used parcel as bundler so you don't have to worry about overly complicated webpack although effective, sometimes simple is better...
It is important to setup you own config.env file with your own credentials as explained before.

## Author:

Yassine Chayrrou
