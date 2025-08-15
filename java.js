
const photoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(elem => { //Перебираємо фото
        if(elem.isIntersecting){
            elem.target.src = elem.target.dataset.src;
            elem.target.style.transform = `translateX(0)`;
            observer.unobserve(elem.target);
        }
    });
});
document.querySelectorAll("img").forEach(img => photoObserver.observe(img)); 