var elemendid = document.getElementById('lehe-content').querySelectorAll('.kirjakast');

console.log(elemendid)
window.addEventListener('scroll', fadeIn);

function fadeIn() {
    for (var i = 0; i < elemendid.length; i++) {
        var elem = elemendid[i];
        var kaugusEkraanist = elem.getBoundingClientRect().top - window.innerHeight + 20;
        
        kaugusEkraanist < 0 ? elem.classList.add("fadeIn") : elem.classList.remove("fadeIn");
}}