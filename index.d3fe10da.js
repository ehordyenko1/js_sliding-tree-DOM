document.querySelectorAll(".tree li").forEach(function(e){var t=document.createElement("span");t.innerHTML=e.firstChild.textContent,e.insertBefore(t,e.firstChild),e.firstChild.nextSibling.remove(),t.addEventListener("click",function(e){var t=e.target.nextElementSibling;t.style.display="none"===t.style.display?"block":"none"})});
//# sourceMappingURL=index.d3fe10da.js.map
