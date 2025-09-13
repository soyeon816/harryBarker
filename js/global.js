$(document).ready(function () {
  searchpopup();
  popupOpen();
  globalnavgoto();
  globaldepth();
  footersnsinput();
  logOut();
  toggleMenu();
  footerToggle();
});

function searchpopup() {
  $(".closeBtn").click(function () {
    $(".searchPopup").removeClass("active");
  });
}

function popupOpen() {
  $("[data-popup]").click(function () {
    var target = $(this).data("popup");
    $("." + target).addClass("active");
  });
}

function globalnavgoto() {
  $("nav ul > li >b").click(function () {
    var text = $(this).text().trim();

    switch (text) {
      case "NEW":
        window.location.href = "newList-1page.html";
        break;
      case "SLEEP":
        window.location.href = "sleepList.html";
        break;
      case "EAT":
        window.location.href = "eatList.html";
        break;
      case "WALK":
        window.location.href = "walkList.html";
        break;
      case "PLAY":
        window.location.href = "playList-1page.html";
        break;
      case "APPAREL":
        window.location.href = "apparelList.html";
        break;
      case "SALE":
        window.location.href = "saleList-1page.html";
        break;
    }
  });
}

function toggleMenu(){
    $('#mui').click(function(){
      $('header .globalHeader nav').toggleClass('active');

      const icon = $(this).find('.material-symbols-outlined');
      icon.text(icon.text() == 'menu' ? 'close' : 'menu');
    });
}

function globaldepth() {
  $("header .globalHeader nav").on("click", "ol > li", function () {
    window.location.href = $(this).children("a").attr("href");
  });

}

function logOut() {
  $(".logout").click(function () {
    window.location.href = "index.html";
  })
}

function footersnsinput() {
  $(".advertisement-input-wrap button[type='submit']").click(function (e) {
    e.preventDefault();

    var email = $(".advertisement-input-wrap input[type='email']").val().trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      $(".advertisement-input-wrap .message-error").hide();
      $(".advertisement-input-wrap .message-completion").show();

      setTimeout(function () {
        $(".advertisement-input-wrap .message-completion").fadeOut();
      }, 5000);

    } else {
      $(".advertisement-input-wrap .message-completion").hide();
      $(".advertisement-input-wrap .message-error").show();

      setTimeout(function () {
        $(".advertisement-input-wrap .message-error").fadeOut();
      }, 5000);
    }
  });
}


function footerToggle(){
     $('.about-toggle').click(function () {
      var $menu = $('.about-menu');
      var isOpen = $menu.height() > 0;

      if (isOpen) {
        $menu.css('height', '0');
        $(this).removeClass('open');
      } else {
        $menu.css('height', '92px'); 
        $(this).addClass('open');
      }
    });

    $('.customer-toggle').click(function () {
      var $menu = $('.customer-menu');
      var isOpen = $menu.height() > 0;

      if (isOpen) {
        $menu.css('height', '0');
        $(this).removeClass('open');
      } else {
        $menu.css('height', '130px'); 
        $(this).addClass('open');
      }
    });
  }

  
