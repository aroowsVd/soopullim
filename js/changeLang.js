document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        ko: {
            about_h4: "안녕하세요 꾸준히 성장하는 신입 프론트엔드 임성욱입니다.",
            about_h5: "직관적인 사용자 경험을 최우선으로 고려하여 빠르게 변화하는 웹 트렌드에 대응하여 업계에서 경쟁력 있는 웹 프론트엔드가 되도록 노력하겠습니다.",
            skill_h4: "기술을 통해 감성을 전달하는 프론트엔드",
            skill_h5: "저는 단순히 기능적인 코드만 작성하는 사람이 아닙니다.<br>고객님의 비즈니스를 성공으로 이끌어 나가는 창의적인 파트너입니다.<br><br>각 프로젝트는 고객님의 비전과 열정에서 시작되며,<br>저의 기술은 그 이야기를 현실로 구현합니다.<br><br>함께하는 과정에서 단순한 관계를 넘어,<br>신뢰와 믿음이 깊어지는 동반자가 될 것을 약속드립니다.",
            contact_h4: "함께 귀사의 이야기를 만들어 가는 것은 어떨까요?",
            contact_h5: "저를 선택해 주신다면, 아름다운 성공의 이야기를 함께 써 내려갈 기회가 될 것입니다.<br>디테일 속에 숨겨진 고민과 분석을 통해 최고의 성과를 보여드리겠습니다.<br>마지막으로, 제 포트폴리오를 끝까지 확인해 주셔서 진심으로 감사드립니다.",
            edu_uni_h4: "남서울대학교 멀티미디어 전공",
            edu_aca_h4: "코드스테이츠",
            edu_aca2_h4: "그린 컴퓨터 아카데미",
            edu_aca_h5: "소프트웨어 엔지니어링 부트캠프(프론트엔드)",
            edu_aca2_h5: "『디지털디자인』 UI/UX 디자이너를 위한 반응형 웹디자인&웹퍼블리셔",
        },
        en: {
            about_h4: "Hello, I am SungWook Lim, a growing junior frontend developer.",
            about_h5: "I will prioritize intuitive user experiences and strive to become a competitive web frontend developer in the industry by adapting to the rapidly changing web trends.",
            skill_h4: "A web frontend that conveys emotions through technology.",
            skill_h5: "I am not just someone who writes functional code.<br>I am a creative partner who leads your business to success.<br><br>Each project starts with your vision and passion,and my technology brings that story to life.<br><br>Through our collaboration, I promise to become a partner who goes beyond a simple relationship,building trust and deepening faith.",
            contact_h4: "How about creating your company's story together?",
            contact_h5: "If you choose me,<br>it will be an opportunity to write a beautiful success story together.<br><br>I will deliver the best results through the careful analysis and attention to detail.<br><br>Lastly,<br>I sincerely thank you for taking the time to review my portfolio until the end.",
            edu_uni_h4: "Namseoul University Department of Multimedia",
            edu_aca_h4: "Code States",
            edu_aca2_h4: "Green Computer Academy",
            edu_aca_h5: "Software Engineering(Frontend Development)",
            edu_aca2_h5: "『Digital Design』 UI/UX Responsive Web Design & Web Publisher Training Course",
        },
        jp: {
            about_h4: "こんにちは、私はジュニアフロントエンドのイム・ソンウクです。",
            about_h5: "直感的なユーザー体験を最優先に考え、急速に変化するウェブトレンドに対応して、業界で競争力のあるウェブフロントエンドになるよう努めます。",
            skill_h4: "技術を通じて感情を伝えるウェブフロントエンド。",
            skill_h5: "私は単に機能的なコードを書く人ではありません。お客様のビジネスを成功へと導く創造的なパートナーです。<br><br>各プロジェクトはお客様のビジョンと情熱から始まり、<br>私の技術はその物語を現実に実現します。<br><br>共に進む中で、単なる関係を超え、<br>信頼と信念が深まるパートナーであることをお約束します。",
            contact_h4: "一緒に貴社の物語を作りませんか",
            contact_h5: "私を選んでいただければ、美しい成功の物語を共に紡ぐ機会が得られるでしょう。<br>思考と分析を通じて、最高の成果をお見せします。<br>最後に、私のポートフォリオを最後までご覧いただき、心より感謝申し上げます。",
            edu_uni_h4: "Namseoul University Department of Multimedia",
            edu_aca_h4: "Code States",
            edu_aca2_h4: "Green Computer Academy",
            edu_aca_h5: "ソフトウェアエンジニアリング(フロントエンド開発)",
            edu_aca2_h5: "『デジタルデザイン』 UI/UXデザイン & ウェブフロントエンドトレーニング",
        }
    }

    const koBtn = document.getElementById("koBtn");
    const enBtn = document.getElementById("enBtn");
    const jpBtn = document.getElementById("jpBtn");

    const langModal = () => {
        const langBtn = document.querySelector('.lang_btn');
        const langBtnParagraph = document.querySelector('.lang_btn > p');
        const langDropdown = document.querySelector('.lang_dropdown');

        langBtn.addEventListener('click', (e) => {
            langDropdown.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.remove('open');
            }
        });

        koBtn.addEventListener('click', () => {
            changeLanguage(koBtn.dataset.lang);
            enBtn.classList.remove('checked');
            jpBtn.classList.remove('checked');
            koBtn.classList.add('checked');
            langBtnParagraph.innerHTML = '한국어';
        });
        enBtn.addEventListener('click', () => {
            changeLanguage(enBtn.dataset.lang);
            jpBtn.classList.remove('checked');
            koBtn.classList.remove('checked');
            enBtn.classList.add('checked');
            langBtnParagraph.innerHTML = 'English';
        });
        jpBtn.addEventListener('click', () => {
            changeLanguage(jpBtn.dataset.lang);
            koBtn.classList.remove('checked');
            enBtn.classList.remove('checked');
            jpBtn.classList.add('checked');
            langBtnParagraph.innerHTML = '日本語';
        });
    }
    langModal();

    const changeLanguage = (lang) => {
        let changeNodeList = document.querySelectorAll('[data-detect]');

        changeNodeList.forEach(v => {
            v.innerHTML = translations[lang][v.dataset.detect];
        });
    }
});