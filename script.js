const reviewLink='https://share.google/nE58Pz4CIP8kyiqSB';
const categories=[
 {en:'Hot Drinks',ar:'المشروبات الساخنة',icon:'☕',items:[['Turkish Coffee','قهوة تركية','2.00 JD'],['Cappuccino','كابتشينو','3.00 JD'],['Spanish Latte','سبانيش لاتيه','3.50 JD']]},
 {en:'Cold Drinks',ar:'المشروبات الباردة',icon:'🥤',items:[['Iced Latte','آيس لاتيه','3.00 JD'],['Iced Americano','آيس أمريكانو','2.50 JD'],['Iced Spanish Latte','سبانيش لاتيه بارد','3.50 JD'],['Iced Caramel Macchiato','آيس كراميل ماكياتو','3.50 JD'],['Iced Mocha','آيس موكا','3.50 JD']]},
 {en:'Fresh Juices',ar:'العصائر الطبيعية',icon:'🍹',items:[['Orange Juice','عصير برتقال','2.50 JD'],['Strawberry Juice','عصير فراولة','3.00 JD']]},
 {en:'Mojitos',ar:'الموهيتو',icon:'🍃',items:[['Passion Mojito','باشن موهيتو','3.50 JD'],['Blue Mojito','بلو موهيتو','3.50 JD']]},
 {en:'Desserts',ar:'الحلويات',icon:'🍰',items:[['Molten Cake','مولتن كيك','4.00 JD'],['Cheesecake','تشيز كيك','3.50 JD']]},
 {en:'Snacks',ar:'المقبلات والوجبات الخفيفة',icon:'🍟',items:[['French Fries','بطاطا مقلية','2.00 JD'],['Chicken Sandwich','ساندويش دجاج','4.00 JD']]}
];
let arabic=false;
const $=s=>document.querySelector(s);
function text(el){el.textContent=arabic?(el.dataset.ar||el.dataset.en):el.dataset.en||el.textContent}
function renderCategories(){ $('#categories').innerHTML=categories.map((c,i)=>`<button class="category" data-index="${i}"><span class="symbol">${c.icon}</span><span class="texts"><h3>${arabic?c.ar:c.en}</h3><p>${arabic?c.en:c.ar}</p></span><span class="arrow">›</span></button>`).join('');document.querySelectorAll('.category').forEach(b=>b.onclick=()=>showItems(+b.dataset.index)); }
function showItems(i){const c=categories[i];$('#menu').classList.add('hidden');$('#itemsSection').classList.remove('hidden');$('#itemsTitle').textContent=arabic?c.ar:c.en;$('#itemsArabic').textContent=arabic?c.en:c.ar;$('#items').innerHTML=c.items.map(x=>`<div class="item"><div><h3>${arabic?x[1]:x[0]}</h3><p>${arabic?x[0]:x[1]}</p></div><div class="price">${x[2]}</div></div>`).join('');window.scrollTo({top:0,behavior:'smooth'});}
function toggleLanguage(){arabic=!arabic;document.documentElement.lang=arabic?'ar':'en';document.documentElement.dir=arabic?'rtl':'ltr';$('#langBtn').textContent=arabic?'English':'عربي';document.querySelectorAll('[data-en]').forEach(text);renderCategories();if(!$('#itemsSection').classList.contains('hidden')){$('#backBtn').click();}}
$('#langBtn').onclick=toggleLanguage;$('#backBtn').onclick=()=>{$('#itemsSection').classList.add('hidden');$('#menu').classList.remove('hidden');};$('#menuBtn').onclick=()=>document.querySelector('#menu').scrollIntoView({behavior:'smooth'});renderCategories();
