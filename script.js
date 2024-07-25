// js file to change things on the website to do dynamically  things.


// when choose button clicks pop u a form to fill.
document.getElementById('openForm1').onclick = function(){
    document.getElementById('membership-from').style.display = 'inline-block';
}


// when close button clicks popup form is vanished.
document.querySelector('close-btn').onclick = function(){
    document.getElementById('membership-from').style.display = 'none';
}





