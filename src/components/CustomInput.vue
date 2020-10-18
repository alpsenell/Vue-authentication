<template>
  <div class="custom-input">
    <label>
      <input
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :style="borderStyle"
        @keyup="value => $emit('keyup', value.target.value)"
        @input="value => $emit('input', value.target.value)">
    </label>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * @property {string} type
     */
    type: {
      type: String,
      required: true
    },
    /**
     * @property {string} name
     */
    name: {
      type: String,
      required: true
    },
    /**
     * @property {string} placeholder
     */
    placeholder: {
      type: String,
      default: ''
    },
    /**
     * @property {string} borderRadiusPlace
     */
    borderRadiusPlace: {
      type: String,
      default: 'top'
    }
  },

  computed: {
    /**
     * @return {object}
     */
    borderStyle () {
      return this.borderRadiusPlace === 'top'
        ? { 'border-top-right-radius': '5px', 'border-top-left-radius': '5px' }
        : { 'border-bottom-left-radius': '5px', 'border-bottom-right-radius': '5px' };
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../sass/_variables.scss';

  .custom-input {
    input {
      position: relative;
      width: 100%;
      font-size: $text-font-size;
      background: transparent;
      padding: 15px 10px;
      border: 1px solid $input-border;
      text-align: center;
      font-family: inherit;
      color: $white;
      &::placeholder {
        color: $input-placeholder;
      }
      &:focus {
        outline: none;
        z-index: 1;
        box-shadow: 0 0 0 2pt $input-outline;
      }
    }
  }
</style>
