
function paralax(event) {
    let a = this.querySelector(".scena");
    a.style.transform = `translateX(${event.clientX / 50}px)`;
};
document.addEventListener("mousemove", paralax);


let article = document.querySelectorAll(".article");


for (let i = 0; i < article.length; i++) {
    article[i].addEventListener("click", more);
};

function more(event) {
    let target = event.target;
    if (target && target.classList.contains("article__more")) {
        let blockImg = this.children[0].children,
            blockText = this.children[1].children,
            dots = blockText[3].children;
        for (let i = 0; i < blockImg.length; i++) {
            if (blockImg[i].classList.contains("more-hide")) {
                blockImg[i].classList.remove("more-hide");
                blockImg[i].classList.add("more-show");
            } else {
                blockImg[i].classList.add("more-hide");
                blockImg[i].classList.add("more-hide");
            };
        };
        for (let i = 0; i < blockText.length; i++) {
            if (blockText[i].classList.contains("more-hide")) {
                blockText[i].classList.remove("more-hide");
                blockText[i].classList.add("more-show");
            } else if (blockText[i].classList.contains("more-show")) {
                blockText[i].classList.remove("more-show");
                blockText[i].classList.add("more-hide");
            }
        };
        for (let i = 0; i < dots.length; i++) {
            if (dots[i].classList.contains("more-show")) {
                dots[i].classList.remove("more-show");
                dots[i].classList.add("more-hide");
            } else if (dots[i].classList.contains("more-hide")) {
                dots[i].classList.remove("more-hide");
                dots[i].classList.add("more-show");
            }
        }
    }
};

let burger = document.querySelector(".burger"),
    menu = document.querySelector(".menu");

burger.addEventListener("click", function () {
    this.classList.toggle("burger_active");
    menu.classList.toggle("menu_show");
});