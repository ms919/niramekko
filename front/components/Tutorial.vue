<!-- Please remove this file from your project -->
<template>
	<div
		class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
	>
		<link
			href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
			rel="stylesheet"
		/>
		<div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
			<div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
				{{ message }}
        <button @click="getApi()">axios通信</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: "",
		};
	},
	methods: {
		getApi() {
			const url = "/api/v1/hello";
			this.$axios
				.get(url)
				.then((res) => {
					this.message = res.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
};
</script>
