// Firebase Cloud Messaging Configuration File.
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

var firebaseConfig = {
  apiKey: 'AIzaSyCiZGlzy-iXDs1PXGJkbL2X1hms9k0WOuc',
  authDomain: 'application-1-9c6e3.firebaseapp.com',
  projectId: 'application-1-9c6e3',
  storageBucket: 'application-1-9c6e3.appspot.com',
  messagingSenderId: '884287627933',
  appId: '1:884287627933:web:a0ea022f96207e61702a74',
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey: `BMvOByK9aMEUTAJD3utAS8F9_cYv2FIZsk3OuOyrKvYhDWwCDKQeEs-vJg8gioMI29K68sP34an4UvGr2g_XZ8o`,
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          'No registration token available. Request permission to generate one.'
        );
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
