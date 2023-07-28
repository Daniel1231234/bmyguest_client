import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import store from "./store";
import "element-plus/dist/index.css";
import VueEasyLightbox from "vue-easy-lightbox";
import HistogramSlider from "vue3-histogram-slider";
import "vue3-histogram-slider/dist/histogram-slider.css";
import "./assets/styles/styles.scss";

const app = createApp(App);

app.component(HistogramSlider.name, HistogramSlider);
app.use(store);
app.use(router);
app.use(ElementPlus);
app.use(VueEasyLightbox);

app.mount("#app");
