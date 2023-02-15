var main_img = document.getElementById('main-img')
var smol_img = document.getElementsByClassName('smol-img')

// smol_img[0].onclick = function() {
//     main_img.src = smol_img[0].src
// }

for (let i = 0; i < smol_img.length; i++) {
    smol_img[i].onclick = function() {
        main_img.src = smol_img[i].src;
    };
}