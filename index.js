
const stars = document.querySelectorAll('.fa-star');
const emojis = document.querySelectorAll('.far');

stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        console.log("clicked", index)
        updateRating(index)
    });
});

function updateRating(index) {

    stars.forEach((star, idx) => {
        if(idx < index + 1){
            star.classList.add("active");
        }   else {
                star.classList.remove("active");
            }
    })

    emojis.forEach((emoji) => {
        emoji.classList.remove('active');
    })

    emojis[index].classList.add('active');
}


