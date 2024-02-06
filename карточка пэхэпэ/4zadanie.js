const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let arr = new Map([
    ["Пушкин", "Евгений Онегин"],
    ["Лермонтов", "Мцыри"],
    ["Гоголь", "Вий"]
  ]);
  const findBooks = arr.get("Лермонтов");

  const sort = Array.from(arr.keys()).sort();

  const send = `
    <html>
      <head>
        <title>Задание 4</title>
      </head>
      <body>
       <div class="array">
       <h1>Задание 4</h1>
       <br>
          <p>Книга Лермонтова: ${findBooks}</p>
          <p>Отсортированный массив по фамилиям авторов: ${sort.join(", ")}</p>
       </div>
      </body>
    </html>
  `;

  res.send(send);
});

module.exports = router;
