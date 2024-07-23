<template>
    <q-card>
        <q-card-section class="q-pa-none">
            <q-bar class="bg-primary text-white">
                <CustomLinkTwo class="q-ma-none" v-for="item in items" :key="item.title" :title="item.title" @emitValue="updateComponent(item)"/>
                <q-space />
                <q-btn dense flat icon="minimize"/>
                <q-btn dense flat icon="crop_square"/>
                <q-btn dense flat icon="close"/>
            </q-bar>
        </q-card-section>

        <q-card-section class="q-pa-md">
            <component :is="currentComponent" v-if="currentComponent" />
        </q-card-section>
    </q-card>
</template>

<script setup>
import { ref } from 'vue';
import CustomLinkTwo from 'src/components/util/CustomLinkTwo.vue';

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
});

const currentComponent = ref(props.items[0].component);

const updateComponent = (item) => {
    currentComponent.value = item.component;
};
</script>