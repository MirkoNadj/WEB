function printSomething () {
    console.log('Hello World from external JS')
}
printSomething();

function browserInfo() {
    console.log(navigator.platform);
    console.log(navigator.appVersion);
    console.log(navigator.appName);    
}
browserInfo();

function isOnline () {
    navigator.onLine ? console.log('Online') : console.log('Offline');
}
isOnline();

function printDimensions () {
    console.log(screen.availWidth);
    console.log(screen.availHeight);
    console.log(screen.height);
}
printDimensions();

function printUrlInfo () {
    console.log(location.href);
    console.log(location.host);
    console.log(location.protocol);
    console.log(location.origin);
}
printUrlInfo();

function reloadPage () {
    location.reload();
}
//

function replacePage () {
    location.replace("http://www.w3schools.com");
}
//replacePage();

/*function storeInLocal (key, data) {
localStorage.setItem(key, data);
}
//storeInLocal('prvi', 'neki_podatak')
//storeInLocal('drugi', 'neki_ drugi podatak')

function readFromLocal (key) {
    if (localStorage.getItem(key) === 'undefined') {
        console.log('No data');
    }
    else {
        console.log(localStorage.getItem(key))
    }
}
//readFromLocal('prvi');

function removeData (key) {
    localStorage.removeItem(key)
}

//removeData('prvi');

readFromLocal('prvi')
readFromLocal('drugi')*/


 //sessionStorage 

function storeInSession (key, data) {
    sessionStorage.setItem(key, data);
    }
    //storeInSession('prvi', 'neki_podatak')
    //storeInSession('drugi', 'drugi neki_podatak')
    function readFromSession (key) {
        if (sessionStorage.getItem(key) === 'undefined') {
            console.log('No data');
        }
        else {
            console.log(sessionStorage.getItem(key))
        }
    }
    readFromSession('prvi');
    
    function removeData (key) {
        sessionStorage.removeItem(key)
    }
    
    //removeData('prvi');
    
    readFromSession('prvi')
    readFromSession('drugi')


//console.log(localStorage.length)
/*window.localStorage
Create a function that stores passed data in the browser local storage.
Create a function that reads the stored data, and print it out in console.
If there is no data, print &quot;There is no data&quot; in the console.
Create a function that removes data from the local storage.
Use the previously created functions to store/read/remove some data.
Then add some data in storage and close the browser.
Open the browser again on the same page and use the function to read the
stored value.
Modify functions to work with sessionStorage instead of localStorage.
Try same scenario as with localStorage to examine data livecycle.

window.history
Play around with the browser forward/back navigation.
Implement a function that navigates two pages back.

Window Methods

● Create a function that shows the user a greeting message using alert
● Then a question is presented to the user using prompt
● When the user provides the answer, that answer*/