<template>
    <div>Card
        <div v-if="loading">loading...</div>
        <div v-else>
            {{cid}}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            cid: 0,
            loading: false
        }
    },
    watch: {    //Card 화면 cid 변경 확인위해 라우트 감시하고 있다가 변경되면 cid 변경
        '$route': {
            // 이렇게 해도 되지만: this.fetchData()
            handler: 'fetchData',
            immediate: true
        }       
    },
    methods:{
        fetchData() {
            this.loading = true
            setTimeout(() => {
                this.cid = this.$route.params.cid
                this.loading = false
            },500)
        }
    }
}
</script>

<style>

</style>
