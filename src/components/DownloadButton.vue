<template>
  <a class="btn download px-5" :href="downloadLink">Download</a>
</template>

<script>
export default {
  name: "DownloadButton",
  data() {
    return {
      downloadLink:
        "https://github.com/PineconeLP/cam-alert/releases/download/v0.1.1/CamAlert-v0.1.1.jar"
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
