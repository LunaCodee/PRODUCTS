const productId = localStorage.getItem("id");

const addElementsToScreen = (data) => {
  const productPhoto = document.getElementById("photo");

  const image = document.createElement("img");
  image.setAttribute("src", data.photo);
  productPhoto.appendChild(image);

  const title = document.getElementById("product-title");
  title.innerHTML = data.title;

  const price = document.getElementById("product-price");
  price.innerHTML = `${data.price} €`;

  const description = document.getElementById("product-description");
  description.innerHTML = data.description;

  const location = document.getElementById("product-location");
  location.innerHTML = `${data.location}`;
};

fetch(`https://643d689d6afd66da6af6326f.mockapi.io/product/${productId}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    addElementsToScreen(data);
  });



const button = document.getElementById("erase-button");

button.addEventListener("click", () => {

const deleteProduct = (data) => {
  fetch(`https://643d689d6afd66da6af6326f.mockapi.io/product/${productId}`, 
  {
    method: "DELETE",
  })
    .then((data) => {
       data.json();
    })
    .then((data) => {
      const successMessage = document.getElementById("delete-message");
      successMessage.innerHTML = "Produktas pašalintas";

      setTimeout(() => {
        window.location.replace("./index.html");
      }, 2000);
    });
};
deleteProduct()
});


const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('#nav');
const navElements = document.getElementsByClassName('nav');

function mouseBurger() {
    for (let i = 0; i < navElements.length; i++){
      navElements[i].style.opacity = "1";
      hamburger.style.opacity = "0.3"
    }

    setTimeout(function() {
      for (let i = 0; i < navElements.length; i++){
        navElements[i].style.opacity = "0";
        hamburger.style.opacity = "1"
      }
    }, 3000)
}

hamburger.addEventListener('mouseover', mouseBurger);