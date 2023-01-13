<template>
  <div class="text-dark">
    <searchBarVue></searchBarVue>
    <div class="e-main">
      <div class="main">
        <div class="side-container">
          <div class="categories">
            <div class="categories-box">
              <div class="price-container">
                <sideBarVue
                  @getProducts="getProducts($event)"
                  @mininputPriceBox="mininputPriceBox($event)"
                  @maxinputPriceBox="maxinputPriceBox($event)"
                ></sideBarVue>
              </div>
            </div>
          </div>
        </div>
        <div class="primary-product-section">
          <changeBoxVue @changeView="changeView($event)"></changeBoxVue>
          <div class="product-container">
            <div class="product-box">
              <LayoutVue
                ref="LayoutVue"
                :checkBox="checkBox"
                :mininputPrice="mininputPrice"
                :maxinputPrice="maxinputPrice"
                :Category="Category"
                :style="style"
              >
                <template v-slot:header>
                  <h4>Products</h4>
                </template>
                <template v-slot:default> </template>
                <template v-slot:footer> </template>
              </LayoutVue>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutVue from "./components/Layout/LayoutVue.vue";
import sideBarVue from "./components/sideBar/sideBar.vue";
import searchBarVue from "./components/searchBar.vue";
import changeBoxVue from "./components/changeBox.vue";

export default {
  name: "App",
  components: {
    LayoutVue,
    sideBarVue,
    searchBarVue,
    changeBoxVue,
  },
  data() {
    return {
      maxinputPrice: 200000,
      mininputPrice: 0,
      checkBox: false,
      Category: [""],
      i: 0,
      view: "",
      style:""
    };
  },
  methods: {
    changeView($event) {
      if ($event) {
        this.view = "grid";
        this.style="block"
      } else {
        this.view = "block";
        this.style="flex"
      
      }
    },
    getProducts($event) {
      console.log("ndnnndkn" + $event.checkbox + $event.checkbox_value);
      console.log("111111   23" + this.Category.length);
      this.checkBox = !this.checkBox;
      console.log(this.i++);
      //setting pagination for categories
      this.$refs.LayoutVue.offset = 0;
      this.$refs.LayoutVue.$refs.paginationVue.click = 1;
      ////////////////////////////////////
      if ($event.checkbox == true) {
        this.Category.push($event.checkbox_value);
      } else if ($event.checkbox == false) {
        this.Category.pop($event.checkbox_value);
        console.log("array" + this.Category.length);
      }
    },

    mininputPriceBox($event) {
      this.mininputPrice = $event;
      console.log(this.mininputPrice);
    },
    maxinputPriceBox($event) {
      this.maxinputPrice = $event;
    },
  },
};
</script>

<style scoped>
.text-dark {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  --text-opacity: 1;
  color: rgba(35, 31, 32, var(--text-opacity));
}
.side-container {
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
  padding-top: 30px;
}
.categories {
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
  position: relative;
}
.categories-box {
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
  font-size: 0.875rem;
  display: block;
  padding-right: 2.5rem;
  width: auto;
}
.price-container {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  color: rgba(35, 31, 32, var(--text-opacity));
  font-size: 0.875rem;
  box-sizing: border-box;
  border-style: solid;
  border-color: #e2e8f0;
  border-radius: 0.25rem;
  border-width: 1px;
  padding: 1.25rem;
  box-shadow: none;
  width: 20rem;
}
.e-main {
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
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
  padding-left: 0;
  padding-right: 0;
  width: 90%;
}
.main {
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
  padding-bottom: 1.5rem;
  display: flex;
}
.product-box {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  color: rgba(35, 31, 32, var(--text-opacity));
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #eff2f5;
  display: v-bind(view);
  grid-gap: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.product-container {
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
  padding-top: 3rem;
}
.primary-product-section {
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
  position: relative;
  margin-top: 0;
  width: calc(100% - 22.5rem);
}
</style>
