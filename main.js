const app = Vue.createApp({
  data() {
    return {
      invoice_products: [
        {
          name: "",
          price: 0,
          qty: 0,
          total: 0,
        },
      ],
    };
  },

  methods: {
    deleteRow(idx) {
      this.invoice_products.splice(idx, 1);
    },
    addNewRow() {
      this.invoice_products.push({
        name: "",
        price: 0,
        qty: 0,
        total: 0,
      });
    },
  },

  computed: {
    subtotalRow() {
      return this.invoice_products.map((item) => {
        return Number(item.qty * item.price);
      });
    },
    total() {
      return this.invoice_products.reduce((total, item) => {
        return total + item.qty * item.price;
      }, 0);
    },
  },
});
