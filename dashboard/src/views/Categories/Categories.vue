<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h1>Categories</h1>
            <b-button variant="secondary" to="/createCategory">+ Create New</b-button> 
        </div>

        <!-- <app-category-table /> -->

        <app-data-table @edit="onEdit" @delete="onDelete" :fields="fields" :actions="actions" :dataArray="dataArray" />
    </div>
</template>

<script>
import DataTable from '@/components/DataTable';
import {CategoryMixin} from '@/mixins/CategoryMixin.js'

export default {
    mixins: [CategoryMixin],

    components:{
        appDataTable: DataTable
    },

    data: function() {
        return {
            fields: ['id','name','description','is_visible'],
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

    async created(){
        this.dataArray = await this.getCategories();
    },

    methods: {

        onEdit(item){
            console.log("editCategory", item);

            this.$router.push({ name: 'editCategory', params: { id: item.id } });
        },

        async onDelete(item){

            console.log("deleteCategory", item);

            const resp = await this.$http.delete(`http://localhost:9000/categories/${item.id}`);            // Use mixin command here
            console.log(resp)

            this.dataArray = this.dataArray.filter((category) => {
                return category.id !== item.id;
            });

        }
    }

}
</script>

