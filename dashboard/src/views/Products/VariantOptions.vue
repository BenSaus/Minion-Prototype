<template>
    <div>
        <h1>Variant Options</h1>
        <h5>Id: {{productId}}</h5>

        <b-card>

            <template v-for="(option,index) in variationOptions" >
                <app-variant-option :option="option" :key="index" class="mt-4"/>
            </template> 

            <!-- <app-variant-option :option="testOption" class="mt-4"/> -->

            <hr>
            <b-button @click="onAddVariantOption">+ Add Variant Option</b-button>
        </b-card>

        <div class="d-flex justify-content-end w-100 my-5">
            <b-button variant="outline-secondary" to="/products" size="lg">Cancel</b-button> 
            <b-button type="submit" variant="secondary" class="ml-2" size="lg">Save</b-button> 
        </div>
    </div>
</template>

<script>
import VariantOption from '@/components/Products/VariantOption.vue';

export default {
    components: {
        appVariantOption: VariantOption
    },

    data(){
        return {
            productId: null,
            variationOptions: [],
            // testOption: {name:'Size', type: 'dropdown', values: [{value:'Small'}, {value:'Medium'}, {value:'Large'}], defaultValue: 2},

            
        }
    },

    created(){
        console.log("created");
        console.log('params', this.$route.params);

        this.productId = this.$route.params.id;
    },

    methods: {

        onAddVariantOption(){
            console.log("new option");

            const defaultOption = {id: this.variationOptions.length, name:'Size', type: 'dropdown', values: [{value:'Small'}, {value:'Medium'}, {value:'Large'}], defaultValue: 0};           // NOTE: declared in function scope to not run into reference problems

            this.variationOptions.push(defaultOption);
        }

    }

}
</script>