<template>
  <pricingVue
    @mininputPriceBox="mininputPriceBox($event)"
    @maxinputPriceBox="maxinputPriceBox($event)"
  ></pricingVue>
  <categoriesBoxVue @getProducts="getProducts($event)"></categoriesBoxVue>
</template>
<script>
import pricingVue from "./pricing.vue";
import categoriesBoxVue from "./categoriesBox.vue";
export default {
  name: "sideBar",
  components: {
    pricingVue,
    categoriesBoxVue,
  },
  data() {
    return {};
  },
  methods: {
    getProducts($event) {
      this.$emit("getProducts", $event);
    },

    mininputPriceBox($event) {
      console.log($event);
      this.$emit("mininputPriceBox", $event);
    },
    maxinputPriceBox($event) {
      console.log($event);
      this.$emit("maxinputPriceBox", $event);
    },
  },
};
</script>
<style scoped></style>
