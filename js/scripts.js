document.addEventListener('DOMContentLoaded', () => {
    // 画像拡大のためのイベントリスナー
    const image = document.querySelector('.anime .enlarged');
    
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)'; // 画像を1.1倍に拡大
        image.style.transition = 'transform 0.3s ease'; // スムーズなトランジション
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)'; // 画像を元のサイズに戻す
    });

    // ボタンのホバー効果
    const contactBtn = document.querySelector('.contact-btn');
    
    contactBtn.addEventListener('mouseenter', () => {
        contactBtn.style.backgroundColor = '#a0d8ef'; // 背景色の変更
        contactBtn.style.color = '#fff'; // 文字色の変更
        contactBtn.style.transition = 'background-color 0.3s ease'; // スムーズなトランジション
    });

    contactBtn.addEventListener('mouseleave', () => {
        contactBtn.style.backgroundColor = ''; // 元の背景色に戻す
        contactBtn.style.color = ''; // 元の文字色に戻す
    });
});
