<template>
  <TheHeader></TheHeader>
  <RouterView></RouterView>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>

<style src="./css/app.css"></style>
