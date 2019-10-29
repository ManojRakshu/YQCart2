var l,database,e,result;
// Your web app's Firebase configuration
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
$("#sel1").append('<option>Select Your location</option>');
  $(document).ready(function() {
database = firebase.database().ref().child('locations');
database.on('child_added', snap => {
console.log(snap.val());
l = snap.child("name").val();
console.log(l);
$("#sel1").append('<option class="btn" id="' +l+ '" value="' +l+ '">' +l+ '</option>');
});
});
  $(document).ready(function() {
  e = document.getElementById("sel1");
  result = e.options[e.selectedIndex].value;
  console.log(result);  
  });
    
  
