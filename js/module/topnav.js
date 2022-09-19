let iconZhankai = document.getElementsByClassName('icon-zhankai')[0];
let navContent = document.getElementsByClassName('navContent')[0];
let isXiaLa = document.getElementsByClassName('isXiaLa');
let items = document.getElementsByClassName('topNavItem');
let topNavItema = document.getElementsByClassName('topNavItema');
iconZhankai.addEventListener('click', function () {
    topNavClass(navContent);
})
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
        let nav = items[i].getElementsByTagName('nav')[0];
        let navLi = nav.getElementsByTagName('li');
        let navLiStyle = getComputedStyle(navLi[0]);
        if (!this.active) {
            nav.style.height = parseFloat(navLiStyle.height) * navLi.length + 'px';
            this.active = true;
        } else {
            nav.style.height = 0 + 'px';
            this.active = false;
        }
        topNavClass(this);
    })
}
function topNavClass(dom) {
    if (!dom.key) {
        dom.classList.add('active');
        dom.key = true;
    } else {
        dom.classList.remove('active');
        dom.key = false;
    }
}