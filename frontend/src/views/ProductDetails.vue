<template>
    <div class="container mt-5">
        <div class="d-flex justify-content-center">
            <ProdcutImages class="mx-3" :productData="product" />
            <ProductInfo class="mx-3" :productData="product" />
        </div>
    </div>
</template>

<script>
import ProdcutImages from '@/components/ProductDetails/ProductImage';
import ProductInfo from '@/components/ProductDetails/ProductInfo';


export default {

    data() {
        return {
            productId: this.$route.params.productId,
            product: {}
        }
    },
    // watch: {
    //     '$route': (to, from) => {
    //         this.id = to.params.id;             // Needed for changes in the route parameters
    //     }
    // },
    components: {
        ProdcutImages,
        ProductInfo
    },
    methods:{
        async getProduct(){
            const resp = await this.$http.get(`http://localhost:9000/products/${this.productId}?include=images`)
            
            return resp.body.data;
        }
    },
    async created() {
        console.log('created! ProductId: ' + this.productId);

        const product = await this.getProduct(this.productId);

        console.log( product );
        this.product = product;
    },

}
</script>