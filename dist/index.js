"use strict";
// src/index.ts
const pageMap = ["my-christmas-list"];
(() => {
  const container = document.getElementById("container");
  if (container) {
    pageMap.forEach((el) => {
      const pageLink = document.createElement("a");
      pageLink.href = el;
      pageLink.textContent = el?.split("-")?.join(" ");
      container.appendChild(pageLink);
    });
  }
})();
