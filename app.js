const submit = document.querySelector(".submit");
const card = document.querySelector(".card");
const thanks = document.querySelector(".thank-you-card");
const buttons = document.querySelector(".buttons");
const info = document.querySelector(".info-back");



submit.addEventListener("click", function () {
    card.style.display = "none";
    thanks.style.display = "flex";




});

for (let btn of buttons.children) {



    btn.addEventListener("click", function () {
        submit.style.pointerEvents = "all";
        submit.style.opacity = "1";
        for (let btn of buttons.children) {
            btn.classList.remove("select");
            this.classList.add('select');

        }

        info.innerHTML = `You selected ${btn.innerHTML} out of 5`;
    });




}
