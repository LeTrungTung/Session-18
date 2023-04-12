const person = {
  name: "Hưng",
  age: 18,
  weight: 65,
  height: 1.7,
};
let height;
// cách1: tạo = func
function Person(weight, height) {
  //Viết hoa tên chư cái đàu tiên
  (this.weight = weight),
    (this.height = height),
    (this.getBMI = () => this.weight / (this.height * this.height));
}
// tạo đối tượng bàng class
class Person2 {
  constructor(weight, height) {
    (this.weight = weight), (this.height = height);
  }
  getBMI = () => this.weight / (this.height * this.height);
}
// class;

const person2 = new Person(70, 1.8);
const bmi = person2.getBMI();
console.log(1111, bmi);

const car = {
  brand: "BMW",
  maxSpeed: 300,
  model: "X3",
  price: 90000,
  priceUnit: "USD",
};

const car2 = car;
car2.brand = "Mec";
const car4 = {};
car4.brand = car.brand;
car4.brand = "Toyota";

const car3 = { ...car, brand: "Lexus" }; //dấu "...." copy bộ lòng của nó

console.log("Ktra brand", car4);

// đạt biến để lấy giá trị thuộc tính
const cat = {
  color: "black",
  width: 3,
};

let key = "color";
cat[key] = "White";
console.log(cat);

// Forin lặp qua từng phần tử và trả về key
for (const key in car) {
  console.log("Ktra key của car: ", key, "và giá trị", car[key]);
}


function handleAdd(){
const valueIdAdd=document.querySelector('#id-product') 
const valueImageUrlAdd=document.querySelector('#image') 
const valueNameAdd=document.querySelector('#name') 
const valuePriceAdd=document.querySelector('#price') 

let isDulicate=false
productList.forEach((product)=>{
    if (product.id===valueIdAdd){
        isDulicate=true
        // Kết thúc vòng lặp
        return
    }
})
if (isDulicate){
    return alert("ID trùng, vui lòng nhập lại ID mới!")
} 
console.log();
const newProduct={
    id:valueIdAdd
    name:valueNameAdd
}
}

