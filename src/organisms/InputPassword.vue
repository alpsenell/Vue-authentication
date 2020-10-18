<template>
  <div class="input-field">
    <custom-input
      v-model="password"
      v-validate="'required|min:6'"
      name="password"
      type="password"
      placeholder="Password"
      border-radius-place="bottom"
      @keyup="handleInput"
      @input="value => $emit('input', value)">
    </custom-input>
    <span class="error">{{ errors.first('password') }}</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import CustomInput from '@/components/CustomInput.vue';

export default {
  components: {
    CustomInput
  },

  data () {
    return {
      password: ''
    };
  },

  methods: {
    ...mapMutations('COMMON_STORE', [
      'setPasswordError'
    ]),

    handleInput () {
      this.setPasswordError(this.errors.any());
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../sass/_variables.scss';

  .input-field {
    width: 30%;
    min-width: 250px;
    align-self: center;
    position: relative;
    .error {
      background-color: $error-bg;
      color: $white;
      border-radius: 5px;
      font-weight: bold;
      position: absolute;
      top: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      z-index: 2;
    }
  }
</style>
