var firebaseConfig = {
    apiKey: "AIzaSyDrKpz2LjYayZ9EySFIhEDqsa17m9W2Bpc",
    authDomain: "fir-27fca.firebaseapp.com",
    databaseURL: "https://fir-27fca-default-rtdb.firebaseio.com",
    projectId: "fir-27fca",
    storageBucket: "fir-27fca.appspot.com",
    messagingSenderId: "844923360802",
    appId: "1:844923360802:web:4aa29e87047c0d25ad9c7b",
    measurementId: "G-HKHRPT3X9S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}