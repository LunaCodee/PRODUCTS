const button = document.getElementById("submit-button");

const fetchProducts = (newProduct) => {fetch(`https://643d689d6afd66da6af6326f.mockapi.io/product`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const successMessage = document.getElementById("success-message");
      successMessage.innerHTML = "Prekė pridėta sėkmingai";

      setTimeout(() => {
        window.location.replace("./index.html");
      }, 1000);
    });
};

button.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;
  const location = document.getElementById("location").value;
  const photo = document.getElementById("photo").value;

  const newProduct = {
    title: title,
    price: price,
    description: description,
    location: location,
    photo: photo,
  };
if (title && price && description && location && photo){
  fetchProducts(newProduct);
} else {
    const notSuccessMessage = document.getElementById("not-success-message");
    notSuccessMessage.innerHTML = "*Ne visi laukai užpildyti";
    setTimeout(() => {
        notSuccessMessage.innerHTML = "";
      }, 2000);
}
});
