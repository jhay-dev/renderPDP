<template>
	<!-- Product -->
	<section id="product">
		<form class="product"> <!-- v-for="p in products" :key="p.productId" data-id="{{ p.productId }}" -->
			<aside class="gallery max-w-7xl mx-auto px-2 sm:px-6">
				<ul class="gallery-navigation">
					<li class="nav-item active"><a href="#">&nbsp;</a></li>
					<li class="nav-item"><a href="#">&nbsp;</a></li>
					<li class="nav-item"><a href="#">&nbsp;</a></li>
					<li class="nav-item"><a href="#">&nbsp;</a></li>
				</ul>
				<ul class="images">
					<li class="image"><img src="https://placekitten.com/950/1500" alt="" class="product-image active"></li>
					<li class="image"><img src="https://placekitten.com/950/1500" alt="" class="product-image"></li>
					<li class="image"><img src="https://placekitten.com/950/1500" alt="" class="product-image"></li>
					<li class="image"><img src="https://placekitten.com/950/1500" alt="" class="product-image"></li>
				</ul>
			</aside>
			<article class="detail max-w-7xl mx-auto px-2 sm:px-6 max-w-7xl mx-auto px-2 sm:px-6"> <!-- v-for="p in products" :key="p.productId" data-id="{{ productId }}" -->
				<h1>Even Better Glow™ Light Reflecting Makeup Broad Spectrum SPF 15</h1>
				<h2>Dermatologist-developed foundation instantly perfects, and continuously improves skin’s radiance and texture.</h2>
				<p><span class="text-gray-500">(227)</span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">Read reviews</a></p>
				<ul class="features">
					<li>
						<h5>Finish</h5>
						<p>Dewy-finish</p>
					</li>
					<li>
						<h5>Coverage</h5>
						<p>Moderate</p>
					</li>
					<li>
						<h5>Skin type</h5>
						<p>Dry combination, combination only</p>
					</li>
				</ul>
				<ul class="specs">
					<li>
						<label for="size">Size (mL / floz)
							<input id="size" type="text" name="size" value="30ml / 1 floz">
						</label>
					</li>
					<li>
						<label for="type">Type
							<input id="type" type="text" name="type" value="">
						</label>
					</li>
				</ul>
				<hr>
				<div class="offers">
					<!-- Quantity -->
					<div class="quantity">
						<strong>Quantity</strong><a href="#" class="quantity down">&mdash;</a>&nbsp;&nbsp;<strong>1</strong>&nbsp;&nbsp;<a href="#" class="quantity up">+</a>
					</div>
					<!-- Subscribe -->
					<div class="subscribe flex items-center justify-center w-full mb-24">
						<label for="subscribe" class="flex items-center cursor-pointer">
							<div class="relative">
								<input id="subscribe" type="checkbox" class="hidden" />
								<div class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
								<div class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
							</div>
							<div class="ml-3 text-gray-700 font-medium">Subscribe</div>
						</label>
					</div>
				</div>
			</article>
		</form>
	</section>
</template>

<script>
	import productData from "@/public/data.json";
	
	export default {
		data() {
			return {
				message: 'Greetings',
				products: productData
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/mixins.scss";

	#product {
		> form.product {
			border: 1px solid gray;
			> aside.gallery {
				position: relative;
				> ul {
					&.gallery-navigation {
						list-style: none;
						position: absolute;
						left: 0;
						@include display-flex;
						@include flex-direction-column;
						@include flex-align-items-center;
						@include flex-justify-content-center;
						> li {
							> a {
								display: block;
								margin-bottom: 10px;
								&:before {
									content: '';
									width: 25px;
									height: 25px;
									position: fixed;
									margin-left: -10px;
									background-color: black;
									@include border-radius(50%);
								}								
							}
							&.active > a:before { background-color: ligthen(black, 30%); }
						}
					}

					> li {
						&.nav-item {

						}
						&.image {
							
						}
					}
				}
			}
		}
		> article {
			border: 1px solid red;
		}
	}

	.toggle__dot {
		top: -.25rem;
		left: -.25rem;
		transition: all 0.3s ease-in-out;
	}

	input:checked ~ .toggle__dot {
		transform: translateX(100%);
		background-color: #48bb78;
	}
</style>
