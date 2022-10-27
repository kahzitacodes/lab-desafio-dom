const navbarLinks = document.querySelectorAll(".wrap-link");
const submenus = document.querySelectorAll(".navbar-submenu");
console.log(navbarLinks);


for (let i = 0; i < navbarLinks.length; i++) {

    navbarLinks[i].addEventListener('mouseenter', () => {
        submenus[i].classList.add('show');
    })

}

for (let i = 0; i < navbarLinks.length; i++) {

    navbarLinks[i].addEventListener('mouseleave', () => {
        submenus[i].classList.remove('show');
    })
    
}