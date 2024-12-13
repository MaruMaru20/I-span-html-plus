// 選取 "支持" 按鈕和彈出框的相關元素
const supportLink = document.querySelector('.support-link'); // 綁定 "支持"
const linkOpen = document.querySelector('.LinkThree'); // 綁定彈出框
const linkClose = document.querySelector('.Link-close'); // 關閉按鈕

// 點擊 "支持" 開啟彈出框
supportLink.addEventListener('click', (event) => {
    event.preventDefault(); // 阻止默認行為（如跳轉）
    linkOpen.classList.add('open'); // 顯示彈出框
});

// 點擊關閉按鈕隱藏彈出框
linkClose.addEventListener('click', () => {
    linkOpen.classList.remove('open');
});

// 點擊外部區域關閉彈出框
document.addEventListener('click', (event) => {
    if (!linkOpen.contains(event.target) && event.target !== supportLink) {
        linkOpen.classList.remove('open');
    }
});