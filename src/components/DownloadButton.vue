<template>
  <a class="btn download px-5" :href="downloadLink" @click="onDownload">Download</a>
</template>

<script>
export default {
  name: "DownloadButton",
  data() {
    return {
      version: "0.1.1"
    };
  },
  computed: {
    downloadLink() {
      return `https://github.com/PineconeLP/cam-alert/releases/download/v${this.version}/CamAlert-v${this.version}.jar`
    }
  },
  methods: {
    onDownload() {
      this.$gtag.event('cam_alert_download', { 'download_link': this.downloadLink, 'cam_alert_version': this.version });
    }
  }
};
</script>

<style scoped>
.download {
  color: white;
  background-color: var(--color-secondary-light);
}

.download:hover {
  color: white;
  background-color: var(--color-secondary-dark);
}
</style>
