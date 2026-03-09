// cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if(c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

document.addEventListener('DOMContentLoaded', () => {
    // nav segment move
    const navLists = document.querySelectorAll('nav li');
    const navSegment = document.querySelector('.nav_segment');
    const sections = document.querySelectorAll('.sections');
    window.addEventListener('scroll', () => {
        let currentSectionIndex = -1;
        sections.forEach((section, idx) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if(window.scrollY >= sections[1].offsetHeight) {
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSectionIndex = idx;
                }
            } else {
                currentSectionIndex = 0;
            }
        });
        if(currentSectionIndex !== -1 && currentSectionIndex !== 0) {
            const currentNavList = navLists[currentSectionIndex - 1];
            const navOffsetLeft = currentNavList.offsetLeft;
            const navWidth = currentNavList.offsetWidth;

            navSegment.style.left = `${navOffsetLeft - 36}px`;
            navSegment.style.width = `${navWidth}px`;
        } else {
            navSegment.style.left = '0px';
            navSegment.style.width = `${navLists[0].offsetWidth}px`;
        }
    });

    // 탭메뉴
    const tab = () => {
        const tabBtn = document.querySelectorAll('.tab_con .tab_btn');
        const tabLi = document.querySelector('.tab_li_con');
        let tabBtnId = '';
        tabBtn.forEach(ele => {
            ele.addEventListener('click', () => {
                tabBtn.forEach(el => {
                    el.classList.remove('selected');
                });
                ele.classList.add('selected');

                const tbaBtns = Array.from(tabBtn);
                const vv = tbaBtns.find(item => item.classList.contains('selected'));
                switch(vv.id) {
                    case 'tab_01':
                        tabLi.classList.remove('website','gd');
                        tabLi.classList.add('all');
                        break;
                    case 'tab_02':
                        tabLi.classList.remove('all','gd');
                        tabLi.classList.add('website');
                        break;
                    case 'tab_03':
                        tabLi.classList.remove('all','website');
                        tabLi.classList.add('gd');
                        break;
                    default:
                        alert('err');
                }
            });
        })
    }
    tab();

    // btn toggle
    const btnToggle = () => {
        const btnMail = document.querySelector('.mail_btn');
        btnMail.addEventListener('click', () => {
            btnMail.classList.toggle('active');
        });
    }
    btnToggle();

    //dark mode
    const darkModeToggle = () => {
        const darkModeToggleBtn = document.querySelector('.dark_toggle');
        const imgSrc = document.querySelector('#header > .width_con > a > img');
        darkModeToggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle("dark");
            if(document.documentElement.classList.contains('dark')) {
                setCookie('theme', 'dark', 1);
            } else {
                setCookie('theme', 'light', 1);
            }
            if(imgSrc.src.includes('img/ci_soopullim_h.svg')) {
                imgSrc.src = 'img/ci_soopullim_h_w.svg';
            } else {
                imgSrc.src = 'img/ci_soopullim_h.svg';
            }
        });
    }
    darkModeToggle();

    // tab segment
    function adjustSegmentWidth() {
        const tabSegment = document.querySelector('.tab_segment');
        if (tabSegment) {
        const parentElement = tabSegment.parentElement;
        const activeTab = parentElement.querySelector('.tab_btn.selected');
        
        if (activeTab) {
            const activeTabWidth = activeTab.clientWidth;
            
            // 모든 탭을 가져오기
            const allTabs = parentElement.querySelectorAll('.tab_btn');
            
            // 활성 탭까지의 너비 합계 계산
            let leftPosition = 0;
            for (let i = 0; i < allTabs.length; i++) {
            if (allTabs[i].classList.contains('selected')) {
                break;
            }
            leftPosition += allTabs[i].clientWidth;
            }
            
            tabSegment.style.width = `${activeTabWidth}px`;
            tabSegment.style.left = `${leftPosition}px`;
        }
        }
    }

    setTimeout(adjustSegmentWidth, 100);

    // 탭이 변경될 때마다 segment width 및 left 값 조정
    document.querySelectorAll('.tab_btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setTimeout(adjustSegmentWidth, 0);
        });
    });
});

window.onload = function() {
    const theme = getCookie('theme');
    const darkModeToggleBtn = document.querySelector('.dark_toggle');
    const imgSrc = document.querySelector('#header > .width_con > a > img');
    if(theme === 'dark') {
        document.documentElement.classList.add('dark');
        darkModeToggleBtn.checked = true;
        imgSrc.src = 'img/ci_soopullim_h_w.svg';
    }
};