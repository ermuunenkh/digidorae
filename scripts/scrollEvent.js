const headerHeight = document.querySelector('.navbar').offsetHeight;
// const multiplier = 2.2;

function createSmoothScroll(parentSelector, linkSelector, sectionSelector, multiplier) {
    const link = parentSelector.querySelector(linkSelector);
    const section = document.querySelector(sectionSelector);

    link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionTop = section.getBoundingClientRect().top;
        const offset = sectionTop - headerHeight * multiplier;
        window.scrollBy({
            top: offset,
            behavior: 'smooth'
        });
        console.log(sectionSelector, " working!")
    });
}
const homeMult = 1;
const aboutMult = 1;
const featuresMult = 3;
const visionMult = 2;
const teamMult = 2.2;

parent = document.querySelector('.navbar');
createSmoothScroll(parent, 'a[href="#home"]', '#home', homeMult);
createSmoothScroll(parent, 'a[href="#about"]', '#about', aboutMult);
createSmoothScroll(parent, 'a[href="#features"]', '#features', featuresMult);
createSmoothScroll(parent, 'a[href="#vision"]', '#vision', visionMult);
createSmoothScroll(parent, 'a[href="#team"]', '#team', teamMult);
homeParent = document.querySelector('section#home');
createSmoothScroll(homeParent, 'a[href="#about"]', '#about', aboutMult);