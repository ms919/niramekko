<template>
	<PlayTiktok />
</template>

<script>
export default {
  head() {
		return {
			script: [{ type: 'text/javascript', src: "https://www.tiktok.com/embed.js", async: true, body: true }],
		};
	},
}
</script>