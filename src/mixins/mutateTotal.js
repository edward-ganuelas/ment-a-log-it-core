export default {
    methods: {
        setTotal() {},
        mutateTotal(value, key) {
            this[key] = value;
            this.setTotal();
        }
    },
    mounted() {
        this.setTotal();
    }
}