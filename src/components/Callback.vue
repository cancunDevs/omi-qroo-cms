<template>
  <span class="icon is-large">
    <i class="fas fa-spinner fa-pulse"></i>
  </span>
</template>

<script>
export default {
  name: 'callback',
  props: ['auth'],
  data() {
    this.auth.handleAuthentication();
    return {};
  },
};
</script>

<style>
  .spinner {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
