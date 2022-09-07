

Vue.component('error-comp', {
	template: `	
		<div class="container" v-show="$root.error">
			<p class="error" v-if="error" >Не правильно указан путь к товару!!!</p>
		</div>
	`
});

