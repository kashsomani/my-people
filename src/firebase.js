// Add the Firebase products that you want to use
import firebase from 'firebase/app';
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey: "AIzaSyDtNJSDhbqJq0Ms_tW9sqiZEL7XTQMnCg0",
	authDomain: "my-people-kash.firebaseapp.com",
	projectId: "my-people-kash",
	storageBucket: "my-people-kash.appspot.com",
	messagingSenderId: "90172037613",
	appId: "1:90172037613:web:71d3a463d122a6235fafe4",
	measurementId: "G-FRMJJVC9ZN"
};

firebase.initializeApp( firebaseConfig );

export const db = firebase.firestore();


export async function getPeople() {
	const snapshot = await firebase.firestore()
		.collection( 'people' )
		.get()
	return snapshot.docs.map( doc => Object.entries( doc.data() ) );
}
export async function addPerson( person ) {
	const res = await db.collection( 'people' )
		.add( person );
}

export const people = firebase.firestore()
	.collection( 'people' );