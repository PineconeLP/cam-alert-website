<template>
  <Layout>
    <div class="hero py-5">
      <div class="container">
        <div class="row">
          <div class="col p-0">
            <div class="display-3 p-0">
              Helping Minecraft players feel secure.
            </div>
            <p class="description mt-3">
              Allows players to setup security cameras and receive notifications
              about intruders.
            </p>
          </div>
          <div class="col p-0 text-center">
            <img src="../assets/logo.png" />
          </div>
        </div>
        <div class="row mt-3">
          <download-button />
          <a class="btn learn-more px-5 ml-4" href="/about">Learn More</a>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout";
import DownloadButton from "../components/DownloadButton";

export default {
  name: "Home",
  components: {
    Layout,
    DownloadButton
  }
};
</script>

<style scoped>
.hero {
  background-color: var(--color-primary);
  color: white;
  min-height: 500px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
}

.description {
  font-size: var(--font-medium);
}

.learn-more {
  color: var(--color-primary);
  background-color: white;
}
</style>
