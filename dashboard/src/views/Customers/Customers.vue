<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h1>Customers</h1>
        </div>

        <app-data-table @view="onView" :fields="fields" :actions="actions" :dataArray="dataArray">
        </app-data-table>
    </div>
</template>

<script>
import DataTable from '@/components/DataTable';

export default {
    
    data: function(){
        return {
            fields: ['id','first_name','last_name', 'email'],
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
        this.dataArray = await this.getCustomers();
    },

    methods:{
        async getCustomers(){
            const resp = await this.$http.get('http://localhost:9000/customers')

            console.log(resp.data.data)
            return resp.data.data;
        },

        onView(item){
            console.log('View Item', item);

            this.$router.push({ name: 'viewCustomer', params: { id: item.id } });
        },

    }
}
</script>

