//This function is run at the beginning and shows off all pages except for the first one
function showOff() {
  var i;
  //hide the pages after the first
  var pages = document.getElementsByClassName("autobiografia-page");
  for (i = 1; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
}


//this function is run via onClick and shows off all pages except for the selected one
function showPage(n) {
  var i;
  //hide all pages
  var pages = document.getElementsByClassName("autobiografia-page");
  for (i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  //show the top of the loaded page
  pages[n-1].scrollTo(0,0);
  //load page
  pages[n-1].style.display="grid";
}



//start the function showOff
showOff();
