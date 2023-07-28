
<template>
  <main class="main-app">
    <app-header :stays="stays" :appPage="appPage" />
    <div>
      <router-view />
    </div>
  </main>
</template>

<script>
import appFooter from './cmps/app-footer.cmp.vue'
import appHeader from './cmps/home/app-header.cmp.vue'

export default {
  data() {
    return {
    }
  },
  name: 'app',
  created() {
    this.$store.dispatch({ type: 'loadStays' })
    this.$store.dispatch({ type: 'loadOrders' })
  },
  mounted() { },
  methods: {
  },
  computed: {
    stays() {
      return this.$store.getters.stays
    },
    appPage() {
      return this.$store.getters.currPage
    },
  },
  components: {
    appFooter,
    appHeader,
  },
}
</script>


