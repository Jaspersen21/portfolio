// NAVIGATION BAR FUNCTION
function myMenuFunction() {
    const menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.toggle("responsive");
}


// ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING 
window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}


//TYPING EFFECT
var typingEffect = new Typed(".typedText", {
    strings: ["Web Developer", "Full-Stack Developer", "Freelancer", "Problem Solver"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1200,
    loop: true,
});


//SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    reset: true
});

// HOME SECTION
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.social-icons', { delay: 200 });

// PROJECT SECTION
sr.reveal('.project-box', { interval: 200 });

// ABOUT SECTION
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 2500,
    reset: true
});
srLeft.reveal('.about-info', { delay: 100 });

const srRight = ScrollReveal({
    origin: 'right',
    distance: '60px',
    duration: 2500,
    reset: true
});
srRight.reveal('.skills-box', { delay: 100 });

// CHANGE ACTIVE LINK

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        const navLink = document.querySelector(".nav-menu a[href*=" + sectionId + "]");
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add("active-link");
            } else {
                navLink.classList.remove("active-link");
            }
        }
    });
}

window.addEventListener("scroll", scrollActive);

