<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in">
                <router-view :key="key"></router-view>
            </transition>
        </div>
    </div>
</template>

<script type="text/babel">
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    export default {
        created(){
        },
        computed: {
            key() {
                let key = '';
                if(this.$route.query.anrouter) {
                    key = '_' + this.$route.query.anrouter
                } else {
                    key = this.$route.path.replace(/\//g, '_')
                }
                return key;
            }
        }, 
        components: {
            vHead, vSidebar
        }, 
        methods: {
        }
    }
</script>

