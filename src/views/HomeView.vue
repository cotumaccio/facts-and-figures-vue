<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="home flex">
    <div class="home-pattern flex items-center justify-center w-screen h-screen bg-cover border-[10px] border-snapshot">
      <div class="container mx-auto max-w-4xl">
        <div class="grid grid-cols-3 justify-center">
          <Tile name="snapshot" bg="bg-snapshot" />
          <div>
            Trends
          </div>
          <div>
            Structure
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tile from '../components/Tile.vue'
export default {
  name: 'Home',
  components: { Tile }
}
</script>

<style lang="less" scoped>
.home {
  background: rgb(0,23,83);
  background: linear-gradient(145deg, rgba(0,23,83,1) 0%, rgba(20,149,212,1) 100%);
  &-pattern {
    background-image: url('/assets/images/pattern.svg');
  }
}
</style>
