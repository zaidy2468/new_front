<template>
  <div class="change-box">
    <button @click="changeView()">Change View</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      changeStyle: true,
    };
  },
  methods: {
    changeView() {
      this.changeStyle = !this.changeStyle;
      this.$emit("changeView", this.changeStyle);
      console.log('zzzzzzzzzzzzzzzzzzzzzzz')
    },
  },
};
</script>
<style scoped>
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
  line-height: inherit;
  --bg-opacity: 1;
  background-color: rgba(0, 178, 201, var(--bg-opacity));
  border-radius: 9999px;
  display: flex;
  align-items: center;
  --text-opacity: 1;
  color: rgba(255, 255, 255, var(--text-opacity));
  margin-left: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  box-sizing: border-box;
  border-width: 0px;
}
.icon-boxView {
}
</style>
