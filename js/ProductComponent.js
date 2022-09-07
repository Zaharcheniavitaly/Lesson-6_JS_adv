Vue.component('products', {
	props: ['products', 'img'],
	template: `<div class="products container">
                <product v-for="item of products" 
                :key="item.id_product" 
                :img="img"
                :product="item"></product>
               </div>`
});
Vue.component('product', {
	props: ['product', 'img'],
	template: `
            <div class="product-item">
                <img class="product-img" :src="img" alt="Some img">
                
                    <h3 class="product-title">{{product.product_name}}</h3>
                    <p class="product-price">{{product.price.toLocaleString()}}</p>
                    <button class="product__buy-btn" @click="$parent.$emit('add-product', product)">Купить</button>
                
            </div>
    `
})



// можно вместо    <button class="buy-btn"@click="$parent.$emit('add-product', product)   написать    @click="$root.addProduct(product)">Купить</button>