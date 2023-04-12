const productList = [
  {
    name: "Nước ổi",
    price: 20000,
    imageUrl: "./images/Product_1.jfif",
    id: "product-01",
  },
  {
    name: "Nước mía",
    price: 30000,
    imageUrl: "./images/Product_2.jfif",
    id: "product-02",
  },
  {
    name: "Nước dừa",
    price: 15000,
    imageUrl: "./images/Product_3.jfif",
    id: "product-03",
  },
  {
    name: "Nước mận",
    price: 10000,
    imageUrl: "./images/Product_4.jfif",
    id: "product-04",
  },
];
// ender sản phẩm
function renderProduct(data) {
  const tbody = document.querySelector("tbody");
  // b2. Khai báo 1 content để chứa nôi dung
  let contentTbody = "";
  data.forEach((product, index) => {
    contentTbody += `
      <tr>
      <td>${index + 1}</td>
      <td><img src="${product.imageUrl}" alt="" /></td>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td><button onclick="handleEdit('${
        product.id
      }')">Edit</button></td>
      <td><button onclick="handleDelete('${
        product.id
      }')">Delete</button></td>
    </tr>`;
  });
  tbody.innerHTML = contentTbody;
}
renderProduct(productList);

function handleSearch() {
  let valueSearch = document.querySelector("#idinput").value;
  console.log("ktra: ", valueSearch);
  console.log(33, productList.name);
  const dataSearch = productList.filter((fruit) =>
    fruit.name.toLowerCase().includes(valueSearch.toLowerCase())
  );
  console.log(44, dataSearch);
  renderProduct(dataSearch);
}

function handleAdd() {
  const addId = document.querySelector("#id-product").value;
  const addImage = document.querySelector("#id-image").value;
  const addName = document.querySelector("#id-name").value;
  const addPrice = document.querySelector("#id-price").value;
  console.log(1, addId, 2, addImage, 3, addName, 4, addPrice);
  let isDulicate = false;
  productList.forEach((product) => {
    if (product.id === addId) {
      isDulicate = true;
      return;
    }
  });
  if (isDulicate || !addId) {
    return alert("ID trùng hoặc trống, vui lòng đặt ID mới");
  }

  const productAdd = {
    name: addName,
    price: addPrice,
    imageUrl: "./images/" + addImage.slice(12),
    id: addId,
  };
  console.log(55, productAdd);
  productList.push(productAdd);
  renderProduct(productList);
}

function handleEdit(id) {
  console.log("ktra id edit", id);
  let productEdit;
  productList.forEach((product) => {
    if (product.id === id) {
      productEdit = product;
      return;
    }
  });
  const editId = document.querySelector("#id-edit");
  const editImage = document.querySelector("#image-edit");
  const editName = document.querySelector("#name-edit");
  const editPrice = document.querySelector("#price-edit");

  editId.value = productEdit.id;
  //   editImage.value = productEdit.imageUrl;
  editName.value = productEdit.name;
  editPrice.value = productEdit.price;
}

function handleToggle(status, id) {
  const element = document.querySelector("#{id}");
}

function saveProduct() {
  const valueId = document.querySelector("#id-edit").value;
  console.log("value ID edit", valueId);
  const valueImage =
    "./images/" +
    document.querySelector("#image-edit").value.slice(12);
  const valueName = document.querySelector("#name-edit").value;
  const valuePrice = document.querySelector("#price-edit").value;
  const saveProductList = {
    name: valueName,
    price: valuePrice,
    imageUrl: valueImage,
    id: valueId,
  };
  console.log("save value update", saveProductList);
  productList.forEach((product, pos) => {
    if (product.id === valueId) {
      productList.splice(pos, 1, saveProductList);
    }
  });
  console.log(66, productList);
  renderProduct(productList);
}

function handleDelete(id) {
  console.log(id);
  productList.forEach((product, index) => {
    if (product.id == id) {
      productList.splice(index, 1);
    }
  });
  console.log(productList);
  renderProduct(productList);
}
