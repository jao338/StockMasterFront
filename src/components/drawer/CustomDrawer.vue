<template>
	<q-drawer bordered style="min-width: 230px">
		<q-scroll-area class="flex column full-height">
			<q-item
				class="flex column justify-center items-center q-pa-md bg-transparent"
			>
				<CustomAvatar @click="router.push('/profile')" />
				<div
					:class="
						!$q.dark.isActive
							? 'text-h6 text-black text-weight-bold'
							: 'text-h6 text-white text-weight-bold'
					"
				>
					{{ t("lorem") }}
				</div>
				<div class="text-caption">{{ t("lorem") }}</div>
			</q-item>

			<q-separator />

			<CustomLink v-for="(link, index) in linksList" :key="link.title" :data-cy="`custom-link-${index}`" v-bind="link" />

		</q-scroll-area>
	</q-drawer>
</template>

<script setup>
import CustomLink from "src/components/util/CustomLink.vue";
import CustomAvatar from "src/components/util/CustomAvatar.vue";

import { useQuasar } from "quasar";
import { useRouter} from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const q = useQuasar();
const router = useRouter();
const linksList = [
{
		item: {
			icon: "home",
			link: "/",
			text: t("home"),
		},
	},
	{
		item: {
			icon: "menu",
			link: "",
			text: t("pagina", 2),
			children: [
				{
					text: t("exemplo"),
					icon: "menu",
					link: "/example",
				},
			],
		},
	},
	{
		item: {
			icon: "settings",
			link: "/config",
			text: t("configuracoes"),
		},
	},
];
</script>
