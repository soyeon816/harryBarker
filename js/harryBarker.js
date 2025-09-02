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
    mode: 'horizontal', // 슬라이더 방향전환설정 현재 좌우 
    speed: 500, //슬라이드가 넘어가는 속도 1000=1초 500=0.5초
    pause: 5000, // 슬라이드 페이지가 넘어간 후 머무는 시간
    infiniteLoop: true, //끝까지 넘어간후에 다시 자동재생할건지 false로 가면 끝까지 가면 재생멈춤
    auto: true, //자동재생여부
    autoDelay: 1500,
    autoHover: true, //마우스 올라가면 자동재생 일시중지
    stopAutoOnClick: true, //슬라이드 조작시 자동재생 일시중지
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

    // slider 원본 슬라이드 참조 (bxSlider 내부에서 유지됨)
    var originalSlides = slider.getSlideCount(); // 실제 슬라이드 수 (clone 제외)

    var index = -1;

    // 원본만 기준으로 검색 (clone 제외)
    for (var i = 0; i < originalSlides; i++) {
      var src = $('.detailImage li:not(.bx-clone)').eq(i).find('img').attr('src');
      if (src.includes(color)) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      slider.goToSlide(index); // 정확한 인덱스로 이동
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
  $('.cartpluse').click(updateCartCount); // 기존 버튼용
  $(document).on('click', 'input[value="Add directly"]', updateCartCount); // Add directly 버튼용
}

//amount
function amountChange() {
  // 1. .size-box 안의 button 클릭 시 함수 실행
  $('.size-box button').click(function () {

    // 2. data-price / data-original 값 변수에 담기
    var price = $(this).attr('data-price');
    var original = $(this).attr('data-original');
    /*$(".amount strong").text(price);
    $(".amount").text(price);
    $(".amount del").text(original); */

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
    infiniteLoop: true, // 마지막 페이지 넘기면 처음으로
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
      // attr 구성은 이름,값으로 구성됨. = 내가 변경하고자하는 이름을 지정하고 값을 넣어야함 = parameter x 2.
      // ex> attr("type"); - type값을 불러와라
      // ex> attr("type","text") - type값을 text로 바꿔라.
    } else {
      $toggleTarget.text("visibility_off");
      $toggleInput.attr("type", "password");
    }
  });
}

function loginTrue() {
  $('.login').click(function (e) {
    // e.preventDefault();폼 제출 막기

    var email = $('#userEmail').val().trim();      // 이메일 입력값
    var password = $('#userPW').val().trim();      // 비밀번호 입력값
    var emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식 확인

    // 조건: 이메일 형식이 틀렸거나 / 비밀번호가 비었거나 / 너무 짧을 때
    if (!emailCheck.test(email) || password == "" || password.length < 7) {
      $('.login-error').show(); // 에러 메시지 보여주기

      setTimeout(function () {
        $('.login-error').fadeOut(); // 5초 뒤에 숨기기
      }, 5000);
    } else {
      $('.login-error').hide(); // 올바르면 에러 숨김
      // 로그인 처리 이어서 작성
    }
  });
}


function joinsystem() {
  $('.joinSubmit').click(function (e) {
    //e.preventDefault();

    var name = $('#joinName').val().trim();
    var email = $('#joinEmail').val().trim();
    var password = $('#joinPW').val().trim();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var pwRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,16}$/;
    //|| 이거나 ! if문에 먼저 부정을 넣는 이유 .test() 디폴트값 트루 
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
/*
.each()	반복해서 실행	.cart-item을 하나씩 돌면서 가격 계산
.find()	안쪽 요소 찾기	$(this).find('.item-count') → 현재 상품 안의 단가 찾기
.val()	input 값 가져오거나 넣기	.val(1) → 값 넣기, .val() → 값 가져오기
.text()	텍스트 변경	.text('$120.00') → 금액 바꾸기
.replace()	문자 바꾸기	.replace('$', '') → $104.00 → 104.00 숫자로 변환용
.toFixed(2)	소수점 2자리로 고정	104.5.toFixed(2) → 104.50
.parseFloat()	문자열을 숫자로	'104.00' → 104 (소수 가능)
.parseInt()	문자열을 숫자로	'2' → 2 (정수만)
.siblings()	형제 요소 찾기	$(this).siblings('.count') → 버튼 옆 input 찾기
.closest()	상위 요소 중 조건 맞는 거 찾기	$(this).closest('.cart-item') → 해당 상품 영역 찾기
.off().on()	이벤트 중복 방지 + 연결	.off('click').on('click', fn) ← 중복 방지하고 클릭 이벤트 걸기
*/
function setupCardLogoFilter() {
  $('.card-check-wrap').each(function () {
    var $wrap = $(this);
    var $input = $wrap.find('.card-number');
    var $logos = $wrap.find('.card-logo');

    $input.on('input', function () {
      var value = $(this).val().replace(/\D/g, ''); // 숫자만 추출

      // 카드번호 없으면 다 보여주기
      if (value == '') {
        $logos.show();
        return; //아무것도 안쓰면 카드 이미지 전부 보여주고
      }

      // 각 카드사별 조건 체크
      if (/^3[47]/.test(value)) {
        // AMEX
        $logos.hide();
        $wrap.find('.amex').show(); 
      } else if (/^5[1-5]/.test(value)) {
        // MasterCard
        $logos.hide();
        $wrap.find('.master').show();
      } else if (/^62/.test(value)) {
        // UnionPay
        $logos.hide();
        $wrap.find('.union').show();
      } else {
        // 인식 안되면 전부 숨김
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
/*
each(function)	여러 요소 하나씩 반복
find()	안쪽 자식 요소 찾기
val()	input의 값 가져오거나 넣기
on('input', fn)	입력할 때마다 실행
replace()	글자 바꾸기
substring()	글자 자르기
hide() / .show()	요소 숨기기 / 보이기
test()	정규표현식이 맞는지 확인
*/

function togglepaymentBorder() {
  var $firstLi = $('.paybox form ul > li:first-child');

  function applyBorder() {
    var creditCardChecked = $('#cardcheck').is(':checked');

    // 첫 번째 li 좌우 보더
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






























