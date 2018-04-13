var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'images/pork.JPG';
imgArray[1] = new Image();
imgArray[1].src = 'images/mars.JPG';

var desarray = new Array();
desarray[0] = "Afraid of in-flight meals? We help you to avoid bad taste! When you are selecting an airline service, we provide a list of the approved airlines which provides a delicious in-flight meal. Checkout 'flight' page to get more information!";
desarray[1] = "Elon Musk brings you to the mars! SpaceX is now preordering the mars round-trip flight ticket, for only $1,373,741,250. Only limited number of seats provided, act now!"

$(document).keypress(
    function(event){
     if (event.which == '13') {
        event.preventDefault();
      }


});

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
