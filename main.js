(()=>{"use strict";const e=document.getElementById("content"),t=function(){const t=document.createElement("div");e.appendChild(t),t.classList.add("hIMG");const n=document.createElement("img");n.src="/img/oysters.jpeg",n.classList.add("homeImg"),t.appendChild(n);const d=document.createElement("div");d.classList.add("bio"),e.appendChild(d);const c=document.createElement("h2");d.appendChild(c),c.textContent="ORANGE COUNTY’S GATHERING SPOT FOR FRESH, FLAVORFUL SURF & TURF.",c.classList.add("restaurantBio")},n=(()=>{const e=document.getElementById("content"),t=["34","34","34","34","34","34"];return console.log(t),{createMenu:function(){for(let n=0;n<t.length;n++){let t=document.createElement("div");e.appendChild(t),t.classList.add("menuCell"),t.setAttribute("data-cell",n+1)}}}})(),d=document.getElementById("body"),c=document.createElement("div"),o=document.createElement("h2");c.classList.add("header-container"),o.classList.add("header-title"),o.textContent="JOON'S SPOON",d.insertBefore(c,d.firstChild),c.appendChild(o);const i=document.createElement("div");i.classList.add("buttons"),c.appendChild(i);const s=document.createElement("button");s.innerHTML="Home",i.appendChild(s),s.addEventListener("click",(()=>{r(),t()}));const a=document.createElement("button");a.innerHTML="Menu",i.appendChild(a),a.addEventListener("click",(()=>{r(),n.createMenu()}));const l=document.createElement("button");l.innerHTML="Contact",i.appendChild(l),l.addEventListener("click",(()=>{r()}));const r=function(){for(;content.firstChild;)content.removeChild(content.firstChild)};t()})();