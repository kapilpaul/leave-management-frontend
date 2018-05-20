export default function(Vue){
    Vue.auth = {
        setToken(token, expiration) {
            localStorage.setItem('token', token);
            localStorage.setItem('expiration', expiration);
        },
        setRole(role) {
            localStorage.setItem('role', role);
        },
        getRole() {
            var role = localStorage.getItem('role');
            if(role === '21232f297a57a5a743894a0e4a801fc3'){
                return 'admin';
            }
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