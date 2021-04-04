<template>
	<header class="main">
		<nav class="bg-white-800">
			<div class="flex flex-col max-w-7xl mx-auto sm:px-12">
				<div class="relative flex items-center justify-between h-16">
					<div id="navigation-container" class="absolute inset-y-0 left-0 flex justify-between items-center sm:hidden md:flex">
						<!-- Logo -->
						<div class="flex items-center justify-center">
							<div class="block">
								<NuxtLink class="flex-shrink-0 flex items-center" to="/">
									<img class="block h-8 w-auto" src="https://cdn.shopify.com/s/files/1/0019/1466/7055/files/tj-logo_horizontal.svg" alt="Workflow">
									<img class="hidden h-8 w-auto" src="https://cdn.shopify.com/s/files/1/0019/1466/7055/files/tj-logo_horizontal.svg" alt="Workflow">
								</NuxtLink>
							</div>
						</div>
						
						<!-- Mobile menu button-->
						<button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray" aria-controls="mobile-menu" aria-expanded="false">
							<span class="sr-only">Open main menu</span>
							<!--
								Icon when menu is closed.

								Heroicon name: outline/menu

								Menu open: "hidden", Menu closed: "block"
							-->
							<svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
							<!--
								Icon when menu is open.

								Heroicon name: outline/x

								Menu open: "block", Menu closed: "hidden"
							-->
							<svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>

					<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
						<div class="hidden sm:block">
							<div class="flex space-x-4">
								<NuxtLink v-for="product in products" :key="product.productId" to="/" class="underline-hover text-black-900 px-3 py-2 text-sm font-medium relative">{{ this.shortName(product.name) }}</NuxtLink>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Mobile menu, show/hide based on menu state. -->
			<div id="mobile-menu" class="flex flex-col max-w-7xl mx-auto sm:px-12">
				<div class="pt-2 pb-3 space-y-1">
					<NuxtLink v-for="product in products" :key="product.productId" to="/"class="text-gray-500 hover:text-gray-500 block py-2">{{ this.shortName(product.name) }}</NuxtLink>
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
#navigation-container {
	width: 100%;
}
</style>
