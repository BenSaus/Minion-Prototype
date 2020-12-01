import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Products from './views/Products/Products.vue'
import CreateProduct from './views/Products/CreateProduct.vue'
import EditProduct from './views/Products/EditProduct.vue'
import VariantOptions from './views/Products/VariantOptions.vue'

import Orders from './views/Orders/Orders.vue'
import ViewOrder from './views/Orders/ViewOrder.vue'

import Categories from './views/Categories/Categories.vue'
import CreateCategory from './views/Categories/CreateCategory.vue'
import EditCategory from './views/Categories/EditCategory.vue'

import Customers from './views/Customers/Customers.vue'
import ViewCustomer from './views/Customers/ViewCustomer.vue'
// import EditCustomer from './view/Customers/EditCustomer.vue'


import Playground from './views/Playground.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/products',
        name: 'products',
        component: Products
    },
    {
        path: '/createProduct',
        name: 'createProduct',
        component: CreateProduct
    },
    {
        path: '/editProduct',
        name: 'editProduct',
        component: EditProduct
    },
    {
        path: '/variantOptions',
        name: 'variantOptions',
        component: VariantOptions
    },
    {
        path: '/categories',
        name: 'categories',
        component: Categories
    },
    {
        path: '/createCategory',
        name: 'createCategory',
        component: CreateCategory
    },
    {
        path: '/editCategory',
        name: 'editCategory',
        component: EditCategory
    },
    {
        path: '/orders',
        name: 'orders',
        component: Orders
    },
    {
        path: '/viewOrder',
        name: 'viewOrder',
        component: ViewOrder
    },
    {
        path: '/customers',
        name: 'customers',
        component: Customers
    },
    {
        path: '/viewCustomer',
        name: 'viewCustomer',
        component: ViewCustomer
    },
    // {
    //     path: '/editCustomer',
    //     name: 'editCustomer',
    //     component: EditCustomer
    // },
    {
        path: '/playground',
        name: 'playground',
        component: Playground
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
