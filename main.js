var firebaseConfig = {
    apiKey: "AIzaSyBg-sChHSIui57dC2tRCMZIsaRBSlDxhiE",
    authDomain: "first-website-1cf23.firebaseapp.com",
    databaseURL: "https://first-website-1cf23-default-rtdb.firebaseio.com",
    projectId: "first-website-1cf23",
    storageBucket: "first-website-1cf23.appspot.com",
    messagingSenderId: "435364783338",
    appId: "1:435364783338:web:4cf55577d58abba4aba393"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {
    username_ = document.getElementById('username').value;
    localStorage.setItem("username", username_);
    window.location = "room.html";
}

function username() {
username_2 = localStorage.getItem("username");
    document.getElementById('username_logged_in').innerHTML = username_2;

}

function username2() {
    username_2 = localStorage.getItem("username");
        document.getElementById('username_logged_in2').innerHTML = username_2;
    
    }
    

function addRoom() {
        localStorage.setItem("room_name", document.getElementById("roomname").value);
        firebase.database().ref("/").child(roomname).update({
            roomname: document.getElementById("roomname").value
      });
      window.location = "page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
    row = "<li class='list-group-item' onclick='redirect(this.id)' id='" + Room_names + "'> # " + document.getElementById("roomname").value + "</li>";
    document.getElementById("roomListNames").innerHTML += row;
 //End code
 });});}
getData();

function redirect(name) {
    console.log(name);
    localStorage.setItem("roomname_", name);
    window.location = "page.html";
}

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function send() {
    msg = document.getElementById("msg_input").value
    firebase.database().ref(localStorage.getItem("room_name")).push({
        name:localStorage.getItem("username"),
        msg: msg,
        like:0,
    });
}