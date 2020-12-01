<template>
    <div>
        <div v-for="image in images" :key="image.url">
            <div class="d-flex mt-2 border justify-content-between align-items-center">
                <img class="ml-2 my-2" style="width:120px" :src="image.url_thumbnail" alt="">

                <p>{{image.url_thumbnail}}</p>
                <b-form-checkbox
                    id="primary-checkbox"
                    v-model="image.is_thumbnail"
                    name="primary-checkbox"
                    class="mx-4"
                >
                Thumbnail
                </b-form-checkbox>

                <b-button class="mr-2" @click="onDelete(image.id)">X</b-button>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    props: ['images'],

    data: function(){
        return {

        }
    },

    methods: {
        onDelete(url){
            console.log('onDelete', url);
            this.$emit('onDelete', url);
        }
    }

}
</script>