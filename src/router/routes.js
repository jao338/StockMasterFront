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
    // beforeEnter: Guard.isLogged,   Apenas um usuário do tipo admin pode acessar esta rota. Criar função adequado para fazer isso.
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../pages/user/ProfilePage.vue"),
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
      {
        path: "/example",
        name: "example",
        component: () => import("../pages/example/ExamplePage.vue"),
      },
      {
        path: "/sale",
        name: "sale",
        component: () => import("../pages/sale/SalePage.vue"),
      },
      {
        path: "/product",
        name: "product",
        component: () => import("../pages/product/ProductPage.vue"),
      },
      {
        path: "/inventory",
        name: "inventory",
        component: () => import("../pages/inventory/InventoryPage.vue"),
      },
      {
        path: "/supplier",
        name: "supplier",
        component: () => import("../pages/supplier/SupplierPage.vue"),
      },
      {
        path: "/expedition",
        name: "expedition",
        component: () => import("../pages/expedition/ExpeditionPage.vue"),
      },
      {
        path: "/order",
        name: "order",
        component: () => import("../pages/order/OrderPage.vue"),
      },
      {
        path: "/departament",
        name: "departament",
        component: () => import("../pages/departaments/DepartamentPage.vue"),
      },
    ],
    //beforeEnter: Guard.isLogged,
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
