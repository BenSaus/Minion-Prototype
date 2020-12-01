<template>
    <div>
        <h3>Categories</h3>
        <ul>
            <li v-for="category in categories" :key="category.id">{{category.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: []
        }
    },

    created(){
        this.getCategories();
    },

    methods:{
        async getCategories(){
            const resp = await this.$http.get('http://localhost:9000/categories?is_visible=true')

            console.log(resp.data.data);
            this.categories = resp.data.data;
        }
    }
}
</script>