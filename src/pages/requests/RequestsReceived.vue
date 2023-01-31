<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <ul v-if="hasRequests">
        <RequestsItem
          v-for="req in receivedRequestes"
          :key="req.id"
          :email="req.userEmail"
          :message="req.message"
        ></RequestsItem>
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestsItem from '../../components/requests/RequestsItem.vue';

export default {
  components: {
    RequestsItem,
  },
  computed: {
    receivedRequestes() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
};
</script>

<style scoped src="../../css/requests-received.css"></style>
