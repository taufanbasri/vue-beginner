new Vue({
    el: '#app',
    data: {
        age: 25,
    },
    methods: {
        add(inc) {
            return this.age += inc;
        },
        substract(dec) {
            return this.age -= dec;
        }
    }
})