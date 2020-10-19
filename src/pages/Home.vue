<template>
    <div class="home">
      <page-header></page-header>
      <div class="data-tables">
        <data-view-table
          v-for="value in config"
          :key="value.key"
          :refresh-key="value.key"
          :icon="value.icon"
          :title="value.title"
          :data="value.data"
          :full-name="value.fullName"
          @refresh="refreshData">
        </data-view-table>
      </div>
      <data-table
        id="activeUsers"
        :chart-data="activeUsersChart">
      </data-table>
      <data-table
        id="dailyDownloads"
        :chart-data="downloadsChart">
      </data-table>
    </div>
</template>

<script>
import DataViewTable from '@/organisms/DataViewTable.vue';
import PageHeader from '@/components/Header.vue';
import DataTable from '@/organisms/DataTable.vue';
import planetChartData from '@/organisms/chart-data';

export default {
  components: {
    DataViewTable,
    PageHeader,
    DataTable
  },

  data () {
    return {
      planetChartData,
      config: {
        activeUsers: {
          icon: 'user',
          title: 'Active Users',
          key: 'activeUsers',
          data: '',
          fullName: 'Live user count'
        },
        downloads: {
          icon: 'download',
          title: 'Downloads',
          key: 'downloads',
          data: '',
          fullName: 'Total install count'
        },
        averageSessionDuration: {
          icon: 'eye',
          title: 'Avg. Session Duration',
          key: 'averageSessionDuration',
          data: '',
          fullName: 'Total view count'
        },
        paidUsers: {
          icon: 'download',
          title: 'Paid Users',
          key: 'paidUsers',
          data: '',
          fullName: 'Total paying user count'
        }
      },
      activeUsersChartData: [],
      activeUsersChartLabels: [],
      downloadsChartData: [],
      downloadsChartLabels: [],
      activeUsersChartUrl: process.env.VUE_APP_ACTIVE_USERS_CHART_URL,
      downloadsChartUrl: process.env.VUE_APP_DOWNLOADS_CHART_URL,
      activeUsersUrl: process.env.VUE_APP_ACTIVE_USERS_URL,
      downloadsUrl: process.env.VUE_APP_DOWNLOADS_URL,
      averageSessionDurationUrl: process.env.VUE_APP_SESSION_DURATION_URL,
      paidUsersUrl: process.env.VUE_APP_PAID_USERS_URL
    };
  },

  async mounted () {
    await Promise.all([
      this.fetchActiveUsers(),
      this.fetchDownloads(),
      this.fetchAverageSessionDuration(),
      this.fetchPaidUsers(),
      this.fetchActiveUsersChartData(),
      this.fetchDownloadsChartData()
    ]);
  },

  computed: {
    /**
     * @return {object}
     */
    activeUsersChart () {
      return {
        type: 'line',
        data: {
          labels: this.activeUsersChartLabels,
          datasets: [
            {
              label: 'Number of Users',
              data: this.activeUsersChartData,
              backgroundColor: 'rgba(177,95,229, 0.2)',
              borderColor: '#b15fe5',
              pointBorderColor: '#b15fe5',
              borderWidth: 3
            }
          ]
        },
        options: {
          responsive: true,
          lineTension: 1,
          title: {
            display: true,
            text: 'Daily Active Users',
            align: 'start',
            fontSize: 28,
            fontColor: 'white'
          },
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                padding: 25
              }
            }]
          }
        }
      };
    },

    /**
     * @return {object}
     */
    downloadsChart () {
      return {
        type: 'line',
        data: {
          labels: this.downloadsChartLabels,
          datasets: [
            {
              label: 'Number of Users',
              data: this.downloadsChartData,
              backgroundColor: 'rgba(177,95,229, 0.2)',
              borderColor: '#b15fe5',
              pointBorderColor: '#b15fe5',
              borderWidth: 3
            }
          ]
        },
        options: {
          responsive: true,
          lineTension: 1,
          title: {
            display: true,
            text: 'Daily Installs',
            align: 'start',
            fontSize: 28,
            fontColor: 'white'
          },
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                padding: 25
              }
            }]
          }
        }
      };
    }
  },

  methods: {
    async fetchActiveUsers () {
      const { data: { payload: { activeUsers } } } = await this.$http.get(this.activeUsersUrl);

      this.config.activeUsers.data = activeUsers;
    },

    async fetchDownloads () {
      const { data: { payload: { downloads } } } = await this.$http.get(this.downloadsUrl);

      this.config.downloads.data = downloads;
    },

    async fetchAverageSessionDuration () {
      const { data: { payload: { avgSessionDuration } } } = await this.$http.get(
        this.averageSessionDurationUrl
      );

      this.config.averageSessionDuration.data = avgSessionDuration;
    },

    async fetchPaidUsers () {
      const { data: { payload: { paidUsers } } } = await this.$http.get(this.paidUsersUrl);

      this.config.paidUsers.data = paidUsers;
    },

    async fetchActiveUsersChartData () {
      const { data: { payload: { data } } } = await this.$http.get(this.activeUsersChartUrl);

      this.activeUsersChartData = Object.values(data);
      this.activeUsersChartLabels = Object.keys(data)
        .map((label) => {
          const year = label.substr(0, 4);
          const month = label.substr(4, 2);
          const day = label.substr(-2);

          return `${year}-${month}-${day}`;
        });
    },

    async fetchDownloadsChartData () {
      const { data: { payload: { data } } } = await this.$http.get(this.downloadsChartUrl);

      this.downloadsChartData = Object.values(data);
      this.downloadsChartLabels = Object.keys(data);
    },

    refreshData (refreshKey) {
      this.config[refreshKey].data = '';

      const methodName = refreshKey[0].toUpperCase() + refreshKey.substr(1);

      this[`fetch${methodName}`]();
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../sass/_variables.scss';

  .home {
    width: 100vw;
    min-height: 100vh;
    background-color: $main-bg;
    .data-tables {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      @media (max-width: 420px) {
        display: block;
      }
    }
  }
</style>
