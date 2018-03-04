Vue.component('greeting', {
    template: '<p>Hey there, I am {{ name }} <button @click="changeName">Change Name</button></p>',
    data() {
        return {
            name: 'Taufan'
        }
    },
    methods: {
        changeName() {
            this.name = 'Keti'
        }
    }
});

var one = new Vue({
    el: '#app-one'
});

var two = new Vue({
    el: '#app-two'
});