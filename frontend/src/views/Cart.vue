<template>
    <div class="cart container mt-4">
        <h1>Your Order</h1>

        <h3 v-if="!cartExists">Nothing in cart</h3>
        <div v-else> 
            <div class="container">
                <div v-for="item in items" :key="item.id" class="d-flex border justify-content-between">

                    <img :src="item.thumbnail.url_tiny" alt="">
                    <p class="mx-3">{{item.name}}</p>
                    <p class="mx-3">Price: ${{item.price}}</p>
                    <p class="mx-3">Qty: x{{item.quantity}}</p>
                    <b-button @click="removeCartItem(item)">X</b-button>

                </div>
            </div>

            <div class="text-center mt-4">
                <b-button class="mx-auto" @click="onCheckout" size="lg">Checkout</b-button>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: 'cart',

    data(){
        return {
            items: [],
        }
    },

    async created(){
        await this.getCartItems();
    },

    methods: {
        async getCartItems(){

            const cartRef = this.$store.state.cartRef;
            console.log('cartRef', cartRef);
            
            if(cartRef !== null){
                console.log('cart found');
                const cartResp = await this.$http.get(`http://localhost:9000/carts/${cartRef}/items`);
                // console.log(cartResp);

                this.items = cartResp.body.data;
            }

        },

        async removeCartItem(itemToRemove){
            console.log('remove', itemToRemove);

            const cartRef = this.$store.state.cartRef;

            const cartResp = await this.$http.delete(`http://localhost:9000/carts/${cartRef}/items/${itemToRemove.id}`);
            console.log(cartResp);

            // remove from the items array
            this.items = this.items.filter( (item) => {
                console.log('filter item: ' + item);
                return item.id !== itemToRemove.id ? true: false}  
            );
        },

        onCheckout(){
            this.$router.push('checkout');
        }
    },

    computed: {
        cartExists(){
            return this.$store.state.cartRef !== null;
        },
    }

}

</script>