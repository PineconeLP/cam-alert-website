export default {
  target: "static",
  srcDir: "src/",
  router: {
    base: "/cam-alert-website/"
  },
  generate: {
    dir: "cam-alert-website"
  },
  modules: ["bootstrap-vue/nuxt"],
  plugins: ['@/plugins/vue-gtag.js'],
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Meta description" }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "favicon.ico"
      }
    ]
  },
  css: ["@/css/main.css"],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      }
    }
  }
};
