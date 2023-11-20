import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import About from "@/components/About";
import JustTrees from "@/components/JustTrees";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "ai·lan·thus",
      component: Home,
    },
    {
      path: "/forest",
      redirect: "/altissima",
    },
    {
      path: "/trees",
      redirect: "/altissima",
    },
    {
      path: "/altissima",
      name: "Just some trees",
      component: JustTrees,
      meta: {
        title: "Just some trees",
      },
    },
    {
      path: "/about",
      name: "about me",
      component: About,
    },
    {
      path: "/globe",
      component: () => import("@/components/projects/GlobeView"),
    },
    {
      path: "/project/grid",
      component: () => import("@/components/projects/EPFast"),
    },
    {
      path: "/project/nature",
      component: () => import("@/components/projects/Museum"),
    },
    {
      path: "/project/ocean",
      component: () => import("@/components/projects/ExplOcean"),
    },
    {
      path: "/project/trees",
      component: () => import("@/components/projects/WhatTreesWere"),
    },
    {
      path: "/project/forest",
      component: () => import("@/components/projects/CellForest"),
    },
    {
      path: "/project/worms",
      component: () => import("@/components/projects/Worms"),
    },
    {
      path: "/project/run",
      component: () => import("@/components/projects/Run"),
    },
    {
      path: "/project/okeeffe",
      component: () => import("@/components/projects/OKeeffe"),
    },
    {
      path: "/project/cactris",
      component: () => import("@/components/projects/Cactris"),
    },
    {
      path: "/project/painless",
      component: () => import("@/components/projects/Painless"),
    },
  ],
});
