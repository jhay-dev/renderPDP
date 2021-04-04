<template>
	<header class="main w-full max-w-7xl sticky top-0 left-0 z-20 sm:px-5 md:px-12 flex mx-auto justify-between items-center bg-white">
		<nav class="bg-white-800 w-full flex justify-between">
			<div class="flex flex-col w-full flex-wrap max-w-7xl mx-auto">
				<div class="relative flex items-center justify-between w-full h-16">
					<div id="navigation-container" class="sticky w-full top-0 left-0 flex justify-between items-center bg-white-800 w-full">
						<!-- Logo -->
						<div class="flex flex-grow items-center justify-start">
							<div class="block">
								<NuxtLink class="transform-translate-y-1 flex flex-shrink-0 items-center" to="/">
									<img class="logo block h-8 w-auto" src="https://cdn.shopify.com/s/files/1/0019/1466/7055/files/tj-logo_horizontal.svg" style="width:156px;height:64px;" alt="Workflow">
								</NuxtLink>
							</div>
						</div>

						<!-- Sub nav -->
						<div id="sub-navigation" class="w-full flex flex-grow px-6 items-center sm:items-stretch sm:justify-end">
							<div class="hidden sm:block">
								<div class="flex space-x-4">
									<NuxtLink v-for="product in products" :key="parseInt(product.productId)" to="/products/even-better-glow" class="underline-hover text-black-900 py-2 transform -translate-x-0.5 text-sm font-medium relative">{{ product.name.includes('™') ? product.name.split('™')[0] + '™' : product.name }}</NuxtLink>
								</div>
							</div>
						</div>

						<!-- Mobile menu button-->
						<button class="hamburger hamburger--elastic flex items-center justify-end py-2 pl-2 pr-0 text-black-400 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false" type="button">
							<span class="sr-only">Open main menu</span>
							<span class="hamburger-box">
								<span class="hamburger-inner"></span>
							</span>
						</button>
					</div>
				</div>
			</div>

			<!-- Mobile menu, show/hide based on menu state. -->
			<div id="mobile-menu" class="flex flex-col max-w-7xl mx-auto hidden">
				<div class="px-4 pt-2 pb-3 space-y-1">
					<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
					<NuxtLink v-for="product in products" v-bind:key="parseInt(product.productId)" to="/products/" class="text-gray-500 hover:text-gray-500 block py-2">{{ product.name.includes('™') ? product.name.split('™')[0] + '™' : product.name }}</NuxtLink>
					<a href="#" class="text-gray-500 hover:text-gray-500 block py-2 text-base font-medium">Even Better Glow™</a>
					<a href="#" class="text-gray-500 hover:text-gray-500 block py-2 text-base font-medium">Take The Day Off™</a>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
import productData from "@/public/data.json";

export default {
	data() {
		return {
			products: productData
		}
	},
	methods: {
		shortName: function(str) {
			return str.includes('™') ? str.split('™')[0] + '™' : str;
		},
		slug: function(str) {
			// Remove accents and non-standard characters from shortened product name
			str = this.shortName(str).replace(/^\s+|\s+$/g, '').toLowerCase();
			let from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;™®',
				to = 'aaaaeeeeiiiioooouuuunc--------';

			for (var i=0, l=from.length; i<l; i++) {
				str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
			}

			str = str.replace(/[^a-z0-9 -]/g, '') // Remove invalid chars
				.replace(/\s+/g, '-') // Replace whitespace with -
				.replace(/-+/g, '-'); // Replace multiple dashes with -

			return '/products/' + str;
		}
	}
}
</script>

<style lang="scss" scoped>
header.main {
	img.logo {
		max-width: 182px;
		max-height: 64px;
		height: 100%;
	}
}
#navigation-container {
	width: 100%;
	height: 64px;
}
</style>
