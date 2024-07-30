import Guard from "./middleware.js";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/user/LoginPage.vue"),
    // beforeEnter: Guard.isLogged,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../pages/user/RegisterPage.vue"),
    // beforeEnter: Guard.isAdmin,   Apenas um usuário do tipo admin pode acessar esta rota. Criar função adequado para fazer isso.
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../pages/user/ProfilePage.vue"),
    beforeEnter: Guard.isLogged,
  },
  {
    path: "/forgotPassword",
    name: "forgotPassword",
    component: () => import("../pages/user/ForgotPassword.vue"),
    // beforeEnter: Guard.isLogged,
  },
  {
    path: "/",
    name: "layout",
      component: () => import("../layout/Layout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../pages/home/HomePage.vue"),
      },
    ],
    beforeEnter: Guard.isLogged,
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
