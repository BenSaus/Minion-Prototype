
<template>
    <div>
        <div class="text-center mt-4">
            <img style="width:110px" src="../assets/carl.jpg">
            <h1 class="mb-4">Minion</h1>
        </div>


        <b-button class="d-block w-100 mb-2" variant="outline-secondary" to="/products">Products</b-button> 
        <!-- <b-button class="d-block w-100 mb-2" variant="outline-secondary" to="/">Images</b-button>  -->
        <b-button class="d-block w-100 mb-2" variant="outline-secondary" to="/categories">Categories</b-button> 
        <br>
        <b-button class="d-block w-100 mb-2" variant="outline-secondary" to="/orders">Orders</b-button> 
        <!-- <b-button class="d-block w-100 mb-2" variant="outline-secondary" to="/transactions">Transactions</b-button>  -->
        <br>
        <b-button class="d-block w-100 mb-2" variant="outline-secondary" to="/customers">Customers</b-button> 
        <!-- <b-button class="d-block w-100 mb-2" variant="primary" to="/addresses">Addresses</b-button>  -->
        <br><br>
        <b-button class="d-block w-100 mb-2" variant="outline-secondary" to="/playground">Playground</b-button> 

    </div>
</template>

<script>
// import MenuItem from './MenuItem.vue';

export default {

    // components:{
    //     appMenuItem: MenuItem
    // }
}
</script>


<style scoped>
    router-link-active{
        text-decoration: none;
    }
</style>