<template>
	<div>
		<div class="tiktok-wrapper">
			<component :is="currentComponent"></component>
		</div>
		<div class="icon-wrapper">
			<fa :icon="faEyeSlash" class="orange icon-size" />
			<br /><br />
			<fa
				:icon="faArrowCircleRight"
				@click="gotoNext"
				transform="right-2"
				class="orange icon-size"
			/>
		</div>
		<div class="face-api-wrapper"></div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import {
	faEyeSlash,
	faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

export default {
	computed: {
		...mapGetters(["currentComponent"]),
		faEyeSlash: () => faEyeSlash,
		faArrowCircleRight: () => faArrowCircleRight,
	},
	methods: {
		gotoNext(){
			console.log("click front");
			this.$store.dispatch('gotoNext');
		}
	}
};
</script>
