var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName = navigator.appName;
var fullVersion = '' + parseFloat(navigator.appVersion);

var nameOffset, verOffset, ix;
var OSName = "Unknown OS";
if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

if ((verOffset = nAgt.indexOf("Opera")) != -1) {
  browserName = "Opera";
  fullVersion = nAgt.substring(verOffset + 6);
  if ((verOffset = nAgt.indexOf("Version")) != -1)
    fullVersion = nAgt.substring(verOffset + 8);
} else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
  browserName = "Microsoft Internet Explorer";
  fullVersion = nAgt.substring(verOffset + 5);
}
else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
  browserName = "Chrome";
  fullVersion = nAgt.substring(verOffset + 7);
} else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
  browserName = "Safari";
  fullVersion = nAgt.substring(verOffset + 7);
  if ((verOffset = nAgt.indexOf("Version")) != -1)
    fullVersion = nAgt.substring(verOffset + 8);
} else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
  browserName = "Firefox";
  fullVersion = nAgt.substring(verOffset + 8);
} else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
  (verOffset = nAgt.lastIndexOf('/'))) {
  browserName = nAgt.substring(nameOffset, verOffset);
  fullVersion = nAgt.substring(verOffset + 1);
  if (browserName.toLowerCase() == browserName.toUpperCase()) {
    browserName = navigator.appName;
  }
}

if ((ix = fullVersion.indexOf(";")) != -1)
  fullVersion = fullVersion.substring(0, ix);
if ((ix = fullVersion.indexOf(" ")) != -1)
  fullVersion = fullVersion.substring(0, ix);

$(document).ready(() => {
	$('.browserinfo').text("Browser name:   " + browserName +
    "  | Browser version:   " + fullVersion +
    "  | OS name:   " + OSName +
    "  | Last update on:   " + document.lastModified);
});
