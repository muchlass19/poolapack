<template>
    <div class="py-12 flex items-center justify-center">
        <div class="bg-white rounded-lg shadow-lg w-3/4">
            <header class="rounded-t-lg px-8 py-3">
                <h2 class="text-lg font-semibold">Masuk Akun</h2>
                <p class="text-base text-gray-400">Isi email untuk masuk atau <span class="font-semibold text-yellow-500"><a href="#">daftarkan akun</a></span></p>
            </header>
            <div class="p-8">
                <div>
                    <h2>Email</h2>
                    <input v-model="email" v-bind:class="{'border-red-500': !emailFormat}" class="w-full p-2 mt-2 border rounded border-gray-300 bg-gray-100 focus:outline-none" type="text">
                </div>
                <div>
                    <h2>Password</h2>
                    <div class="relative mt-2">
                        <input v-model="password" class="w-full p-2 mt-2 border rounded border-gray-300 bg-gray-100 focus:outline-none" :type="isShow ? 'text' : 'password'">
                        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pt-2">
                            <button v-on:click="isShowClicked" type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                                <img src="~/static/eye-slash.png" alt="Eye">
                            </button>
                        </span>
                    </div>
                    <p class="text-sm text-gray-400"><span v-bind:class="{'text-yellow-500': numberMatch}">Kombinasi angka,</span> <span v-bind:class="{'text-yellow-500': uppercaseMatch}">huruf besar</span> <span v-bind:class="{'text-yellow-500': lowercaseMatch}">dan huruf kecil</span></p>
                </div>
            </div>
            <div class="px-8">
                <p class="text-base text-gray-400">Lupa sandi? Silahkan ke halaman <span class="font-semibold text-yellow-500"><a href="#">lupa password</a></span></p>
            </div>
            <div class="p-8">
                <button v-on:click="loginUsers" class="w-full p-4 bg-yellow-500 text-white font-semibold rounded-lg">
                    <a href="#">Selanjutnya</a>
                </button>
            </div>
            <div v-if="!isMatch && isClicked" class="p-8">
                <alert />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cardComponent',
    data(){
        return {
            email: '',
            password: '',
            isClicked: false,
            isShow: false,
            emailFormat: true
        }
    },
    methods: {
        loginUsers() {
            const email = this.email
            const password = this.password
            const loginData = {
                email, password
            }
            this.$store.dispatch('loginUsers', loginData)
            this.isClicked = true
        },
        isShowClicked(){
            this.isShow = !this.isShow
        }
    },
    computed: {
        isMatch(){
            return this.$store.getters.isMatch
        },
        numberMatch(){
            const regex = /[0-9]/
            return this.password.search(regex) > -1
        },
        lowercaseMatch(){
            const regex = /[a-z]/
            return this.password.search(regex) > -1
        },
        uppercaseMatch(){
            const regex = /[A-Z]/
            return this.password.search(regex) > -1
        },
        isDisabled(){
            return !this.emailFormat && !this.passwordFormat
        }
    },
    watch: {
        email(){
            const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
            if(this.email.match(regex)) this.emailFormat = true
            else this.emailFormat = false
        },
        isMatch(){
            if(this.isMatch) this.$router.push('dashboard')
        }
    }
}
</script>

<style>

</style>