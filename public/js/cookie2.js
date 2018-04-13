function checkCookie() {
  var user=getCookie("username");
  var vistitime=getCookie("visit");
  if (vistitime === ""){
    vistitime = "1";
  }
  vistitime = parseInt(vistitime) + 1;
  svistitime = vistitime.toString();
  if (user != "") {
    $('#backmodal').delay(0).fadeIn(450);
    document.getElementById("yournamehere").innerHTML = user;
    document.getElementById("vistim").innerHTML = "You have visited our site "+ svistitime +" times!";
    var num = Math.floor((Math.random() * 2) + 1);
    num = parseInt(num);
    document.getElementById('ads').src = imgArray[num-1].src;
    document.getElementById('adsdes').innerHTML = desarray[num-1];
    setCookie("visit", svistitime, 40);
  } else {
    $('#myModal').delay(0).fadeIn(450);
   }
}

var modal1 = document.getElementById('myModal');
var modal2 = document.getElementById('backmodal');
var span1 = document.getElementById("span11");
var span2 = document.getElementById("span22");
span1.onclick = function() {
  $('#myModal').delay(0).fadeOut(450);
  $('#backmodal').delay(0).fadeOut(450);
}

span2.onclick = function() {
  $('#myModal').delay(0).fadeOut(450);
  $('#backmodal').delay(0).fadeOut(450);
}


window.onclick = function(event) {
  if (event.target == modal1) {
    $('#myModal').delay(0).fadeOut(450);
    $('#backmodal').delay(0).fadeOut(450);
  }
  if (event.target == modal2) {
    $('#myModal').delay(0).fadeOut(450);
    $('#backmodal').delay(0).fadeOut(450);
  }
}

function putCookie(form){
  if (form[0].uname.value != "" && form[0].uname.value != null) {
    $('#myModal').delay(0).fadeOut(450);
    setCookie("username", form[0].uname.value, 40);
    setCookie("visit", "1", 40);
    return true;
   }
  else {
    alert("Invalid input! Please input again!");
  }
 }
