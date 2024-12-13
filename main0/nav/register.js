

// 密碼

const passwordField = document.getElementById('UserPw');
const togglePasswordButton = document.getElementById('Pwhide');

togglePasswordButton.addEventListener('click', function() {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    // Toggle icon
    togglePasswordButton.name = togglePasswordButton.name === 'lock-closed' ? 'lock-open-outline' : 'lock-closed';
});
//帳號登入註冊
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const btnPopup = document.querySelector('.btnLogin-popup');

const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active')
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
});

document.addEventListener('click', function(event) {
    const loginPopup = document.querySelector('.wrapper');
    const loginButton = document.querySelector('.btnLogin-popup');
    const closeButton = document.querySelector('.icon-close');

    // 如果點擊發生在彈出視窗內部或是點擊了登入按鈕或關閉按鈕，不執行關閉操作
    if (loginPopup.contains(event.target) || event.target === loginButton || event.target === closeButton) {
        return;
    }

    // 點擊了彈出視窗以外的區域，關閉彈出視窗
    loginPopup.classList.remove('active-popup');
});


const dialogTexts = [
    "這是第一段對話內容。",
    "這是第二段對話內容。",
    "這是第三段對話內容。",
    "這是最後一段對話，點擊完成。",
];

let currentDialogIndex = 0;
let currentText = "";
const dialogTextElement = document.getElementById("dialog-text");
const skipButton = document.getElementById("skip-button");
const typingSpeed = 100;
let isSkipping = false;
let isResetting = false;

const container = document.querySelector(".container");
const person = document.querySelector(".person");
const content = document.querySelector(".content");

const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const dialogButtons = document.getElementById("dialog-buttons");

const homeLink = document.querySelector("nav a[href='#']");

function typeText(text) {
    let i = 0;
    currentText = "";
    dialogTextElement.textContent = "";

    const typingInterval = setInterval(() => {
        if (i < text.length) {
            currentText += text.charAt(i);
            dialogTextElement.textContent = currentText;
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, typingSpeed);
}

function showNextDialog() {
    if (isSkipping || isResetting) {
        return;
    }

    if (currentDialogIndex < dialogTexts.length) {
        setTimeout(() => {
            typeText(dialogTexts[currentDialogIndex]);
            currentDialogIndex++;
        }, 300);  // 延遲
    } else {
        endDialog();
    }
}

function skipDialog() {
    isSkipping = true;
    dialogTextElement.textContent = "好吧...";
    setTimeout(() => {
        endDialog();
    }, 1500);

    yesButton.disabled = true;
    noButton.disabled = true;
    dialogButtons.classList.add("hidden");
}

function endDialog() {
    container.classList.add("hidden");
    person.classList.add("hidden");
    content.classList.add("hidden");

    // 解除首頁按鈕的事件禁用
    homeLink.addEventListener("click", handleHomeClick);
}

function handleHomeClick(event) {
    event.preventDefault();
    resetDialog();
}

function resetDialog() {
    if (isResetting) return;

    isResetting = true;
    currentDialogIndex = 0;
    isSkipping = false;
    dialogTextElement.textContent = "";

    container.classList.remove("hidden");
    person.classList.remove("hidden");
    content.classList.remove("hidden");

    dialogTextElement.textContent = "要重新聽對話嗎？";
    dialogButtons.classList.remove("hidden");

    

    yesButton.disabled = false;
    noButton.disabled = false;
    homeLink.addEventListener("click", handleHomeClick);
    yesButton.addEventListener("click", handleYesClick);
    noButton.addEventListener("click", handleNoClick);
}

function handleYesClick() {
    yesButton.disabled = true;
    noButton.disabled = true;
    dialogButtons.classList.add("hidden");
    showNextDialog();
    isResetting = false;
}

function handleNoClick() {
    yesButton.disabled = true;
    noButton.disabled = true;
    dialogButtons.classList.add("hidden");
    isResetting = false;
    skipDialog();
}

showNextDialog();

window.addEventListener("click", showNextDialog);

skipButton.addEventListener("click", skipDialog);



const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.navigation a'); // 將所有導航選項儲存為 NodeList

// 點擊漢堡選單顯示或隱藏導航欄
hamburgerMenu.addEventListener('click', () => {
    navigation.classList.toggle('ok');
});

// 點擊導航選項後關閉漢堡選單
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('ok'); // 移除 "ok" 類名，關閉漢堡選單
    });
});

