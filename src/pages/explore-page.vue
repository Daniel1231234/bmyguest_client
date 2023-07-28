<template>
  <section class="explore-page" v-if="stays" :class="{ overlay: isOverlay }">
    <main-filter :stays="stays" />
    <stay-list @addToWishList="addToWishList" v-if="stays" :stays="stays" />
    <div v-else="loader()"></div>
  </section>
</template>

<script>
import stayList from '../cmps/home/stay-list.cmp.vue'
import mainFilter from '../cmps/filter.cmp.vue'

export default {
  name: 'explore-page',
  created() {
    this.$store.commit({ type: "setCurrPage", page: "explore-page" })
  },
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    async addToWishList(stay) {
      try {
        let newStay = { ...stay }
        newStay.wished = !newStay.wished
        this.$store.dispatch({ type: 'saveStay', stay: newStay })
        await this.$store.dispatch({ type: 'loadStays' })
      } catch (err) {
        console.log(err)
      }
    },
  },
  computed: {
    stays() {
      return this.$store.getters.stays
    },
    isHeaderOpen() {
      return this.$store.getters.openHeader
    },
    isOverlay() {
      return this.$store.getters.isOverlay
    },
  },
  components: {
    stayList,
    mainFilter
  },
}
</script>