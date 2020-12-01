<template>
    <div class="container  mt-4">
        <h1>Checkout</h1>

        <b-form @submit="onSubmit">

            <b-form-group label="Name:" label-for="customerEmail">
                <b-form-input
                id="customerEmail"
                v-model="form.email"
                required
                placeholder="Customer Email"
                ></b-form-input>
            </b-form-group>

            <b-button>Get Customer</b-button>

            <br>
            <br>
            <b-button>Use Default Customer</b-button>

        </b-form>

    </div>
</template>

<script>
export default {
    data() {
        return {

            form: {
                email: ''
            }

        }
    },

    methods: {
        onSubmit(){
            console.log("submit")
        }
    }
}
</script>