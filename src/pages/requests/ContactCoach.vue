<template>
  <form @submit.prevent="submitform">
    <div class="form-control">
      <label for="email">Your Email</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea rows="5" id="message" v-model.trim="message"></textarea>
    </div>
    <div class="actions">
      <base-button>Send Message</base-button>
    </div>
    <p class="error" v-if="!formIsValid">
      Please enter a valid email and non-empty message
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true,
    };
  },
  methods: {
    submitform() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.message === ''
      ) {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch('requests/contactCoach', {
        email: this.email,
        message: this.message,
        coachId: this.$router.id,
        //
      });
      this.$router.replace('/coaches');
    },
  },
};
</script>

<style scoped src="../../css/contact-coach.css" />
