const WHATSAPP_NUMBER = "0691369156"; // Replace with your real WhatsApp number, e.g. 27821234567.

const products = [
  {name:"Custom Phone Wallpaper",cat:"wallpapers personal",price:30,desc:"A personalised wallpaper made from your idea or photo.",art:"WALLPAPER",style:""},
  {name:"Couple Wallpaper",cat:"wallpapers personal",price:40,desc:"A clean personalised design for you and your favourite person.",art:"YOU + ME",style:"art-two"},
  {name:"Birthday Poster",cat:"personal",price:50,desc:"A personalised birthday design ready to share online.",art:"HAPPY\nBIRTHDAY",style:"art-three"},
  {name:"Professional CV",cat:"student business",price:60,desc:"A modern CV template designed to make your application stand out.",art:"YOUR\nNEXT JOB",style:""},
  {name:"CV + Cover Letter",cat:"student business",price:80,desc:"A matching CV and cover letter design.",art:"CV +\nLETTER",style:"art-two"},
  {name:"Business Poster",cat:"business",price:80,desc:"A promotional digital poster for your business or service.",art:"MAKE IT\nKNOWN",style:"art-three"},
  {name:"Social Media Starter Pack",cat:"business",price:300,desc:"Logo + 3 social posts + a WhatsApp advert.",art:"BUILD\nYOUR BRAND",style:""},
  {name:"Student Study Planner",cat:"student",price:30,desc:"A digital weekly planner for organising school work.",art:"STUDY\nSMART",style:"art-two"},
  {name:"Custom Design",cat:"personal business wallpapers",price:100,desc:"Tell us your idea and we'll quote based on the project.",art:"YOUR\nIDEA",style:"art-three"}
];

const productsEl = document.getElementById("products");
function render(filter="all"){
  productsEl.innerHTML = products.filter(p=>filter==="all"||p.cat.includes(filter)).map(p=>`
    <article class="product">
      <div class="product-art ${p.style}">
        <span>TK DIGITAL STUDIO</span>
        <strong>${p.art.replace("\\n","<br>")}</strong>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3><p>${p.desc}</p>
        <div class="price-row"><span class="price">R${p.price}</span>
        <button class="order" onclick="order('${p.name}',${p.price})">Order</button></div>
      </div>
    </article>`).join("");
}
render();

document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active"); render(btn.dataset.filter);
}));

function order(name,price){
  const msg = `Hi TK Digital Studio! I'd like to order: ${name} (R${price}). Please send me the next steps.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank");
}
document.getElementById("customForm").addEventListener("submit",e=>{
  e.preventDefault(); const d=new FormData(e.target);
  const msg=`Hi TK Digital Studio!%0A%0ACustom design request%0AName: ${d.get("name")}%0AWhatsApp: ${d.get("phone")}%0AType: ${d.get("type")}%0ADetails: ${d.get("details")}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`,"_blank");
});
