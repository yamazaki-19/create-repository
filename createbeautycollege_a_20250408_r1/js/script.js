
document.querySelector('.burger').addEventListener('click', function () {
    // このバーガーアイコンに「active」をトグル
    this.classList.toggle('active');

    // ナビゲーションメニューに「active」をトグル
    document.querySelector('.nav').classList.toggle('active');

    // すべての .burger_line に「active」をトグル
    const burgerLines = document.querySelectorAll('.burger_line');
    burgerLines.forEach(line => {
        line.classList.toggle('active');
    });
});

function handleFadeIn() {
    const elements = document.querySelectorAll('.fade-in-left');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;

        if (inView) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible'); // ←これで再フェード対応！
        }
    });
}

window.addEventListener('scroll', handleFadeIn);
window.addEventListener('load', handleFadeIn);


$(document).ready(function () {
    $(window).on("scroll", function () {
        console.log("スクロール位置:", $(this).scrollTop());
        if ($(this).scrollTop() > 200) {
            $(".right-btn_wrap").css({
                "visibility": "visible",
                "opacity": "1"
            });
        } else {
            $(".right-btn_wrap").css({
                "visibility": "hidden",
                "opacity": "0"
            });
        }
    });
});

$(document).ready(function () {
    $(window).on("scroll", function () {
        var scrollTop = $(this).scrollTop();  // 現在のスクロール位置
        var footerTop = $(".footer-section").offset().top;  // フッターの位置

        // スクロール位置がフッターの手前に来たら非表示
        if (scrollTop + $(window).height() > footerTop) {
            $(".right-btn_wrap").css({
                "visibility": "hidden",
                "opacity": "0"
            });
        } else if (scrollTop > 100) {  // 100px スクロールしたら表示
            $(".right-btn_wrap").css({
                "visibility": "visible",
                "opacity": "1"
            });
        } else {
            $(".right-btn_wrap").css({
                "visibility": "hidden",
                "opacity": "0"
            });
        }
    });
});