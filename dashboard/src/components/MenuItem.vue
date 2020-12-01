
<template>
    <div>
        <b-button v-b-toggle.collapse class="w-100">{{name}}</b-button>
        <b-collapse id="collapse">
            <slot></slot>
        </b-collapse>

    </div>
</template>


<script>

// menuItem{
//     name
//     links: [
//         {
//             to:
//             name:
//         }
//     ]
// }

export default {
    props: ['name'],
    data: function(){
        return {

        }
    }
}
</script>