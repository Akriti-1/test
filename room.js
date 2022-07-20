user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

var firebaseConfig = {
  apiKey: "AIzaSyBSIIKi5yHhJNoNWnL_qVu04ghiQq9WJvE",
  authDomain: "lets-chat-7d019.firebaseapp.com",
  databaseURL: "https://lets-chat-7d019-default-rtdb.firebaseio.com",
  projectId: "lets-chat-7d019",
  storageBucket: "lets-chat-7d019.appspot.com",
  messagingSenderId: "926864401476",
  appId: "1:926864401476:web:7cfa70b73b0b2d66ea4811",
  measurementId: "G-5NR8Q8VWWB"
};

  firebase.initializeApp(firebaseConfig);

function logout(){
    localStorage.removeItem("user");
    window.location.replace("index.html");
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log(Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+= row;
//End code
});});}
getData();

function redirect(){
  window.location.replace("page.html")
}

function addRoom() { room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }