const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=>{
   const xPosition = event.offsetX
   const ypoistion = event.offsetY
   const spanEl = document.createElement("span");

   spanEl.style.left = xPosition + "px";
   spanEl.style.top = ypoistion + "px";

   const size = Math.random()*100;
   spanEl.style.width = size + "px";
   spanEl.style.height = size + "px";

   bodyEl.appendChild(spanEl);

   setTimeout(()=>{
    spanEl.remove();
   }, 3000);
});



const body = document.querySelector("body");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 100)+"vw";
    heart.style.animationDuration = (Math.random()*3)+2+"s"
    body.appendChild(heart);
}
setInterval(createHeart,100);
setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 200) {
       heartArr[0].remove()
    }
    //console.log(heartArr);
},100)