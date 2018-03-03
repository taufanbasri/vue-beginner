new Vue({
    el: '#app',
    data: {
        name: 'Taufan',
        job: 'Web Developer',
        web: 'http://github.com/taufanbasri',
        webTag: '<a href="http://github.com/taufanbasri" target="_blank">Tag Binding</a>'
    },
    methods: {
        greet(time) {
            return 'Good ' + time + ' ' + this.name
        }
    }
})