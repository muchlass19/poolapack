<template>
    <div>
        LOGGED IN
        <button v-on:click="logout" class="w-full p-4 bg-yellow-500 text-white font-semibold rounded-lg">
            <a href="#">Logout</a>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    methods: {
        logout(){
            this.$store.dispatch('logout')
        }
    }
}
</script>

<style>

</style>