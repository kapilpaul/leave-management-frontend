<template>
    <div>
        <div class="account-page">
            <div class="container">
                <h3 class="account-title">Management Login</h3>
                <div class="account-box">
                    <div class="account-wrapper">
                        <div class="account-logo">
                            <a href="index.html"><img src="assets/img/logo2.png" alt="Focus Technologies"></a>
                        </div>
                        <form @submit.prevent="login">
                            <div class="form-group form-focus">
                                <label class="control-label">Email</label>
                                <input class="form-control floating" type="text" v-model="email">
                            </div>
                            <div class="form-group form-focus">
                                <label class="control-label">Password</label>
                                <input class="form-control floating" type="password" v-model="password">
                            </div>
                            <div class="form-group text-center">
                                <button class="btn btn-primary btn-block account-btn" type="submit">Login <i v-if="loading" class="fa fa-refresh fa-spin fa-fw"></i></button>
                            </div>
                            <div class="text-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                email : "",
                password : "",
                loading : false
            }
        },
        mounted () {
            this.$jqscripts.manageinit()
        },
        methods : {
            login() {
                this.loading = true;
                var data = {
                    email : this.email,
                    password : this.password
                }

                this.$axios.post('api/login', data).then(response => {
                    var lpdata = {
                        client_id : 2,
                        client_secret : 'YK0p7WrAdBRTdOxJldveHX7QPPB11AyycjiVWlvM',
                        grant_type : 'password',
                        username : this.email,
                        password : this.password
                    };

                    this.$axios.post('oauth/token', lpdata).then(response => {
                        this.$auth.setToken(response.data.access_token, response.data.expires_in + Date.now())
                        this.loading = false;
//                        this.$router.push("/employees")
                        window.location = "http://localhost:8080/employees";
                    });
                })
            }
        }
    }
</script>

<style>

</style>