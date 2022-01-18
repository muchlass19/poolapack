<template>
  <div class="container mx-auto text-gray-700">
    <navbar />
    <hero />
    <my-footer />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import MyFooter from '~/components/MyFooter.vue'
import Navbar from '~/components/Navbar.vue'
export default {
  components: { Navbar, Hero, MyFooter },
  name: 'IndexPage'
}
</script>
