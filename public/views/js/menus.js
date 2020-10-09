let api = "http://5e92c30dbbff810016969187.mockapi.io";
let listMenu = document.querySelector("#menus");
let productLocation = document.querySelector("#productLocation");
let productLocationSlide = document.querySelector("#productLocationSlide");
let getCartArr = JSON.parse(localStorage.getItem('cartArr'));
let array = [];

window.onload = function(){
  console.log('sd');
}

function getAll(){
	axios.get(`${api}/category`)
	  .then(function (response) {
	  	let data = response.data;
	  	data.forEach(pustArr);
	  	data.forEach(showCategory);
	  	array.forEach(function(value,index){
	  		setTimeout(function(){
	  			getProducts(value);
	  		}, index*1000);
	  	});
	  })
	  .catch(function (error) {
	    // handle error
	    console.log(error);
	  })
	  .then(function () {
	    // always executed
	  });
}

function saveIdToLocalStorage(idCate){
	localStorage.setItem('idCate', idCate);
	window.location.href = "./shop.html";
}

function save2IdToLocalStorage(idCate, id){
	localStorage.setItem('idCate', idCate);
	localStorage.setItem('idPro', id);
	window.location.href = "./shop-single.html";
}

function pustArr(category){
	array.push(category.id);
}

function showCategory(category){
	listMenu.innerHTML += `<li><a href="#" onclick="saveIdToLocalStorage(${category.id})">${category.name}</a></li>`;
}

function getProducts(value){
	axios.get(`${api}/category/${value}/products?sortBy=id&order=desc`)
	  .then(function (response) {
	  	let data = response.data;
	  	data.forEach(function(product){
	  		productLocation.innerHTML += `<div class="col-sm-6 col-lg-4 text-center item mb-4">
						            <a href="#" onclick="save2IdToLocalStorage(${value},${product.id})"> <img src="./backend/upload/${product.img}" alt="Image"></a>
						            <h3 class="text-dark"><a href="#" onclick="save2IdToLocalStorage(${value},${product.id})">${product.name}</a></h3>
						            <p class="price"><del>$${product.sale}</del> &mdash; $${product.price}</p>
						          </div>`;
	  	});
	  })
	  .catch(function (error) {
	    // handle error
	    console.log(error);
	  })
	  .then(function () {
	    // always executed
	  });
}

function changeCount(value){
  document.querySelector("#soluong").innerHTML = value.length;
}

