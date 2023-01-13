<template>
  <div  class="pt-8">
    <h3 class="text-lg">Categories</h3>

    <div class="pt-5">
      <div class="max-h-44 overflow-auto">
        <div class="flex-items-center-py-1-checkbox-wrapper">
          <input
            type="checkbox"
            class="w-5-h-5"
            value="63970a601c371599e50897dd"
            @click="getProducts"
          />
          <span class="checkmark"></span>
          <span class="pl-4">machines</span>
        </div>
        <div class="flex-items-center-py-1-checkbox-wrapper">
          <input
            type="checkbox"
            class="w-5-h-5"
            value="6396ed3a47d85649a4ec30cb"
            @click="getProducts"
          />
          <span class="checkmark"></span>
          <span class="pl-4">vehicles</span>
        </div>
        <div class="flex-items-center-py-1-checkbox-wrapper">
          <input
            type="checkbox"
            class="w-5-h-5"
            value="63b3f3c1f0b4c2c43191431b"
            @click="getProducts"
          />
          <span class="checkmark"></span>
          <span class="pl-4">cars</span>
        </div>
        <div class="flex-items-center-py-1-checkbox-wrapper">
          <input
            type="checkbox"
            class="w-5-h-5"
            value="63b3f40bf0b4c2c43191431d"
            @click="getProducts"
          />
          <span class="checkmark"></span>
          <span class="pl-4">trucks</span>
        </div>
      </div>
    </div>
    <!---->
  </div>
</template>
<script>
export default {
  name: "categoriesBox",
  data() {
    return {};
  },
  methods: {
    getProducts(event) {
      //console.log("check box  " + );
      console.log("event" + event.target.value);
      this.$emit("getProducts", {
        checkbox: event.target.checked,
        checkbox_value: event.target.value,
      });
    },
  },
};
</script>
<style scoped>
.pt-8 {
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
.text-lg {
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
.pt-5 {
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
  padding-top: 1.25rem;
}
.max-h-44 overflow-auto {
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
  max-height: 11rem;
  overflow: auto;
}
.flex-items-center-py-1-checkbox-wrapper {
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
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  position: relative;
  user-select: none;
  cursor: pointer;
}

.pl-4 {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  color: rgba(35, 31, 32, var(--text-opacity));
  font-size: 0.875rem;
  user-select: none;
  cursor: pointer;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  padding-left: 1rem;
}
</style>
