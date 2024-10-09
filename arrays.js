const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];

//log each students name and grade
//students.forEach((student) => console.log(student.name, student.grade));

//log and filter grades
// students
//   .filter((student) => student.grade > 80)
//   .forEach((student) => console.log(student.name));

// //top students filter
// const topStudents = students.filter((student) => student.grade > 80);
// console.log(topStudents);

// //log and filter age
// students
//   .filter((student) => student.age < 21)
//   .forEach((student) => console.log(student.name));

// //age filter
// const youngStudents = students.filter((student) => student.age < 21);
// console.log(youngStudents);

//Asignment 2
const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

// //log name and price of items
// const namePrice = products.forEach((product) =>
//   console.log(product.name, product.price)
// );

// const categories = ["Electronics", "Furniture"];

const increasePrice = products.forEach((product) =>
  newPrice = (1.1 * product.price);
  fprice = math.round(newPrice);
  console.log(fprice);
);

// products.forEach((product) => {
//   if (!categories.includes(product.category)) {
//     categories.push(product.category);
//   }
// });
// console.log("Unique Categories:", categories);

// const electronics = products.filter(
//   (product) => product.category === "Electronics"
// );
// console.log("Electronics:", electronics);

// const electronics = products.filter(
//   (product) => product.category === "Electronics"
// );
// console.log("Electronics:", electronics);

// //filter highly rated products
// const highlyRated = products.filter((product) => product.rating >= 4.5);
// console.log("Highly Rated Products: ", highlyRated);

// //filter + log
// const highlyRated = (product.rating >= 4.5).forEach((product) =>
//   console.log(product.name)
// );
