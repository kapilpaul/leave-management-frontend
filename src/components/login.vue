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
                                <button class="btn btn-primary btn-block account-btn" type="submit">Login</button>
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
                password : ""
            }
        },
        methods : {
            login() {
                this.$swal(
                    this.email,
                    this.password,
                    'success'
                )
            }
        }
    }
</script>

<style>
    .swal2-popup{
        font-size: 1.7rem;
    }
</style>