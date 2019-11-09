const circumference = radius => {
  const diameter = radius * 2;
  const circumference = 3.14 * diameter;
  console.log(
    `the circumference of a circle of radius ${radius} is ${circumference}`
  );
};
const area = radius => {
  const area = 3.14 * radius * radius;
  console.log(`the area of a circle of radius ${radius} is ${area}`);
};

module.exports.area = area;
module.exports.circumference = circumference;
