import Cookies from "js-cookie";

import MicroModal from 'micromodal';

Cookies.set('name', 'value');

// cookieModal

// console.log('dsfsd');


// if (!Cookies.get('was')) {
//     setTimeout(function () {
//         $('#cookieModal').show('modal-cookieModal');
//     }, 600);
// }
// $('#cookieModal').on('shown.bs.modal', function () {
//     // bootstrap modal callback function
//     // set cookie
//     Cookies.set('was', 'valid', { expires: 3, path: "/" }); // need to set the path to fix a FF bug
// })

// $('#cookieModal')



if (!Cookies.get('was')) {
    setTimeout(function () {
        MicroModal.show('cookieModal');
    }, 1200);
}




console.log(MicroModal);
console.log(Cookies);

$('#closecookie').on('click', function(){
    Cookies.set('was', true, {
        expires: 2,
        path: '/'
    });
    MicroModal.close('cookieModal');
})


