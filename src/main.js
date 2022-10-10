import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import DemoVueButton from "dv-button";
import "dv-button/dist/style.css";
import ViewerPlugin from "itsc-viewer-plugin";
import "itsc-viewer-plugin/dist/style.css";

// createApp(App).mount('#app')

const app = createApp(App);

app.use(DemoVueButton);
app.use(ViewerPlugin);

app.mount("#app");
