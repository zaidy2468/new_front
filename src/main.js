import { createApp } from "vue";
import mitt from "mitt";
import App from "./App.vue";
//import {BootstrapVuePlugin } from 'bootstrap-vue';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import routes from "./routes";
//vue.use(BootstrapVuePlugin)
const emmiter = mitt();
const app = createApp(App).use(routes);
app.config.globalProperties.emmiter = emmiter;
app.mount("#app");
