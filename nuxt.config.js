export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Tommy John PDP',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			// { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.4/tailwind.min.css' },
			{ rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
			{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css' },
			{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css' },
			{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css' },
		],
		script: [
			{ src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js', body: true },
			{ src: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', body: true },
			{ src: '/jquery.easing.js', body: true },
			{ src: '/main.js', body: true },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		// CSS file in the project
		'@/assets/css/main.css',
		// SCSS file in the project
		'@/assets/scss/main.scss',
	],

	// // Include .scss files from scss directory
	// styleResources: {
	// 	scss: [
	// 		'@/assets/scss/main.scss',
	// 		// '@/assets/scss/_*.scss',
	// 	],
	// },

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/tailwindcss',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// '@nuxtjs/style-resources',
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				'postcss-custom-properties': {
					warnings: false,
				},
			},
		},
		extend(config, { isDev, isClient }) {
			config.module.rules.push({
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader: 'file-loader',
			});
			config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js';
			// Sets webpack's mode to development if `isDev` is true.
			if (isDev) {
				config.devtool = 'source-map';
			} else {
				config.devtool = 'inline-source-map';
			}
		}
	}
}
