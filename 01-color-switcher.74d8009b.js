!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=null;t.addEventListener("click",(function(){n=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),500),t.setAttribute("disabled","disabled")})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled","disabled")}))}();
//# sourceMappingURL=01-color-switcher.74d8009b.js.map
