import firebase from 'firebase';
import status from '@/firebaseapp/initialization';

if (!status.initialiazed) {
  throw new Error("App hasn't been initialized");
}

export const auth = firebase.auth();

export const isAuthorized = user => user !== null;
