<template>
    <div>
        Board
        <div v-if="loading">loading...</div>
        <div v-else>
            <div>bid: {{bid}}</div>
        <router-link :to="`/b/${bid}/c/1`">Card1</router-link>
        <router-link :to="`/b/${bid}/c/2`">Card2</router-link>
        <hr />
        <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bid: 0,
            loading: false
        }
    },
    created(){      //board컴포넌트 생성될 때
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.loading = true
            setTimeout(() => {
                this.bid = this.$route.params.bid
                this.loading = false
            }, 500)

        }
    }

}
</script>

<style>

</style>