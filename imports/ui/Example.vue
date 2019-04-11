<template>
    <div style="max-width: 640px; margin: auto">
        <v-card class="mb-4">
            <v-card-title class="primary white--text headline">
                An example of Vue with Meteor reactivity
            </v-card-title>
            <v-card-text>
                <v-text-field label="Type some text:" @keyup.enter="onInsertExample" v-model="text"/>
            </v-card-text>
            <v-card-actions>
                <transition name="fade-transition">
                    <v-progress-circular color="info" v-if="!$subReady.examples" indeterminate/>
                </transition>

                <v-spacer/>

                <v-btn @click="onInsertExample" color="primary" round>Add</v-btn>
            </v-card-actions>

        </v-card>
        <div>
            <v-chip @click="onRemoveExample(example._id)" v-for="example in allExamples" :key="example._id">
                {{example.text}}<v-icon>close-circle</v-icon>
            </v-chip>
        </div>
        <v-alert color="info" :value="true" v-if="allExamples.length" outline>Click to delete.</v-alert>
        <v-alert color="success" :value="true" v-else outline>Type some text, then click "Add"</v-alert>
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
            onInsertExample() {
                Meteor.call('example.insert', this.text)
                this.text = ''
            },

            onRemoveExample(_id) {
                Meteor.call('example.remove', _id)
            }
        },
        meteor: {
            $subscribe: {
                'examples': []
            },

            allExamples() {
                return Example.find({}).fetch()
            }
        }
    }
</script>

<style scoped>

</style>