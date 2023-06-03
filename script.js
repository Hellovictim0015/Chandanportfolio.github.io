var darkmode = document.querySelector(".dayNight");
var banner = document.querySelector(".banner");


darkmode.addEventListener( "click" , ()=>{
   
    banner.classList.toggle(".night");
} );

//const typed = new typed('#element', {
  //  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    //typeSpeed: 50,
  //});