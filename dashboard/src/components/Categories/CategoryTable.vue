<template>
    <div>
        <b-table striped hover :items="categories" :fields="fields">
            
            <template v-slot:cell(actions)="row">
                <b-button size="sm" @click="editCategory(row.item)" class="mr-2">Edit</b-button>
                <b-button variant="danger" size="sm" @click="deleteCategory(row.item)" >Delete</b-button>
            </template>

        </b-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [],
            fields:[
                'id',
                'name', 
                'description',
                'is_visible',
                
                {key: 'actions', label: 'actions'}
            ]
        }
    },

    created(){
        this.getCategories();
    },

    methods:{

        // MOVE ALL THESE METHODS UP. MAKE TABLE GENERIC
        
        async getCategories(){
            console.log("getCategories")
            const resp = await this.$http.get('http://localhost:9000/categories')

            this.categories = resp.data.data;
        },

        editCategory(item){
            console.log("editCategory", item);

            this.$router.push({ name: 'editCategory', params: { id: item.id } });
        },

        async deleteCategory(item){         // Move to mixin

            console.log("deleteCategory", item);

            const resp = await this.$http.delete(`http://localhost:9000/categories/${item.id}`);
            console.log(resp)

            this.categories = this.categories.filter((category) => {
                return category.id !== item.id;
            });

        }
    }
}
</script>