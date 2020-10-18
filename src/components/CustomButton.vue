<template>
  <div class="custom-button">
    <button
      :class="{ disable }"
      @click="$emit('click')">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * @property {string} text
     */
    text: {
      type: String,
      required: true
    },
    /**
     * @property {boolean} disable
     */
    disable: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../sass/_variables.scss';

  .custom-button {
    button {
      width: 100%;
      background-color: $button-bg;
      color: #ffffff;
      font-size: $text-font-size;
      padding: 15px;
      border: none;
      outline: none;
      border-radius: 5px;
      &.disable {
        background-color: rgba(200, 92, 206, 0.3);
        pointer-events: none;
      }
    }
  }
</style>
