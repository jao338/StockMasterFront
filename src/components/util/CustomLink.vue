<template>
	<div>
		<div v-if="props.item.children">
			<q-expansion-item :icon="props.item.icon" :label="props.item.text">
				<q-item v-for="item in props.item.children" clickable tag="a" :href="item.link">

					<q-item-section avatar>
						<q-icon :name="item.icon"/>
					</q-item-section>

					<q-item-section >
						<q-item-label>{{ item.text }}</q-item-label>
					</q-item-section>

				</q-item>
			</q-expansion-item>
		</div>

		<div v-else>
			<q-item clickable tag="a" :href="item.link">

				<q-item-section avatar>
					<q-icon :name="props.item.icon"></q-icon>
				</q-item-section>

				<q-item-section>
					<q-item-label>{{ props.item.text }}</q-item-label>
				</q-item-section>

			</q-item>
			</div>

	</div>
</template>

<script setup>
defineOptions({
	name: "CustomLink",
});

const props = defineProps({
	item: {
		type: Object,
		required: false,
	},
});
</script>
