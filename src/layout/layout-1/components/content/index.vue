<template>
	<transition name="fade" mode="out-in">
		<router-view class="content"></router-view>
	</transition>
</template>

<script>

export default {
	data() {
		return {

		}
	},
	methods: {
	}
}
</script>

<style scoped lang="scss">
.content {
	margin:0 20px;
}
</style>