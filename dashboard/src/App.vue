<template>
    <div id="app" class="d-flex align-items-stretch">
        <div class="px-4" id="nav">
            <app-menu></app-menu>
        </div>
        <div class="mt-5 mx-5" id="content">
            <!-- Just for spacing -->
            <div class="mt-4"></div>        
            <router-view/>
        </div>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
    components:{
        appMenu: Menu
    }    
}
</script>


<style lang="scss">
    #nav{
        min-width: 15%;
    }

    #content{
        width: 100%;
    }
</style>
