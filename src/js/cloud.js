"use strict";

import { db, isConfigured } from './firebase.js';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

const docRef = uid => doc(db, 'users', uid);

export const loadEvents = async uid => {
	if (!isConfigured) {
		return [];
	}
	const snapshot = await getDoc(docRef(uid));
	return snapshot.exists() ? (snapshot.data().events || []) : [];
};

export const saveEvents = async (uid, events) => {
	if (!isConfigured) {
		return;
	}
	await setDoc(docRef(uid), { events, updatedAt: serverTimestamp() }, { merge: true });
};
