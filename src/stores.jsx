// npm install --save @horizon/client
import Horizon from '@horizon/client';

let port;
if (process.env.NODE_ENV === 'production') {
  port = 80;
} else {
  port = 8181;
}
const host = window.location.hostname + ':' + port;
// Create an instance of Horizon, passing a config object
const horizon = Horizon({
  secure: false,
  host: host
});

// Any number of stores that you like
const chat = horizon('messages');
const files = horizon('files');
export {chat, files};
