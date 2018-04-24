export default function(Vue){
    Vue.auth = {
        setToken(token, expiration) {
            localStorage.setItem('token', token);
            localStorage.setItem('expiration', expiration);
        },

        getToken() {
            var token = localStorage.getItem('token');
            var expiration = localStorage.getItem('expiration');

            if(!token || !expiration)
                return null;

            if(Date.now() > parseInt(expiration)){
                this.destroyToken()
                return null;
            }else{
                return token;
            }

        },

        isAuthenticated() {
            if(this.getToken()){
                return true;
            }else{
                return false;
            }
        },

        destroyToken() {
            localStorage.removeItem('token')
            localStorage.removeItem('expiration')
        },

        getHeader() {
            var token = this.getToken()
            return {
                headers : {
                    accept : 'application/json',
                    authorization : 'Bearer ' + token
                }
            }
        }

    }


    Object.defineProperties(Vue.prototype, {
        $auth: {
            get() {
                return Vue.auth
            }
        }
    })
}