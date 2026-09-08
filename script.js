const menus={
hot:{k:"HOT DRINKS",t:"المشروبات الساخنة",items:[
["إسبريسو","Espresso","2.00 JD","☕"],["كابتشينو","Cappuccino","2.50 JD","☕"],["لاتيه","Latte","2.75 JD","☕"],["سبانش لاتيه","Spanish Latte","3.00 JD","☕"],["هوت شوكلت","Hot Chocolate","3.00 JD","🍫"],["شاي كرك","Karak Tea","2.00 JD","🫖"]
]},
cold:{k:"COLD DRINKS & SMOOTHIES",t:"المشروبات الباردة والسموذي",items:[
["آيس لاتيه","Iced Latte","3.00 JD","🧊"],["آيس سبانش لاتيه","Iced Spanish Latte","3.50 JD","🧊"],["آيس موكا","Iced Mocha","3.50 JD","🍫"],["آيس شوكلت","Iced Chocolate","3.00 JD","🍫"],["آيس كوفي","Iced Coffee","3.00 JD","🧋"],["سموذي فراولة","Strawberry Smoothie","3.50 JD","🍓"],["سموذي مانجا","Mango Smoothie","3.50 JD","🥭"],["سموذي أوريو","Oreo Smoothie","3.50 JD","🥤"]
]},
special:{k:"SPECIALTY COFFEE",t:"القهوة المختصة",items:[
["إسبريسو","Espresso","3.00 JD","☕"],["فلات وايت","Flat White","3.00 JD","☕"],["سبانش لاتيه","Spanish Latte","3.00 JD","☕"],["موكا","Mocha","3.00 JD","☕"],["لاتيه","Latte","3.00 JD","☕"],["هوت شوكلت","Hot Chocolate","3.00 JD","🍫"]
]},
cocktails:{k:"JUICES & COCKTAILS",t:"العصائر والكوكتيلات",items:[
["كوكتيل بانوراما","Panorama Cocktail","4.00 JD","🍹"],["ليمون ونعنع","Lemon & Mint","2.50 JD","🍋"],["موهيتو كلاسيك","Classic Mojito","3.50 JD","🍹"],["موهيتو باشن","Passion Mojito","4.00 JD","🍹"],["موهيتو توت","Berry Mojito","4.00 JD","🫐"],["عصير رمان","Pomegranate Juice","3.00 JD","❤️"],["عصير برتقال","Orange Juice","3.00 JD","🍊"],["كوكتيل فواكه","Fruit Cocktail","4.00 JD","🍓"]
]},
desserts:{k:"DESSERTS",t:"الحلويات",items:[
["مولتن كيك","Molten Cake","5.00 JD","🍫"],["تشيز كيك لوتس","Lotus Cheesecake","4.00 JD","🍰"],["تشيز كيك أوريو","Oreo Cheesecake","4.00 JD","🍰"],["بان كيك","Pancakes","4.50 JD","🥞"],["وافل","Waffle","4.50 JD","🧇"]
]},
shisha:{k:"SHISHA",t:"الأراجيل",items:[
["أرجيلة تفاحتين","Two Apples","5.00 JD","♨️"],["أرجيلة مزايا","Mazaya Shisha","5.00 JD","♨️"],["عنب وتوت","Grape & Berry","—","🍇"],["ليمون ونعنع","Lemon & Mint","—","🍋"],["بلو بيري","Blueberry","—","🫐"],["منجا","Mango","—","🥭"],["كاندي","Candy","—","🍬"],["خلطة بانوراما","Panorama Mix","—","✨"]
],note:"تصميم تجريبي: الأسعار والأصناف النهائية تُستبدل بالمنيو الرسمي عند اعتماده."}
};
const items=document.getElementById("items"),title=document.getElementById("title"),kicker=document.getElementById("kicker");
function render(key){
 const d=menus[key]; title.textContent=d.t;kicker.textContent=d.k;
 items.innerHTML=d.items.map(x=>`<article class="item"><div class="icon">${x[3]}</div><div class="info"><div class="name">${x[0]}</div><div class="en">${x[1]}</div></div><div class="price">${x[2]}</div></article>`).join("");
 if(d.note) items.innerHTML+=`<div class="note">${d.note}</div>`;
 document.querySelectorAll(".cat").forEach(b=>b.classList.toggle("active",b.dataset.cat===key));
}
document.querySelectorAll(".cat").forEach(b=>b.onclick=()=>render(b.dataset.cat));
render("hot");
