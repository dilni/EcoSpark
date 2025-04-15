/*=============SHOW MENU=============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*============ REMOVE MENU MOBILE============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==============ADD BLUR TO HEADER===========*/
// Replace the current blurHeader function with this one
const blurHeader = () => {
    const header = document.getElementById('header');
    // Always keep the blur effect, regardless of scroll position
    header.classList.add('blur-header');
    // We're no longer removing the class when scrolling back up
}

// Apply blur on page load
document.addEventListener('DOMContentLoaded', blurHeader);

// Optional: Keep the scroll event listener if you want to do something else on scroll
// If you don't need it for anything else, you can remove this line
window.addEventListener('scroll', blurHeader);

/*============SHOW SCROLL UP ===============*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)






/*document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card"); // Select the card element
    const topic = document.querySelector(".card-topic"); // Select topic text
    const description = document.querySelector(".card-description"); // Select description text

    const newContent = {
        topic: "New Topic Title",
        description: "This is the updated description when hovered."
    };

    card.addEventListener("mouseenter", function () {
        topic.textContent = newContent.topic;
        description.textContent = newContent.description;
    });

    card.addEventListener("mouseleave", function () {
        topic.textContent = "Original Topic Title";
        description.textContent = "This is the original description.";
    });
});


/*============ SCROLL SECTIONS ACTIVE LINK ===============*/
/*const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY 

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)



/*============ SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay:400,
    //reset: true //Animation repeat
})

sr.reveal('.home__data, .explore__datta, .explore__user, .footer__container')
sr.reveal('.home__card',{delay: 600, distance: '100px', interval: 100})
sr.reveal('.about__data, .join__image',{origin: 'right'})
sr.reveal('.about__image, .join__data',{origin: 'left'})
sr.reveal('.popular__card',{interval: 200})
sr.reveal('.footer__data',{origin: 'left'})









