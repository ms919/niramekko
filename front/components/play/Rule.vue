<template>
	<div class="text-center rule-wrapper">
		<h3>ルール説明・注意点</h3>
		<div class="text-wrapper">
			<p>
				texttexttexttexttexttext<br />texttexttexttexttexttexttext
			</p>
			<p>
				texttexttexttexttexttext<br />texttexttexttexttexttexttext
			</p>
			<p>
				texttexttexttexttexttext<br />texttexttexttexttexttexttext
			</p>
			<p>
				texttexttexttexttexttext<br />texttexttexttexttexttexttext
			</p>
		</div>
		<a @click="$store.dispatch('gotoNext')" class="sm-button btn-pink">START</a>
	</div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getItems");
  }
}
</script>

<style scoped>
.rule-wrapper {
	padding: 1.5rem 0;
}
.text-wrapper {
	margin: 2rem 0;
}
</style>
