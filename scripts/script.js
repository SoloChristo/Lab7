// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

// Make sure you register your service worker here too
let entryNumber = 0;
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        entryNumber +=1;
        let newPost = document.createElement('journal-entry');
        newPost.number = entryNumber;
        newPost.entry = entry;
        document.querySelector('main').appendChild(newPost);
        newPost.addEventListener('click', event => {
          let pageObj = {
            page:"single",
            numero: 0,
            pageData: {}
          };
          pageObj.numero = newPost.number;
          pageObj.pageData = newPost.entry;
          history.pushState(pageObj, "single", "#single" + newPost.number)
          router.setState("single", newPost.number, newPost.entry);
          
        });
      });
    });
});


let settings = document.querySelector('header > img');
settings.addEventListener('click', event => {
  history.pushState({page: "settings"}, "settings", "#settings");
  router.setState("settings");
});


let headerText = document.querySelector('header > h1');
headerText.addEventListener('click', event => {
  history.pushState({page: "default"}, "default", "#default");
  router.setState("default");
});



// entries.addEventListener('click', event => {
//   alert("hey");
//   //router.setState("poggers");
  
// });
