import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import TreeCanvas from "@/components/TreeCanvas"
import About from "@/components/About"
import JustTrees from "@/components/JustTrees"

// import Pictures from "@/components/Pictures"
import EPFast from "@/components/projects/EPFast"
import Museum from "@/components/projects/Museum"

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "ai·lan·thus",
      component: Home
    },
    {
      path: "/forest",
      name: "Just some trees",
      component: JustTrees,
      meta: {
        title: 'Just some trees',
      }
    },
    {
      path: "/about",
      name: "about me",
      component: About
    },
    {
      path: "/project/epfast",
      // name: "EPFast",
      component: EPFast
    },
    {
      path: "/project/nature",
      // name: "Nature Now",
      component: Museum
    },
    // {
    //   path: "trees",
    //   // name: "What Trees Were",
    //   component: () =>
    //     import("@/components/projects/Play")
    // }
    // {
    //   path: '/project',
    //   name: 'project',
    //   component: Home,
    //   // redirect: "/",
    //   children: [{
    //       path: "/project/epfast",
    //       // name: "EPFast",
    //       component: EPFast
    //     },
    //     {
    //       path: "nature",
    //       // name: "Nature Now",
    //       component: Museum
    //     },
    //     {
    //       path: "trees",
    //       // name: "What Trees Were",
    //       component: () =>
    //         import("@/components/projects/Play")
    //     }
    //   ]
    // }
    //   path: "/project/:id",
    //   name: "Project",
    //   props: true,
    //   // component: EPFast
    //   component: () =>
    //     import("@/components/projects/" + id)
    //   // import("@/components/projects/EPFast")
    // },
    // {
    //   path: "/code",
    //   name: "code",
    //   component: About
    // },
    // {
    //   path: "/pictures",
    //   name: "more things",
    //   component: Pictures
    // }
  ]
});