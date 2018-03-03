new Vue({
    el: '#app',
    data: {
        age: 25,
    },
    methods: {
        add() {
            return this.age++;
        },
        substract() {
            return this.age--;
        }
    }
})