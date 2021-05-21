import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCQVu3FOqD0VqYOFz_F1EY6Bd9CHnfs73I",
    authDomain: "fb-sample-aae68.firebaseapp.com",
    projectId: "fb-sample-aae68",
    storageBucket: "fb-sample-aae68.appspot.com",
    messagingSenderId: "83276885199",
    appId: "1:83276885199:web:c5279c656b168cdb1ddbba"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;

export const getFirebaseItems = async () => {
  try {
    const snapshot = await db
      .collection("todos")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    console.log(items);
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}
