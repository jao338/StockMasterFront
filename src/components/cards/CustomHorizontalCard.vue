<template>
    <q-card class="my-card" flat bordered>
      <q-card-section class="row justify-between" horizontal>
        <slot name="left"/>
        <slot name="right"/>
      </q-card-section>
    </q-card>
</template>

<script setup>

</script>

<style>
.my-card{
    width: 100%;
    max-width: 350px;
}

</style>