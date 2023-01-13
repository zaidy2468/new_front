<template>
  <div class="pagination">
    <a
      href="#"
      @click="backClick"
      v-on:click="decrementClick"
      v-bind:class="backPage ? 'disabled' : ''"
      >&laquo;</a
    >
    <a href="#">{{ click }} </a>
    <a
      href="#"
      @click="nextClick"
      v-on:click="incrementClick"
      v-bind:class="nextPage ? 'disabled' : ''"
      >&raquo;</a
    >
  </div>
</template>

<script>
export default {
  name: "paginationVue",
  props: {
    nextPage: {
      type: Boolean,
      required: true,
    },
    backPage: {
      type: Boolean,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      click: 1,
      offset: 1,
      pageNumber: 1,
    };
  },
  methods: {
    nextClick() {
      this.offset = this.click * this.limit;
      //this.pageNumber++;
      const off_set = this.offset;
      console.log("aaaa" + off_set);
      this.$emit("nextPage", off_set);
    },
    backClick() {
      if (this.offset > 0) {
        console.log("back chala");
        //this.pageNumber--;
        this.offset -= this.limit;
        const off_set = this.offset;
        this.$emit("backPage", off_set);
      }
    },
    incrementClick() {
      return this.click++;
    },
    decrementClick() {
      if (this.click != 1) {
        return this.click--;
      }
    },
  },
};
</script>
<style>
.pagination {
  margin-left: 600px;
  margin-bottom: 100ppx;
  
  position: static;
}
.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;

  text-decoration: none;
}
.disabled {
  pointer-events: none;
  opacity: 5;
}
</style>
