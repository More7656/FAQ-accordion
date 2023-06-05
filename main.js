"use strict";

let items = document.querySelectorAll(".accordion__item");

items.forEach(function (item) {
  item.addEventListener("click", function (event) {
    item.classList.toggle("active");
  });
});
