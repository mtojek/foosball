import firebase from 'firebase';
import { db } from '@/firebaseapp/database';
import status from '@/firebaseapp/initialization';

if (!status.initialiazed) {
  throw new Error("App hasn't been initialized");
}

export const auth = firebase.auth();

export const isAuthorized = userClaims => userClaims.admin;

export const CustomClaimsUpdater = {
  callback: null,
  metadataRef: null,

  setUser(user) {
    if (this.callback) {
      this.metadataRef.off('value', this.callback);
    }

    if (user) {
      // Check if refresh is required.
      this.metadataRef = db.ref(`metadata/${user.uid}/refreshTime`);
      this.callback = () => {
        // Force refresh to pick up the latest custom claims changes.
        // Note this is always triggered on first call. Further optimization could be
        // added to avoid the initial trigger when the token is issued and already contains
        // the latest claims.
        user.getIdToken(true);
      };
      // Subscribe new listener to changes on that node.
      this.metadataRef.on('value', this.callback);
    }
  },
};
