
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');    
});

function() {
    var $window = $(window),
        $mainMenuBar = $('.mainMenuBar'),
        $mainMenuBarAnchor = $('#mainMenuBarAnchor');

    $window.scroll(function () {
        var window_top = $window.scrollTop();
        var div_top = $mainMenuBarAnchor.offset().top;
        if (window_top > div_top) {
            //div sticky
            $mainMenuBar.addClass('stick');
            $mainMenuBarAnchor.height($mainMenuBar.height());
        } else {
            //unsticky div
            $mainMenuBar.removeClass('stick');
            $mainMenuBarAnchor.height(0);
        }
    };
// Cache selectors
var lastId,
topMenu = $("#top-menu"),
topMenuHeight = topMenu.outerHeight()+15,
// All list items
menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function(){
var item = $($(this).attr("href"));
if (item.length) { return item; }
});

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
var href = $(this).attr("href"),
offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
$('html, body').stop().animate({ 
scrollTop: offsetTop
}, 300);
e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
// Get container scroll position
var fromTop = $(this).scrollTop()+topMenuHeight;

// Get id of current scroll item
var cur = scrollItems.map(function(){
if ($(this).offset().top < fromTop)
return this;
});
// Get the id of the current element
cur = cur[cur.length-1];
var id = cur && cur.length ? cur[0].id : "";

if (lastId !== id) {
lastId = id;
// Set/remove active class
menuItems
 .parent().removeClass("active")
 .end().filter("[href='#"+id+"']").parent().addClass("active");
}                   
});
        
});

function show1() {
    document.getElementById('hilang1').style.transition = "opacity .3s ease-in-out";
    document.getElementById('hilang1').style.opacity = "1";
    document.getElementById('gambars1').style.filter = "blur(4px)";
    
}
function hide1() {
    document.getElementById('hilang1').style.opacity = "0";
    document.getElementById('gambars1').style.filter = "blur(0px)";
    
}

function show2() {
    document.getElementById('hilang2').style.transition = "opacity .3s ease-in-out";
    document.getElementById('hilang2').style.opacity = "1";
    document.getElementById('gambars2').style.filter = "blur(4px)";
    
}
function hide2() {
    document.getElementById('hilang2').style.opacity = "0";
    document.getElementById('gambars2').style.filter = "blur(0px)";
    
}

function show3() {
    document.getElementById('hilang3').style.transition = "opacity .3s ease-in-out";
    document.getElementById('hilang3').style.opacity = "1";
    document.getElementById('gambars3').style.filter = "blur(4px)";
    
}
function hide3() {
    document.getElementById('hilang3').style.opacity = "0";
    document.getElementById('gambars3').style.filter = "blur(0px)";
    
}

function show4() {
    document.getElementById('hilang4').style.transition = "opacity .3s ease-in-out";
    document.getElementById('hilang4').style.opacity = "1";
    document.getElementById('gambars4').style.filter = "blur(4px)";
    
}
function hide4() {
    document.getElementById('hilang4').style.opacity = "0";
    document.getElementById('gambars4').style.filter = "blur(0px)";
    
}
