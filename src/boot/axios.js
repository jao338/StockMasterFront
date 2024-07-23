import { boot } from "quasar/wrappers";
import { Cookies } from "quasar";
import { Notify } from "quasar";

import axios from "axios";

const api = axios.create({ baseURL: 'http://localhost:8000/' });

api.defaults.withCredentials = true;

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response !== undefined) {
      if (error.response.status === 401) {
        api.get("/sanctum/csrf-cookie").then(() => {
          api.post("/api/logout").then(() => {
            Cookies.remove("logged", { path: "/" });
            window.location.href = "/login";
          });
        });
      }

      if (
        ((error.response.status == 422 ||
          error.response.status == 403 ||
          error.response.status == 500) &&
          error.response.data.message &&
          window.location.pathname != "/login" &&
          window.location.pathname != "/forgot-password" &&
          window.location.pathname != "/first-access" &&
          !window.location.pathname.includes("/reset-password")) ||
        (window.location.pathname.includes("/reset-password") &&
          !error.response.data.errors)
      ) {
        Notify.create({
          type: "negative",
          message: error.response.data.message,
          progress: true,
        });
      }

      if (error.response.status == 404) {
        Notify.create({
          type: "negative",
          message: "Houve um erro, tente novamente.",
          progress: true,
        });
      }
    } else {
      Notify.create({
        type: "negative",
        message: "Houve um erro, tente novamente.",
        progress: true,
      });
    }

    return Promise.reject(error);
  }
);

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api }