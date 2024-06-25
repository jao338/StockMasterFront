import Guard from "./middleware.js";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/login/LoginLayout.vue"),
    // beforeEnter: Guard.redirect,
  },
  {
    path: "/",
    name: "home",
    component: () => import('../pages/home/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/home/HomePage.vue'), name: "homePage" }
    ],
    // beforeEnter: Guard.redirect,
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
