//^ About the ONCLICK animation on the BURGER //
//^ **********************************************************/
document.querySelector('.hamburger').addEventListener('click', (e) =>{
    e.currentTarget.classList.toggle('is-active');
    document.querySelector('.navBar').classList.toggle('active');
  });