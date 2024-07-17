import React from 'react';
import ReactDOM from 'react-dom/client';
import { firebaseContext } from './context';
import firebaseApp from './firebase/config';
import AuthProvider from './context';
import App from './App';
import { FirebaseProvider } from './context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<FirebaseProvider>
 <AuthProvider>
    <App />
    </AuthProvider>
    </FirebaseProvider>
 
);

