<template>
  <q-drawer show-if-above bordered class="bg-grey-1 text-black">
    <q-list>
      <q-item-label header>{{ $t("link", 2) }}</q-item-label>
      <custom-link v-for="link in linksList" :key="link.title" v-bind="link" />
    </q-list>
  </q-drawer>
</template>

<script setup>
import CustomLink from "src/components/util/CustomLink.vue";

import { useI18n } from "vue-i18n";

const { t } = useI18n();

const linksList = [
  {
    title: t("home"),
    icon: "home",
    link: "/",
  },
  {
    title: t("vendas"),
    icon: "currency_exchange",
    link: "sale",
  },
  {
    title: t("estoque"),
    icon: "inventory",
    link: "inventory",
  },
  {
    title: t("produto", 2),
    icon: "production_quantity_limits",
    link: "product",
  },
  {
    title: t("fornecedor", 2),
    icon: "transfer_within_a_station",
    link: "supplier",
  },
  {
    title: t("order"),
    icon: "book",
    link: "order",
  },
  {
    title: t("expedicao"),
    icon: "local_shipping",
    link: "expedition",
  },
  // {
  //   title: t("exemplo"),
  //   icon: "exemple",
  //   link: "example",
  // },
];
</script>

<style></style>
