<template>
    <v-card>
        <v-card-title class="primary white--text headline">An example of Vue with Meteor reactivity</v-card-title>
        <v-card-text>
            <v-text-field label="Add some text to database:" v-model="text"/>
            <v-chip @click="onDelExample(example._id)" v-for="example in allExamples" :key="example._id">
                {{example.text}}
            </v-chip>
            <div>
                Click to delete.
            </div>
        </v-card-text>
        <v-card-actions>
            <div v-if="!$subReady.Time">{{$subReady}}Loading...</div>
            <v-spacer/>
            <v-btn @click="onAddExample" color="primary">Add</v-btn>
        </v-card-actions>

    </v-card>
</template>

<script>
    import {Example} from "../collections/Example";

    export default {
        name: "Example",
        data: () => ({
            text: ''
        }),
        methods: {
            $subscribe:{
                'Example': []
            },

            onAddExample() {
                Example.insert({text: this.text})
                this.text = ''
            },

            onDelExample(_id) {
                Example.remove({_id})
            }
        },
        meteor: {
            allExamples() {
                return Example.find({}).fetch()
            }
        }
    }
</script>

<style scoped>

</style>