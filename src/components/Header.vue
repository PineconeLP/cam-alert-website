<template>
  <div id="header" class="py-3">
    <nav class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col">
          <a class="nav-title" href="/">Cam Alert</a>
        </div>
        <div class="col-auto">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <download-button />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import DownloadButton from "./DownloadButton";

export default {
  name: "Header",
  components: {
    DownloadButton
  }
};
</script>

<style scoped>
#header {
  background-color: var(--color-primary);
  color: white;
}

.nav-title {
  font-size: 2rem;
}

nav a {
  color: white;
  text-decoration: none;
}
</style>
