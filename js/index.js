const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

/////////////////////
let navList = document.querySelectorAll('header a');
let imgLogo     = document.getElementById('logo-img');

let siteHeader  = document.querySelector('.cta .cta-text h1');
let getStarted  = document.querySelector('.cta .cta-text button');
let ctaImg      = document.getElementById('cta-img');

let featuresHead = document.querySelector('.main-content .top-content .text-content:first-child h4');
let featuresP  = document.querySelector('.main-content .top-content .text-content:first-child p');
let aboutHead  = document.querySelector('.main-content .top-content .text-content:last-child h4');
let aboutP  = document.querySelector('.main-content .top-content .text-content:last-child p');

let middleImage = document.getElementById('middle-img');

let servicesHead = document.querySelector('.main-content .bottom-content .text-content:nth-child(1) h4');
let servicesP = document.querySelector('.main-content .bottom-content .text-content:nth-child(1) p');
let productHead = document.querySelector('.main-content .bottom-content .text-content:nth-child(2) h4');
let productP = document.querySelector('.main-content .bottom-content .text-content:nth-child(2) p');
let visionHead = document.querySelector('.main-content .bottom-content .text-content:nth-child(3) h4');
let visionP = document.querySelector('.main-content .bottom-content .text-content:nth-child(3) p');

let cHead = document.querySelector('.contact h4');
let cInfo = document.querySelectorAll('.contact p');

let copyRight = document.querySelector('footer p');


navList[0].textContent = siteContent.nav['nav-item-1'];
navList[1].textContent = siteContent.nav['nav-item-2'];
navList[2].textContent = siteContent.nav['nav-item-3'];
navList[3].textContent = siteContent.nav['nav-item-4'];
navList[4].textContent = siteContent.nav['nav-item-5'];
navList[5].textContent = siteContent.nav['nav-item-6'];

let menu = document.querySelector("nav");

let newItem1 = document.createElement("a");
newItem1.textContent = "Item1";
newItem1.setAttribute("href", "#");
menu.appendChild(newItem1);

let newItem2 = document.createElement("a");
newItem2.textContent = "Item2";
newItem2.setAttribute("href", "#");
menu.appendChild(newItem2);

let newNavList = document.querySelectorAll('header a');

//Change the color of the navigation text to be green.//
for (let i = 0; i < newNavList.length; i++) {
  newNavList[i].style.color = "green";
}
//Change the color of the navigation text to be green.//


imgLogo.src = siteContent.nav['img-src'];

siteHeader.textContent = siteContent.cta.h1;
getStarted.textContent = siteContent.cta.button;
ctaImg.src = siteContent.cta['img-src'];

featuresHead.textContent = siteContent['main-content']['features-h4'];
featuresP.textContent = siteContent['main-content']['features-content'];

aboutHead.textContent = siteContent['main-content']['about-h4'];
aboutP.textContent = siteContent['main-content']['about-content'];

middleImage.src = siteContent['main-content']['middle-img-src'];

servicesHead.textContent = siteContent['main-content']['services-h4'];
servicesP.textContent = siteContent['main-content']['services-content'];

productHead.textContent = siteContent['main-content']['product-h4'];
productP.textContent = siteContent['main-content']['product-content'];

visionHead.textContent = siteContent['main-content']['vision-h4'];
visionP.textContent = siteContent['main-content']['vision-content'];

cHead.textContent = siteContent.contact['contact-h4'];
cInfo[0].textContent = siteContent.contact.address;
cInfo[1].textContent = siteContent.contact.phone;
cInfo[2].textContent = siteContent.contact.email;

copyRight.textContent = siteContent.footer.copyright;


