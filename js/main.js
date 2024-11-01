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
});