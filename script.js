const cats=[
 ["☕","HOT DRINKS","المشروبات الساخنة"],
 ["🥤","COLD DRINKS","المشروبات الباردة"],
 ["🍽","FOOD","المأكولات"],
 ["🍰","DESSERTS","الحلويات"],
 ["♨","SHISHA","الأراجيل"],
 ["✦","SPECIAL ITEMS","الأصناف المميزة"]
];
let en=false;
const grid=document.getElementById("categories");
function draw(){
 grid.innerHTML=cats.map((c,i)=>`<article class="card" onclick="openDemo(${i})">
   <div class="icon">${c[0]}</div>
   <div class="card-title">${en?c[1]:c[2]}</div>
   <div class="demo-box"><div>${en?"Demo Content":"محتوى تجريبي"}<small>${en?"(Demo Content)":"(Demo Content)"}</small><div class="dash">—</div></div></div>
 </article>`).join("");
}
function openDemo(i){
 const c=cats[i];
 const m=document.createElement("div");m.className="modal open";
 m.innerHTML=`<div class="modal-card"><div class="icon">${c[0]}</div><h2>${en?c[1]:c[2]}</h2><p style="color:#aaa;line-height:1.8">${en?"This section is demo content and will be replaced with the official menu items.":"هذا القسم تجريبي، وسيتم استبدال المحتوى بأصناف المنيو الرسمي عند اعتماده."}</p><button class="close" onclick="this.closest('.modal').remove()">${en?"Close":"إغلاق"}</button></div>`;
 document.body.appendChild(m);
}
function toggleLang(){en=!en;draw()}
draw();
