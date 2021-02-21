 // Your web app's Firebase configuration
 var firebaseConfig = {
     apiKey: "AIzaSyBF9YuYFPRzEFro-7Ea6qf2xREQ4cRktz0",
     authDomain: "brick-catft.firebaseapp.com",
     projectId: "brick-catft",
     storageBucket: "brick-catft.appspot.com",
     messagingSenderId: "364514913727",
     appId: "1:364514913727:web:9188eeb21ebed2dfbbc50a"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth();

 function signUp() {

     var email = document.getElementById("email");
     var password = document.getElementById("password");

     const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
     promise.catch(e => alert(e.message));

     alert("Signed Up");


 }

 function logIn() {

     var email = document.getElementById("emailLogIn");
     var password = document.getElementById("passwordLogIn");

     const promise = auth.signInWithEmailAndPassword(email.value, password.value);
     promise.catch(e => alert(e.message));


 }

 auth.onAuthStateChanged(function(user) {

     if (user) {

         var email = user.email;
         alert("Active User " + email);

         //Take user to a different or home page
         window.location = "room.html";
         //is signed in

     } else {

         alert("No Active User");
         //no user is signed in

     }



 });