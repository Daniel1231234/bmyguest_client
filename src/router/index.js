import { createRouter, createWebHashHistory } from "vue-router";
import deshboardHost from "../pages/deshboard-host.vue";
import explorePage from "../pages/explore-page.vue";
import homePage from "../pages/home-page.vue";
import stayDetails from "../pages/stay-details.vue";
import userWishlist from "../pages/user-wishlist.vue";
import register from "../cmps/auth/register.vue";
import login from "../cmps/auth/login.vue";

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: homePage,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/register",
      name: "register",
      component: register,
    },
    {
      path: "/wishlist",
      name: "wish-list-page",
      component: userWishlist,
    },
    {
      path: "/order",
      name: "order",
      component: deshboardHost,
    },
    {
      path: "/explore/:destination?",
      name: "explore-page",
      component: explorePage,
    },
    {
      path: "/stay/:stayId?",
      name: "stay-details",
      component: stayDetails,
    },
  ],
});

export default router;
