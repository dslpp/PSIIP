const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  const x = req.query.x ? parseFloat(req.query.x) : 2;
  const a = req.query.a ? parseFloat(req.query.a) : 3;

  const result = calc(x,a);

  res.send(`
    <html>
      <head>
            <link rel="stylesheet" type="text/css" href="/styles.css" />

        <title>Калькулятор</title>
      </head>
      <body>
       <div class="calc">
          <h1>Калькулятор</h1>
          <form action="/6" method="get">
            <label for="x">Введите x:</label>
            <input type="number" id="x" name="x" value="${x}">
            <br>
            <label for="y">Введите a:</label>
            <input type="number" id="a" name="a" value="${a}">
            <br>
            <input type="submit" value="Посчитать">
          </form>
          <br>
          <p>Результат: ${result}</p>
       </div>
      </body>
    </html>
  `);
});


module.exports = router;

function calc(x, a) {
  var log5x = Math.log(Math.pow(x, 2)+ Math.sqrt(Math.pow(x,2))+1) / Math.log(5);
  const result = x*Math.sqrt(Math.pow( Math.pow(x,2)+ Math.pow(a,2),3))+log5x;
  return result;
}