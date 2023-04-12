const productList = [
  {
    name: "Nước ổi",
    price: 20000,
    imageUrl: "./image/Product_1.jfif",
    id: "product-01",
  },
  {
    name: "Nước ổi",
    price: 20000,
    imageUrl: "./image/Product_1.jfif",
    id: "product-01",
  },
  {
    name: "Nước ổi",
    price: 20000,
    imageUrl: "./image/Product_1.jfif",
    id: "product-01",
  },
  {
    name: "Nước ổi",
    price: 20000,
    imageUrl: "./image/Product_1.jfif",
    id: "product-01",
  },
];
// ender sản phẩm
function renderProduct(data) {
  const tbody = document.querySelector("tbody");
  // b2. Khai báo 1 content để chứa nôi dung
  let contentTbody = "";
  productList.forEach((product, index) => {
    contentTbody += `
    <tr>
    <td>${index + 1}</td>
    <td><img src="./images/Product_1.jfif" alt="" /></td>
    <td>$</td>
    <td>40000</td>
    <td><button>Edit</button><button>Delete</button></td>
  </tr>`;
  });
}
