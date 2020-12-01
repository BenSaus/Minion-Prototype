<template>
    <div>
        <b-table striped hover :items="dataArray" :fields="fields">
            
            <template v-slot:cell(actions)="row">

                <!-- Use a template so the tags will not appear in the resulting html -->
                <template v-for="action in actions">
                    <b-button size="sm" @click="clicked(row.item, action.name.toLowerCase(), row.index, $event.target)" :class="action.class" :key="action.name" :variant="action.variant"> {{action.name}} </b-button>
                </template>

            </template>

        </b-table>
    </div>
</template>

<script>
export default {
    props: ['fields', 'dataArray', 'actions'],

    created(){
        if(this.actions)
            this.fields.push('actions');

        console.log('Created - Data array', this.fields);
    },

    methods:{

        clicked(item, eventName, index, target){
            console.log('clicked', index, target);
            this.$emit(eventName, item, index, target);
        }

    }
}
</script>