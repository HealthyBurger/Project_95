function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "LetsChatWebApp_room.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
    console.log("room_name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+"onclick='redirectToroomname(this.id)'>#"+Room_names+"</div<hr>";
    document.getElementById("output").innerHTML +row;
//End code
});});}
getData();
function redirectToroomname(name)
{
    console.log(name);
    localStorage.setItem("roomname",name);
    window.location = "LetsChatWebApp_room.html";
}
function logout()
{
    localStorage.removeItem("roomname");
    localStorage.removeItem("username");
    window.location("LetsChatWebApp_room.html");
}