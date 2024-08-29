// area of rectangle
const lenRectangle: number = 5;
const widthRectangle: number = 3;
const areaOfRectangle = lenRectangle * widthRectangle;
console.log(areaOfRectangle);

// perimeter of rectangle
const lenRec: number = 5;
const widthRec: number = 3;
const perimeterOfRec: number = 2 * lenRec + 2 * widthRec;
console.log(perimeterOfRec);

// diameter, circumference, area of circle
const radius: number = 5;
const pi: number = 3.14;
const diameterOfCircle: number = 2 * radius;
const circumferenceOfCircle: number = 2 * pi * radius;
const areaOfCircle: number = pi * radius ** 2;
console.log(diameterOfCircle);
console.log(circumferenceOfCircle);
console.log(areaOfCircle);

// angle of triangles
const angle1: number = 80;
const angle2: number = 65;
const angleOfTriangle: number = 180 - (angle1 + angle2);
console.log(angleOfTriangle);

// days converter
let days: number = 366;
let years: number = days / 365;
console.log(years.toFixed());
let remainderMonths: number = days % 365;
console.log(remainderMonths);
let months: number = remainderMonths / 30;
console.log(months.toFixed());
let remainderDays: number = remainderMonths % 30;
console.log(remainderDays);
console.log(
  `${days} days -> ${years.toFixed()} year, ${months.toFixed()} month, ${remainderDays} days`
);
