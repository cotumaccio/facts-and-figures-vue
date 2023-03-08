<template>
  <div class="flex justify-center" :class="name">
    <router-link to="/snapshot" :class="`${name}-tile`" :id="`${name}-tile`" @mouseenter="toggle(`${name}-tile`)" @mouseout="toggle(`${name}-tile`)">
      <div class="w-[270px] min-h-[650px] flex flex-col justify-between" :class="`${name}-item`">
        <div class="relative z-auto pt-5" :class="`${name}-title`">
          <p class="text-white px-8 py-5 text-3xl font-semibold uppercase">{{ capitalizedName }}</p>
        </div>
        <div class="relative z-auto w-full" :class="`${name}-button`">
          <div class="flex justify-center mb-[-20px]">
            <p class="text-white bg-neutral px-8 py-3 uppercase text-sm flex items-center">
              <span>See more</span>
              <i class="icon-right-thin mt-1 ml-2"></i>
            </p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    name: String,
    bg: String
  },
  data() {
    return {
      capitalizedName: this.capitalizeFirstLetter(this.name)
    }
  },
  mounted() { },
  methods: {
    capitalizeFirstLetter(str) {
      const firstLetter = str.charAt(0)
      const firstLetterCap = firstLetter.toUpperCase()
      const remainingLetters = str.slice(1)
      const capitalizedWord = firstLetterCap + remainingLetters
      return capitalizedWord
    },
    toggle(id) {
      const title = document.querySelectorAll('#' + id + ' .snapshot-title p');
      title[0].classList.toggle('active');
    }
  }
}
</script>

<style lang="less" scoped>
@trends: #C45131;
.snapshot {
  &-item {
    background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%), url('/assets/images/tiles/bg-snapshot.jpg');
    background-position: center;
    background-size: cover;
    position: relative;
  }
  &-title, &-button {
    p {
      background-image: linear-gradient(@trends, @trends);
      background-size: 0 100%;
      background-repeat: no-repeat;
      transition: .3s;
      background-size: 0 100%;
      // display: inline-block;
      display: flex;
      width: fit-content;
    }
  }
  &-tile {
    &:hover > .snapshot-item > .snapshot-title p {
      background-image: linear-gradient(@trends, @trends);
      background-size: 0 100%;
      background-repeat: no-repeat;
      transition: .3s;
      background-size: 100% 100%;
      display: flex;
    }
    &:hover > .snapshot-item > .snapshot-button p {
      background-image: linear-gradient(@trends, @trends);
      background-size: 0 100%;
      background-repeat: no-repeat;
      transition: .3s;
      background-size: 100% 100%;
      display: flex;
    }
  }
}
</style>