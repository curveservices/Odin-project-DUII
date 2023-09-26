const darkMode = (() => {
    function darkHandler() {
        const toggle = document.getElementById('toggle-dark');
        const body = document.querySelector('body');
        const header = document.querySelector('header');

        toggle.addEventListener('click', () => {
        toggle.classList.toggle('fa-toggle-on')   
            if (toggle.classList.toggle('fa-toggle-off')) {
                body.style.background = '#fff'
                body.style.color = '#333';
                body.style.transition = '0.3s';
                header.style.background = '#f7df1e';
                header.style.transision = '0.3s'
            } else {
                body.style.background = '#333';
                body.style.color = '#fff';
                body.style.transition = '0.3s';
                header.style.background = 'grey';
                header.style.transision = '0.3s'
            }
        })
    }

    return {
        darkHandler,
    }
})();

export default darkMode;
