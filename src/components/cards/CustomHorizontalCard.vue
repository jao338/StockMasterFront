<template>
	<q-card class="customHorizontalCard" flat bordered>
		<q-card-section class="row justify-between" horizontal>
			<slot name="left" />
			<slot name="right" />
		</q-card-section>
	</q-card>
</template>

<script setup></script>

<style>
.customHorizontalCard {
	width: 100%;
	max-width: 350px;
}
</style>
