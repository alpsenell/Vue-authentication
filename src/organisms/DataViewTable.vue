<template>
  <div class="data-view-table-wrapper">
    <div
      v-if="data"
      class="data-view-table">
      <div class="data-view-table__upper-part">
        <font-awesome-icon :icon="icon" />
        <div class="data-view-table__title-data">
          <div class="data-view-table__title">{{ title }}</div>
          <div class="data-view-table__data">{{ data }}</div>
        </div>
      </div>
      <div class="data-view-table__bottom-part">
        <div class="data-view-table__full-name">
          <font-awesome-icon icon="redo" @click="$emit('refresh', refreshKey)" />
          <span>{{ fullName }}</span>
        </div>
      </div>
    </div>
    <skeleton
      v-else
      :status="!data"
      :sizing="{ width: 250, height: 200 }">
    </skeleton>
  </div>
</template>

<script>
import Skeleton from '@/components/Skeleton.vue';

export default {
  components: {
    Skeleton
  },

  props: {
    /**
     * @property {string} icon
     */
    icon: {
      type: String,
      required: true
    },
    /**
     * @property {string} title
     */
    title: {
      type: String,
      required: true
    },
    /**
     * @property {string|number} data
     */
    data: {
      type: String | Number,
      required: true
    },
    /**
     * @property {string} fullName
     */
    fullName: {
      type: String,
      required: true
    },
    /**
     * @property {string} refreshKey
     */
    refreshKey: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../sass/_variables.scss';

  .data-view-table-wrapper {
    margin: 0 10px;
  }
  .data-view-table {
    padding: 15px;
    height: 150px;
    background-color: $data-bg;
    display: grid;
    grid-template-rows: 1fr auto;
    color: $white;
    $self: &;
    &__upper-part {
      display: grid;
      grid-template-columns: 50% 50%;
    }
    &__title-data {
      text-align: right;
    }
    &__bottom-part {
      display: grid;
      text-align: left;
    }
    &__full-name {
      span {
        margin-left: 10px;
      }
    }
  }
</style>
