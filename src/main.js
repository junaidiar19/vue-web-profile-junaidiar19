import { createApp } from "vue";
import "./app.css";
import App from "./App.vue";
import router from "./router";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: true,
});

createApp(App).use(router).mount("#app");
