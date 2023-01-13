<template>
  <div v-for="(product, key) in products" v-bind:key="key">
    <slot></slot>

    <productCardVue
      :product="product"
      :key="key"
      :rowBased="rowBased"
      :style="style"
    ></productCardVue>
  </div>

  <footer class="footer-slot">
    <slot name="footer"></slot>
    <paginationVue
      ref="paginationVue"
      @nextPage="nextpageClick($event)"
      :nextPage="nextPage"
      :backPage="backPage"
      :limit="limit"
      @backPage="backpageClick($event)"
    ></paginationVue>
  </footer>
</template>

<script>
import productCardVue from "./productCard.vue";
import paginationVue from "./paginationVue.vue";
import axios from "axios";
export default {
  name: "LayoutVue",
  components: {
    productCardVue,
    paginationVue,
  },
  props: {
    mininputPrice: {
      type: Number,
    },
    maxinputPrice: {
      type: Number,
    },
    checkBox: {
      type: Boolean,
      required: true,
    },

    Category: {
      type: Array,
    },
    style:{
      type:String,
    
      
    }
  },
  data() {
    return {
      rowBased: false,

      products: [],
      nextPage: false,
      backPage: true,
      offset: 0,
      limit: 9,
    };
  },
  methods: {
    ///Change the style of Product Cards//////
    //////////////////////////////////////////
    handleClick() {
      this.rowBased = !this.rowBased;
    },

    nextpageClick($event) {
      this.offset = $event;
      this.backPage = false;
      this.getProducts();
      return this.products;
    },
    backpageClick($event) {
      this.offset = $event;
      this.nextPage = false;
      console.log("backpageclick");
      this.getProducts();
      return this.products;
    },
    async getProductsByAxios() {
      const response = await axios.get(
        "http://127.0.0.1:2000/categorie_product/get",
        {
          params: {
            price: {
              lte: this.maxinputPrice == 0 ? 200000 : this.maxinputPrice,
              gte: this.mininputPrice == 0 ? 0 : this.mininputPrice,
            },
            category: this.Category,
            offset: this.offset,
            limit: this.limit,
          },
          "Access-Control-Allow-Origin": "*",
        }
      );

      return response;
    },

    async getProducts() {
      try {
        const data = await this.getProductsByAxios();
        console.log(data.data.products);
        if (data.data.products.length < this.limit) {
          this.nextPage = true;
        }
        this.products = data.data.products;
      } catch (error) {
        console.error(error);
      }
    },

    async handlePagination() {
      if (this.offset == 0 && this.products.length == this.limit) {
        this.backPage = true;
        this.nextPage = false;
      } else if (this.offset != 0 && this.products.length < this.limit) {
        this.backPage = false;
        this.nextPage = true;
      } else if (this.offset != 0 && this.products.length == this.limit) {
        this.backPage = false;
        this.nextPage = false;
      }
    },
  },
  async mounted() {
    await this.getProducts();
  },
  watch: {
    mininputPrice: async function () {
      await this.getProducts();
      this.handlePagination();
    },

    checkBox: async function () {
      await this.getProducts();
      this.handlePagination();
    },
    maxinputPrice: async function () {
      await this.getProducts();
      this.handlePagination();
    },
  },
};
</script>

<style scoped>
.header-slot {
  background: rgb(253, 251, 251);
  padding: 10px 0px;
  height: min-content;
  text-align: center;
}
.main-slot {
  text-align: center;
  margin-left: 10px;
  margin: 20px;
  display: flex;
}
.main-slot1 {
  padding-left: 250px;
  text-align: center;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  margin-left: 30px;
  margin: 20px;
  flex-wrap: wrap;
}
.footer-slot {
  background: rgb(252, 250, 250);
  position: relative;
  padding: 5px 6px;
  text-align: center;
}
#layout {
  margin: 30px;
}
.btn {
  position: relative;
  padding-left: 67px;
}
.main {
  display: flex;
  flex-direction: column;
  padding-left: 0px;
}
.main1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-left: 0px;
}
</style>
