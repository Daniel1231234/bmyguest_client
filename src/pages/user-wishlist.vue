<template >
    <div class="wishlist-page main-layout"  :class="{ overlay: isOverlay }">
        <h1 @click="show">Wishlist</h1>
        <div v-if="stays" v-for="stay in stays" :key="stay._id">
            <wishlist-preview :stay="stay" />
        </div>
    </div>
</template>

<script>
import wishlistPreview from '../cmps/wishlist-preview.cmp.vue'

export default {
    name: "wish-list-page",
    props: {

    },
    data() {
        return {
            wishedStays: [],
        };
    },
    created() {
        this.$store.commit({ type: 'setCurrPage', page: 'wishlist-page' })
    },
    mounted() { },
    methods: {
        show() {
            console.log(this.stays)

        }
    },
    computed: {
        stays() {
            const res = this.$store.getters.stays
            const staysToShow = res.filter((stay) => stay.wished)
            return staysToShow
        },
        isOverlay() {
            return this.$store.getters.isOverlay
        },
    },
    unmounted() { },
    components: {
        wishlistPreview
    }
};
</script>
<style ></style>