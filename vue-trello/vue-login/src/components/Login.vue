<template>
  <div class="login">
    <h2>Log in</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email</label>
        <input class="form-control" type="text" name="email" v-model="email" autofocus placeholder="e.g., test@test.com" />
      </div>
      <div>
        <label for="password">Passwrod</label>
        <input class="form-control" type="password" v-model="password" placeholder="123123" />
      </div>
      <button  class="btn" :class="{'btn-success': !invalidForm}" type="submit" :disabled="invalidForm">Log In</button>
    </form>
    <p class="error" v-if="error">{{error}}</p>
  </div>
</template>

<script>
import {auth, setAuthInHeader} from '../api'


export default {
    data() {
        return {
        email: '',
        password: '',
        rPath: '',
        error: ''
        }
    },
    computed: {
        invalidForm() {
            return !this.email || !this.password
        }
    },
    created() {
        this.rPath = this.$route.query.rPath || '/'
    },
    methods: {
        onSubmit() {
            //console.log(this.email, this.password)
            auth.login(this.email, this.password)
                .then(data => { //로그인 성공
                    //console.log(data)
                    localStorage.setItem('token', data.accessToken)  //토큰 저장
                    setAuthInHeader(data.accessToken)
                    this.$router.push(this.rPath)   //리다이렉트
                })
                .catch(err => {
                    this.error = err.data.error
                })
        }
        
    }
}
</script>

<style>

</style>