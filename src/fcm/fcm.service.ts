import { Injectable, InternalServerErrorException } from '@nestjs/common';
import admin from 'firebase-admin';
import * as firebaseConfig from '../firebase.config.json';

const firebase_params = {
  type: firebaseConfig.type,
  projectId: firebaseConfig.project_id,
  privateKeyId: firebaseConfig.private_key_id,
  privateKey: firebaseConfig.private_key,
  clientEmail: firebaseConfig.client_email,
  clientId: firebaseConfig.client_id,
  authUri: firebaseConfig.auth_uri,
  tokenUri: firebaseConfig.token_uri,
  authProviderX509CertUrl: firebaseConfig.auth_provider_x509_cert_url,
  clientC509CertUrl: firebaseConfig.client_x509_cert_url,
};

@Injectable()
export class FcmService {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(firebase_params),
    });
  }

  async sendMessage(token: string, title: string, message: string) {
    const payload = {
      token,
      notification: {
        title,
        body: message,
      },
      data: {
        body: message,
      },
    };
    try {
      return await admin.messaging().send(payload);
    } catch (error) {
      console.log('Error sending message:', error);
      throw new InternalServerErrorException(error);
    }
  }
}
