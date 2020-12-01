<template>
    <div>
        <h1>Customer</h1>
        <h4>{{ customer.first_name }} {{customer.last_name}}</h4>    
        <p>
            Email: {{ customer.email }}<br>
            Phone: {{customer.phone}}<br>
            Accepts marketing: {{customer.accepts_marketing}}<br>
        </p>
        <br>
        <b-button to="/customers">Back</b-button> 
    </div>
</template>


<script>

export default {

    data: function(){
        return {
            id: null,
            customer: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                accepts_marketing: false
            }
        }
    },

    async created(){  
        this.id = this.$route.params.id;
        this.customer = await this.getCustomer(this.id);
    },

    methods:{
        async getCustomer(id){
            const resp = await this.$http.get(`http://localhost:9000/customers/${id}`);
            console.log(resp);

            return resp.body.data;
        }

    },
}
</script>