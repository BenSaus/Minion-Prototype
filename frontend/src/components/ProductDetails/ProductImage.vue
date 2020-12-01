<template>
    <div>

        <div v-if="areImagesLoaded">
            <a :href="productData.images[0].url_zoom">                 
                <img :src="productData.images[0].url_standard" alt="">
            </a>
        </div>


        <div class="d-flex justify-content-center mt-3">
            <div class="mx-2" v-for="image in productData.images" :key="image.id">

                <a :href="image.url_zoom">
                    <img :src="image.url_tiny" alt="">
                </a>

            </div>
        </div>

    </div>
</template>


<script>
export default {
    props:['productData'],

    created(){
        console.log('productData', this.productData);
    },
    computed: {
        areImagesLoaded() {
            return typeof this.productData.images !== 'undefined';
        }
    }

}
</script>