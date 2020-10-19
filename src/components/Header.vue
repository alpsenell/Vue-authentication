<template>
  <div class="header">
    <img src="../assets/hedwig-logo.png" alt="hedwig-logo">
    <div class="header__logout">
      <font-awesome-icon class="header__user-icon" icon="user" />
      <font-awesome-icon icon="caret-down" @click="toggleDropdown"/>
      <div
        v-if="dropdownStatus"
        class="header__content">
        <p>{{ userEmail }}</p>
        <p>Log Out</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data () {
    return {
      dropdownStatus: false
    };
  },

  computed: {
    ...mapState('COMMON_STORE', [
      'userEmail'
    ])
  },

  methods: {
    toggleDropdown () {
      this.dropdownStatus = !this.dropdownStatus;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../sass/_variables.scss';

  .header {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    $self: &;
    img {
      width: 150px;
    }
    &__user-icon {
      margin-right: 5px;
    }
    &__logout {
      color: $white;
      position: relative;
    }
    &__content {
      position: absolute;
      min-width: 120px;
      right: 0;
      top: 30px;
      background-color: $white;
      p {
        color: $main-bg;
      }
    }
  }
</style>
