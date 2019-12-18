<template>
    <div class="TabBar-Item" @click="RouterLink">

        <slot name="item-icon" v-if="Active1"></slot>
        <slot v-else name="item-icon-active"></slot>
        <div :class="{active:active}">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        data() {
            return {
                // Active: false,
            }
        },
        props: {
            path: String
        },
        computed: {
            /**
             * @return {boolean}
             */
            active() {
                return this.$route.path.indexOf(this.path) !== -1;
            },Active1() {
                return !this.active;
            }
        },

        methods: {
            RouterLink() {
                this.$router.replace(this.path)
                this.Active = !this.Active;
            },

        }
    }
</script>

<style scoped>
    .TabBar-Item {
        flex: 1;
        text-align: center;
        font-size: 13px;
    }

    .TabBar-Item img {
        height: 24px;
        width: 24px;
        margin-top: 5px;
    }

    .active {
        color: blue;
    }
</style>