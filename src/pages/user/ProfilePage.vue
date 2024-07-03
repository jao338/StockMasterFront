<template>
  <q-layout class="flex flex-center justify-center">
    <q-card class="flex justify-center items-center" style="max-width: 70vw">
      <q-card-section class="flex items-end">
        <q-avatar size="256px">
          <img src="~src/assets/img/alexandre, o grande.png" />
        </q-avatar>
        <q-icon
          @click="upload"
          style="cursor: pointer;"
          cursor-pointer
          name="upload"
          size="30px"
          color="secondary"
        />
      </q-card-section>
      <q-card-section class="testezinho q-pa-md">
        <q-item-label
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.</q-item-label
        >
        <q-item-label caption>ijeoieueh</q-item-label>
      </q-card-section>
    </q-card>
  </q-layout>
</template>
<script setup>
const upload = () => {
  alert("ain");
};
</script>

<style>
.testezinho {
  color: white;
  border-radius: 128px 0px 0px 128px !important;
  height: 312px;
  background-color: #00C853;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
