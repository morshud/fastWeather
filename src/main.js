import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

// Custom CSS
import "./assets/css/custom.css";

// CSS Converter From SCSS
import "./assets/css/main.css";

import "@creativebulma/bulma-tooltip/dist/bulma-tooltip.css";

createApp(App).use(store).use(router).use(VueAxios, axios).mount("#app");
