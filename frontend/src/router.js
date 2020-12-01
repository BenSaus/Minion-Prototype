import Vue from 'vue'
import Router from 'vue-router'
import Gallery from './views/Gallery.vue'
import About from './views/About.vue'
import Cart from './views/Cart.vue'
import ProductDetails from './views/ProductDetails.vue'
import Playground from './views/Playground.vue'
import Checkout from './views/Checkout.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
    {
      path: '/',
      name: 'gallery',
      component: Gallery
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/details/:productId',
        name: 'details',
        component: ProductDetails
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout
    },
    {
        path: '/playground',
        name: 'playground',
        component: Playground
    },
    // {
    //   path: '/details',
    //   name: 'details',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    // //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    //   component: () => import(/* webpackChunkName: "about" */ './views/ProductDetails.vue')
    // }
  ]
})
