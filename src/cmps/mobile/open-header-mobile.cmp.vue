<template>
    <form class="mob-open-header" @submit.prevent="submit">
        <section class="top">
            <div class="exit-btn" @click.prevent="toggleMbHdr">
                <button>
                    <span v-if="!isClicked">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            role="presentation" focusable="false"
                            style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                            <path d="m6 6 20 20"></path>
                            <path d="m26 6-20 20"></path>
                        </svg>
                    </span>
                    <span v-else>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            role="presentation" focusable="false"
                            style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                            <g fill="none">
                                <path d="m4 16h26"></path>
                                <path
                                    d="m15 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932">
                                </path>
                            </g>
                        </svg>
                    </span>
                </button>
            </div>
            <div class="tablist">
                <button @click.prevent>Stays</button>
                <button @click.prevent>Experiences</button>
            </div>
        </section>
        <section class="main">
            <h2>Where to?</h2>
            <div class="op-mob-minisearch" @click="isClicked = !isClicked">
                <label>
                    <input type="search" placeholder="Search destination" v-model="dest" />
                </label>
                <div class="mob-countries">
                    <header-map v-model="dest" />
                </div>
            </div>
        </section>
        <section class="bottom">
            <div class="dates-container">
                <button @click.prevent="openDatePicker = !openDatePicker" class="clickable btn-open-dp">
                    <span>When</span>
                    <span>Add dates</span>
                </button>
            </div>
            <div class="guests-container">
                <button @click.prevent="openGuestModal = !openGuestModal" class="clickable">
                    <span>Who</span>
                    <span>Add guests</span>
                </button>
            </div>
            <div class="mob-footer">
                <button @click.prevent="clearAll" class="clr-btn">Clear all</button>
                <button class="btn-airbnb">Search </button>
            </div>
        </section>
        <div v-if="openDatePicker">
            <date-picker-mobile @dates="updatedDates" @isOpen="closeDatePicker" />
        </div>

        <guests-modal @guestsAmount="handleGuests" v-if="openGuestModal" />

    </form>
</template>

<script>
import headerMap from "../header-map-search.cmp.vue";
import datePickerMobile from "../date-picker-mobile.cmp.vue";
import guestsModal from "../guests-modal.cmp.vue";

import { toRaw } from 'vue'

export default {
    data() {
        return {
            isClicked: false,
            dest: '',
            openDatePicker: false,
            adult: 0,
            children: 0,
            dates: [],
            openGuestModal: false,
            guestsCount: 0,
        }
    },
    props: {
        isMobile: {
            type: Boolean
        }
    },
    methods: {
        handleGuests(val) {
            console.log(val)
            this.guestsCount = val
        },
        closeDatePicker(val) {
            this.openDatePicker = val
        },
        toggleMbHdr() {
            this.$emit('isMobile', false)
        },
        updatedDates(data) {
            this.dates = data
        },
        submit() {
            console.log('submit')
            const order = {
                dest: this.dest,
                dates: toRaw(this.dates),
                guests: this.adult + this.children
            }
            console.log(order)
            this.$store.commit({ type: 'setNewOrder', order })
            this.setStays(order)
        },
        async setStays(order) {
            try {
                const stays = await this.$store.dispatch({ type: 'loadStays', filterBy: order })
                if (stays.length === 60) {
                    console.log('no stays dude')
                    this.$router.push(`/`)
                }
                else this.$router.push(`/explore`)
                this.$emit('isMobile', false)
            } catch (err) {
                console.log(err)
            }
        },
        clearAll() {
            this.dest = ''
            this.dates = []
        }
    },
    computed: {},
    created() {
    },
    components: { headerMap, datePickerMobile, guestsModal }
}
</script>

