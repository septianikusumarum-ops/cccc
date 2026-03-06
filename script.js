/* ===================================== */
/* BUKA UNDANGAN (SCROLL KE SLIDE 2) */
/* ===================================== */

function bukaUndangan(){

const slideBerikutnya = document.querySelector(".slide-video");

slideBerikutnya.scrollIntoView({
behavior: "smooth"
});

}

/* ===================================== */
/* VIDEO AUTO PLAY SAAT TERLIHAT */
/* ===================================== */

const video = document.querySelector("video");

if(video){

const videoObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry => {

if(entry.isIntersecting){
video.play();
}else{
video.pause();
}

});

},{
threshold:0.5
});

videoObserver.observe(video);

}

/* ===================================== */
/* ANIMASI FADE SAAT SCROLL */
/* ===================================== */

const fadeElements = document.querySelectorAll(".fade-item");

const fadeObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

},{
threshold:0.2
});

fadeElements.forEach(el=>{
fadeObserver.observe(el);
});

/* ===================================== */
/* SALIN NOMOR REKENING */
/* ===================================== */

function copyRekening(noRek){

navigator.clipboard.writeText(noRek).then(()=>{

alert("Nomor rekening berhasil disalin");

});

}

/* ===================================== */
/* AMBIL NAMA TAMU DARI URL */
/* contoh: website.com/?to=Rina */
/* ===================================== */

const urlParams = new URLSearchParams(window.location.search);

const namaTamu = urlParams.get("to");

if(namaTamu){

const elemenNama = document.getElementById("nama-tamu");

if(elemenNama){
elemenNama.innerText = namaTamu;
}

}
