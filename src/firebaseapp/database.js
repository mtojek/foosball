import firebase from 'firebase';
import status from '@/firebaseapp/initialization';

if (!status.initialiazed) {
  throw new Error("App hasn't been initialized");
}

export const db = firebase.database();

export const getPlayerName = (players, uid) => players.find(p => p['.key'] === uid).name;

export const getActivePlayers = players => players.filter(p => !p.deleted);
