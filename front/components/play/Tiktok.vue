<template>
	<div class="inner-wrapper" v-html="currentItem">
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["currentItem"]),
	},
};
</script>

<style scoped>
.item {
	width: 540px;
	height: 563px;
}
.inner-wrapper {
  width: 540px;
}
</style>
