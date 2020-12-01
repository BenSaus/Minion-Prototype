<template>
    <div>
        <h1>Edit Category</h1>

        <b-form @submit="onSubmit" @reset="onReset">

            <b-form-group label="Name:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder="Enter name"
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Description:" label-for="description">
                <b-form-textarea
                    id="description"
                    v-model="form.description"
                    placeholder="Enter something..."
                    rows="3"
                    max-rows="6"
                    ></b-form-textarea>
            </b-form-group>

            <b-form-group label="Sort Order:" label-for="input-2">
                <b-form-input
                type="number"
                id="input-2"
                v-model.number="form.sort_order"
                required
                ></b-form-input>
            </b-form-group>


            <b-form-group>
                <b-form-checkbox
                        id="checkbox-1"
                        v-model="form.is_visible"
                        name="checkbox-1"
     
                >
                    Visible
                </b-form-checkbox>
            </b-form-group>



            <!-- <b-button variant="success" disabled>
                <b-spinner small></b-spinner>
                Loading...
            </b-button> -->

            <div class="d-flex justify-content-end w-100 my-5">
                <b-button variant="outline-secondary" to="/categories" size="lg">Cancel</b-button> 
                <b-button type="submit" variant="secondary" class="ml-2" size="lg">Save</b-button> 
            </div>
        </b-form>

    </div>
</template>


<script>
export default {
    data() {
      return {

        id: -1,

        form: {
          name: '',
          description: null,
          sort_order: 0,
          is_visible: false,
        },

      }
    },

    async created(){

        console.log("created")
        console.log('params', this.$route.params);

        this.id = this.$route.params.id;
        
        const resp = await this.$http.get(`http://localhost:9000/categories/${this.id}`);           // Mmove to mixin
        console.log(resp);

        this.form.name = resp.body.data.name;
        this.form.description = resp.body.data.description;
        this.form.sort_order = resp.body.data.sort_order;
        this.form.is_visible = resp.body.data.is_visible;
    },

    methods:{
        async onSubmit(evt){
            evt.preventDefault()
            console.log('submit', this.form);

            // WARNING: Empty is not the same as NULL. Check for empty fields and set them to null

            const resp = await this.$http.put(`http://localhost:9000/categories/${this.id}`, this.form);            // Move to mixin
            console.log(resp);

            this.$router.push('categories');
        },

        onReset(){
            console.log('reset');
        },

    }
}
</script>

