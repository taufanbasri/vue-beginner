new Vue({
    el: '#app',
    data: {
        output: 'Your favorit food'
    },
    methods: {
        readRefs() {
            console.log(this.$refs.input.value);
            this.output = this.$refs.input.value;
        }
    }
});