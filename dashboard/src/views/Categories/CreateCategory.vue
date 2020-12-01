<template>
    <div>
        <h1>Create Category</h1>

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

            <div class="d-flex justify-content-end w-100">
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

        form: {
          name: '',
          description: '',
          sort_order: 0,
          is_visible: false,

        },

      }
    },

    methods:{
        async onSubmit(evt){
            evt.preventDefault()
            console.log('submit', this.form);

            console.log("Submit")
            const resp = await this.$http.post('http://localhost:9000/categories', this.form);
            console.log(resp);

            this.$router.push('categories');
        },

        onReset(){
            console.log('reset');
        }
    }
}
</script>

