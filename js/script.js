/* =========================================
   オープニングローディングの制御
========================================= */
// loadイベントは画像などのすべてのリソースが読み込まれた後に発火するので、外側でOKです
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        // サイトの読み込み完了後、ロゴアニメーションが終わるタイミングで幕を上げる
        setTimeout(() => {
            loader.classList.add('is-loaded');
        }, 2200);
    }
});

/* =========================================
   DOMの読み込みが完了してから実行するプログラム
========================================= */
document.addEventListener('DOMContentLoaded', function() {
    
    /* --- 1. スクロールアニメーション用 --- */
    const fadeElements = document.querySelectorAll('.js-fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 要素が画面に入ったら 'is-visible' クラスを追加
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        // 画面の下から10%のところを通過したら発火
        rootMargin: '0px 0px -10% 0px'
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    /* --- 2. ハンバーガーメニューの制御 --- */
    const hamburger = document.getElementById('js-hamburger');
    const mobileMenu = document.getElementById('js-mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    if (hamburger && mobileMenu) {
        // ボタンを押した時の動き（開け閉め）
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('is-active');
            mobileMenu.classList.toggle('is-active');
        });

        // メニュー内のリンクを押した時の動き（メニューを閉じる）
        mobileLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('is-active');
                mobileMenu.classList.remove('is-active');
            });
        });
    }
});