new Vue({
    el: '#app',
    data: {
        age: 25,
    },
    methods: {
        greet(time) {
            return 'Good ' + time + ' ' + this.name
        }
    }
})