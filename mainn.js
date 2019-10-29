var result,e,l,s;
var firebaseConfig = {
    apiKey: "AIzaSyBs7znPU6BV-oDCtxqAw-bOAkWTrRGs7OE",
    authDomain: "yqcart-552cb.firebaseapp.com",
    databaseURL: "https://yqcart-552cb.firebaseio.com",
    projectId: "yqcart-552cb",
    storageBucket: "yqcart-552cb.appspot.com",
    messagingSenderId: "292582628035",
    appId: "1:292582628035:web:36e291367aa7e7f954e076",
    measurementId: "G-X3SL645Y37"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Get a reference to the database service
  function sh() {
e = document.getElementById('sel1');
result = e.options[e.selectedIndex].value;
console.log(result);  
} 
  $(document).ready(function() {
     
    
database = firebase.database().ref().child('locations');
$("#sel1").append('<option>Select Your location</option>');
database.on('child_added', snap => {
console.log(snap.val());
l = snap.child("name").val();
console.log(l);
$("#sel1").append('<option class="btn" id="' +l+ '" value="' +l+ '">' +l+ '</option>');
});
// function sh() {
// e = document.getElementById('sel1');
// result = e.options[e.selectedIndex].value;
// console.log(result);  
// }
// database = firebase.database().ref("locations/' +result+ '");//.child("locations/' +result+ '");
// database.on('value', snap => {
// console.log(snap.val());
// s = snap.child("services").val();
// console.log(s);
var ser = firebase.database().ref('locations/' + result + '/services');
ser.on('value', snap => {
  console.log(snap.val());
});
//});
});