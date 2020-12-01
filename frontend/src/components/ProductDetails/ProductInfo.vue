<template>
    <div>
        <h2>{{productData.name}}</h2>
        <h3>${{productData.price / 100}}</h3>
        <p>{{productData.description}}</p>

        <b-button @click="addToCart">Add To Cart</b-button>

        <p>{{productData.inventory}} In Stock - Usually ships in 7-10 business days</p>

        <p>Hand made warning</p>
    </div>
</template>


<script>
export default {
    props:['productData'],



    methods:{

        async addToCart(){

            const productData = {
                id: this.productData.id,
                quantity: 1
            }

            let cartRef = this.$store.state.cartRef;

            if(cartRef === null){

                console.log('creating new cart');
                
                // create a new cart
                const cartResp = await this.$http.post('http://localhost:9000/carts');
                console.log('cartResp', cartResp);

                this.$store.commit('saveCartRef', cartResp.body.data.id);
                cartRef = cartResp.body.data.id;
            }

            console.log('adding item to cart ' + cartRef);
            const addResp = await this.$http.post(`http://localhost:9000/carts/${cartRef}/items`, productData);
            console.log(addResp);

            

            // move to cart page
            this.$router.push({path:'/cart'});
        }

    }
}
</script>