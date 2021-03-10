
// var x = 5;

var minDiv = document.getElementById('minDiv');
var maxDiv = document.getElementById('maxDiv');
var nowDiv = document.getElementById('nowDiv');
var slider = document.getElementById('slider');


minDiv.innerHTML = slider.getAttribute('min');
maxDiv.innerHTML = slider.getAttribute('max');
nowDiv.innerHTML = slider.value;


slider.addEventListener('input', function(){
    nowDiv.innerHTML = slider.value;
});


