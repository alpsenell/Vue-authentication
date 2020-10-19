<template>
  <div class="chart">
    <canvas :id="id"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  props: {
    chartData: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },

  mounted () {
    this.createChart();
  },

  watch: {
    chartData () {
      this.createChart();
    }
  },

  methods: {
    createChart () {
      const ctx = document.getElementById(this.id);
      // eslint-disable-next-line no-unused-vars
      const myChart = new Chart(ctx, {
        type: this.chartData.type,
        data: this.chartData.data,
        options: this.chartData.options
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .chart {
    margin-top: 15px;
  }
</style>
