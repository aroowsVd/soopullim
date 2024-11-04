document.addEventListener('DOMContentLoaded', () => {
    const portfolioData = [
        {
            "data_id": "1",
            "link": "http://soopullim.com/portfolio/mclarenf1/",
            "h3": "promotion site",
            "h2": "McLaren Racing",
            "completed": "2024",
            "type": "PC Web",
            "tools": "HTML, CSS, Javascript",
            "scope": "Web Design,<br>Front-End Development",
            "contribution": "100%",
            "img_src": ["img/img_popup_01.webp"]
        },
        {
            "data_id": "2",
            "link": "http://soopullim.com/portfolio/starcraft2/",
            "h3": "promotion site",
            "h2": "StarCraft II",
            "completed": "2024",
            "type": "Responsible Web",
            "tools": "HTML, CSS, Javascript",
            "scope": "Web Design,<br>Front-End Development",
            "contribution": "100%",
            "img_src": ["img/img_popup_02.webp"]
        },
        {
            "data_id": "3",
            "link": "",
            "h3": "promotion site",
            "h2": "",
            "completed": "",
            "type": "Full Page Web",
            "tools": "HTML, CSS, Javascript",
            "scope": "Web Design,<br>Front-End Development",
            "contribution": "100%",
            "img_src": [""]
        },
        {
            "data_id": "4",
            "link": "https://aroowsvd.github.io/Graduate-Refactoring/",
            "h3": "Moive Cinema",
            "h2": "Drive In Cinema",
            "completed": "2022",
            "type": "Responsible Web",
            "tools": "HTML, CSS, SCSS, Javascript",
            "scope": "Web Design,<br>Front-End Development",
            "contribution": "100%",
            "img_src": ["img/img_popup_04.webp"]
        },
        {
            "data_id": "5",
            "link": "http://soopullim.com/portfolio/29cm/",
            "h3": "Shopping mall",
            "h2": "29cm Clone Coding",
            "completed": "2024",
            "type": "Responsible Web",
            "tools": "HTML, CSS, Javascript",
            "scope": "Web Design,<br>Front-End Development",
            "contribution": "100%",
            "img_src": ["img/img_popup_05.webp"]
        },
        {
            "data_id": "6",
            "h3": "ArtWork",
            "h2": "LOUIS VUITTON",
            "completed": "2024",
            "tools": "Adobe Photoshop",
            "scope": "BI Design",
            "img_src": ["img/img_popup_06.webp"]
        },
        {
            "data_id": "7",
            "h3": "ArtWork",
            "h2": "LOST ARK",
            "completed": "2024",
            "tools": "Adobe Photoshop",
            "scope": "Box Design",
            "img_src": ["img/img_popup_07.webp"]
        },
        {
            "data_id": "8",
            "h3": "ArtWork",
            "h2": "Moon & Sun",
            "completed": "2024",
            "tools": "Adobe Photoshop",
            "scope": "Box Design",
            "img_src": ["img/img_popup_08.webp"]
        },
        {
            "data_id": "9",
            "h3": "ArtWork",
            "h2": "LCK",
            "completed": "2024",
            "tools": "Adobe Photoshop",
            "scope": "Banner Design",
            "img_src": ["img/img_popup_09_01.webp", "img/img_popup_09_02.webp", "img/img_popup_09_03.webp"]
        },
        {
            "data_id": "10",
            "h3": "ArtWork",
            "h2": "VALORANT",
            "completed": "2024",
            "tools": "Adobe Photoshop",
            "scope": "Banner Design",
            "img_src": ["img/img_popup_10_01.webp", "img/img_popup_10_02.webp", "img/img_popup_10_03.webp"]
        },
        {
            "data_id": "11",
            "h3": "ArtWork",
            "h2": "VENOM",
            "completed": "2024",
            "tools": "Adobe Photoshop",
            "scope": "Poster Design",
            "img_src": ["img/img_popup_11_01.webp", "img/img_popup_11_02.webp"]
        },
        {
            "data_id": "12",
            "h3": "ArtWork",
            "h2": "BITCOIN",
            "completed": "2024",
            "tools": "Adobe Photoshop",
            "scope": "Card News Design",
            "img_src": ["img/img_popup_12_01.webp", "img/img_popup_12_02.webp", "img/img_popup_12_03.webp", "img/img_popup_12_04.webp"]
        },
    ]

    const popUp = () => {
        const popUpBoxs = document.querySelectorAll('.open_popup');
        const popUpCon = document.querySelector('.popup_con');
        const popUpA = document.querySelector('.popup_con .link');
        const titleConh3 = document.querySelector('.popup_con .title_con h3');
        const titleConh2 = document.querySelector('.popup_con .title_con h2');
        const titleConCompeleted = document.querySelector('.popup_con .title_con .compeleted b');
        const titleConType = document.querySelector('.popup_con .title_con .type b');
        const titleConTools = document.querySelector('.popup_con .title_con .tools b');
        const titleConScope = document.querySelector('.popup_con .title_con .scope b');
        const titleConContribution = document.querySelector('.popup_con .title_con .contribution b');
        const portImg = document.querySelector('.port_img');

        popUpBoxs.forEach(box => {
            box.addEventListener('click', () => {
                const dataId = box.getAttribute('data-id');
                popUpData(dataId, popUpA, titleConh3, titleConh2, titleConCompeleted, titleConType, titleConTools, titleConScope, titleConContribution ,portImg);
                document.documentElement.classList.add('show_popup');
                popUpCon.scrollTop = 0;
            });
        });
        popUpCon.addEventListener('click', (e) => {
            if (!e.target.closest('.cells')) {
                document.documentElement.classList.remove('show_popup');
            }
        });
    }
    popUp();

    const popUpData = (id, a, h3, h2, compeleted, type, tools, scope, contribution, img) => {
        portfolioData.forEach(data => {
            if (id === data.data_id) {
                if (data.link === undefined) {
                    document.querySelector('.link').style.display = "none";
                } else {
                    document.querySelector('.link').style.display = "inline-block";
                    a.setAttribute('href', `${data.link}`);
                }
                h3.innerText = `${data.h3}`;
                h2.innerText = `${data.h2}`;
                compeleted.innerText = `${data.completed}`;
                if (data.type === undefined) {
                    document.querySelector('.type').style.display = 'none';
                } else {
                    document.querySelector('.type').style.display = "block";
                    type.innerText = `${data.type}`
                }
                tools.innerText = `${data.tools}`;
                scope.innerHTML = `${data.scope}`;
                if (data.contribution === undefined) {
                    document.querySelector('.contribution').style.display = 'none';
                } else {
                    document.querySelector('.contribution').style.display = "block";
                    contribution.innerText = `${data.contribution}`;
                }
                const imgEle = data.img_src.map(url => {
                    return `<img class="neu_box" src=${url} alt="">`
                });
                img.innerHTML = imgEle.join('');
            }
        });
    }
});