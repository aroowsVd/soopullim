document.addEventListener('DOMContentLoaded', () => {
    const projectData = [
        {
            "data_id": "1",
            "link": "https://likesnu.snu.ac.kr",
            "h3": "Institutional Website",
            "h2": "서울대학교 도서관",
            "completed": "2025.12 ~ 2026.03",
            "type": "Responsible Web",
            "techStack": "HTML, CSS, JavaScript",
            "scm": "gitlab",
            "description": ["HTML / CSS / JavaScript(ES6) 기반 반응형 웹사이트 제작 (Main, Sub)", "SCSS @mixin 및 전역 변수 기반 스타일링", "JavaScript 기반 DOM 제어", "데이터 통신 상태 변화에 따른 조건부 CSS 스타일링 구현", "유지보수를 고려한 AI 검색과 일반 검색 조건부 CSS 스타일링"],
            "img_src": ["img/img_popup_01.webp"]
        },
    ];

    const popupProject = () => {
        const popupBoxes = document.querySelectorAll('.open_project_popup');
        const popupProjectCon = document.querySelector('.popup_project_con');
        const popupProjectLink = popupProjectCon.querySelector('.link');
        const titleH3 = popupProjectCon.querySelector('h3');
        const titleH2 = popupProjectCon.querySelector('h2');
        const completed = popupProjectCon.querySelector('.completed .detail');
        const type = popupProjectCon.querySelector('.type .detail');
        const techStack = popupProjectCon.querySelector('.techStack .detail');
        const scm = popupProjectCon.querySelector('.scm .detail');
        const descriptionUl = popupProjectCon.querySelector('.description .detail');
        const projectImg = popupProjectCon.querySelector('.project_img');

        popupBoxes.forEach(box => {
            box.addEventListener('click', () => {
                const dataId = box.getAttribute('data-id');
                popupProjectData(dataId, popupProjectLink, titleH3, titleH2, completed, type, techStack, scm, descriptionUl, projectImg);
                document.documentElement.classList.add('show_project_popup');
                popupProjectCon.scrollTo(0, 0);
            });
        });
        popupProjectCon.addEventListener('click', (e) => {
            if(!e.target.closest('.cells')) {
                document.documentElement.classList.remove('show_project_popup');
            }
        });
    };
    popupProject();

    const popupProjectData = (id, a, h3, h2, completed, type, techStack, scm, descriptionUl, projectImg) => {
        projectData.forEach(data => {
            if(data.data_id === id) {
                if(data.link === undefined) {
                    a.style.display = 'none';
                } else {
                    a.style.display = 'inline-block';
                    a.setAttribute('href', `${data.link}`);
                }
                h3.innerText = `${data.h3}`;
                h2.innerText = `${data.h2}`;
                completed.innerText = `${data.completed}`;
                type.innerText = `${data.type}`;
                techStack.innerText = `${data.techStack}`;
                scm.innerText = `${data.scm}`;
                descriptionUl.innerHTML = '';
                data.description.forEach(desc => {
                    const li = document.createElement('li');
                    li.innerText = desc;
                    descriptionUl.appendChild(li);
                });
                const imgEle = data.img_src.map(url =>{
                    return `<img class="neu_box" src="${url}" alt="${data.h2} project image">`;
                });
                projectImg.innerHTML = imgEle.join('');
            }
        });
    };
});