import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home/Home.vue'
import forOrganizations from "../components/product/forOrganizations/ForOrganizations.vue";
import forEmployees from "../components/product/forEmployees/ForEmployees.vue";
import TheProduct from "../components/product/TheProduct.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/product',
    name: "Product",
    component: TheProduct,
    redirect: "/product/organization",
    children: [
      {
        path: "organization",
        name: "organization",
        component: forOrganizations,
        props: true
      },
      {
        path: "employee",
        name: "employee",
        component: forEmployees,
        props: true
      }
    ]
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "Contact",
  },
  {
    path: "/login",
    name: "Login",
  },
  {
    path: "/join",
    name: "Join",
  },
  { 
    path: "/:notFound(.*)",
    name: "404" 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router
