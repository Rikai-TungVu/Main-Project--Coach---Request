<template>
  <section>
    <CoachFilter @change-filter="setFilters"></CoachFilter>
  </section>
  <section>
    <div class="controls">
      <base-button mode="outline" link to="/">Refresh</base-button>
      <base-button v-if="!isCoach" link to="/register"
        >Register as Coach</base-button
      >
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
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    // invisible Register button when user registed as a Coach
    // return false when user registed as a Coach
    filteredCoaches() {
      //return this.$store.getters['coaches/coaches'];
      // coaches đầu tiên là namespace đc define ở src\store\modules\coaches\index.js
      // coaches thứ 2 sau / là gettername

      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
  },
  methods: {
    setFilters(updateFilters) {
      this.activeFilters = updateFilters;
    },
  },
};
</script>

<style scoped src="../../css/coaches-list.css"></style>
