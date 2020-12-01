<template>
    <div>
        <h1>Create Product</h1>

        <b-form @submit="onSubmit" class="mt-4">

            <b-card>
                <h3>Basics</h3>
                <b-form-group>
                    <b-form-checkbox
                        id="checkbox-1"
                        v-model="form.visible"
                        name="checkbox-1"
                        size="lg"
                        >
                        Visible
                    </b-form-checkbox>
                </b-form-group>

                <b-form-group label="Product Name:" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                    placeholder="Enter name"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Commodity Type:" label-for="commodityTypeSelect">
                    <b-form-select
                        id="commodityTypeSelect"
                        v-model="form.commodity_type"
                        :options="commodity_type"
                        required
                    ></b-form-select>
                </b-form-group>

                <div class="d-flex ">
                    <b-form-group label="Product Sku:" label-for="sku" class="flex-fill">
                        <b-form-input
                        id="sku"
                        v-model="form.sku"
                        required
                        class="col-6"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Product Slug:" label-for="slug" class="flex-fill">
                        <b-form-input
                        id="slug"
                        v-model="form.slug"
                        required
                        class="col-6"
                        ></b-form-input>
                    </b-form-group>
                </div>

                <b-form-group label="Description:" label-for="description">
                    <b-form-textarea
                        id="description"
                        v-model="form.description"
                        placeholder="Enter something..."
                        rows="3"
                        max-rows="6"
                        ></b-form-textarea>
                </b-form-group>

                <b-form-group label="Categories:">
                    <b-form-checkbox-group
                        id="checkbox-group-1"
                        v-model="selectedCategories"
                        :options="categories"
                        name="flavour-1"
                    ></b-form-checkbox-group>
                </b-form-group>
            </b-card>




            <b-card class="mt-4">
                <h3>Images</h3>
                <app-image-table :images="images" @onDelete="onDelete" />
                <div class="d-flex mt-3">
                    <b-form-input class="" v-model="newUrl" placeholder="Enter Thumbnail Image Url"></b-form-input>
                    <b-button class="d-block" @click="addImageUrl">Add</b-button>
                </div>
            </b-card>



            <b-card class="mt-4">
                <h3>Stock</h3>
                <b-form-group>
                    <b-form-checkbox
                        id="manageStockCheckbox"
                        v-model="form.manage_stock"
                        name="manageStockCheckbox"
                        size="lg"
                        >
                        Manage Stock
                    </b-form-checkbox>
                </b-form-group>

                <b-form-group label="Current Inventory:" label-for="inventory" v-if="form.manage_stock">
                    <b-form-input
                    type="number"
                    id="inventory"
                    v-model.number="form.inventory"
                    required
                    ></b-form-input>
                </b-form-group>
            </b-card>

            <b-card class="mt-4">
                <h3>Variations</h3>
                <b-button to="/variantOptions">Add Variant</b-button>
            </b-card>


            <b-card class="mt-4">
                <h3>Price</h3>
                <b-form-group label="Price:" label-for="price">
                    <b-form-input
                    type="number"
                    id="price"
                    v-model.number="form.price"
                    required
                    ></b-form-input>
                </b-form-group>
            </b-card>

            <b-card class="mt-4">
                <b-form-group>
                    <b-form-checkbox
                        id="featuredCheckbox"
                        v-model="form.featured"
                        name="featuredCheckbox"
                        size="lg"
                        >
                        Featured
                    </b-form-checkbox>
                </b-form-group>
            </b-card>



            <div class="d-flex justify-content-end w-100 my-5">
                <b-button variant="outline-secondary" to="/products" size="lg">Cancel</b-button> 
                <b-button type="submit" variant="secondary" class="ml-2" size="lg">Save</b-button> 
            </div>
        </b-form>


    </div>
</template>


<script>
import ImageTable from '@/components/Products/ImageTable.vue'
import {ProductMixin} from '@/mixins/ProductMixin.js'
import {ImageMixin} from '@/mixins/ImageMixin.js'
import {CategoryMixin} from '@/mixins/CategoryMixin.js'


export default {
    mixins: [ProductMixin, ImageMixin, CategoryMixin],

    data() {
      return {
        commodity_type: [{text: 'Physical', value: 'physical'}, {text: 'Digital', value: 'digital'}],
        form: {
            slug: '',
            sku: '',
            name: '',
            description: '',
            commodity_type: 'physical',
            manage_stock: false,
            inventory: 0,
            price: 0,
            visible: false,
            featured: false,
        },
        images: [],
        newUrl: '',
        imageStandardUrl: '',

        selectedCategories: [],
        categories: [],
      }
    },

    components: {
        appImageTable: ImageTable
    },

    async created(){
        // get categories
        this.categories = await this.processCategories();
        console.log(this.categories);
    },

    methods:{

        async onSubmit(evt){
            evt.preventDefault();

            console.log('Submitting', this.form);
            const productId = await this.createProduct(this.form);
            console.log('productId', productId);

            await this.saveImages(this.images, productId);

            this.$router.push('products');
        },

        // Image stuff
        addImageUrl(){
            this.images.push(this.getImageUrls(this.newUrl));
            this.newUrl = '';
        },

        onDelete(id){
            console.log('delete ' + id);

            this.images = this.images.filter( (image) => {
                return image.id !== id;                                       
            });
        },

        async processCategories(){
            const categoryData = await this.getCategories();
            return categoryData.map((category) => {return {text: category.name, value: category.id} });
        },

    }
}
</script>

