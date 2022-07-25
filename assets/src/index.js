const list = document.querySelector('.js-eshop-container');

fetch("/assets/src/products.json")
    .then(response => response.json())
  .then(products => {
    function createProductsMarkup(products) {
      return products.slice(0, 8).map(({ imgSrc, title, availability, price }) => {
        return `
        	<li class="product-item">
				    <a href="">
				    	<div class="card-thumb">
				    		<img class="card-photo" src="${imgSrc}" alt="${title}" width="345">				    	
				    	  <div class="card__meta">
				    	   	<p class="card-info">${title}</p>
				    	   	<p class="card-text">${availability}</p>
				    	   	<p class="card-info">${price} CZK</p>
				    	  </div>
                <div class="flags-thumb">
		        	    <div class="flag-first">Novinka</div>
		        	    <div class="flag-second">Výprodej</div>
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
  fetch("/assets/src/products.json")
    .then((response) => response.json())
    .then(products => {
      function createProductsMarkup(products) {
        return products.slice(0, 4).map(({ imgSrc, title, availability, price }) => {
          return `
        	<li class="product-item">
				    <a href="">
				    	<div class="card-thumb">
				    		<img class="card-photo" src="${imgSrc}" alt="${title}" width="345">
				    	  <div class="card__meta">
				    	   	<p class="card-info">${title}</p>
				    	   	<p class="card-text">${availability}</p>
				    	   	<p class="card-info">${price} CZK</p>
				    	  </div>
                <div class="flags-thumb">
		        	    <div class="flag-first">Novinka</div>
		        	    <div class="flag-second">Výprodej</div>
                </div>
              </div>
				    </a>
			   </li>
        `;
        }).join('');
        
      }
      const cardsMarkup = createProductsMarkup(products);
      list.insertAdjacentHTML('beforeend', cardsMarkup);
    })
}

const eshopBtnNews = document.querySelector(".news");
const eshopBtnSell = document.querySelector(".bestSell");
const eshopBtnRecommend = document.querySelector(".recommend");

eshopBtnNews.addEventListener('click', e => {
    if (eshopBtnSell.classList.contains("current") || eshopBtnRecommend.classList.contains("current")) {
      eshopBtnSell.classList.remove("current");
      eshopBtnRecommend.classList.remove("current");
    }
    e.currentTarget.classList.add("current");
  }
);

eshopBtnSell.addEventListener('click', e => {
    if (eshopBtnNews.classList.contains("current") || eshopBtnRecommend.classList.contains("current")) {
      eshopBtnNews.classList.remove("current");
      eshopBtnRecommend.classList.remove("current");
    }
    e.currentTarget.classList.add("current");
  }
);

eshopBtnRecommend.addEventListener('click', e => {
    if (eshopBtnNews.classList.contains("current") || eshopBtnSell.classList.contains("current")) {
      eshopBtnNews.classList.remove("current");
      eshopBtnSell.classList.remove("current");
    }
    e.currentTarget.classList.add("current");
  }
);

