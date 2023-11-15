document.addEventListener('DOMContentLoaded', function () {
    loadPage('../src/views/home.html');

    function loadPage(page) {
        fetch(page)
            .then(res => res.text())
            .then(data => {
                // const tempDiv = document.createElement('div');
                // tempDiv.innerHTML = data;
                // const mainContent = tempDiv.querySelector('div');
                // console.log(mainContent);
                // document.querySelector('main').innerHTML = mainContent.innerHTML;
                document.querySelector('main').innerHTML = data;
            })
            .catch(err => console.error('Error loading page: ', err));
    }
    
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const page = this.getAttribute('id');
            loadPage(`../src/views/${page}.html`);
        })
    })
})