// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);

require("component-responsive-frame/child");


// function openCity(evt, cityName) {
//   var i, x, tablinks;
//   x = document.getElementsByClassName("city");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablink");
//   for (i = 0; i < x.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " w3-red";
// }


document.querySelectorAll(".navBar .w3-bar-item").forEach(el => el.addEventListener('click', () => {
  document.querySelectorAll(".navBar .w3-bar-item").forEach(el => {
    el.classList.remove('selected');
  });
  el.classList.add('selected');
  document.querySelectorAll(".city").forEach(el => {
    el.classList.remove('show');
  });

  let pickedID = el.dataset.id;
  document.querySelector(`#${pickedID}`).classList.add('show');

}));


//kick it off //
document.querySelector('#Dem1').classList.add('show');

var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// if (w < 800) {
//   let height = w * 0.673239;
//   document.querySelector('.content').style.height = `${height}px`;
//
// }
