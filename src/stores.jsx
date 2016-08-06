// npm install --save @horizon/client
import Horizon from '@horizon/client';

// Create an instance of Horizon, passing a config object
const horizon = Horizon({
  secure: false,
  // host: 'localhost:8181'
});

// Any number of stores that you like
const chat = horizon('messages');
const files = horizon('files');
export {chat, files};
