import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Board from '../components/Board.vue'
import Card from '../components/Card.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const requireAuth = (to, from, next) =>{        // 네비게이션 가드 사용
    const isAuth = localStorage.getItem('token')    //로컬스토리지에 토큰이 있는가?
    const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
    isAuth ? next() : next(loginPath)
}

const routes = [
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/login', component: Login},
    { path: '/b/:bid', component: Board, children: [        //Board컴포넌트에서 Card 출력 해줘야함
        { path: 'c/:cid', component: Card }
    ] },   
    { path: '*', component: NotFound }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
