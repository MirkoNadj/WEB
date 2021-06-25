/*Selecting One/Multiple Elements
Create two unordered lists on the page.
Create a function that selects the second list and applies a class that sets some
background color to it.*/

function selectListToColor() {
    var chosenElement = document.getElementById('select');
    chosenElement.classList.add('bkg-blue');
}

/*Create a second function that, when triggered, selects all &lt;li&gt; elements on the
page.
The function also sets a class that sets some bg color to every &lt;li&gt; element. */

function selectAllLiToColor() {
    var allLi = document.querySelectorAll('ul li');
    for (var i = 0; i <= allLi.length - 1; i++) {
        allLi[i].classList.add("bkg-green");
    }
}

/*Create one more unordered list and one more function
The function​ should select only &lt;li&gt; elements from that last list
Each &lt;li&gt; element should get a class that sets some bg color and transforms the
text to uppercase. */

function selectLiinUl() {
    var lastUl = document.getElementById('last-list');
    lastUl.classList.add('bkg-yellowAndUpper');
}

/*Create a function that selects the &lt;li&gt; element with class “active”.
Remove the class from that element, and then select the first &lt;li&gt; element in the
first unordered list using node relations.
Apply class to that newly selected &lt;li&gt; element */




    function getLi (){
var li = document.getElementById('prvi').textContent;
alert(li);
}

function changeText (someText){
    document.getElementById('lista').innerHTML = someText;
}

function changeLastText(someLastText) {
    document.getElementById('lista').lastElementChild.innerHTML = someLastText;
}


function insertDropDown (selectArray, whereToInsertInHTML){
    var dropDownList = '<select name="travel">\n';
    selectArray.forEach(function(selectArrayElement) {
        dropDownList += '<option value="' + selectArrayElement + '">' + selectArrayElement + '</option>\n'; 
    })
    dropDownList += '</select>';

    document.getElementById(whereToInsertInHTML).innerHTML = dropDownList;
}

function checkForm () {
    var inputs = document.getElementsByTagName("input");
    console.log(inputs.length);
    //document.getElementById('form').innerHTML = 'PROVERAVAM';
    for (var x = 0; x < inputs.length; x++) {
       if (inputs[x].value === '' && inputs[x].hasAttribute('required')) {
           inputs[x].style.border = "solid red";
      }
   }
}
        