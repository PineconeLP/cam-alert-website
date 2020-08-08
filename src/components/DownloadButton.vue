<template>
  <a class="btn download px-5" :href="downloadLink">Download</a>
</template>

<script>
export default {
  name: "DownloadButton",
  setup() {
    const downloadLink =
      "https://github.com/PineconeLP/cam-alert/releases/download/v0.1.0/CamAlert-v0.1.0.jar";

    return {
      downloadLink
    };
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
