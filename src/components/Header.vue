<template>
  <div id="root" class="py-3">
    <nav class="container">
      <div class="row justify-content-between align-items-center">
        <a class="nav-title" href="#">Cam Alert</a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <download-button class="nav-link" />
          </li>
        </ul>
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
#root {
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
