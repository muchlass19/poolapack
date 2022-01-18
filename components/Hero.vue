<template>
    <div class="grid grid-cols-2">
        <div class="grid place-items-center">
            <img src="~/static/hero.png" alt="Hero">
            <h2 class="font-semibold text-lg">Kemudahan mencari bahan baku</h2>
            <p class="text-gray-400 text-sm">One Click to Industry</p>
        </div>

        <div>
            <card />
        </div>
    </div>
</template>

<script>
import Card from './Card.vue'
export default {
  components: { Card },

}
</script>

<style>

</style>