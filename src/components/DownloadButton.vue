<template>
  <a class="btn download px-5" href="/download">Download</a>
</template>

<script>
export default {
  name: "DownloadButton"
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
