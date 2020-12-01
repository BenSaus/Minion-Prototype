<template>
    <div class="d-flex">
        <div v-for="product in productArray" :key="product.id" class="mx-4">
            <Product :product="product"/>
        </div>
    </div>
</template>

<script>
import Product from './Product';

export default {
    components: {
        Product
    },

    data(){
        return {
            productArray: []
        }
    },

    created(){
        this.getProducts();
    },
    
    methods: {
        async getProducts(){
            const resp = await this.$http.get('http://localhost:9000/products?include=thumbnails')
            this.productArray = resp.data.data;
        }
    }
}
</script>