<template>
	<!-- Product -->
	<section id="product" class="flex flex-col max-w-7xl mx-auto w-full sm:px-5 md:px-12 justify-between bg-white">
		<form class="product flex flex-wrap p-15 sm:flex-col md:flex-row">
			<aside class="gallery flow-root justify-center mx-auto sm:flex sm:flex-col md:flex-col-reverse sm:w-full md:max-w-7xl md:w-1/2">
				<ul class="gallery-images carousel relative w-full sm:flex sm:align-center sm:justify-center">
					<li v-for="image in products[0].imgURL" :key="image" class="w-full flex justify-center position top-0">
						<img :src="image" alt="product image name" :class="'product-item w-full' + (products[0].mainImage === image ? ' active' : '')">
					</li>
				</ul>
				<div class="gallery-nav flex align-center justify-center sm:w-full sm:absolute md:fixed">
					<ul class="flex align-center justify-center md:flex-col">
						<li v-for="image in products[0].imgURL" :key="image" :class="'nav-item sm:flex md:block' + (products[0].mainImage === image ? ' active' : '')">
							<a class="flex align-center justify-center w-20 h-20" href="#"></a>
						</li>
					</ul>
				</div>
			</aside>
			<article class="sticky detail max-w-7xl mx-auto md:pl-6 md:w-1/2">
				<h1 class="text-3xl font-bold">{{ products[0].name }}</h1>
				<h2 class="text-lg my-5">{{ products[0].description }}</h2>
				<div id="customer-rating w-full flex">
					<div class="star-rating relative inline-flex justify-start align-center w-20">
						<div id="stars-whole" class="left-0 top-0 z-20" :data-count="Math.floor(products[0].ratings.averageRating)">{{ Math.floor(products[0].ratings.averageRating) }}</div>
						<div id="stars-half" class="absolute left-0 top-0 z-10" :data-count="products[0].ratings.averageRating % 2 ? 1 : 0">{{ products[0].ratings.averageRating % 2 ? 1 : 0 }}</div>
						<div id="stars-gray" class="absolute left-0 top-0 z-0 text-gray-300"></div>
					</div>
					<span class="text-gray-500 mx-5">({{ products[0].ratings.totalAmount }})</span>
					<a href="#">Read Reviews</a>
				</div>
				<ul id="features" class="features flex flex-wrap my-5">
					<li v-for="(feature, name) in products[0].features" :key="name" class="flex-col flex-none w-1/2 my-5">
						<h3 class="text-lg font-bold w-full">{{ name }}</h3>
						<p data-sentence>{{ feature }}</p>
					</li>
				</ul>
				<div id="ingredients" class="accordion flex flex-col justify-center items-end my-5">
					<h3 class="flex justify-between">
						<span>Product Ingredients</span>
						<i class="fa fa-chevron-down light" aria-hidden="true"></i>
					</h3>
					<ul>
						<li class="flex-col flex-none w-full">
							<ul class="text-base">
								<li v-for="ingredient in products[0].Ingredients" :key="ingredient">
									<a href="#" class="h-60">
										<span>{{ ingredient }}</span>
									</a>
								</li>
							</ul>
						</li>
					</ul>					
				</div>
				<ul id="product-type">
					<label for="type">
						<h3 class="text-lg font-bold">Type</h3>
						<input id="type" type="text" name="type" value="">
					</label>
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
		// product: {
		// 	type: Object,
		// 	default: productData[0],
		// },
	},
	data() {
		return {
			products: productData,
			// product: function() {
			// 	let product = productData[0];
			// 	product
			// 	console.log(product);
			// 	return product;
			// },
			// rating: null,
		};
	},
	computed: {
		product: function(p) {
			Object.keys(p.features).forEach(function(i) {
				p[i] = 'foobar';
			});
			return p;
		},
		stars: function(rating) {
			console.log(rating);
			let avg = this.product.ratings.averageRating,
				solid = Math.floor(avg),
				half = avg % 2 ? 1 : 0,
				stars = `<i class="fa fa-star" aria-hidden="true"></i>`,
				starh = `<i class="fa fa-star-half" aria-hidden="true"></i>`;
			return stars.repeat(solid) + starh.repeat(half);
		},
	},
	methods: {
		sentence: function(str) {
			let result = str.replace(/([A-Z])/g, ' $1');
			return result.charAt(0).toUpperCase() + result.slice(1);
		},
		async slug() {
			let ID = this.product.productId;
			return productData.filter(product => productId === ID);
		},
	},
	// render(h, context) {
	// 	return h({ template: this.html });
	// },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
// @import "@/assets/scss/_variables.scss";
// @import "@/assets/scss/_breakpoint.scss";
// @import "@/assets/scss/_animations.scss";
// @import "@/assets/scss/_mixins.scss";

#product {
	> form.product {
		> aside.gallery {
			position: relative;

			div.gallery-nav {
				$dot-width: 10px;
				list-style: none;

				> ul {
					> li.nav-item {
						position: relative;
						width: $dot-width;
						height: $dot-width;

						> a {
							width: 100%;
							height: 100%;
							// margin-left: -10px;

							&:before {
								content: '\00A0';
								width: $dot-width;
								height: $dot-width;
								background-color: #cdcdcd;
								@include border-radius(50%);
							}
						}

						&.active > a:before { background-color: darken(#cdcdcd, 40%); }
					}
				}
				@include breakpoint($mobile) {
					left: 5px;
					width: auto;
					position: relative;
					> ul {
						margin: 50px;
						> li.nav-item {
							& + li {
								margin-top: auto;
								margin-left: 2 * $dot-width - 5px;
							}
						}
					}
				}
				@include breakpoint($tablet) {
					left: 15px;
					width: 2 * $dot-width;
					position: fixed;
					bottom: 100px;
					> ul {
						li.nav-item {
							& + li {
								margin-left: auto;
								margin-top: $dot-width;
							}
						}
					}
				}
				@include breakpoint($desktop) {
					left: calc((100vw - 1280px)/2 + #{$dot-width});
				}
			}

			ul.gallery-images {
				width: 100%;
				height: $galleryHeight;
				overflow: hidden;

				.owl-stage-outer {
					width: 100%;
					overflow: hidden;
					.owl-stage {
						.owl-item {
							width: auto;
							height: calc(90vh - #{$header});
							li {
								width: auto;
								height: calc(90vh - #{$header});
								img {
									width: auto;
									height: calc(90vh - #{$header});
								}
							}
						}
					}
				}

				@include breakpoint($mobile) {
					.owl-stage-outer {
						.owl-stage {
							.owl-item {
								width: auto;
								height: calc(90vh - #{$header});
							}
						}
					}

					li {
						position: absolute;
						top: 0;
					}
				}
				// @include breakpoint($mobile) {
				// 	max-height: calc(90vh - #{$header});
				// 	.owl-stage-outer {
				// 		max-height: calc(90vh - #{$header});
				// 		.owl-stage {
				// 			max-height: calc(90vh - #{$header});
				// 			.owl-item {
				// 				max-height: calc(90vh - #{$header});
				// 				li {
				// 					max-height: calc(90vh - #{$header});
				// 					img {
				// 						max-height: calc(90vh - #{$header});
				// 					}
				// 				}
				// 			}
				// 		}
				// 	}
				// }
			}
		}

		> article.detail {
			@include breakpoint($tablet) {
				top: 0;
				@include position-sticky;
			}

			> h1 {
				font-size: 28px;
				line-height: 1.2em;
			}
		}
	}
}

#ingredients {
	height: 60px;
	cursor: pointer;
	border-bottom: 1px solid #ddd;
	> h3 {
		font-size: 20/rem;
		> .fa {
			-webkit-text-stroke: 3px white;
		}
	}
	> ul {
		height: 100%;
		max-height: 0;
		line-height: 1.2em;
		overflow: hidden;
		transition: max-height .3s $in-out-quart;
		> li {
			line-height: 1.8em;
		}
	}
	&.active {
		> h3 {
			
		}
		> ul {
			max-height: 100vh;
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
