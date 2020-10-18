<template>
  <div class="sign-in">
    <custom-button
      v-if="!isAuthenticating"
      :disable="disable"
      text="Sign in"
      @click="$emit('login')">
    </custom-button>
    <skeleton
      :status="isAuthenticating"
      :sizing="{ width: 283, height: 55 }">
    </skeleton>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue';
import Skeleton from '@/components/Skeleton.vue';

export default {
  components: {
    CustomButton,
    Skeleton
  },

  props: {
    /**
     * @property {boolean} isAuthenticating
     */
    isAuthenticating: {
      type: Boolean,
      required: true
    },
    /**
     * @property {boolean} disable
     */
    disable: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
  .sign-in {
    width: 30%;
    min-width: 250px;
    align-self: center;
    position: relative;
    margin: 15px 0 0;
  }
</style>
