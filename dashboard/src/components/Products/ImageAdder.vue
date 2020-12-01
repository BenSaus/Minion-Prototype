// <template>
//     <div>
//         <app-image-table :images="images" @onDelete="onDelete" />
//         <div class="d-flex mt-3">
//             <b-form-input class="" v-model="newUrl" placeholder="Enter Image Url"></b-form-input>
//             <b-button class="d-block" @click="addImageUrl">Add</b-button>
//         </div>
//     </div>
// </template>

// <script>
// import ImageTable from '@/components/Products/ImageTable.vue'

// export default {
//     props: ['images'],

//     data: function(){
//         return {
//             newUrl: ''
//         }
//     },

//     components:{
//         appImageTable: ImageTable,
//     },

//     async created(){

//     },

//     methods:{
//         addImageUrl(){
//             this.images.push({url:this.newUrl});
//             this.newUrl = ''
//         },

//         onDelete(url){
//             console.log('delete ' + url);

//             this.images = this.images.filter( (image) => {
//                 // console.log(`comparing ${image.url} to ${url}`);
//                 return image.url !== url;
//             });
//         }


//     }
// }
// </script>