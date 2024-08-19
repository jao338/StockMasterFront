<template>
	<q-skeleton
			v-for="(component, index) in components"
			:class="component.class"
			:type="component.type"
			:key="index"
			dense
	/>
</template>

<script setup>
	const props = defineProps({
		components: {
				type: Array,
				required: true
		}
	});
</script>
