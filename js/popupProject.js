document.addEventListener('DOMContentLoaded', () => {
    const projectData = [
        {
            "data_id": "1",
            "link": "https://lib.jnu.ac.kr",
            "h3": "Institutional Website",
            "h2": "전남대학교 도서관",
            "completed": "2025.09 ~ 2025.11",
            "type": "Responsible Web",
            "techStack": "HTML, CSS, JavaScript, HBS, GSAP",
            "scm": "bitbucket, sourcetree",
            "contribution": "100%",
            "description": ["HTML / CSS / JavaScript(ES6) 기반 반응형 웹사이트 제작 (Main, Sub)", "SCSS @mixin 및 전역 변수 설계를 통한 스타일링 구조화", "GSAP 로딩 애니메이션 구현 및 sessionStorage 기반 제어", "성능 최적화를 위해 SVG 애니메이션 적용", "JavaScript(ES6) 기반 마이크로 인터랙션 및 스크롤 애니메이션 구현", "다국어 대응을 고려한 CSS 스타일링"],
            "img_src": ["img/img_p_popup_jnu.webp"]
        },
        {
            "data_id": "2",
            "link": "https://library.sejong.ac.kr",
            "h3": "Institutional Website",
            "h2": "세종대학교 도서관",
            "completed": "2025.11 ~ 2026.02",
            "type": "Responsible Web",
            "techStack": "HTML, CSS, JavaScript, HBS, GSAP",
            "scm": "bitbucket, sourcetree",
            "contribution": "100%",
            "description": ["HTML / CSS / JavaScript(ES6) 기반 반응형 웹사이트 제작 (Main, Sub)", "SCSS @mixin 및 전역 변수 설계로 유지보수성과 재사용성 강화", "JavaScript 기반 DOM 제어 및 인터랙션 구현", "Google Translate 연동을 고려한 CSS 스타일 적용", "MutationObserver를 활용하여 실시간 DOM 변경 감지 및 좌석 잔여율·진행바 UI 자동 갱신 로직 구현", "키오스크 전용 화면 퍼블리싱"],
            "img_src": ["img/img_p_popup_sj.webp", "img/img_p_popup_sj_01.webp"]
        },
        {
            "data_id": "3",
            "link": "https://likesnu.snu.ac.kr",
            "h3": "Institutional Website",
            "h2": "서울대학교 도서관",
            "completed": "2025.12 ~ 2026.03",
            "type": "Responsible Web",
            "techStack": "HTML, CSS, JavaScript",
            "scm": "gitlab",
            "contribution": "100%",
            "description": ["HTML / CSS / JavaScript(ES6) 기반 반응형 웹사이트 제작 (Main, Sub)", "SCSS @mixin 및 전역 변수 기반 스타일링", "JavaScript 기반 DOM 제어", "데이터 통신 상태 변화에 따른 조건부 CSS 스타일링 구현", "유지보수를 고려한 AI 검색과 일반 검색 조건부 CSS 스타일링"],
            "img_src": ["img/img_p_popup_snu.webp", "img/img_p_popup_snu_01.webp", "img/img_p_popup_snu_02.webp", "img/img_p_popup_snu_03.webp", "img/img_p_popup_snu_04.webp", "img/img_p_popup_snu_05.webp", "img/img_p_popup_snu_06.webp"]
        },
        {
            "data_id": "4",
            "link": "",
            "h3": "Institutional Website",
            "h2": "르완다 표준청",
            "completed": "2026.03 ~ 2026.06",
            "type": "Responsible Web",
            "techStack": "Next.js, TypeScript, Bootstrap, CSS",
            "scm": "git",
            "contribution": "100%",
            "description": ["Next.js 기반 환경에서 React Hooks를 활용한 동적 DOM 제어 및 조건부 렌더링 구현", "Bootstrap과 CSS를 이용한 반응형 디자인 구현", "Git을 통한 버전 관리 및 협업", "르완다 표준청의 요구사항에 맞춘 사용자 친화적 인터페이스 설계", "웹사이트 성능 최적화 및 SEO 고려한 개발"],
            "img_src": ["img/img_p_popup_rsb.webp", "img/img_p_popup_rsb_01.webp", "img/img_p_popup_rsb_02.webp"]
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
        const contribution = popupProjectCon.querySelector('.contribution .detail');
        const descriptionUl = popupProjectCon.querySelector('.description .detail');
        const projectImg = popupProjectCon.querySelector('.project_img');

        popupBoxes.forEach(box => {
            box.addEventListener('click', () => {
                const dataId = box.getAttribute('data-id');
                popupProjectData(dataId, popupProjectLink, titleH3, titleH2, completed, type, techStack, scm, contribution, descriptionUl, projectImg);
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

    const popupProjectData = (id, a, h3, h2, completed, type, techStack, scm, contribution, descriptionUl, projectImg) => {
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
                contribution.innerText = `${data.contribution}`;
                descriptionUl.innerHTML = '';
                data.description.forEach(desc => {
                    const li = document.createElement('li');
                    li.innerText = desc;
                    descriptionUl.appendChild(li);
                });
                const imgEle = data.img_src.map(url => {
                    return `<img class="neu_box" src="${url}" alt="${data.h2} project image">`;
                });
                projectImg.innerHTML = imgEle.join('');
            }
        });
    };
}); 