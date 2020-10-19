<template>
  <div class="input-field">
    <custom-input
      v-model="userEmail"
      v-validate="'required|email'"
      name="email"
      type="text"
      placeholder="E-mail address"
      @keyup="handleInput"
      @input="value => $emit('input', value)">
    </custom-input>
    <span class="error">{{ errors.first('email') }}</span>
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
      userEmail: ''
    };
  },

  methods: {
    ...mapMutations('COMMON_STORE', [
      'setEmailError'
    ]),

    handleInput () {
      this.setEmailError(this.errors.any());
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
      @media (max-width: 420px) {
        font-size: $small-font-size;
      }
    }
  }
</style>
