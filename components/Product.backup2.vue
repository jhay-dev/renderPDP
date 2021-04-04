<template>
	<!-- Product -->
	<section id="product" class="flex flex-col max-w-7xl mx-auto sm:px-12">
		<form class="product flex flex-grow-0">
			<aside class="gallery flow-root max-w-7xl mx-auto">
				<ul class="gallery-navigation flex flex-col">
					<li v-for="image in products[0].imgURL" :key="image" :class="'nav-item' + (products[0].mainImage === image ? ' active' : '')"><a href="#">&nbsp;</a></li>
				</ul>
				<ul class="images">
					<li v-for="image in products[0].imgURL" :key="image">
						<img :src="image" alt="product image name" :class="'product-item' + (products[0].mainImage === image ? ' active' : '')">
					</li>
				</ul>
			</aside>
			<article class="sticky detail max-w-7xl mx-auto sm:px-6">
				<h1>{{ products[0].name }}</h1>
				<h2>{{ products[0].description }}</h2>

				<p><span class="star-rating">{{ this.rating }}</span><span class="text-gray-500">({{ products[0].ratings.totalAmount }})</span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">Read reviews</a></p>
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
	props: {
		html: {
			type: String,
			default: ``,
		},
	},
	data() {
		return {
			products: productData,
			product: productData[0],
		};
	},
	computed: {
		dynamicComponent() {
			return {
				template: function() {
					let avg = this.product.ratings.averageRating,
						solid = Math.floor(avg),
						half = avg % 2 ? 1 : 0,
						stars = `<i class="fa fa-star" aria-hidden="true"></i>`,
						starh = `<i class="fa fa-star-half" aria-hidden="true"></i>`;
					return `<span class="star-rating">` + stars.repeat(solid) + starh.repeat(half) + `</span>`;
				},
				props: ['html'],
			}
		},
		// rating: function() {
		// 	console.log(this.product);
		// 	let avg = this.product.ratings.averageRating,
		// 		solid = Math.floor(avg),
		// 		half = avg % 2 ? 1 : 0,
		// 		stars = `<i class="fa fa-star" aria-hidden="true"></i>`,
		// 		starh = `<i class="fa fa-star-half" aria-hidden="true"></i>`;
		// 	return stars.repeat(solid) + starh.repeat(half);
		// },
	},
	methods: {
		async slug() {
			let ID = this.product.productId;
			return productData.filter(product => productId === ID);
		},
	},
	render(h, context) {
		return h({ template: this.html });
	},
	// render(h, context) {
	// 	return h({
	// 		template: `<span class="star-rating">${this.rating}</span class="star-rating">`,
	// 	});
	// }
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
				$dot-width: 25px;
				&.gallery-navigation {
					width: $dot-width;
					position: fixed;
					left: calc((100vw - 1280px)/2 + #{$dot-width/2});
					list-style: none;
					@include display-flex;
					@include flex-direction-column;
					@include flex-align-items-center;
					@include flex-justify-content-center;

					> li {
						position: relative;
						margin-bottom: 10px;
						width: $dot-width;
						height: $dot-width;

						> a {
							display: block;
							position: absolute;
							width: 100%;
							height: 100%;
							// margin-left: -10px;
							background-color: black;
							@include border-radius(50%);
						}
						&.active > a:before { background-color: ligthen(black, 30%); }
					}
				}

				> li {
					&.nav-item {

					}
					&.image {
						max-width: 50%;
						> img {
							max-width: 100%;
						}
					}
				}
			}
		}

		> article {
			border: 1px solid red;
			@include position-sticky;
			top: 0;
		}
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
