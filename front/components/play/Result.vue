<template>
	<transition appear>
		<div @click="closeModal" class="overlay">
			<div class="window">
				<div class="content yellow-green">
					<p class="result-text">SCORE {{ score }}</p>
          <p>称号</p>
					<p class="result-text">{{ title }}</p>
          <div class="icons-wrapper">
						<fa-layers full-width @click="$store.dispatch('gotoRetry')" class="icon-size"
							><fa :icon="faRedoAlt" class="icon-size pink" /><fa
								:icon="faPlay"
								transform="shrink-8.7 right-1.2 down-0.5"
								class="pink"
						/></fa-layers>
            <NuxtLink to="/">
              <fa :icon="faHome" class="orange icon-size mrl-2" />
            </NuxtLink>
          <a :href="tweetContent" target="_blank">
            <fa :icon="faTwitter" class="light-blue icon-size" />
          </a>
          </div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import { faHome, faRedoAlt, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
export default {
	computed: {
    score() {
      return "88"
    },
    title() {
      return "鉄壁の真顔人"
    },
    tweetContent() {
			const url =
				"https://twitter.com/intent/tweet?url=https://niramekko.app";
			const text =
				this.score != null
					? `%0a&text=SCORE:${this.score}【${this.title}】%0a%0a`
					: "&text=";
			const hashtags =
				"&hashtags=niramekko,tiktok,にらめっこ,お笑い";
			return `${url}${text}${hashtags}`;
		},
		faRedoAlt: () => faRedoAlt,
		faPlay: () => faPlay,
		faHome: () => faHome,
		faTwitter: () => faTwitter,
	},
	methods: {
		closeModal() {
			this.$emit("close-modal");
		},
	},
};
</script>

<style scoped>
.overlay {
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: rgba(0, 0, 0, 0.15);
}
.window {
	height: 40%;
	width: 40%;
	overflow: hidden;
	background-color: #ffffff;
  border-radius: 20px;
}
.content {
  margin: 2rem;
	text-align: center;
}
.mrl-2 {
	margin: 0 2rem;
}
.result-text {
  font-size: 2rem;
  font-weight: bold;
}
.icons-wrapper {
  position: relative;
  bottom: -3rem;
}
</style>
