const img1 = document.querySelector('.e1');
const img2 = document.querySelector('.e2');
const img3 = document.querySelector('.e3');
const img4 = document.querySelector('.e4');

img1.addEventListener ('mouseover', () => {
    img2.classList.add('img-draken');
    img3.classList.add('img-draken');
    img4.classList.add('img-draken');
    

});

img1.addEventListener ('mouseout', () => {
    img2.classList.remove('img-draken');
    img3.classList.remove('img-draken');
    img4.classList.remove('img-draken');

});

img2.addEventListener ('mouseover', () => {
    img1.classList.add('img-draken');
    img3.classList.add('img-draken');
    img4.classList.add('img-draken');
});

img2.addEventListener ('mouseout', () => {
    img1.classList.remove('img-draken');
    img3.classList.remove('img-draken');
    img4.classList.remove('img-draken');
});

img3.addEventListener ('mouseover', () => {
    img1.classList.add('img-draken');
    img2.classList.add('img-draken');
    img4.classList.add('img-draken');
});

img3.addEventListener ('mouseout', () => {
    img1.classList.remove('img-draken');
    img2.classList.remove('img-draken');
    img4.classList.remove('img-draken');
});

img4.addEventListener ('mouseover', () => {
    img1.classList.add('img-draken');
    img2.classList.add('img-draken');
    img3.classList.add('img-draken');
});

img4.addEventListener ('mouseout', () => {
    img1.classList.remove('img-draken');
    img2.classList.remove('img-draken');
    img3.classList.remove('img-draken');
});
