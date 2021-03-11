// parse search string
let GET = {};
for(let substr of document.location.search.split(/\?|&/))
    if(substr){
        let [key, val] = substr.split('=');
        document.querySelector(key).innerHTML = decodeURIComponent(val);
    }
//set title
document.title = document.querySelector('h1').innerHTML;
