$(document).ready(function () {
  popup();
  autoSlider();
  indexCarousel();
  itemCount();
  itemdetail();
  createCustomPager();
  suggestion();
  reviewspopup();
  cartCount();
  amountChange();
  toggleTodo();
  loginTrue();
  joinsystem();
  tabUI();
  orderpopup();
  confirmPassword();
  addressChange();
  historyback();
  cartUI();
  shoppaypopup();
  addresspopup();
  setupCardLogoFilter();
  togglepaymentBorder();
  detailPage();
  reviewsStar();
  toggledetailpage();

});

//popup
function popup() {
  $(".closeBtn").click(function () {
    $(".mainPopup").removeClass("active");
  });
}

function reviewspopup() {
  $(".closeBtn").click(function () {
    $(".reviewsPopup").removeClass("active");
  });
}
function orderpopup() {
  $(".closeBtn").click(function () {
    $(".orderPopup").removeClass("active");
  });
}
function shoppaypopup() {
  $(".closeBtn").click(function () {
    $(".shoppayPopup").removeClass("active");
  });
}
function addresspopup() {
  $(".closeBtn").click(function () {
    $(".addressPopup").removeClass("active");
  });
}

function reviewsStar(){
  var $stars = $('.starCount');

  $stars.on('click', function(){
    const val = parseInt(this.value, 10); 
    $stars.removeClass('active');
    $stars.filter(function(){
      return parseInt(this.value, 10) >= val;
    }).addClass('active');
  });
}



//index main slider*
function autoSlider() {
  $(".bxslider").bxSlider({
    mode: 'horizontal', 
    speed: 500, 
    pause: 5000,
    infiniteLoop: true,
    auto: true, 
    autoDelay: 1500,
    autoHover: true,
    stopAutoOnClick: true, 
    controls: false,
    responsive: true,
    adaptiveHeight: true
  });
}


function indexCarousel() {
   $(".carouselNewList").bxSlider({
      minSlides: 1,
      maxSlides: 4,
      slideWidth: 420,
      slideMargin: 46,
      moveSlides: 4,
      startSlide: 0,
      shrinkItems: true,
      infiniteLoop: true,
      pager: false,
      controls: true,
      touchEnabled:false
  })
}

//detail list image pager
function itemdetail() {
  var slider = $(".detailImage").bxSlider({
    pager: true,
    controls: false,
    pagerCustom: '.customPager'
  });

  //color button
  $('.color-box button').click(function () {
    var color = $(this).data('color');

    var originalSlides = slider.getSlideCount(); 

    var index = -1;

    for (var i = 0; i < originalSlides; i++) {
      var src = $('.detailImage li:not(.bx-clone)').eq(i).find('img').attr('src');
      if (src.includes(color)) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      slider.goToSlide(index); 
    }
  });
}

function createCustomPager(target) {
  $(".customPager a").click(function (e) {
    e.preventDefault();
    var index = $(this).data("slide-index");
    slider.goToSlide(index);

    $(".customPager a").removeClass("active");
    $(this).addClass("active");
  });
}

//detail list count
function itemCount() {
  $('.minus').click(function () {
    var $input = $(this).next();
    var count = parseInt($input.val());
    if (count > 1) {
      $input.val(count - 1);
    }
  })

  $('.plus').click(function () {
    var $input = $(this).prev();
    var count = parseInt($input.val());
    $input.val(count + 1);
  })
}

//detail cart count

function updateCartCount() {
  var count = parseInt($('.count').val(), 10);
  if (isNaN(count)) count = 1;

  var current = parseInt($('.cart-count').text(), 10);
  if (isNaN(current)) current = 0;

  var total = current + count;
  $('.cart-count').text(total);
}

function cartCount() {
  $('.cartpluse').click(updateCartCount); 
  $(document).on('click', 'input[value="Add directly"]', updateCartCount); 
}

//amount
function amountChange() {
  $('.size-box button').click(function () {

    var price = $(this).attr('data-price');
    var original = $(this).attr('data-original');

    if (original) {
      $(".amount").html("<strong>" + price + "</strong><del>" + original + "</del>");
    } else if ($(".amount strong").length) {
      $(".amount strong").text(price);
    } else {
      $(".amount").text(price);
    }
  });
}

function toggledetailpage(){
  $(".toogle-btn").click(function () {
  $(this).toggleClass("open");                
});
}

//detail list 추천제품 slider
function suggestion() {
  $('.suggestionList').bxSlider({
    minSlides: 1,
    maxSlides: 4,
    slideWidth: 270,
    slideMargin: 20,
    moveSlides: 1,
    startSlide: 0,
    infiniteLoop: true, 
    pager: false,
    controls: true,
    shrinkItems: true,
    infiniteLoop: true,
    controls: true,
    touchEnabled:false
  });
}

//login
function toggleTodo() {
  var $toggleTarget = $(".material-icons.toggleVisible");
  var $toggleInput = $("#userPW");
  var toggleStatus = false;

  $toggleTarget.click(function () {
    toggleStatus = !toggleStatus;
    if (toggleStatus == true) {
      $toggleTarget.text("visibility");
      $toggleInput.attr("type", "text");
    } else {
      $toggleTarget.text("visibility_off");
      $toggleInput.attr("type", "password");
    }
  });
}

function loginTrue() {
  $('.login').click(function (e) {

    var email = $('#userEmail').val().trim();  
    var password = $('#userPW').val().trim();     
    var emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!emailCheck.test(email) || password == "" || password.length < 7) {
      $('.login-error').show();

      setTimeout(function () {
        $('.login-error').fadeOut();
      }, 5000);
    } else {
      $('.login-error').hide(); 
    }
  });
}


function joinsystem() {
  $('.joinSubmit').click(function (e) {

    var name = $('#joinName').val().trim();
    var email = $('#joinEmail').val().trim();
    var password = $('#joinPW').val().trim();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var pwRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,16}$/;
    if (
      name == "" || !emailRegex.test(email) || !pwRegex.test(password)) {
      alert("Please check your name, email format, and password (8-16 characters including lowercase, number, special character).");
    } else {
      alert("Thank you. You will be taken to the login page!");
    }
  });
  var $toggleTarget = $(".material-icons.toggleVisible");
  var $toggleInput = $("#joinPW");
  var toggleStatus = false;

  $toggleTarget.click(function () {
    toggleStatus = !toggleStatus;
    if (toggleStatus == true) {
      $toggleTarget.text("visibility");
      $toggleInput.attr("type", "text");
    } else {
      $toggleTarget.text("visibility_off");
      $toggleInput.attr("type", "password");
    }
  });
}



function confirmPassword() {
  var pwCheck = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,16}$/;

  $("#changePW, #changePW2").on("input", function () {
    var pw1 = $("#changePW").val();
    var pw2 = $("#changePW2").val();

    if (!pwCheck.test(pw1)) {
      $(".change-true").hide();
      $(".change-error").show();
    } else if (pw1 == pw2) {
      $(".change-true").show();
      $(".change-error").hide();
    } else {
      $(".change-true").hide();
      $(".change-error").show();
    }

  var $togglePassword = $(".material-icons.toggleVisible");
  var $toggleInput = $("#changePW");
  var $toggleInputpw = $("#changePW2");

  var toggleStatus = false;

  $togglePassword.click(function () {
    toggleStatus = !toggleStatus;
    if (toggleStatus == true) {
      $togglePassword.text("visibility");
      $toggleInput.attr("type", "text");
      $toggleInputpw.attr("type","text")
    } else {
      $togglePassword.text("visibility_off");
      $toggleInput.attr("type", "password");
      $toggleInputpw.attr("type","password")
    }
  });
  });
}

function tabUI() {
  $(".tabMenu li").click(function () {
    var target = $(this).attr("data-tabNumb");

    $(".tabMenu li").removeClass("activated");
    $(this).addClass("activated");

    $(".tabPage").removeClass("activated");
    $("#" + target).addClass("activated");
  });

  $("input[value='withdraw order']").click(function () {

    $(".tabPage").removeClass("activated");
    $("#tab3").addClass("activated");
  });
}

function addressChange() {
  $(".btn-addresschange").click(function () {
    window.location.href = "changeaddress.html";
  });

  $("input[value='Delete']").click(function () {
    if ($(".address-item").length > 0) {
      $(".address-item div").css({
        "display": "none"
      });
      $(".notaddress").show();
    } else {
      $(".notaddress").show();
    }
  });
}

function historyback() {
  $(".btn-back").click(function () {
    window.history.back();
  });
  $("input[value='CANCELLATION']").click(function () {
    window.history.back();
  });
}

function cartUI() {

  function updateTotal() {
    var total = 0;

    $('.cart-item').each(function () {
      var price = parseFloat($(this).find('.item-count').text().replace('$', ''));
      var qty = parseInt($(this).find('.count').val());
      var itemTotal = price * qty;

      $(this).find('.item-total').text('$' + itemTotal.toFixed(2));
      total += itemTotal;
    });

    $('.cart-total').text('$' + total.toFixed(2));

    if ($('.cart-item').length == 0) {
      $('.cart-box').hide();
      $('.mycart-wrap').show();
    }
  }

  $('.plus').off('click').on('click', function () {
    var $input = $(this).siblings('.count');
    var qty = parseInt($input.val());
    $input.val(qty + 1);
    updateTotal();
  });

  $('.minus').off('click').on('click', function () {
    var $input = $(this).siblings('.count');
    var qty = parseInt($input.val());
    if (qty > 1) {
      $input.val(qty - 1);
      updateTotal();
    }
  });

  $('.count').off('input').on('input', function () {
    var val = parseInt($(this).val());
    if (isNaN(val) || val < 1) {
      $(this).val(1);
    }
    updateTotal();
  });

  $('input[value="REMOVE"]').off('click').on('click', function () {
    $(this).closest('.cart-item').remove();
    updateTotal();
  });

  $('input[value="CONTIUE SHOPPING"]').click(function () {
    window.location.href = "index_after.html";
  });

  $('input[value="CHECKOUT"], .payment').click(function () {
    window.location.href = "payment.html";
  });

  updateTotal();
}

function setupCardLogoFilter() {
  $('.card-check-wrap').each(function () {
    var $wrap = $(this);
    var $input = $wrap.find('.card-number');
    var $logos = $wrap.find('.card-logo');

    $input.on('input', function () {
      var value = $(this).val().replace(/\D/g, ''); 

      if (value == '') {
        $logos.show();
        return; 
      }

      if (/^3[47]/.test(value)) {
        $logos.hide();
        $wrap.find('.amex').show(); 
      } else if (/^5[1-5]/.test(value)) {
        $logos.hide();
        $wrap.find('.master').show();
      } else if (/^62/.test(value)) {
        // UnionPay
        $logos.hide();
        $wrap.find('.union').show();
      } else {
        $logos.hide();
      }
    });

    $('.card-number').on('input', function () {
      var value = $(this).val().replace(/\D/g, '');
      value = value.substring(0, 16);
      var formatted = value.replace(/(\d{4})(?=\d)/g, '$1-');
      $(this).val(formatted);
    });
  });
}

function togglepaymentBorder() {
  var $firstLi = $('.paybox form ul > li:first-child');

  function applyBorder() {
    var creditCardChecked = $('#cardcheck').is(':checked');

    if (creditCardChecked) {
      $firstLi.css({
        'border-left': 'none',
        'border-right': 'none'
      });
    } else {
      $firstLi.css({
        'border-left': '1px solid #a6a6a6',
        'border-right': '1px solid #a6a6a6'
      });
    }
  }

  applyBorder();

  $('input[name="payment"]').on('change', applyBorder);
}

function detailPage(){
  $('.toogle-btn').click(function(){
    $(this).siblings('p').toggle();
  })
}






























