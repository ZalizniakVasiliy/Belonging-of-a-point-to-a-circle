const xAxisPointA = 4;
const yAxisPointA = 9;
const radius = 10;
/* Так как радиус окружности при данных условиях является гипотенузой визуализированного
   прямоугольного треугольника, следовательно, размер гипотенузы и будет определять
   максимально удалённую точку от центра окружности, всё ещё принадлежащую данной фигуре.*/
const result =
  Math.sqrt(Math.pow(xAxisPointA, 2) + Math.pow(yAxisPointA, 2)) <= radius
    ? `Point 'A' belongs to the circle.`
    : `Point 'A' is outside the circle.`;
console.log(result);
