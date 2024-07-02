let button = document.querySelector(".icon");

button.addEventListener("click",function(){
    fetch("https://api.adviceslip.com/advice")
    .then((data)=> data.json())
    .then((data)=> data["slip"])
    .then((data)=> {
        let advice = document.querySelector("blockquote")
        let card = document.querySelector(".card");
        let span = document.querySelector("span");
        let cardHeight = +String(getComputedStyle(card).height).split("px")[0]
        span.style.top = "-30px";
        span.style.opacity = 0
        advice.style.left = "-300px";
        advice.style.opacity = 0
        setTimeout(() => {
            span.style.top = "30px";
            advice.style.left = "300px";
        }, 600);
        setTimeout(() => {
        span.textContent = data.id;
        span.style.top = "0px";
        span.style.opacity = 1
        advice.style.left = "0px";
        advice.style.opacity = 1
        let originalHeight = +String(getComputedStyle(advice).height).split("px")[0];
        advice.textContent = `"${data.advice}"`;
        let final;
        if(originalHeight > +String(getComputedStyle(advice).height).split("px")[0]){
            final = (cardHeight - Math.abs(originalHeight - +String(getComputedStyle(advice).height).split("px")[0]));
        }else{
            final = (cardHeight + Math.abs(originalHeight - +String(getComputedStyle(advice).height).split("px")[0]));
        }
        console.log(final)
        card.style.height = final + "px"; 
        }, 900);
    });
})
