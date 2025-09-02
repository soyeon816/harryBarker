$(function () {
  var $track = $(".carouselNewlist .carousel-itemlist > div"); // 슬라이드 트랙
  var $figures = $track.find("figure"); // 각 아이템
  var itemsPerPage = 4; // 한 페이지에 보여줄 개수
  var totalItems = $figures.length; // 전체 figure 개수
  var totalPages = Math.ceil(totalItems / itemsPerPage); // 총 페이지 수
  var currentPage = 0; // 현재 페이지 번호

  function slideTo(page) {
    var containerWidth = $(".carouselNewlist ol").width(); // 한 페이지 너비
    var moveX = containerWidth * page; // 몇 px 이동할지
    $track.css("transform", "translateX(-" + moveX + "px)");
  }

  $(".btn-carousel a:first-of-type").click(function (e) {
    e.preventDefault();
    if (currentPage > 0) {
      currentPage = currentPage - 1;
    } else {
      currentPage = totalPages-1;
    }
      slideTo(currentPage);
  });

  $(".btn-carousel a:last-of-type").click(function (e) {
    e.preventDefault();
    if (currentPage < totalPages - 1){
      currentPage = currentPage + 1;}
       else{
        currentPage=0;
       }
      slideTo(currentPage);
  });

  slideTo(0); //초기위치세팅
  });
