<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <base-button mode="outline" link to="/">Refresh</base-button>
      <base-button link to="/register">Register as Coach</base-button>
    </div>
    <ul v-if="hasCoaches">
      <CoachItem
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :rate="coach.hourlyRate"
        :areas="coach.areas"
      ></CoachItem>
    </ul>
    <h3 v-else>No Coaches found.</h3>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components: {
    CoachItem,
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
      // coaches đầu tiên là namespace đc define ở src\store\modules\coaches\index.js
      // coaches thứ 2 sau / là gettername
    },
    hasCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
  },
};
</script>

<style scoped src="../../css/coaches-list.css"></style>
