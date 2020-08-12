<template>
  <div id="header" class="py-3">
    <nav class="container">
      <div class="row align-items-center navbar-dark">
        <div class="col-sm d-flex justify-content-between">
          <a class="nav-title" href="/">Cam Alert</a>
          <b-navbar-toggle class="d-sm-none" target="menu">
            <span class="navbar-toggler-icon"></span>
          </b-navbar-toggle>
        </div>
        <b-collapse id="menu" class="col-sm-auto d-sm-flex">
          <div class="d-flex justify-content-center justify-content-sm-end">
            <ul class="nav nav-pills flex-column flex-md-row">
              <li class="nav-item ml-sm-3 mt-3 mt-sm-0">
                <download-button />
              </li>
            </ul>
          </div>
        </b-collapse>
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
