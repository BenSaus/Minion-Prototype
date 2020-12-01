<template>
    <div>
        <h1>Edit Product</h1>
        <h5>Id: {{productId}}</h5>

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
                        @change="onCategoryChange"
                    ></b-form-checkbox-group>
                </b-form-group>
            </b-card>




            <b-card class="mt-4">
                <h3>Images</h3>
                <app-image-table :images="images" @onDelete="onDelete" />
                <div class="d-flex mt-3">
                    <b-form-input class="" v-model="newUrl" placeholder="Enter Thumbnail Image Url"></b-form-input>
                    <b-button class="d-block" @click="onAddImageUrl">Add</b-button>
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
                <b-button @click="onAddVariant">Add Variant</b-button>
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
import ImageTable from '@/components/Products/ImageTable.vue';
import {ProductMixin} from '@/mixins/ProductMixin.js'
import {ImageMixin} from '@/mixins/ImageMixin.js'
import {CategoryMixin} from '@/mixins/CategoryMixin.js'

// import _ from "lodash";

export default {
    mixins: [ProductMixin, ImageMixin, CategoryMixin],

    data: function() {
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

        // imagesChanged: false,                Mark this true after an image is added or removed. Then wipe all images and readd each after a save
        // imageChanges: [],                     An array of objects, each one representing a change the user made, add image remove image set thumbnail. Iterate through on save
        images: [],
        newUrl: '',

        categoryChanges: [],
        originalCategories: [],
        selectedCategories: [],
        categories: [],

        productId: null
      }
    },

    components: {
        appImageTable: ImageTable
    },

    async created(){
        console.log("created");
        console.log('params', this.$route.params);

        this.productId = this.$route.params.id;

        try{
            const resp = await this.$http.get(`http://localhost:9000/products/${this.productId}?include=images,categories`);
            // console.log(resp);

            this.form = this.getProductFromResp(resp);
            this.images = this.getImagesFromResp(resp);

            this.categories = await this.processCategories();
            this.selectedCategories = this.getCategoryIdsFromResp(resp);
            this.originalCategories = this.selectedCategories.slice();               //  copy the orignal selected categories for later comparison


        }
        catch(err){
            console.error(err);
        }
    },

    methods:{
        onSubmit(e){
            e.preventDefault();

            this.updateProduct(this.productId, this.form);

            // Find out what categories changed 
            // const addedCategories = _.difference(this.selectedCategories, this.originalCategories);    //'B-A Added'
            // const removedCategories = _.difference(this.originalCategories, this.selectedCategories);          //'A-B Removed'
            // addCategories(addedCategories();
            // removeCategories(removedCategories);       

            this.$router.push('products');
        },

        // async addCategories(ids){
        //     for(let id in ids){
        //         // call api to add product to category
        //     }
        // },

        // async removeCategories(ids){
        //     for(let id in ids){
        //         // call api to remove product from category
        //     }
        // },

        getProductFromResp(resp){
            return {
                name: resp.body.data.name,
                sku: resp.body.data.sku,
                slug: resp.body.data.slug,
                description: resp.body.data.description,
                commodity_type: resp.body.data.commodity_type,
                manage_stock: resp.body.data.manage_stock,
                inventory: resp.body.data.inventory,
                price: resp.body.data.price,
                visible: resp.body.data.visible,
                featured: resp.body.data.featured
            }
        },

        getImagesFromResp(resp){
            return resp.body.data.images;
        },



        getCategoryIdsFromResp(resp){
            console.log('getCategoryIdsFromResp', resp.body.data.categories);
            
            const result = resp.body.data.categories.map( (categoryData) => {
                return categoryData.id;
            });

            console.log(result);
            return result;
        },


        async processCategories(){
            const categoryData = await this.getCategories();
            return categoryData.map((category) => {return {text: category.name, value: category.id} });
        },


        onAddImageUrl(){
            const newImage = this.getImageUrls(this.newUrl);
            this.saveImage(newImage, this.$route.params.id);
            this.images.push(newImage);

            this.newUrl = '';
        },

        onDelete(id){
            console.log('delete ' + id);
            this.images = this.images.filter( (image) => {
                // console.log(`comparing ${image.id} to ${id}`);
                return image.id !== id;                                       
            });

            this.deleteImage(id, this.$route.params.id);
        },

        onCategoryChange(evt){
            console.log('Category Changed', evt);

        },

        onAddVariant(){
            this.$router.push({ name: 'variantOptions', params: { id: this.productId } });
        }
            
    },


}
</script>

