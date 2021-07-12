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
    room_name = localStorage.getItem("room_name");

function send()
{
      msg =document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function RoomNameCheck()
{
      document.getElementById("ChannelName").innerHTML = "<h3 id='ChannelName'>" + "#" + room_name + "</h3>"
}
