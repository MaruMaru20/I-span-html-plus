document.getElementById('submitButton').addEventListener('click', function (event) {
    event.preventDefault(); // 防止默認的a標籤跳轉行為

    // 顯示圖片和背景圖片並觸發動畫
    var par = document.querySelector('.par');
    var extraBackground = document.querySelector('.extra-background');

    // 顯示前景圖片
    par.style.display = 'block';
    par.classList.add('show'); // 添加show類來觸發前景動畫

    // 顯示背景圖片並觸發動畫
    extraBackground.style.display = 'block';
    extraBackground.classList.add('show'); // 添加show類來觸發背景動畫

    // 設定2秒後跳轉頁面
    setTimeout(function () {
        window.location.href = "nav/main.html"; // 替換為你的目標頁面URL
    }, 2780); // 延遲2秒後執行跳轉
});






function createFireflies(numFireflies) {
    const container = document.getElementById('firefly-container');
    
    for (let i = 0; i < numFireflies; i++) {
      const firefly = document.createElement('div');
      firefly.classList.add('firefly');
      
      const position = Math.random();
      if (position < 0.25) {

        firefly.style.top = `${-10}vh`;
        firefly.style.left = `${Math.random() * 100}vw`;
      } else if (position < 0.5) {

        firefly.style.top = `${110}vh`;
        firefly.style.left = `${Math.random() * 100}vw`;
      } else if (position < 0.75) {

        firefly.style.top = `${Math.random() * 100}vh`;
        firefly.style.left = `${-10}vw`;
      } else {

        firefly.style.top = `${Math.random() * 100}vh`;
        firefly.style.left = `${110}vw`;
      }
      

      firefly.style.animationDelay = `${Math.random() * 5}s, ${Math.random() * 10}s`;

      container.appendChild(firefly);
    }
  }


  createFireflies(50);  //50隻蟲蟲



  
