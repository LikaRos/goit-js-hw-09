!function(){var e=document.querySelector(".form");e.addEventListener("submit",(function(n){n.preventDefault();var o=e.querySelector('[name="delay"]'),t=e.querySelector('[name="step"]'),a=e.querySelector('[name="amount"]'),c=0,i=setInterval((function(){var e,n,t;(e=c,n=o.value,t=Math.random()>.3,new Promise((function(o,a){setTimeout((function(){t?o({position:e,delay:n}):a({position:e,delay:n})}),n)}))).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),(c+=1)===Number(a.value)&&clearInterval(i)}),t.value)}))}();
//# sourceMappingURL=03-promises.9027098f.js.map