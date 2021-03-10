var slider = document.getElementById('slider');
var minDiv = document.getElementById('minDiv');
var maxDiv = document.getElementById('maxDiv');
var nowDiv = document.getElementById('nowDiv');


minDiv.innerHTML = slider.getAttribute('min');
maxDiv.innerHTML = slider.getAttribute('max');
nowDiv.innerHTML = slider.value;


slider.addEventListener('input', function(){
    var val = slider.value;
    nowDiv.innerHTML = val;
});
