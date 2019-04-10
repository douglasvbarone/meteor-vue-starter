<template>
    <div style="max-width: 640px; margin: auto">
        <v-card class="mb-4">
            <v-card-title class="primary white--text headline">An example of Vue with Meteor reactivity</v-card-title>
            <v-card-text>
                <v-text-field label="Add some text to the database" v-model="text"/>

            </v-card-text>
            <v-card-actions>
<!--                <div v-if="!$subReady.Time">Loading...</div>-->
                <v-spacer/>
                <v-btn @click="onAddExample" color="primary">Add</v-btn>
            </v-card-actions>

        </v-card>
        <div>
            <v-chip @click="onDelExample(example._id)" v-for="example in allExamples" :key="example._id">
                {{example.text}}
            </v-chip>
        </div>
        Click to delete.
    </div>
</template>

<script>
    import {Example} from "../collections/Example";

    export default {
        name: "Example",
        data: () => ({
            text: ''
        }),
        methods: {
            onAddExample() {
                Example.insert({text: this.text})
                this.text = ''
            },

            onDelExample(_id) {
                Example.remove({_id})
            }
        },
        meteor: {
            $subscribe: {
                'Example': []
            },

            allExamples() {
                return Example.find({}).fetch()
            }
        }
    }
</script>

<style scoped>

</style>