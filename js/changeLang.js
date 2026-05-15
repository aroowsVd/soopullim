document.addEventListener('DOMContentLoaded', () => {
    const sourceLanguage = 'ko';
    const languageButtons = {
        ko: document.getElementById('koBtn'),
        en: document.getElementById('enBtn'),
        ja: document.getElementById('jpBtn'),
    };
    const languageLabels = {
        ko: '한국어',
        en: 'English',
        ja: '日本語',
    };
    const langBtn = document.querySelector('.lang_btn');
    const langBtnParagraph = document.querySelector('.lang_btn > p');
    const langDropdown = document.querySelector('.lang_dropdown');
    let pendingLanguage = null;

    const ensureTranslateContainer = () => {
        if (document.getElementById('google_translate_element')) {
            return;
        }

        const container = document.createElement('div');
        container.id = 'google_translate_element';
        container.style.display = 'none';
        document.body.appendChild(container);
    };

    const getCookieValue = (name) => {
        const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
        return match ? decodeURIComponent(match[1]) : '';
    };

    const getSelectedLanguage = () => {
        const cookieValue = getCookieValue('googtrans');

        if (!cookieValue) {
            return 'ko';
        }

        const parts = cookieValue.split('/').filter(Boolean);
        const targetLanguage = parts[1];

        if (targetLanguage === 'en' || targetLanguage === 'ja') {
            return targetLanguage;
        }

        return 'ko';
    };

    const setSelectedLanguage = (lang) => {
        Object.entries(languageButtons).forEach(([key, button]) => {
            if (!button) {
                return;
            }

            button.classList.toggle('checked', key === lang);
        });

        if (langBtnParagraph) {
            langBtnParagraph.textContent = languageLabels[lang];
        }

        document.documentElement.lang = lang;
    };

    const getGoogleCombo = () => document.querySelector('.goog-te-combo');

    const waitForGoogleCombo = (callback) => {
        let attempts = 0;
        const timer = window.setInterval(() => {
            const combo = getGoogleCombo();

            if (combo || attempts >= 60) {
                window.clearInterval(timer);
                callback(combo);
                return;
            }

            attempts += 1;
        }, 100);
    };

    const applyGoogleLanguage = (lang) => {
        if (lang === 'ko') {
            if (getSelectedLanguage() === 'ko') {
                return;
            }

            document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
            window.location.reload();
            return;
        }

        pendingLanguage = lang;

        waitForGoogleCombo((combo) => {
            if (!combo || !pendingLanguage) {
                return;
            }

            combo.value = pendingLanguage;
            combo.dispatchEvent(new Event('change'));
            pendingLanguage = null;
        });
    };

    const loadGoogleTranslate = () => {
        if (window.google && window.google.translate) {
            return;
        }

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: sourceLanguage,
                    autoDisplay: false,
                    includedLanguages: 'en,ja,ko',
                },
                'google_translate_element'
            );

            const initialLanguage = getSelectedLanguage();
            setSelectedLanguage(initialLanguage);

            if (initialLanguage !== 'ko') {
                pendingLanguage = initialLanguage;
                applyGoogleLanguage(initialLanguage);
            }
        };

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.head.appendChild(script);
    };

    const bindLanguageMenu = () => {
        langBtn.addEventListener('click', () => {
            langDropdown.classList.toggle('open');
        });

        document.addEventListener('click', (event) => {
            if (!langBtn.contains(event.target) && !langDropdown.contains(event.target)) {
                langDropdown.classList.remove('open');
            }
        });

        Object.entries(languageButtons).forEach(([lang, button]) => {
            if (!button) {
                return;
            }

            button.addEventListener('click', () => {
                setSelectedLanguage(lang);
                langDropdown.classList.remove('open');
                applyGoogleLanguage(lang);
            });
        });
    };

    ensureTranslateContainer();
    bindLanguageMenu();
    setSelectedLanguage(getSelectedLanguage());
    loadGoogleTranslate();
});