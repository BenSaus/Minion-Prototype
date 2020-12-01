<template>
    <div>
        <h1>Playground</h1>

        <div v-for="product in productArray" :key="product.sku">
            <router-link :to="'/details/' + product.id">
                <img :src="product.images[0].url_tiny" alt="">
                <p>{{product.name}}</p>
            </router-link>
            <p>
                ${{product.price}}, {{product.inventory}} in stock, featured: {{product.featured}}
            </p>
        </div>
    </div>
</template>


<script>
export default {
    data: function() {
        return{
            productArray: []
        }
    },
    created(){
        console.log('create');

        console.log(this.$store.state.cartRef);
        // this.getProducts();
    },
    methods: {
        // async getProducts(){

        //     const resp = await this.$http.get('http://localhost:9000/products?include=thumbnails')

        //     console.log(resp.data.data);
        //     this.productArray = resp.data.data;

        // }
    }
}
</script>