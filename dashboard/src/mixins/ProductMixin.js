export const ProductMixin = {

    methods: {

        async createProduct(data){
            try{
                const resp = await this.$http.post('http://localhost:9000/products', data);
                console.log(resp);

                return resp.body.data.id;
            }
            catch(err){
                console.error(err);
            }
        },

        async updateProduct(id, data){
            try{
                const resp = await this.$http.put(`http://localhost:9000/products/${id}`, data);
                console.log(resp);
            }
            catch(err){
                console.error(err);
            }
        },

        async deleteProduct(productId){

            console.log("deleteProduct", productId);

            const resp = await this.$http.delete(`http://localhost:9000/products/${productId}`);
            console.log(resp)

            return resp;
        }

    }
}