const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const fio= 'Скробко Дарья';
  const n = 20;
  let count = 1;
  let result=" ";
  while (count <= n) {
    result += `${fio} ${count} <br>`;
    count++;
  }

  const send = `
    <html>
      <head>

        <title>Задание 2</title>
      </head>
      <body>
       <div class="repeat">
       <h1>Задание 3</h1>
       <br>
          <p> Фамилия и Имя — ${fio} </p>
          <p> Количество повторений ${n} </p>
          <p> ${result} </p>
       </div>
      </body>
    </html>
  `;
  res.send(send);
});

module.exports = router;
