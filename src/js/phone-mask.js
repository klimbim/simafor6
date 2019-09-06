import IMask from 'imask';


var element = document.getElementById('inputTel');

var maskOptions = {
    mask: '+{7}(000)000-00-00'
};
if (element){

    var mask = IMask(element, maskOptions);
}