import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCfDo05mmh5HJDGZmfcKEGKRZs74up93M4',
  authDomain: 'emergency-triage-assistant.firebaseapp.com',
  projectId: 'emergency-triage-assistant',
  storageBucket: 'emergency-triage-assistant.firebasestorage.app',
  messagingSenderId: '981183950342',
  appId: '1:981183950342:web:68a901f8192d7279545d87',
  measurementId: 'G-HZ19ENPBTB',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth, signInWithEmailAndPassword };