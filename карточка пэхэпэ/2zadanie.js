const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const a = 1.45;
  const b = 2.8;
  let c = a + b;

  const send = `
    <html>
      <head>

        <title>Задание 2</title>
      </head>
      <body>
       <div class="calc">
       <h1>Задание 2</h1>
       <br>
          <p> Сумма переменных a и b = ${c} </p>
          <p> Деление переменной c на разность переменных b и a: ${c / (b - a)} </p>
       </div>
      </body>
    </html>
  `;

  res.send(send);
});

module.exports = router;
