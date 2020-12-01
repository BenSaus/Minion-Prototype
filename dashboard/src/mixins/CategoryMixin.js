export const CategoryMixin = {

    methods: {

        async getCategories(){
            try{
                const resp = await this.$http.get('http://localhost:9000/categories');
                return resp.body.data;
            }
            catch(err){
                console.err(err);
            }
        },

        async getCategoryNames(){
            const response = await this.getCategories();
            return response.data.map(category => category.name);
        },


    }
}