new Vue({
    el: '#app',
    data: {
        name: 'Taufan',
        job: 'Web Developer'
    },
    methods: {
        greet(time) {
            return 'Good ' + time + ' ' + this.name
        }
    }
})