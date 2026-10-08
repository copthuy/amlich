"use strict";

import { auth, googleProvider, isConfigured } from './firebase.js';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';

export const signIn = () => {
	if (!isConfigured) {
		return Promise.reject(new Error('Firebase chưa được cấu hình (thiếu .env.local)'));
	}
	return signInWithPopup(auth, googleProvider);
};

export const currentUser = () => (auth ? auth.currentUser : null);

export const onAuth = callback => {
	if (!isConfigured) {
		callback(null);
		return () => {};
	}
	return onAuthStateChanged(auth, callback);
};
