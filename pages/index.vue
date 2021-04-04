<template>
  <div class="bg-white-800">
	<HEADER/>
    <PRODUCT/>
	<FOOTER/>
  </div>
</template>

<script>
	import HEADER from '@/components/Header.vue'
	import PRODUCT from '@/components/Product.vue'
	import FOOTER from '@/components/Footer.vue'

	export default {
		components: {
			HEADER,
			PRODUCT,
			FOOTER
		}
	}
</script>
