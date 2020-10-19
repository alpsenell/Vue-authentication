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
    </div>
</template>

<script>
import DataViewTable from '@/organisms/DataViewTable.vue';
import PageHeader from '@/components/Header.vue';

export default {
  components: {
    DataViewTable,
    PageHeader
  },

  data () {
    return {
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
      this.fetchPaidUsers()
    ]);
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
    height: 100vh;
    background-color: $main-bg;
    .data-tables {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
</style>
