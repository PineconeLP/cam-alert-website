<template>
  <Layout>
    <div class="hero py-5">
      <div class="container">
        <div class="row">
          <div class="col-xl">
            <div class="display-3 text-center text-lg-left">
              Helping Minecraft players feel secure.
            </div>
            <p class="description mt-3 text-center text-lg-left">
              Allows players to setup security cameras and receive notifications
              about intruders.
            </p>
            <div
              class="mt-5 row justify-content-center justify-content-lg-start"
            >
              <div class="col-sm-auto d-flex justify-content-center">
                <download-button class="hero-button flex-grow-1" />
              </div>
              <div class="col-sm-auto d-flex justify-content-center">
                <!-- <a
                  class="hero-button btn learn-more px-5 mt-2 mt-sm-0 ml-sm-2 flex-grow-1"
                  href="/about"
                  >Learn More</a
                > -->
              </div>
            </div>
          </div>
          <div class="col-xl mt-5 ml-xl-5 mt-xl-0 text-center">
            <div class="mt-3 embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                :src="demoVideoLink"
                frameborder="0"
                controls="0"
                allowfullscreen
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
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
  },
  setup() {
    const demoVideoLink = "https://www.youtube.com/embed/gLEKmJ4tbEM";

    return {
      demoVideoLink
    };
  }
};
</script>

<style scoped>
.hero {
  background-color: var(--color-primary);
  color: white;
  min-height: 500px;
}

.hero-button {
  max-width: 300px;
}

@media (min-width: 1200px) {
  .hero {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  }
}

.description {
  font-size: var(--font-medium);
}

.learn-more {
  color: var(--color-primary);
  background-color: white;
}
</style>
