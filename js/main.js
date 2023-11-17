'use strict'

{
  // 変数宣言
  // ハンバーガーメニューの要素
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  // ハンバーガーメニューがクリックされた時に表示されるメニュー画面の要素
  const navi = document.getElementById("hamburger-navigation");

  // ハンバーガーメニュー内の各セクションの要素
  const hamburgerMenuSections = document.querySelectorAll(".hamburger-menu-section");

  // ヘッダートップマスク
  const header_top_mask = document.getElementById("header-top-mask");

  // active状態のヘッダートップマスク
  // const header_top_mask_active = document.getElementById("header-top-mask.active");

  // ハンバーガーメニューをクリックした時の処理
  hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    navi.classList.toggle("active");
    header_top_mask.classList.toggle("active");
  });

  // active状態のヘッダートップ　マスクをクリックした時
  header_top_mask.addEventListener("click", function () {
    // header_top_mask.classList.remove("header-top-mask.active");
    hamburgerMenu.classList.toggle("active");
    navi.classList.toggle("active");
    header_top_mask.classList.toggle("active");
  });

  //ナビゲーションメニューのページ内リンクをクリックした時
  hamburgerMenuSections.forEach((hamburgerMenuSection) => {
    hamburgerMenuSection.addEventListener("click", function () {
      hamburgerMenu.classList.toggle("active");
      navi.classList.toggle("active");
      header_top_mask.classList.toggle("active");
    });
  });

  // PICK UPエリア　カルーセル
  $(".pick_up_area_pictures").slick({
    // autoplay: true,
    // infinite: true,
    // variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    // centerPadding: "14rem",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          // centerPadding: "2rem",
        },
      },
    ],
  });

  // FEATUREエリア　画像　下からフェードイン
  const targets = document.getElementsByClassName('fade');
  for (let i = targets.length; i--;) {
    let observer = new IntersectionObserver((entries, observer) => {
      for (let j = entries.length; j--;) {
        if (entries[j].isIntersecting) {
          entries[j].target.classList.add('active');
          observer.unobserve(entries[j].target);
        }
      }
    });
    observer.observe(targets[i]);
  }

  // ナビゲーションメニュー　ページ内リンク
  $('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
    var adjust = -80; //ヘッダーの高さを調整
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top + adjust;	//idの上部の距離を取得
    $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
  });

}
