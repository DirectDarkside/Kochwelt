
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}


function openMenu(){
  document.getElementById('hamburger-field').classList.remove('d-none');
  document.getElementById('hamburger-icon').classList.add('d-none');
  document.getElementById('nav').classList.add('d-flex');
}

function closeMenu(){
  document.getElementById('hamburger-field').classList.add('d-none');
  document.getElementById('hamburger-icon').classList.remove('d-none');
  document.getElementById('nav').classList.remove('d-flex');
}

function sendMail(event){﻿
  event.preventDefault();
  const data = new FormData(event.target);

  fetch("https://formspree.io/f/xeqbbgvd", {
      method: "POST",
      body: new FormData(event.target),
      headers: {
          'Accept': 'application/json'
      }
  }).then(() => {
      window.location.href = "./send_mail.html";
  }).catch((error) => {
      console.log(error);
  });
}