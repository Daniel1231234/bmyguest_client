<template >
    <div class="reviews-layout">
        <h2><i class="fa fa-star"></i> &nbsp;{{ stay.reviewScores.rating / 2 / 10 }} <span class="dot"></span>
            {{ reviews.length }} reviews</h2>
        <div class="details-review-container">
            <div v-for="review in reviews">
                <div class="details-review-header flex">
                    <img class="avatar" :src="randomUserImg" alt="">
                    &nbsp;
                    &nbsp;
                    <div class="review-name-container flex column">
                        <span>{{ review.by.fullname }}</span>
                        <div class="review-date">june 2022</div>
                    </div>
                </div>
                <div class="review-txt">{{ review.txt }}</div>
                <button class="show-more-btn" @click.prevent="showMore(review)">Show More <svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" role="presentation" aria-hidden="true"
                        focusable="false" style="height: 10px;  width: 10px; display: inline; fill: var(--f-k-smk-x);">
                        <path
                            d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                            fill-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"

export default {
    props: {
        stay: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            reviews: [],
            randomUserImg: null
        };
    },
    async created() {
        this.reviews = this.stay.reviews
        this.randomUserImg = await this.getRandomUserImg()
    },
    methods: {
        async getRandomUserImg() {
            try {
                const {data} = await axios.get("https://randomuser.me/api/") 
                return data.results[0].picture.thumbnail
            } catch (err) {
                console.log(err)
            }
        }
    },
    computed: {
        randomPersonImg() {
            if (Math.random() < 0.5) return "https://xsgames.co/randomusers/avatar.php?g=male"
            return "https://xsgames.co/randomusers/avatar.php?g=female"
        }
    },
    unmounted() { },
    components: {
    }
};
</script>
