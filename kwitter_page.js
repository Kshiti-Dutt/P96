var firebaseConfig = {
      apiKey: "AIzaSyBCglVCKAO9_jtGnU-VCiTu_JtMzBFFaoM",
      authDomain: "kwitter-fdfab.firebaseapp.com",
      databaseURL: "https://kwitter-fdfab-default-rtdb.firebaseio.com",
      projectId: "kwitter-fdfab",
      storageBucket: "kwitter-fdfab.appspot.com",
      messagingSenderId: "952355011717",
      appId: "1:952355011717:web:419e0f80ecba8685887dec",
      measurementId: "G-HPK9KE5DP1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user");
    room_name = localStorage.getItem("room_name");
    
    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
      });

      document.getElementById("msg").value = "";
    }
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
localStorage.removeItem("user");
localStorage.removeItem("room_name");
window.location ="index.html";
}
