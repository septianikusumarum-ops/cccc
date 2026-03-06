/* ===================================== */
/* BUKA UNDANGAN */
/* ===================================== */

function bukaUndangan(){

const videoSlide = document.querySelector(".slide-video");

videoSlide.scrollIntoView({
behavior:"smooth"
});

/* play music */

const musik = document.getElementById("musik");

if(musik){
musik.play().catch(()=>{});
}

/* play video */

const video = document.getElementById("weddingVideo");

if(video){
video.play().catch(()=>{});
}

}

/* ===================================== */
/* VIDEO PLAY / PAUSE SAAT TERLIHAT */
/* ===================================== */

const video = document.getElementById("weddingVideo");

if(video){

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
video.play().catch(()=>{});
}else{
video.pause();
}

});

},{
threshold:0.6
});

observer.observe(video);

}

/* ===================================== */
/* ANIMASI SCROLL FADE */
/* ===================================== */

const fadeItems = document.querySelectorAll(".fade-item");

const fadeObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

},{
threshold:0.2
});

fadeItems.forEach(el=>{
fadeObserver.observe(el);
});

/* ===================================== */
/* COPY NOMOR REKENING */
/* ===================================== */

function copyRek(id){

const teks = document.getElementById(id).innerText;

navigator.clipboard.writeText(teks).then(()=>{

alert("Nomor rekening berhasil disalin");

});

}

/* ===================================== */
/* AMBIL NAMA TAMU DARI URL */
/* contoh: website.com/?to=Rina */
/* ===================================== */

const params = new URLSearchParams(window.location.search);

const nama = params.get("to");

if(nama){

const target = document.getElementById("guestName");

if(target){
target.innerText = nama;
}

}
