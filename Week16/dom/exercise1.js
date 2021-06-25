function selectList() {
    var element = document.getElementById('select');
    element.classList.add('bkg-color');
}
myFunction();

function selectLi() {
    var ul = document.querySelectorAll('ul li');
    for (let i = 0; i <= ul.length - 1; i++) {
        ul[i].classList.add("myClass");
    }
}
//selectLi()

function selectLiInUl() {
    var ul1 = document.getElementById('nav_1');
    ul1.style.backgroundColor = "black";
    ul1.style.borderBlockEndStyle = "2px";

}
//selectLiinUl()

function removeClass () {
    var firstLiClass = document.getElementsByClassName('active')
    console.log(firstLiClass)
    //firstLiClass[0].classList.remove('active');

}
removeClass();
console.log(firstLiClass)

//removeClass();