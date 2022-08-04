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
				    		<img class="card-photo"
                 src="${imgSrc}" alt="${title}" width="345px">
				    	  <div class="card-meta">
				    	   	<p class="card-info">${title}</p>
                  ${availability === "Skladem" ? `<p class="card-text green">${availability}</p>` : ''}
                  ${availability === "Momentálně nedostupné" ? `<p class="card-text red">${availability}</p>` : ''}
                  ${availability === "Na objednávku" ? `<p class="card-text grey">${availability}</p>` : ''}
				    	   	<p class="card-price">${price} CZK</p>
				    	  </div>
                <div class="flags-thumb">
                  ${flags[0] ? `<p class="flag-first"> ${flags[0]}</p>` : ''}
                  ${flags[1] ? `<p class="flag-second"> ${flags[1]}</p>` : ''}
                </div>
                <div class="icon-thumb">
                  <svg class="eshop-icon" width="34" height="34" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
				          	<rect width="60" height="60" fill="#131313" />
				          	<path
				          		d="M26 41C26.5523 41 27 40.5523 27 40C27 39.4477 26.5523 39 26 39C25.4477 39 25 39.4477 25 40C25 40.5523 25.4477 41 26 41Z"
				          		stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				          	<path
				          		d="M37 41C37.5523 41 38 40.5523 38 40C38 39.4477 37.5523 39 37 39C36.4477 39 36 39.4477 36 40C36 40.5523 36.4477 41 37 41Z"
				          		stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				          	<path
				          		d="M18 20H22L24.68 33.39C24.7714 33.8504 25.0219 34.264 25.3875 34.5583C25.7532 34.8526 26.2107 35.009 26.68 35H36.4C36.8693 35.009 37.3268 34.8526 37.6925 34.5583C38.0581 34.264 38.3086 33.8504 38.4 33.39L40 25H23"
				          		stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				          </svg>
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
				    	   	${availability === "Skladem" ? `<p class="card-text green">${availability}</p>` : ''}
                  ${availability === "Momentálně nedostupné" ? `<p class="card-text red">${availability}</p>` : ''}
                  ${availability === "Na objednávku" ? `<p class="card-text grey">${availability}</p>` : ''}
				    	   	<p class="card-price">${price} CZK</p>
				    	  </div>
                <div class="flags-thumb">
                ${flags[0] ? `<div class="flag-first"> ${flags[0]}</div>` : ''}                                               
                ${flags[1] ? `<div class="flag-second"> ${flags[1]}</div>` : ''} 
                </div>   
                <div class="icon-thumb">
                  <svg class="eshop-icon" width="34" height="34" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
				          	<rect width="60" height="60" fill="#131313" />
				          	<path
				          		d="M26 41C26.5523 41 27 40.5523 27 40C27 39.4477 26.5523 39 26 39C25.4477 39 25 39.4477 25 40C25 40.5523 25.4477 41 26 41Z"
				          		stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				          	<path
				          		d="M37 41C37.5523 41 38 40.5523 38 40C38 39.4477 37.5523 39 37 39C36.4477 39 36 39.4477 36 40C36 40.5523 36.4477 41 37 41Z"
				          		stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				          	<path
				          		d="M18 20H22L24.68 33.39C24.7714 33.8504 25.0219 34.264 25.3875 34.5583C25.7532 34.8526 26.2107 35.009 26.68 35H36.4C36.8693 35.009 37.3268 34.8526 37.6925 34.5583C38.0581 34.264 38.3086 33.8504 38.4 33.39L40 25H23"
				          		stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				          </svg>
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
				    	   	${availability === "Skladem" ? `<p class="card-text green">${availability}</p>` : ''}
                  ${availability === "Momentálně nedostupné" ? `<p class="card-text red">${availability}</p>` : ''}
                  ${availability === "Na objednávku" ? `<p class="card-text grey">${availability}</p>` : ''}
				    	   	<p class="card-price">${price} CZK</p>
				    	  </div>
                <div class="flags-thumb">
                ${flags[0] ? `<div class="flag-first"> ${flags[0]}</div>` : ''}                                               
                ${flags[1] ? `<div class="flag-second"> ${flags[1]}</div>` : ''} 
                </div>  
                <div class="icon-thumb">
                  <svg class="eshop-icon" width="34" height="34" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
				          	<rect width="60" height="60" fill="#131313" />
				          	<path
				          		d="M26 41C26.5523 41 27 40.5523 27 40C27 39.4477 26.5523 39 26 39C25.4477 39 25 39.4477 25 40C25 40.5523 25.4477 41 26 41Z"
				          		stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				          	<path
				          		d="M37 41C37.5523 41 38 40.5523 38 40C38 39.4477 37.5523 39 37 39C36.4477 39 36 39.4477 36 40C36 40.5523 36.4477 41 37 41Z"
				          		stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				          	<path
				          		d="M18 20H22L24.68 33.39C24.7714 33.8504 25.0219 34.264 25.3875 34.5583C25.7532 34.8526 26.2107 35.009 26.68 35H36.4C36.8693 35.009 37.3268 34.8526 37.6925 34.5583C38.0581 34.264 38.3086 33.8504 38.4 33.39L40 25H23"
				          		stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				          </svg>
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
				    	   	${availability === "Skladem" ? `<p class="card-text green">${availability}</p>` : ''}
                  ${availability === "Momentálně nedostupné" ? `<p class="card-text red">${availability}</p>` : ''}
                  ${availability === "Na objednávku" ? `<p class="card-text grey">${availability}</p>` : ''}
				    	   	<p class="card-price">${price} CZK</p>
				    	  </div>
                <div class="flags-thumb">
                ${flags[0] ? `<div class="flag-first"> ${flags[0]}</div>` : ''}                                               
                ${flags[1] ? `<div class="flag-second"> ${flags[1]}</div>` : ''} 
                </div>   
                <div class="icon-thumb">
                  <svg class="eshop-icon" width="34" height="34" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
				          	<rect width="60" height="60" fill="#131313" />
				          	<path
				          		d="M26 41C26.5523 41 27 40.5523 27 40C27 39.4477 26.5523 39 26 39C25.4477 39 25 39.4477 25 40C25 40.5523 25.4477 41 26 41Z"
				          		stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				          	<path
				          		d="M37 41C37.5523 41 38 40.5523 38 40C38 39.4477 37.5523 39 37 39C36.4477 39 36 39.4477 36 40C36 40.5523 36.4477 41 37 41Z"
				          		stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				          	<path
				          		d="M18 20H22L24.68 33.39C24.7714 33.8504 25.0219 34.264 25.3875 34.5583C25.7532 34.8526 26.2107 35.009 26.68 35H36.4C36.8693 35.009 37.3268 34.8526 37.6925 34.5583C38.0581 34.264 38.3086 33.8504 38.4 33.39L40 25H23"
				          		stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				          </svg>
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