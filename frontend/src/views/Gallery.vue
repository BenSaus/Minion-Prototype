<template>
  <div class="Gallery d-flex" >
    <Categories class="mx-4 mt-4"/>
    <ProductGrid class="mx-4 mt-4"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Categories from '@/components/Gallery/Categories.vue'
import ProductGrid from '@/components/Gallery/ProductGrid.vue'


export default {
    name: 'Gallery',

    components: {
        Categories,
        ProductGrid, 
    },

}
</script>
