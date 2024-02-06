const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
 let S1="Скробко"
 let S2="ул. Щорса, д. 35, кв 27"


  const send = `
    <html>
      <head>
        <title>Задание 5</title>
      </head>
      <body>
       <div class="stroka">
       <h1>Задание 5</h1>
       <br>
          <p>Фамилия: ${S1}</p>
          <p>Адрес: ${S2}</p>
          <p>Длина строки адреса: ${S2.length}</p>
          <p>Конкатенация: ${S1+ ' ' +S2}</p>
          <p>Нижний регистр адреса: ${S2.toLowerCase()}</p>
       </div>
      </body>
    </html>
  `;

  res.send(send);
});

module.exports = router;
