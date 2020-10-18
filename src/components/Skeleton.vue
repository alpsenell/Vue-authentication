<template>
  <div
    v-if="status"
    :style="style">
    <content-loader
      :width="sizing.width"
      :height="sizing.height"
      :primary-color="primaryColor"
      :secondary-color="secondaryColor"
      :speed="speed">
      <rect
        x="0"
        y="0"
        rx="4"
        ry="4"
        :width="sizing.width"
        :height="sizing.height">
      </rect>
    </content-loader>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader';

export default {
  components: {
    ContentLoader
  },

  props: {
    /**
     * @property {boolean} status
     */
    status: {
      type: Boolean,
      default: true
    },
    /**
     * @property {{ width: number|string, height: number|string }} sizing
     */
    sizing: {
      type: Object,
      default: () => ({
        width: 0,
        height: 0
      }),
      required: true
    }
  },

  data () {
    return {
      primaryColor: '#EFF2F4',
      secondaryColor: '#DCDEE6',
      speed: 2
    };
  },

  computed: {
    /**
     * @return {{ width: number|string, height: number|string }}
     */
    style () {
      return { width: `${this.sizing.width}px`, height: `${this.sizing.height}px` };
    }
  }
};
</script>
