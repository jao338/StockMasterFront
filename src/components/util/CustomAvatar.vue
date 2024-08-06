<template>
	<q-avatar @click="router.push('/profile')" class="cursor-pointer">
		<img
			:src="user.img ? user.img : 'src/assets/img/cat.jpg'"
			:alt="t('nao_encontrado')"
		/>
	</q-avatar>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useAuthStore } from "src/stores/authStore";
import { storeToRefs } from "pinia";

const { user } = storeToRefs(useAuthStore());

const { t } = useI18n();

const router = useRouter();
</script>
