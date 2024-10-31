document.addEventListener('DOMContentLoaded', () => {
    const navBar = () => {
        const nav = document.querySelectorAll('nav li');
        nav.forEach(ele => {
            ele.addEventListener('click', () => {
                nav.forEach(element => {
                    element.classList.remove('selected');
                });

                ele.classList.add('selected');
            });
        });
    }
    navBar();
});