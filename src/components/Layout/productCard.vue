<template>
  <a class="a-link">
    <div class="product-card">
      <div class="img-box">
        <img src="https://tbh-production.s3.ap-southeast-1.amazonaws.com/Product/2034888965/Images/16066601421950233806.png" />
      </div>
      <div class="detail-box">
        <p class="detail-name">{{ product.name }}</p>
        <div class="detail-price">
          {{ product.price }}
        </div>
        <div class="hidden-button">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  name: "productCard",
  props: {
    product: {
      type: Object,
    },
    rowBased: {
      type: Boolean,
    },
    style:{
      type:String
    }
  },

  data() {
    return {
      image: this.product.productImage,
    };
  },
  methods: {
    imgPath() {
      var images = require.context(
        "/home/dev/test-rest-api/public",
        true,
        /\.jpeg$/
      );
      console.log("imggggggggggggggggggg" + this.image);
      return images("./" + this.image);
    },
  },
};
</script>
<style scoped>
.a-link {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  box-sizing: border-box;
  border-style: solid;
  background-color: transparent;
  color: inherit;
  text-decoration: inherit;
  display: block;
  border-width: 0px;
  border-color: rgb(224, 223, 223);
  border-radius: 0.25rem;
  cursor: pointer;
}

.a-link:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  display: block;
}
.a-link:hover + .hidden-button {
  display: block;
}

.product-card {
  -webkit-text-size-adjust: 100%;
    line-height: 1.5;
    font-family: Avenir LT Pro,sans-serif;
    -webkit-font-smoothing: antialiased;
    --text-opacity: 1;
    color: inherit;
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e2e8f0;
    height: 100%;
    padding: .5rem;
    display: v-bind(style);
}
.img-box {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  color: inherit;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  position: relative;
  height: 10rem;
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
}
img {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  color: inherit;
  box-sizing: border-box;
  border-width: 0;
  border-color: #e2e8f0;
  border-style: solid;
  display: block;
  max-width: 100%;
  margin-left:auto;
  margin-right: auto;
  height: auto;
  width: auto;
  max-height: 100%;
}
.detail-box {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  color: inherit;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  padding-top: 0.5rem;
  padding-left: 3px;
}
.detail-name {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  color: inherit;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  margin: 0;
  white-space: nowrap;
  text-transform: capitalize;
  padding-bottom: 0.25rem;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
}
.detail-price {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  color: inherit;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  white-space: nowrap;
  padding-top: 0.25rem;
  letter-spacing: -0.05em;
  font-size: 1.125rem;
  font-weight: 600;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
}
button {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  background-image: none;
  cursor: pointer;
  padding: 0;
  line-height: inherit;
  --bg-opacity: 1;
  background-color: rgba(0, 178, 201, var(--bg-opacity));
  border-radius: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  --text-opacity: 1;
  color: rgba(255, 255, 255, var(--text-opacity));
  width: 100%;
}
.hidden-button {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  color: inherit;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  padding-top: 1rem;
  display: block;
  padding-left: 1px;
  padding-right: 3px;
  padding-bottom: 3px;
}
</style>
