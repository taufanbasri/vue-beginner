new Vue({
    el: '#app',
    data: {
        age: 25,
        x: 0,
        y: 0,
    },
    methods: {
        add(inc) {
            return this.age += inc;
        },
        substract(dec) {
            return this.age -= dec;
        },
        updateXY(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
})