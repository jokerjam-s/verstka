const exclusive = document.querySelector('#exclusive-cell__slide');
const digits = document.querySelector('#exclusive__digits');
const title = document.querySelector('#exclusive__title');
const slideText = document.querySelector('#exclusive__text');
const slider = document.querySelector('#exclusive__slide-btn');


const digitsArray = ['500', '14', '60', '40%'];
const titleArray = ['сотрудников', 'лет', 'наград', 'рынка'];
const slideTextArray = ['по всей Беларуси', 'работы с недвижимостью', 'в отрасли недвижимости', 'работает с нами'];

let slideNo = 1;

exclusive.addEventListener("click", (e) => {
    slideNo = (slideNo < 3) ? slideNo+1 : 0;

    digits.textContent = digitsArray[slideNo];
    title.textContent = titleArray[slideNo];
    slideText.textContent = slideTextArray[slideNo];
    slider.src = `img/slide-${slideNo+1}.svg`;
});