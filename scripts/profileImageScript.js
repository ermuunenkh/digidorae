// Flipping Mechanism
function flipImage(card) {
    const frontImg = card.querySelector(".front");
    const backImg = card.querySelector(".back");
    const onFocus = card.querySelector(".on-focus");

    card.classList.toggle("flipped");
    frontImg.classList.toggle("on-focus");
    backImg.classList.toggle("on-focus");
}
// Flipping Animation
function flippingTransition(card) {
    if ("flipped" === card.classList[1]){
        card.style.transform = 'scale(1.1)';
        setTimeout(() => {
            card.style.transform += ' rotateY(180deg)';
            
            setTimeout(() => {
            card.style.transform = 'rotateY(180deg) scale(1)';
            }, 500);
        }, 250);
    }
    else {
        card.style.transform = 'rotateY(180deg) scale(1.1)';
        setTimeout(() => {
            card.style.transform += ' rotateY(180deg)';
            
            setTimeout(() => {
            card.style.transform = 'rotateY(360deg) scale(1)';
            }, 500);
        }, 250);
    }
}

