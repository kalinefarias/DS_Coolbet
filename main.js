/* Set the width of the side navigation px and the left margin of the page content px */
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


function copy() {
  document.getElementsByClassName('color-field').select();
  document.execCommand('copy');
  alert("Text Copied");
}


