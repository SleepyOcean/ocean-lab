<template>
	<div class="laboratory">
		<div
			class="l-item"
			v-for="(item, index) in menus"
			:key="index"
			@click="itemClick(item)"
		>
			<i :class="item.icon"></i>{{ item.name }}
		</div>
	</div>
</template>

<script>
import { getLabMenus } from '../services/labService';

export default {
	name: 'Laboratory',
	data () {
		return {
			menus: []
		};
	},
	mounted () {
		getLabMenus().then(data => {
			this.menus = data.menus;
		});
	},
	methods: {
		itemClick (item) {
			window.open('#' + item.url);
		}
	}
};
</script>

<style lang="scss" scoped>
.laboratory {
	width: 100%;
	max-width: 1080px;
	margin: 20px auto;
	padding: 20px;
	min-height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	.l-item {
		width: 200px;
		height: 100px;
		margin: 10px;
		float: left;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28px;
		background: linear-gradient(145deg, #348a84, #04648c, #024b6a);
		border-radius: 20px;
		cursor: default;
		user-select: none;
		color: white;
		flex-grow: 1;
		transition: opacity 0.2s linear;

		i {
			font-size: 32px;
			padding-right: 10px;
		}

		&:hover {
			opacity: 0.8;
		}
	}
}
</style>
