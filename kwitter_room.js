var firebaseConfig = {
  apiKey: "AIzaSyCGbMRJicm7FvInneAjJAJbCGaR7dQuYr4",
  authDomain: "kwitter-2908b.firebaseapp.com",
  databaseURL: "https://kwitter-2908b-default-rtdb.firebaseio.com",
  projectId: "kwitter-2908b",
  storageBucket: "kwitter-2908b.appspot.com",
  messagingSenderId: "565398655634",
  appId: "1:565398655634:web:07c1e5eab0f060d1e4cc4b",
  measurementId: "G-ZJTDEF1Y2T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name"); 
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}