"use strict";
require("dotenv").config();
// eslint-disable-next-line no-unused-vars
const fs = require("fs");
// eslint-disable-next-line no-unused-vars
const path = require("path");
const http = require("http");
const url = require("url");
const opn = require("open");
const destroyer = require("server-destroy");
var keys = require("./keys/keys.js");

// eslint-disable-next-line prettier/prettier
const {google} = require("googleapis");
// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line quotes
const plus = google.plus("v1");

// const keyPath = path.join(__dirname, ".keys/keys.js");
// console.log(keyPath);
const client_id =
  "453625763887-2k6u898jqp76rojfh9dkd3rf6l2bfidd.apps.googleusercontent.com";
const client_secret="P20R3qgmgPxMSOPzjoRuqcTr";
const redirect_uris = "https://booksharemahadanevan.herokuapp.com";
// if (fs.existsSync(keyPath)) {
//   keys = require(keyPath).web;
// }
console.log(keys);
/**
 * Create a new OAuth2 client with the configured keys.
 */
const oauth2Client = new google.auth.OAuth2(
  keys.googlekeys.client_id,
  keys.googlekeys.client_secret,
  redirect_uris
);

/**
 * This is one of the many ways you can configure googleapis to use authentication credentials.  In this method, we're setting a global reference for all APIs.  Any other API you use here, like google.drive('v3'), will now use this auth client. You can also override the auth client at the service and method call levels.
 */
google.options({ auth: oauth2Client });

/**
 * Open an http server to accept the oauth callback. In this simple example, the only request to our webserver is to /callback?code=<code>
 */
async function authenticate(scopes) {
  return new Promise((resolve, reject) => {
    // grab the url that will be used for authorization
    const authorizeUrl = oauth2Client.generateAuthUrl({
      // eslint-disable-next-line camelcase
      access_type: "offline",
      scope: scopes.join(" ")
    });
    const server = http
      .createServer(async (req, res) => {
        try {
          if (req.url.indexOf("/oauth2callback") > -1) {
            const qs = new url.URL(req.url, "http://localhost:3000")
              .searchParams;
            res.end("Authentication successful! Please return to the console.");
            server.destroy();
            const { tokens } = await oauth2Client.getToken(qs.get("code"));
            oauth2Client.credentials = tokens; // eslint-disable-line require-atomic-updates
            resolve(oauth2Client);
          }
        } catch (e) {
          reject(e);
        }
      })
      .listen(3000, () => {
        // open the browser to the authorize url to start the workflow
        opn(authorizeUrl, { wait: false }).then(cp => cp.unref());
      });
    destroyer(server);
  });
}

async function runSample() {
  // retrieve user profile
  const res = await plus.people.get({ userId: "me" });
  console.log(res.data);
}

const scopes = ["https://www.googleapis.com/auth/plus.me"];
authenticate(scopes)
  .then(client => runSample(client))
  .catch(console.error);
