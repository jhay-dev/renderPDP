<template>
	<div class="bg-white-800">
		<HEADER/>
		<h1>{{ this.slug }}</h1>
		<PRODUCT/>
		<FOOTER/>
	</div>
</template>

<script>
import productData from "@/public/data.json";

export default {
	async asyncData({ params }) {
		const slug = params.slug
		console.log('slug', params.slug);
		return { slug }
	},
	data() {
		return {
			message: 'Greetings',
			products: productData,
			product: function() {
				console.log('slug', slug)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";

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
