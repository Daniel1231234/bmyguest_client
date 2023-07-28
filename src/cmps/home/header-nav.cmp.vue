<template >
    <div class="main-nav">
        <nav>
            <router-link to="/explore">Explore</router-link>
            <router-link to="/order" :user="user">Become a Host</router-link>
            <button class="user-menu-btns clickable" @click="showMenu = !showMenu">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false"
                    style="display: block;fill: none;height: 16px;width: 16px;stroke: currentcolor;stroke-width: 3;overflow: visible;">
                    <g fill="none" fill-rule="nonzero">
                        <path d="m2 16h28"></path>
                        <path d="m2 24h28"></path>
                        <path d="m2 8h28"></path>
                    </g>
                </svg>
                <img src="/img/peopleImages/1003.jpg" class="avatar-header" />
            </button>
        </nav>

        <div class="user-nav-container" v-if="showMenu" @click="showMenu = false">
            <div class="user-nav flex column">
                <router-link v-if="!user.loggedIn" to="/login">Login</router-link>
                <router-link v-if="!user.loggedIn" to="/register">Register</router-link>
                <button v-if="user.loggedIn" @click="signOut" class="signout-btn">Signout</button>
                <router-link to="/wishlist">Wishlist</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { toRaw } from 'vue';
import { auth } from '../../services/auth.service';

export default {
    name: 'header-nav',
    props: {
        stays: {
            type: Array
        },
    },
    data() {
        return {
            showMenu: false,
            isShowDropdownMenu: false,
            admin: null,
        };
    },
    created() {
        window.addEventListener("scroll", this.handleScroll)
        auth.onAuthStateChanged(user => {
            console.log(user)
            this.$store.dispatch("fetchUser", user)
        })
    },
    mounted(){
        console.log(this.user)
    },
    unmounted() {
        window.removeEventListener("scroll", this.handleScroll)
    },
    methods: {
        handleScroll() {
            if (window.scrollY) {
                this.showMenu = false
            }
        },
        async signOut() {
            await this.$store.dispatch("logOut")
        }
    },
    computed: {
        currPage() {
            return this.$store.getters.currPage
        },
        user() {
            return toRaw(this.$store.getters.user)
        }
    },
    unmounted() { },
    components: {

    },
};
</script>


<style>
.signout-btn {
    cursor: pointer;
    padding: .5rem;
    font-weight: bold;
    color: red;
    border:none;
}
</style>
