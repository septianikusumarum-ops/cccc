/* ======================================== */
/* FADE ANIMATION ON SCROLL */
/* ======================================== */

const fadeItems = document.querySelectorAll('.fade-item');

const fadeObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

```
if(entry.isIntersecting){
  entry.target.classList.add('show');
}
```

});

},{
threshold:0.3
});

fadeItems.forEach(item => {
fadeObserver.observe(item);
});

/* ======================================== */
/* VIDEO AUTOPLAY WHEN VISIBLE */
/* ======================================== */

const video = document.querySelector("video");

if(video){

const videoObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

```
if(entry.isIntersecting){
  video.play();
}else{
  video.pause();
}
```

});

},{threshold:0.5});

videoObserver.observe(video);

}

/* ======================================== */
/* COPY REKENING WEDDING GIFT */
/* ======================================== */

function copyRekening(nomor){

navigator.clipboard.writeText(nomor);

alert("Nomor rekening berhasil disalin");

}

/* ======================================== */
/* AMBIL NAMA TAMU DARI LINK */
/* contoh: website.com/?to=Andi */
/* ======================================== */

const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('to');

if(namaTamu){

const tamuElement = document.getElementById("nama-tamu");

if(tamuElement){
tamuElement.textContent = namaTamu;
}

}

/* ======================================== */
/* ISI NAMA TAMU OTOMATIS KE FORM RSVP */
/* ======================================== */

const inputNama = document.getElementById("nama");

if(inputNama && namaTamu){

inputNama.value = namaTamu;

}
