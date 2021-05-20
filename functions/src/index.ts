import firabase from 'firebase';
import * as admin from 'firebase-admin';
import {environment} from './environment';
import {ServiceAccount} from 'firebase-admin/lib/credential';

admin.initializeApp({
  credential: admin.credential.cert(
    environment.serviceAccount as ServiceAccount
  ),
  databaseURL: environment.firebaseConfig.databaseURL,
});

firabase.initializeApp(environment.firebaseConfig);

export {health} from './routes/health.route';
export {basicInfo} from './routes/basic-info.route';
