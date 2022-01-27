import { boot } from "quasar/wrappers";
import { Chart, registerables } from "chart.js";
import Chartkick from "vue-chartkick";

export default boot(async ({ app }) => {
  Chart.register(...registerables);
  app.use(Chartkick.use(Chart));
  app.use(Chartkick);
});
