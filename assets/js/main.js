$(document).ready(function() {

    // Referencias a los objetos a utilizar
    var wrapper = $('#wrapper-home'),
        heading = $('#wrapper-home h1'),
        subheading = $('#wrapper-home h2'),
        text = $('#wrapper-home p'),
        intromockup = $('#wrapper-home img.bg-mockup'),
        bglogo = $('#wrapper-home img.bg-logo'),
        // logoleft = $('#wrapper-home img.logo-left'),
        // logoright = $('#wrapper-home img.logo-right'),
        wordscloud = $('#wrapper-home .words-cloud'),
        wordsAlone = new SplitText (wordscloud, {type:'words,chars'}),
        tl = new TimelineLite(); // <-- Línea de tiempo de TweenMax

   // Mostrar el contenedor de la composición por css
   TweenLite.set(wrapper,{visibility:'visible'});

   // Añadimos animaciones a la línea de tiempo (TL)
   tl.from(bglogo, 2, {opacity:0});
   tl.from(heading, 1.5, {opacity:0, x:'+=200'});  // x:'+=100' 100 px desde su posición inicial
   tl.from(subheading, 1.5, {opacity:0, x:'200'}, '-=1');
   //tl.from(logoleft, 1.5, {opacity:0, x:'+=100'}, '-=2');
  // tl.from(logoright, 1.5, {opacity:0, x:'+=100'}, '-=5');
   tl.from(text, 2, {opacity:0, y:'-20', transformOrigin:'50% 100%'});
   tl.from(intromockup, 2, {opacity:0, scale: .9, transformOrigin:'50% 100%'}, '-=.3'); //Si quito el ease me va mejor

   $('#wrapper-home').click(function (e) {
       tl.reverse();
       tl.timeScale(6);
       tl.eventCallback('onReverseComplete', muestraPalabras);
       e.preventDefault();
   });

   function muestraPalabras() {
       $(wrapper).off('click');
       $(wrapper).css('cursor', 'default');
       $(bglogo).fadeOut();
       TweenLite.to(wordscloud, 1, {autoAlpha:1});
       TweenMax.staggerFrom (wordsAlone.words, 0.15, {y:20, opacity:0, rotation:10, transformOrigin:'0 0', ease:Power1.easeOut}, 0.1);
       console.log(wordsAlone.words);
   }
});

// BUTTON COLLAPSIBLE FOR ALL PROJECTS
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// CUSTOM CURSOR
// $("body").append('<div class="cursor"></div>');
// $("html").append('<style>html, body, .msty_notcur {cursor:none !important;}.cursor {z-index:10000000000000; position: fixed;background-color:rgba(255,255,255,0.1);border: 1px solid rgba(0,0,0,0.2);width:25px;height:25px;border-radius:100%;transform:translate(-50%,-50%);top:0px;left:0px;pointer-events:none;} .overlink {background-color:rgba(255,100,100,0.25) !important;border: 1px solid rgba(100,0,0,0.25) !important;} .overtext {background-color:rgba(100,100,255,0.25) !important;border: 1px solid rgba(0,0,100,0.25) !important;}</style>');
// var scrollY = 0, scrollX = 0;
// $(document).mousemove(function(e){
//    $(".cursor").css("top",e.pageY - scrollY + "px").css("left",e.pageX - scrollX + "px");
// });
// $(document).scroll(function(e){
//    scrollY = $(window).scrollTop();
//    scrollX = $(window).scrollLeft();
// });
// setInterval(function(){scroll = $(window).scrollTop();}, 1000);
// $("*").hover(function(e){
//    var index = -1;
//    try {
//       index = $(this).attr("class").toLowerCase().indexOf("button");
//       if (index == -1) {
//          index = $(this).attr("class").toLowerCase().indexOf("link");
//       }
//    }
//    catch(e) {
//       index = -1;
//    }
//    if($(this).css("cursor") == "pointer" || $(this).get(0).tagName == "A" || $(this).get(0).tagName == "BUTTON" || $(this).hasClass("msty_cur") || index > -1) {
//       $(this).addClass("msty_cur");
//       $(this).css("cursor","none");
//       $(".cursor").addClass("overlink");
//    }
//    if($(this).css("cursor") != "none") {
//       $(this).addClass("msty_notcur")
//    }
// }, function(e){
//    $(this).css("cursor","none");
//    $(".cursor").removeClass("overlink");
// });
