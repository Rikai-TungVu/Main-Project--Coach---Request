import { type } from 'os';

<template>
  <span class="badge" :class="type">{{ text }}</span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped src="../../css/base-badge.css" />
