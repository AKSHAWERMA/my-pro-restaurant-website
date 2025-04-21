
    const menuButton = document.getElementById('menu');
    const navMenu = document.getElementById('nav-menu');

    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Toggle the "active" class
    });

const translations = {
    uz: {
        menu: "menyu",
        menu_items1: "bosh sahifa",
        menu_items2: "ichki",
        menu_items3: "Shakl"
    },
    ru: {
        menu: "меню",
        menu_items1: "главная страница",
        menu_items2: "интерьер",
        menu_items3: "форма"
    },
    en: {
        menu: "Menu",
        menu_items1: "Home",
        menu_items2: "interior",
        menu_items3: "form"
    }
};

const langOptions = document.querySelectorAll('.lang-option');
    const contentElements = document.querySelectorAll('[data-lang-key]');

    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = option.getAttribute('data-lang');
            switchLanguage(selectedLang);
        });
    });

    function switchLanguage(lang) {
        contentElements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            element.textContent = translations[lang][key];
        });
    }