import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { db as firestoreDB } from "./firestore.config";

Vue.config.productionTip = false;

new Vue({
  router,
  provide: () => {
    return { firestoreDB };
  },
  render: h => h(App)
}).$mount("#app");
