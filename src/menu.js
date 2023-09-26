const menu = (() => {
    function menuDropDown() {
       document.addEventListener("DOMContentLoaded", () => {
           const dropDown = document.querySelector('.menu-container');
           const dropDownContent = document.querySelector('.dropdown-content');

           dropDown.addEventListener('click', () => {
               dropDownContent.classList.toggle('show');
           });

           //Close the drop down menu when user clicks outside of it
           window.addEventListener('click', (event) => {
               if (!event.target.matches('.dropBtn')) {
                   if (dropDownContent.classList.contains('show')) {
                       dropDownContent.classList.remove('show');
                   }
               }
           });
       });
    }
    return {
    menuDropDown,
};
})();
export default menu;
