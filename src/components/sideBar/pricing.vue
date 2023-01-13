<template>
  <div class="price">
    <h3 class="text-price">Price</h3>
      <div class="price-box">
        <div class="price-enter">
          <input
            type="number"
            class="price-input"
            placeholder="0"
            v-on:input="mininputPriceBox"
          />
          <span>$</span>
        </div>
        <span class="space"></span>
        <div class="price-enter">
          <input
            type="number"
            class="price-input"
            placeholder="0"
            v-on:input="mininputPriceBox"
          />
          <span>$</span>
        </div>
      </div>
   
  </div>
</template>
<script>
export default {
  name: "pricingVue",
  data() {
    return {
      submit: false,
    };
  },
  methods: {
    mininputPriceBox(event) {
      console.log(event.target.value);
      this.$emit("mininputPriceBox", event.target.value);
    },
    maxinputPriceBox(event) {
      console.log(event.target.value);
      this.$emit("maxinputPriceBox", event.target.value);
    },
  },
};
</script>
<style scoped>
.price {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  color: rgba(35, 31, 32, var(--text-opacity));
  font-size: 0.875rem;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  padding-top: 2rem;
}
.text-price {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  color: rgba(35, 31, 32, var(--text-opacity));
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  margin: 0;
  font-weight: inherit;
  font-size: 1.125rem;
}
.price-box {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  color: rgba(35, 31, 32, var(--text-opacity));
  font-size: 0.875rem;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  display: flex;
  align-items: center;
  padding-top: 0.75rem;
}
.price-enter {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  color: rgba(35, 31, 32, var(--text-opacity));
  font-size: 0.875rem;
  box-sizing: border-box;
  border-style: solid;
  --bg-opacity: 1;
  background-color: rgba(242, 242, 242, var(--bg-opacity));
  border-color: rgba(35, 31, 32, 0.15);
  border-radius: 9999px;
  border-width: 1px;
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.price-input {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  outline: none;
  border-color: #e2e8f0;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  overflow: visible;
  padding: 0;
  line-height: inherit;
  color: inherit;
  --bg-opacity: 1;
  background-color: rgba(242, 242, 242, var(--bg-opacity));
  text-align: center;
  width: 80%;
  border-radius: 9999px;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 2px;
}
span {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  color: rgba(35, 31, 32, var(--text-opacity));
  font-size: 0.875rem;
  --bg-opacity: 1;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
}
.space {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  color: rgba(35, 31, 32, var(--text-opacity));
  font-size: 0.875rem;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  --border-opacity: 1;
  border-color: rgba(200, 199, 199, var(--border-opacity));
  border-top-width: 1px;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  width: 1.25rem;
}
</style>
