Vue.component('cart', {
	props: ['cartItems', 'img', 'visibility'],
	template: `	
		 <div class="basket" v-show="visibility">
		 <p class="product-none" v-if="!cartItems.length">В корзине нет товаров</p>	
			  <cart-item v-for="item of cartItems" :key="item.id_product" :img="img" :cart-item="item">
			  </cart-item>
		 </div>
	`
});

Vue.component('cart-item', {
	props: ['img', 'cartItem'],
	template: `
	
	<div class="cart-item">
				<div class="product-bio">
						<img :src="img" alt="Some img">
									<div class="product-desc">
												<div class="product-title__basket">{{ cartItem.product_name }}</div>
												<div class="product-quantity">Количество: {{ cartItem.quantity }}</div>
												<div class="product-single-price">$ {{ cartItem.price.toLocaleString() }}</div>
									</div>
				</div>
			
			

					<div class="right-block">
						<div class="product-price__cart">$ {{ (cartItem.quantity * cartItem.price).toLocaleString() }}</div>
							<button class="del-btn" @click="$root.remove(cartItem)">&times;</button>
					</div>
	</div>
	`
});

Vue.component('button-comp', {
	props: ['showCart'],
	template:
		`
	<div class="btn-cart__wrapp">
			<button class="btn-cart" type="button" @click="$root.showCart = !$root.showCart">
					<span class="headerBasket">
						<img class="btn-cart__img" src="img/basket-.png" alt="basket">
					</span>
			</button>
	</div>
	
	`
})