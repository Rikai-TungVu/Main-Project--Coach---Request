<template>
  <base-card>
    <h2>Find your Coach</h2>
    <span class="filter-options">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-options">
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-options">
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const InputId = event.target.id;
      const isActive = event.target.checked;
      const updateFilters = {
        ...this.filters,
        [InputId]: isActive,
      };
      this.filters = updateFilters;
      this.$emit('change-filter', updateFilters);
    },
  },
};
</script>

<style scoped src="../../css/coach-filter.css" />
