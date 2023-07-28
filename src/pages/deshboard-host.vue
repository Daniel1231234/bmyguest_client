<template>
    <section class="dashboard-host-page main-layout" v-if="orders">
        <div class="dash-board-header">
            <h1>Incoming Reservation</h1>
            <span>{{ this.orders.length }} items</span>
        </div>
        <div class="dash-board-details flex">
            <div class="order-wrapper">
                <order-list @changeStatus="changeStatus" :orders="this.orders" />
            </div>
            <div class="dash-board-summary">
                <div class="summary-header flex align-center">
                    <div>
                        <h2>Hosting Summary</h2>
                        <h3>Fantastic job!</h3>
                        <p>guests love what your doing keep up the good work</p>
                        <span>view details</span>
                    </div>
                </div>
                <div class="earnings-container">
                    <div class="flex justify-between">
                        <span>Total earnings</span><span class="green">$2650</span>
                    </div>
                    <div class="flex justify-between">
                        <span>30 day reviews</span><span class="green">870</span>
                    </div>
                </div>
                <div class="overall-container">
                    <div class="flex justify-between">
                        <span>Overall ratings</span><span class="green"><i class="fa fa-star"></i> 4.9</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Total reviews</span><span class="green">40</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import orderList from "../cmps/host/order-list.cmp.vue";

export default {
    name: "deshboard-host",
    props: {
        user: Object,
    },
    data() {
        return {
            orderByMonth: null,
            orders: null,
            newOrders: [],
            stays: null,
            prices: null,
        };
    },
    async created() {
        this.$store.commit({ type: "setCurrPage", page: "dashboard-host-page" });
        try {
            const ordersByHost = await this.$store.dispatch({
                type: "getOrderByHost",
                id: "62e0e9b1dd13b00af4e80283",
            });
            this.orders = ordersByHost;
        } catch (err) {
            console.log(" Error in read orders", err);
            throw err;
        }
    },
    methods: {
        changeStatus(props) {
            console.log(props);
        },
    },
    components: {
        orderList,
    },
    computed: {},
};
</script>
