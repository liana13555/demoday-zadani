const list = document.querySelector('.js-eshop-container');

fetch("/assets/src/products.json")
  .then(response => response.json())
  .then(products => {
    function createProductsMarkup(products) {
      return products.slice(0, 8)
        .map(({ imgSrc, title, availability, price, flags }) => {
          return `
        	<li class="product-item">
				    <a href="">
				    	<div class="card-thumb">
				    		<img class="card-photo" src="${imgSrc}" alt="${title}" width="345">
				    	  <div class="card-meta">
				    	   	<p class="card-info">${title}</p>
				    	   	<p class="card-text">${availability}</p>
				    	   	<p class="card-price">${price} CZK</p>
				    	  </div>
                <div class="flags-thumb"> 
                ${flags[0] ? `<div class="flag-first"> ${flags[0]}</div>` : ''}                                               
                ${flags[1] ? `<div class="flag-second"> ${flags[1]}</div>` : ''}  
                </div>
              </div>
				    </a>
			   </li>
        `;
        }).join('');
    }

    const cardsMarkup = createProductsMarkup(products);
    list.insertAdjacentHTML('afterbegin', cardsMarkup);
  })
 
const loadMoreButton = document.querySelector(".btn-products");
loadMoreButton.addEventListener("click", loadMore);

function loadMore() {
  const productItems = document.querySelectorAll('.product-item');
  console.log(productItems);
  for (let i = 4; i < 8; i++) {
    productItems[i].style.display = "block";    
  }
  loadMoreButton.style.display = "none";
}

const btnsContainer = document.querySelector('.btn-list');

btnsContainer.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const currentActiveBtn = document.querySelector('.current');
  if (currentActiveBtn) {
    currentActiveBtn.classList.remove("current");
  }
  e.target.classList.add("current");
});

const eshopBtnNews = document.querySelector(".news");
const eshopBtnSell = document.querySelector(".bestSell");
const eshopBtnRecommend = document.querySelector(".recommend");

eshopBtnNews.addEventListener('click', selectNewProducts);
eshopBtnSell.addEventListener('click', selectBestsellProducts);
eshopBtnRecommend.addEventListener('click', selectReccomendProducts);

function selectNewProducts() {
  fetch("/assets/src/products.json")
    .then(response => response.json())
  .then(products => {
    function createProductsMarkup(products) {
      return products.filter(product => product.flags[0] == "Novinka")
        .map(({ imgSrc, title, availability, price, flags }) => {
        return `
        	<li class="product-item">
				    <a href="">
				    	<div class="card-thumb">
				    		<img class="card-photo" src="${imgSrc}" alt="${title}" width="345">				    	
				    	  <div class="card-meta">
				    	   	<p class="card-info">${title}</p>
				    	   	<p class="card-text">${availability}</p>
				    	   	<p class="card-price">${price} CZK</p>
				    	  </div>
                <div class="flags-thumb">
                ${flags[0] ? `<div class="flag-first"> ${flags[0]}</div>` : ''}                                               
                ${flags[1] ? `<div class="flag-second"> ${flags[1]}</div>` : ''} 
                </div>   
              </div>         
				    </a>
			   </li>
        `;
      }).join('');
    }
    const cardsMarkup = createProductsMarkup(products);
    list.innerHTML = cardsMarkup;
    loadMoreButton.style.display = "block";
  })
}

function selectBestsellProducts() {
  fetch("/assets/src/products.json")
    .then(response => response.json())
  .then(products => {
    function createProductsMarkup(products) {
      return products.filter(product => product.category == "Nejprodávanější")
        .map(({ imgSrc, title, availability, price, flags }) => {
        return `
        	<li class="product-item">
				    <a href="">
				    	<div class="card-thumb">
				    		<img class="card-photo" src="${imgSrc}" alt="${title}" width="345">				    	
				    	  <div class="card-meta">
				    	   	<p class="card-info">${title}</p>
				    	   	<p class="card-text">${availability}</p>
				    	   	<p class="card-price">${price} CZK</p>
				    	  </div>
                <div class="flags-thumb">
                ${flags[0] ? `<div class="flag-first"> ${flags[0]}</div>` : ''}                                               
                ${flags[1] ? `<div class="flag-second"> ${flags[1]}</div>` : ''} 
                </div>   
              </div>         
				    </a>
			   </li>
        `;
      }).join('');
    }
    const cardsMarkup = createProductsMarkup(products);
    list.innerHTML = cardsMarkup;
    loadMoreButton.style.display = "block";
  })
}

function selectReccomendProducts() {
  fetch("/assets/src/products.json")
    .then(response => response.json())
  .then(products => {
    function createProductsMarkup(products) {
      return products.filter(product => product.flags[0] == "Tip")
        .map(({ imgSrc, title, availability, price, flags }) => {
        return `
        	<li class="product-item">
				    <a href="">
				    	<div class="card-thumb">
				    		<img class="card-photo" src="${imgSrc}" alt="${title}" width="345">				    	
				    	  <div class="card-meta">
				    	   	<p class="card-info">${title}</p>
				    	   	<p class="card-text">${availability}</p>
				    	   	<p class="card-price">${price} CZK</p>
				    	  </div>
                <div class="flags-thumb">
                ${flags[0] ? `<div class="flag-first"> ${flags[0]}</div>` : ''}                                               
                ${flags[1] ? `<div class="flag-second"> ${flags[1]}</div>` : ''} 
                </div>   
              </div>         
				    </a>
			   </li>
        `;
      }).join('');
    }
    const cardsMarkup = createProductsMarkup(products);
    list.innerHTML = cardsMarkup;
    loadMoreButton.style.display = "block";
  })
}