<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}hour</h4>
    <div>
      <span v-for="area in areas" :key="area">{{ area }}</span>
    </div>
    <div class="actions">
      <router-link :to="coachContactLink">Contact</router-link>
      <router-link :to="coachDetailsLink">View Details</router-link>
    </div>
  </li>
</template>

<script>
// import '../../../css/coach-item.css';

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
