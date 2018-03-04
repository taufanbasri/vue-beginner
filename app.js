new Vue({
    el: '#app',
    data: {
        age: 20,
        a: 0,
        b: 0,
    },
    
    methods: {
        /*
        addToA() {
            return this.a + this.age;
        },
        addToB() {
            return this.b + this.age;
        }
        */
    },

    computed: {
        addToA() {
            return this.a + this.age;
        },
        addToB() {
            return this.b + this.age;
        }
    }
})