//This function is run when loading opere.html and shows off the card-sample-page div
function showOff() {

  //get div to close
  var divToClose = document.getElementsByClassName("card-sample-page");

  //close it
  //Don´t forget divToClose it´s an Array!!
  divToClose[0].style.display = "none";

  //show the top of the loaded page
  pages[n-1].scrollTo(0,0);
}

//this function is run via onClick and shows off all pages except for the selected one
function openCardSample() {

  //get divs to close
  var divToClose1 = document.getElementsByClassName("opere-anno");
  var divToClose2 = document.getElementsByClassName("opere-tema");

  //close them
  //Don´t forget divToClose it´s an Array!!
  divToClose1[0].style.display = "none";
  divToClose2[0].style.display = "none";

  //get divs to open
  var divToOpen1 = document.getElementsByClassName("card-sample-page");

  //open it
  //Don´t forget divToOpen it´s an Array!!
  divToOpen1[0].style.display = "grid";

  //show the top of the loaded page
  pages[n-1].scrollTo(0,0);
}

//Function to close card-sample-page via close button.
//This function also shows back the divs opere-anno and opere-tema
function closeCardSample() {

  //get div to close
  var divToClose = document.getElementsByClassName("card-sample-page");

  //close it
  //Don´t forget divToClose it´s an Array!!
  divToClose[0].style.display = "none";

  //get divs to close
  var divToOpen1 = document.getElementsByClassName("opere-anno");
  var divToOpen2 = document.getElementsByClassName("opere-tema");

  //open them
  //Don´t forget divToClose it´s an Array!!
  divToOpen1[0].style.display = "grid";
  divToOpen2[0].style.display = "grid";

  //show the top of the loaded page
  pages[n-1].scrollTo(0,0);
}

showOff();
