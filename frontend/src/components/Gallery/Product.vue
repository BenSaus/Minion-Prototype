<template>
    <div class="text-center">
        <router-link :to="'/details/' + product.id">
            <img :src="product.images[0].url_tiny" alt="">
            <p>{{product.name}}</p>
        </router-link>
    </div>
</template>


<script>
export default {
    props: ['product']
}
</script>