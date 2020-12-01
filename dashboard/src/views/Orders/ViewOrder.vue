<template>
    <div>
        <h1>Order Details</h1>
        <h6>Order Id: {{order.id}}</h6>
        <h5>Status: {{order.status}}</h5>

        <h5 v-if="isPaid"> Payment: <strong class="text-white bg-success px-2">Paid</strong> </h5>
        <h5 v-else> Payment: <strong class="text-white bg-danger px-2">Not Paid</strong> </h5>

        <h5 v-if="isShipped"> Shipping: <strong class="text-white bg-success px-2">Shipped</strong> </h5>
        <div v-else>
            <div class="d-flex align-items-center">
                <h5> Shipping: <strong class="text-white bg-danger px-2">Not Shipped</strong> </h5>
                <b-button class="ml-3" @click="markShipped" size="sm">Mark as Shipped</b-button>
            </div>
        </div>

        

        <div class="mt-5">
            <h3>Customer</h3>
            <div class="border">
                <h4>{{ order.customer.first_name }} {{order.customer.last_name}}</h4>    
                <p>
                    Email: {{ order.customer.email }}<br>
                    Phone: {{order.customer.phone}}<br>
                    Accepts marketing: {{order.customer.accepts_marketing}}<br>
                </p>
            </div>
        </div>




        <div class="d-flex">
            <div class="mt-5 flex-fill">
                <h3>Shipping Address</h3> 
                <div class="border">
                    <p>{{order.shipping_address.first_name}} {{order.shipping_address.last_name}} <br>
                    {{order.shipping_address.street_1}}, {{order.shipping_address.street_2}} <br>
                    {{order.shipping_address.city}}, {{order.shipping_address.state}} {{order.shipping_address.zip}}</p>
                </div>
            </div>
            <div class="mt-5 flex-fill">
                <h3>Billing Address</h3> 
                <div class="border">
                    <p>{{order.billing_address.first_name}} {{order.billing_address.last_name}} <br>
                    {{order.billing_address.street_1}}, {{order.billing_address.street_2}} <br>
                    {{order.billing_address.city}}, {{order.billing_address.state}} {{order.billing_address.zip}}</p>
                </div>
            </div>
        </div>

        <div>
            <h3 class="mt-5">Items</h3>
            <app-data-table :fields="itemFields" :dataArray="order.items" />
        </div>

        <div>
            <h3 class="mt-5">Transaction History</h3>
            <app-data-table :fields="transactionFields" :dataArray="transactions" />
        </div>


        <br>
        <b-button to="/orders" class="mb-5">Back</b-button> 
    </div>
</template>


<script>

import DataTable from '@/components/DataTable.vue';

export default {
    components:{
        appDataTable: DataTable
    },

    data: function(){
        return {
            id: null,
            order: {
                customer: {},               // sub-objects are initialized to prevent undefined errors
                shipping_address: {},
                billing_address: {},
            },
            itemFields: ['id','sku', 'name', 'quantity'],
            transactionFields: ['id','reference', 'amount', 'transaction_type', 'status'],
            transactions: []
        }
    },

    async created(){ 
        this.id = this.$route.params.id;
        this.order = await this.getOrder(this.id);
        this.transactions = await this.getTransactions(this.id);
    },

    methods:{
        async getOrder(id){
            try{
                const resp = await this.$http.get(`http://localhost:9000/orders/${id}`);
                console.log(resp);

                return resp.body.data;
            }
            catch(err){
                console.error(err);
            }
        },

        async getTransactions(orderId){
            try{
                const resp = await this.$http.get(`http://localhost:9000/orders/${orderId}/transactions`);
                console.log(resp);

                return resp.body.data;
            }
            catch(err){
                console.error(err);
            }
        },

        async markShipped(){
            console.log('Mark Shipped');
            
            const resp = await this.$http.put(`http://localhost:9000/orders/${this.id}`, {shipping: 'fulfilled'});
            console.log(resp);

            this.order.shipping = 'fulfilled';
        }

    },

    computed: {
        isPaid(){
            return this.order.payment === 'paid';
        },
        isShipped(){
            return this.order.shipping === 'fulfilled';
        }
    }
}
</script>