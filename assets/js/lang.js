const langEl = document.querySelector('.langWrap');
const link= document.querySelectorAll('a');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.lead');
const homeEl = document.querySelector('.home');
const servicesmenuEl = document.querySelector('.servicesMenu');
const servicesEl = document.querySelector('.services');
const servicestextEl = document.querySelector('.servicesText');
const aboutmenuEl = document.querySelector('.aboutMenu');
const aboutEl = document.querySelector('.about');
const abouttextEl = document.querySelector('.aboutText');
const pricesmenuEl = document.querySelector('.pricesMenu');
const pricesEl = document.querySelector('.prices');
const pricestextEl = document.querySelector('.pricesText');
const contactmenuEl = document.querySelector('.contactMenu');
const contactEl = document.querySelector('.contact');
const contacttextEl = document.querySelector('.contactText');
const registerCodeEl = document.querySelector('.registerCode');
const vatEl = document.querySelector('.vat');
const bankEl = document.querySelector('.bank');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        titleEl.textContent = data[attr].title;
        descrEl.textContent = data[attr].description;
        homeEl.textContent = data[attr].home;
        servicesmenuEl.textContent = data[attr].services;
        servicesEl.textContent = data[attr].services;
        servicestextEl.textContent = data[attr].description;
        aboutmenuEl.textContent = data[attr].about;
        aboutEl.textContent = data[attr].about;
        abouttextEl.textContent = data[attr].description;
        pricesmenuEl.textContent = data[attr].prices;
        pricesEl.textContent = data[attr].prices;
        pricestextEl.textContent = data[attr].description;
        contactmenuEl.textContent = data[attr].contact;
        contactEl.textContent = data[attr].contact;
        contacttextEl.textContent = data[attr].description;
        registerCodeEl.textContent = data[attr].registerCode;
        vatEl.textContent = data[attr].vat;
        bankEl.textContent = data[attr].bank;
    });
});

var data = {    
    "eesti": 
    {
        "home": "Pealeht",
        "services": "Teenused",
        "about": "Meist",
        "prices": "Hinnapäring",
        "contact": "Kontakt",
        "registerCode": "Registrikood: 123456789",
        "vat": "KMKR: 123456789",        
        "bank": "A/A: EE123456789123456789",
        "title": "Siia tuleb lööklause!",
        "description":
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mõlemad võimalused, mida ta soovib selle selgitamisel avastada, on kõik, mis me võime elu tagajärgede ja muredeni jõuda. Ärgem laske kellelgi tegutseda ega soovi tööd proovida."
    },
    "russian": 
    {
        "home": "Главная страница",
        "services": "Услги",
        "about": "O нас",
        "prices": "Ценовой запрос",
        "contact": "Kонтакт",
        "registerCode": "Регистрационный код: 123456789",
        "vat": "Номер налогообязанного по НСО: 123456789",        
        "bank": "Р/С: EE123456789123456789",
        "title": "А вот и слоган!",
        "description":
            "Lorem ipsum dolor sit amet, conctetur adipiscing elit. Любой из вариантов, который он желает открыть в своем объяснении, - это все, что мы можем в результате достичь того, что приносит жизнь и горести. Не позволяйте никому заниматься деятельностью или, достойным труда, не желать попробовать."
    }
}
