<template>
	<div class="error-wrapper">
		<p>Error：{{ error.statusCode }}</p>
		<p>{{ error.message }}</p>
	</div>
</template>
<script>
export default {
	props: {
		error: {
			type: Object,
			default: null,
		},
	},
};
</script>
<style scoped>
.error-wrapper {
	text-align: center;
	margin-top: 10rem;
}
</style>
