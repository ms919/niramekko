export default {
	// backendとのパートバッティング回避
	server: {
		port: 8080,
	},
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "front",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["~/assets/css/main", "~/assets/css/reset", "~/assets/css/play"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
		"@nuxtjs/proxy",
		"nuxt-fontawesome",
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	proxy: {
		"/api": {
			target: "http://localhost:3000/",
		},
	},

	fontawesome: {
		component: "fa",
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
};
