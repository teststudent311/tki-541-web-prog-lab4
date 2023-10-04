new Vue({
    el: '#app2',
    data: {
        value: -5,
        min: -5,
        max: 7
    },
    methods: {
        changeValue: function(step) {
            let newValue = parseFloat((this.value + step).toFixed(1));
            if (newValue > this.max) {
                this.value = this.min;
            } else {
                this.value = newValue;
            }
        },
        resetValue: function() {
            this.value = this.min;
        }
    }
});
