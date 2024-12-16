document.addEventListener('DOMContentLoaded', () => {
    // 定義內容數據
    const contentData = [
        {
            title: "旅人",
            heading: "萊多",
            info: "多芙\n正在探索世界的旅者\n\n尋求著各種知識\n似乎會使用秘術",
            model: "img/Raido.png",
        },
        {
            title: "異界",
            heading: "艾瓦茲",
            info: "人類\n第一位來到群星世界的異世界人\n\n沒有特殊能力",
            model: "img/Ihwaz2.png",
        },
        {
            title: "守護者",
            heading: "歐格斯",
            info: "龍族\n世界的守護者\n\n能控制火焰",
            model: "img/algiz3.png",
        },
        {
            title: "仙獸",
            heading: "樊亞",
            info: "牛兔\n大兔仙族\n \n百年難得一見\n欸....等等...別走..呀....",
            model: "img/kemono.gif",
        },
        {
            title: "術師",
            heading: "格茲&塔娜",
            info: "靈族\n幽域的使者\n\n能使用靈能",
            model: "img/05-2.png",
        },
        {
            title: "雷帝",
            heading: "薩茲",
            info: "人類\n界門的看守者之一\n\n能將雷電封印並使用",
            model: "img/06-2.png",
        },
        {
            title: "戰士",
            heading: "楓雪",
            info: "半獸族\n世界的守護者\n\n精通各類武器",
            model: "img/07-2.png",
        },
        {
            title: "工匠",
            heading: "諾雅",
            info: "人類\n修理專家\n\n精通所有機械知識",
            model: "img/08-2.png",
        },
        {
            title: "神祈",
            heading: "凱恩&佩蘿",
            info: "？？\n在天原生活的族群\n\n具有言靈的力量",
            model: "img/09-2.png",
        },
        {
            title: "光衛",
            heading: "？＆？",
            info: "？？\n神祈的守護者\n\n能使用光之力",
            model: "img/10-2.png",
        },
        // 更多數據
    ];

    const items = document.querySelectorAll('.banner .item');

    // 獲取需要更新的內容元素
    const contentTitle = document.querySelector('.content h1');
    const contentHeading = document.querySelector('.content h2.info');
    const contentInfo = document.querySelector('.content pre.info');
    const contentModel = document.querySelector('.content .model');

    // 初始圖片
    const initialImage = contentData[0].model;

    // 上一次點擊的索引
    let previousIndex = null;

    // 遍歷每個 item 並綁定點擊事件
    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            // 如果有上一個索引，淡出當前圖片
            if (previousIndex !== null) {
                contentModel.classList.add('hidden');
                setTimeout(() => {
                    contentModel.style.backgroundImage = `url(${contentData[0].model})`; // 恢復初始圖片
                    contentModel.classList.remove('hidden');
                }, 500); // 等待淡出動畫完成
            }

            // 根據索引找到對應的內容
            const data = contentData[index];

            // 更新內容區域
            contentTitle.textContent = data.title;
            contentTitle.setAttribute('data-content', data.title);
            contentHeading.textContent = data.heading;
            contentInfo.textContent = data.info;

            // 更新背景圖片
            setTimeout(() => {
                contentModel.style.backgroundImage = `url(${data.model})`;
            }, 500); // 確保動畫順序正確

            // 記錄當前索引為上一索引
            previousIndex = index;
        });
    });
});

// nav


