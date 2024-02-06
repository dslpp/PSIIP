document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var links = document.getElementsByTagName("a");
  
      var linkColors = [];
      for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var color = window.getComputedStyle(link).color;
        linkColors.push(color);
      }
  
      var resultMessage = "Информация о цвете ссылок: " + linkColors.join(", ");
      alert(resultMessage);
    }, 5000);
  });
  function moveBlocks() {
    var container = document.querySelector('.block-container');
    var imgBlock = container.querySelector('img');
    var linkBlock = container.querySelector('a');

    container.insertBefore( imgBlock,linkBlock); // Перемещаем блок <a> перед блоком <img>
};
function changeStyles() {
    var title = document.getElementById('title');

    // Изменяем стили заголовка
    title.style.color = 'green';
    title.style.backgroundColor = 'red';

    // Перемещаем заголовок в правый нижний угол страницы
    title.style.position = 'fixed';
    title.style.bottom = '0';
    title.style.right = '0';
};
function displayBrowserInfo() {
    var intervalId = setInterval(function() {
        var browserInfo = "Название браузера: " + navigator.appName + "\nВерсия браузера: " + navigator.appVersion;
        var popupWindow = window.open('', '_blank');
        popupWindow.alert(browserInfo);
        popupWindow.onbeforeunload = function() {
            clearInterval(intervalId);
        };
    }, 3000);
}
  