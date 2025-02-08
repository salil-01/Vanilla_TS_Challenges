"use strict";
// src/index.ts
// vars
const pageMap = ["my-christmas-list"];
const accordionText = "Krishna";
// selectors
const container = document.getElementById("container");
const body = document.getElementById("tbody");
// creating dom for showing the list of challenges
(() => {
    if (container) {
        pageMap.forEach((el) => {
            const pageLink = document.createElement("a");
            pageLink.href = el;
            pageLink.textContent = el === null || el === void 0 ? void 0 : el.split("-").join(" ");
            container.appendChild(pageLink);
        });
    }
})();
const createAccordion = () => {
    const accordionContainer = document.createElement("details");
    const accordionTitle = document.createElement("summary");
    const accordionContent = document.createElement("div");
    if (accordionTitle) {
        accordionTitle.textContent = accordionText;
    }
    accordionContent.textContent = "Accordion text";
    accordionContainer.appendChild(accordionTitle);
    accordionContainer.appendChild(accordionContent);
    body === null || body === void 0 ? void 0 : body.appendChild(accordionContainer);
};
createAccordion();
