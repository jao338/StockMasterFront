<template>
    <q-card>
        <q-card-section class="q-pa-none">
            <div>
                <q-bar class="bg-primary text-white">
                <CustomLinkTwo v-for="item in items" :key="item.title" :title="item.title" @emitValue="updateComponent(item)"/>
                <q-separator vertical color="white"/>
                <q-item clickable>
                    <q-item-section avatar>
                        <q-icon name="menu" />
                    </q-item-section>
                </q-item>
                <q-space />
                <q-btn dense flat icon="minimize" />
                <q-btn dense flat icon="crop_square" />
                <q-btn dense flat icon="close" />
                </q-bar>
            </div>
        </q-card-section>

        <q-card-section class="q-pa-md">
            <transition fade
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
                >
                <component :is="currentComponent" v-if="currentComponent" />
            </transition>
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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 9s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>