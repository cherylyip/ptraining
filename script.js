/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function respNav() {
  var x = document.getElementById("nav");
  var y = document.getElementById("header")
  if (x.className === "topNav") {
    x.className += " responsive";
    y.className += " responsive";
  } else {
    x.className = "topNav";
    y.className = "topHeader";
  }
}