/**
 * @fileoverview Fijar un submenú mediante posicionamiento 'sticky' en la parte superior de la página cuando no es descendiente directo del body
 * @version 0.1
 * @author Juanjo Alonso Sánchez <jj.alonso@esla.com>
 * @copyright cgb@esla.com
 */

//--Variables
const header = document.querySelector("header");
const socialNav = document.querySelector(".social");
const mainNav = document.querySelector(".main-nav");
/**
  * Establece el año en el footer
  * @returns {void}
  */
 function establecerYear(){ 
    const today = new Date();
    const nodoYear = document.querySelector(".footer__copy-year"); 
    nodoYear.innerHTML = today.getFullYear();
}
/**
  * Fija el submenú en la parte superior de la página
  * @param  {}
  * @return  {void}
  */
 function fijarMenu() {
    let scroll = this.scrollY; 
    let alturaSocialNav = socialNav.clientHeight;
    if ((scroll >= alturaSocialNav)){
        socialNav.classList.remove('transition-height'); 
        socialNav.classList.add('height-0');
        mainNav.classList.add('shadow');
        header.style.position = 'sticky';
        header.style.top = 0;
    }
    //Si el scroll llega arriba mostramos socialNav
    if (scroll === 0) {
        header.style.position = 'relative';
        socialNav.classList.add('transition-height');   
        socialNav.classList.remove('height-0');   
        mainNav.classList.remove('shadow');
    }
}
//Pintar año
establecerYear();
//Menú Fijo
fijarMenu(); 
window.addEventListener("scroll", function () {
    fijarMenu();
});