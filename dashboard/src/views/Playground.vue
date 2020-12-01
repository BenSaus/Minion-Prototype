<template>
    <div>
        <h1>Playground</h1>

        <b-card class="mt-4">
            <h3>Images</h3>

            <app-image-table :images="images" @onDelete="onDelete" />
            <div class="d-flex mt-3">
                <b-form-input class="" v-model="newUrl" placeholder="Enter Image Url"></b-form-input>
                <b-button class="d-block" @click="addImageUrl">Add</b-button>
            </div>

        </b-card>
    </div>
</template>

<script>
import ImageTable from '@/components/Products/ImageTable.vue'

export default {

    data: function(){
        return {
            images: [{
                url: 'http://www.pickledbraingames.com/temp/images/284d48_tn.jpg',
                is_thumbnail: true
            },
            {
                url: 'http://www.pickledbraingames.com/temp/images/0258b0_tn.jpg',
                is_thumbnail: false
            },
            {
                url: 'http://www.pickledbraingames.com/temp/images/31e4c4_tn.jpg',
                is_thumbnail: false
            },
            {
                url: 'http://www.pickledbraingames.com/temp/images/66557c_tn.jpg',
                is_thumbnail: false
            }],

            newUrl: ''
        }
    },

    components:{
        appImageTable: ImageTable,
    },

    async created(){

    },

    methods:{
        addImageUrl(){
            this.images.push({url:this.newUrl});
            this.newUrl = ''
        },

        onDelete(url){
            console.log('delete ' + url);

            this.images = this.images.filter( (image) => {
                // console.log(`comparing ${image.url} to ${url}`);
                return image.url !== url;
            });
        }


    }
}
</script>