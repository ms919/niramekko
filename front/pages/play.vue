<template>
	<div>
		<div class="tiktok-wrapper">
			<component :is="currentComponent"></component>
			<PlayResult v-if="modalFlg" @close-modal="closeModal" />
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
	data() {
		return {
			modalFlg: false,
		}
	},
	computed: {
		...mapGetters(["currentComponent", "itemsPointer"]),
		faEyeSlash: () => faEyeSlash,
		faArrowCircleRight: () => faArrowCircleRight,
	},
	methods: {
		gotoNext() {
			if (this.itemsPointer < 4) {
				this.$store.dispatch("gotoNext");
			}
			else {
				this.modalFlg = true;
			}
		},
		closeModal() {
			this.modalFlg = false;
		},
	},
};
</script>
