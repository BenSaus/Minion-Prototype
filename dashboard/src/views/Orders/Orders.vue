<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h1>Orders</h1>
        </div>

        <app-data-table @view="onView" :fields="fields" :actions="actions" :dataArray="dataArray" />
       
    </div>
</template>

<script>
import DataTable from '@/components/DataTable';

export default {
    
    data: function(){
        return {
            fields: ['id','status','payment', 'shipping'],
            actions: [{
                name: 'View',
                variant: 'secondary',
            }],
            dataArray: []
        }
    },

    components:{
        appDataTable: DataTable
    },

    async created(){
        this.dataArray = await this.getOrders();
    },

    methods:{
        async getOrders(){
            try{
                const resp = await this.$http.get('http://localhost:9000/orders')
                return resp.data.data;
            }
            catch(err){
                console.error(err);
            }
        },

        onView(item){
            console.log('View Item', item);

            this.$router.push({ name: 'viewOrder', params: { id: item.id } });
        },


    }
}
</script>

