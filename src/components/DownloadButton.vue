<template>
  <a class="download px-5" href="/download">Download</a>
</template>

<script>
export default {
  name: "DownloadButton"
};
</script>

<style scoped>
.download {
  background-color: var(--color-secondary-light);
}

.download:hover {
  background-color: var(--color-secondary-dark);
}
</style>
