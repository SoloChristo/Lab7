// router.js

export const router = {};
function morphSettings(){
  
  let bod = document.getElementsByTagName('body')[0];
  bod.classList.add("settings");
  bod.classList.remove("single-entry");

  document.querySelector("header > h1").innerHTML = "Settings";
  alert("Congrats you're now on the "+history.state.page+" page");
}

function morphDefault(){
  

  let bod = document.getElementsByTagName('body')[0];
  bod.classList.remove("settings");
  bod.classList.remove("single-entry");

  document.querySelector("header > h1").innerHTML = "Journal Entries";
  alert("Congrats you're now on the "+history.state.page+" page");
}

function morphSingle(number, data){


  let bod = document.getElementsByTagName('body')[0];
  bod.classList.add("single-entry");
  bod.classList.remove("settings");

  let entryPageElement = document.getElementsByTagName("entry-page")[0];
  entryPageElement.remove();

  let mainTag = document.getElementsByTagName("main")[0];
  mainTag.insertAdjacentHTML('afterend','<entry-page></entry-page>');

  entryPageElement = document.getElementsByTagName("entry-page")[0];
  //let singlePost = document.createElement('entry-page');
  entryPageElement.entry = data;

  document.querySelector("header > h1").innerHTML = "ENTRY NUMBER " + number;
  alert("Congrats you're now on the "+history.state.page+" page");
}
/**
 * Changes the "page" (state) that your SPA app is currently set to
 */
router.setState = function(routeDestination, number, data) {

  if(routeDestination ==="settings"){
    //alert("HEY");
    morphSettings();
  }

  if(routeDestination ==="default"){
    //alert("HEY");
    morphDefault();

  }

  if(routeDestination ==="single"){
    //alert("HEY");
    morphSingle(number, data);
  }
}




window.onpopstate = function(event) {
  if(event.state == null){
    router.setState("default");
  }else if ((event.state.numero)&&(event.state.pageData)){
    router.setState(event.state.page, event.state.numero, event.state.pageData);
  }else {
    router.setState(event.state.page);
  }
}