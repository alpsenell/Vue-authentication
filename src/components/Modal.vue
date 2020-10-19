<template>
  <div
    v-if="statusClone"
    class="modal-wrapper">
    <div class="modal-wrapper__overlay"></div>
    <div class="modal-wrapper__content">
      <div class="modal-wrapper__close" @click="closeModal">x</div>
      <div class="modal-wrapper__title">{{ title }}</div>
      <div class="modal-wrapper__description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    /**
     * @property {boolean} status
     */
    status: {
      type: Boolean,
      required: true
    },
    /**
     * @property {boolean} title
     */
    title: {
      type: String,
      required: true
    },
    /**
     * @property {boolean} description
     */
    description: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      statusClone: this.status
    };
  },

  watch: {
    status () {
      this.statusClone = this.status;
    }
  },

  methods: {
    closeModal () {
      this.statusClone = false;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../sass/_variables.scss';

  .modal-wrapper {
    position: fixed;
    opacity: 1;
    height: 100vh;
    width: 100vw;
    $self: &;
    &__content {
      background-color: $white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 12;
      width: 50%;
      height: 50%;
    }
    &__overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: block;
      overflow: hidden;
      z-index: 11;
      background-color: $main-bg;
      opacity: 0.5;
    }
    &__title {
      display: grid;
      grid-template-columns: 1fr min-content min-content;
      color: $main-bg;
      font-size: $header-font-size;
      font-weight: bold;
      margin: 15px 0;
    }
    &__close {
      cursor: pointer;
      position: absolute;
      font-size: $text-font-size;
      top: 10px;
      right: 15px;
    }
    &__description {
      font-size: $description-font-size;
      color: $main-bg;
      top: 50%;
      left: 50%;
      width: 80%;
      transform: translate(-50%, -50%);
      margin: 25px 0;
    }
  }
</style>
