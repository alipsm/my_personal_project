export const scroll_card_expertise=(Scroll)=>{
    const card = document.querySelectorAll(".Card-body > div");
    if (Scroll >= 1800) {
        for (let i = 0; i < card.length; i++) {
            if (i % 2 == 1) {
                setTimeout(() => {

                    card[i].classList.add("moveExpertiseLeft");
                }, 600 * i);
            } else {
                setTimeout(() => {

                    card[i].classList.add("moveExpertiseRight");
                }, 600 * i);
            }
        }
    }  
}