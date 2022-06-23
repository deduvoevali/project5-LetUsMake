document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('.nav-open').addEventListener('click', function () {
        document.querySelector('.nav-open').classList.toggle('nav-open--active');
        document.querySelector('.header__nav').classList.toggle('header__nav--active');

        document.querySelector('section').addEventListener('click', function () {
            document.querySelector('.nav-open').classList.remove('nav-open--active');
            document.querySelector('.header__nav').classList.remove('header__nav--active');
        });
    });

});