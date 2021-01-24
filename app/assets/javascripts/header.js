function abc(){
  var userID = document.getElementById("userID").value;
  document.cookie = 'user=' + userID;
}