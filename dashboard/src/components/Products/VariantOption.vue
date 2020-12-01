<template>

    <div class="d-flex">

        
        <b-form-group  class="flex-fill">
            <b-form-input
            id="name"
            v-model="option.name"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group  class="ml-3 flex-fill">
            <b-form-select
                id="type"
                v-model="option.type"
                :options="optionType"
                required
            ></b-form-select>
        </b-form-group>

        <div class="ml-3 flex-fill">

            <template v-for="(opValue,index) in option.values">

                <div class="d-flex" :key="index">
                        <b-form-input
                        id="value"
                        v-model="opValue.value"
                        required
                        class="flex-fill align-self-center"
                        ></b-form-input>
       
                    <b-button variant="secondary" class="mx-1 mt-1" size="sm" @click="onMoveUp(index)" :disabled="index <= 0">⯅</b-button>
                    <b-button variant="secondary" class="mx-1 mt-1" size="sm" @click="onMoveDown(index)" :disabled="index >= option.values.length - 1">⯆</b-button>

                    <b-form-radio v-model="option.defaultValue" :name="option.id" :value="index" class="flex-fill align-self-center mx-3">Default</b-form-radio>
                    <b-button variant="outline-danger" @click="onDeleteValue(index)" class="mt-1">X</b-button>
                </div>

            </template>

            <b-button size="sm mt-2" @click="onAddValue">+ Add Another Value</b-button>

        </div>

    </div>
</template>

<script>
export default {
    props: ['option'],

    data: function(){
        return {
            optionType: [{text: 'Drop Down', value: 'dropdown'}, {text: 'Radio Buttons', value: 'radiobuttons'}],
        }
    },

    methods:{
        onNameChange(){
            console.log('Name Change:' + this.option.name);
        },

        onAddValue(){
            console.log("Add Another Value");

            this.option.values.push({value:''});
        },

        onMoveUp(index){
            const removed = this.option.values.splice(index, 1);
            this.option.values.splice(index-1,0,removed[0]);
        },

        onMoveDown(index){
            const removed = this.option.values.splice(index, 1);
            this.option.values.splice(index+1,0,removed[0]);
        },

        onDeleteValue(index){

            if(this.option.defaultValue === index)
                this.option.defaultValue = 0;

            this.option.values.splice(index, 1);
        }



    }
}
</script>