const productsWrapper = document.getElementById("products-wrapper");

const productOptionCreation = (product) => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");

  const titleWrapper = document.createElement("div");
  titleWrapper.setAttribute("class", "title-wrapper");

  const priceWrapper = document.createElement("div");
  priceWrapper.setAttribute("class", "price-wrapper");

  const price = document.createElement("span");
  price.setAttribute("class", "price");

  const image = document.createElement("img");
  image.setAttribute("src", product.photo);

  const title = document.createElement("span");
  title.setAttribute("class", "title");

  const link = document.createElement("a");
  link.setAttribute("class", "product-link");
  link.href = "./product.html";

  link.addEventListener("click", () => {
    localStorage.setItem("id", product.id);
  });


  price.innerHTML = `${product.price} €`;
  priceWrapper.append(price);

  title.innerHTML = product.title;
  titleWrapper.append(title);
  
  wrapper.append(priceWrapper)
  wrapper.append(image);
  wrapper.append(titleWrapper);


  link.append(wrapper);

  productsWrapper.append(link);
};

fetch("https://643d689d6afd66da6af6326f.mockapi.io/product")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data
    .sort((a, b) => Number(a.price) - Number(b.price))
    .forEach((product) => {
      productOptionCreation(product);
    });
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
