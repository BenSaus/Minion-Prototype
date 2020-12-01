<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h1>Products</h1>
            <b-button variant="secondary" to="/createProduct">+ Create New</b-button> 
        </div>

        <app-data-table @edit="onEdit" @delete="onDelete" :fields="fields" :actions="actions" :dataArray="dataArray" />
    </div>
</template>

<script>
import DataTable from '@/components/DataTable';
import {ProductMixin} from '@/mixins/ProductMixin.js'

export default {
    mixins: [ProductMixin],
    
    data: function(){
        return {
            fields: ['id','sku', 'name','inventory','price','featured'],
            actions: [{
                name: 'Edit',
                variant: 'secondary',
                class: 'mr-2'
            },
            {
                name: 'Delete',
                variant: 'outline-danger',
            }],
            dataArray: []
        }
    },

    components:{
        appDataTable: DataTable
    },

    async created(){
        this.dataArray = await this.getProducts();
    },

    methods:{
        async getProducts(){
            const resp = await this.$http.get('http://localhost:9000/products?include=thumbnails')
            return resp.data.data;
        },

        onEdit(item){
            console.log('onEdit', item);

            this.$router.push({ name: 'editProduct', params: { id: item.id } });
        },

        onDelete(item){
            console.log('onDelete', item);

            this.removeProduct(item);
        },

        async removeProduct(product){

            console.log("deleteProduct", product);

            await this.deleteProduct(product.id);

            this.dataArray = this.dataArray.filter((arrayProduct) => {
                return arrayProduct.id !== product.id;
            });
        }
    }
}
</script>