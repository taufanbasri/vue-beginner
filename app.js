var one = new Vue({
    el: '#app-one',
    data: {
       title: 'Vue App One'
    },
    
    methods: {
        
    },

    computed: {
        greet() {
            return 'Hello from app one :)'
        }
    }
})

var two = new Vue({
    el: '#app-two',
    data: {
        title: 'Vue App Two'
    },
    
    methods: {
        changeTitle() {
            one.title = 'Title Changed!'
        }
    },

    computed: {
        greet() {
            return 'Hello from app two :)'
        }
    }
})

two.title = 'Change from outsite'