<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="coachContactLink"
        >Contact</base-button
      >
      <base-button link :to="coachDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      //return '/coaches' + this.id + '/contact';
      // coaches/c1/contact
      return this.$route.path + '/' + this.id + '/contact';
      // this.$route.paht <=> coaches & ...(tùy trường hợp)
    },
    coachDetailsLink() {
      //return '/coaches' + this.id;
      // coaches/c1
      return this.$route.path + '/' + this.id;
    },
  },
};
</script>

<style scoped src="../../css/coach-item.css"></style>
