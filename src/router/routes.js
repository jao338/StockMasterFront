import Guard from "./middleware.js";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/login/LoginLayout.vue"),
    // beforeEnter: Guard.redirect,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../pages/login/RegisterLayout.vue"),
    // beforeEnter: Guard.redirect,
  },
  {
    path: "/",
    name: "layout",
    component: () => import("../layout/Layout.vue"),
    children: [
      { path: "/", name: "home", component: () => import("../pages/home/HomePage.vue")},
      { path: "/example", name: "example", component: () => import("../pages/example/ExamplePage.vue")},
      { path: "/sale", name: "sale", component: () => import("../pages/sale/SalePage.vue")},
      { path: "/product", name: "product", component: () => import("../pages/product/ProductPage.vue")},
      { path: "/inventory", name: "inventory", component: () => import("../pages/inventory/InventoryPage.vue")},
      { path: "/supplier", name: "supplier", component: () => import("../pages/supplier/SupplierPage.vue")},
      { path: "/expedition", name: "expedition", component: () => import("../pages/expedition/ExpeditionPage.vue")},
      { path: "/order", name: "order", component: () => import("../pages/order/OrderPage.vue")},
     ],
    beforeEnter: Guard.redirect,
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },

];

export default routes;
