new Vue({
    el: '#app',
    data: {
        age: 25,
        x: 0,
        y: 0,
    },
    methods: {
        logName() {
            console.log('You entered your name');
        },
        logAge() {
            console.log('You entered your age');
        }
    }
})