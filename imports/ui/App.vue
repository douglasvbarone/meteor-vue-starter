<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app>
            <div class="headline">{{title}}</div>
        </v-navigation-drawer>
        <v-toolbar app class="primary lighten-1" dark>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container fluid>

                <router-view></router-view>

            </v-container>
        </v-content>
        <v-footer app></v-footer>
    </v-app>
</template>

<script>
    export default {
        name: "App",
        data: () => ({
            title: "Meteor + Vue = S2",
            drawer: false,
        })
    }
</script>

<style scoped>

</style>