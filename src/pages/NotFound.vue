<template>
  <div class="not-found">
    <h1>Ooopss...</h1>
    <h1>Page is not found, please go back or <span @click="redirectHome">click here!</span></h1>
  </div>
</template>

<script>
export default {
  methods: {
    redirectHome () {
      this.$router.push({
        path: '/'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../sass/_variables.scss';

  .not-found {
    background-color: $main-bg;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    h1 {
      color: $white;
    }
    span {
      text-decoration: underline;
      cursor: pointer;
      &:hover {
        color: $header;
      }
    }
  }
</style>
