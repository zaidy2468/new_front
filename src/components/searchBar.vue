<template>
  <div data-v-d1f5d26e="" class="">
    <div class="">
      <div class="relative-md-w-95-mx-auto-max-w-max-pb-8-md-pb-10">
        <div class="search-bar">
          <div class="rounded-search-bar">
            <div class="rounded-full-border">
              <input
                placeholder="What are you looking for?"
                class="input-search"
              />
            </div>
          </div>
          <button
            class="search-button"
          >
            <span class="hidden-block-button">Search</span
            ><i class="icon-search lg:hidden text-2xl"></i>
          </button>
        </div>

        <!---->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.relative-md-w-95-mx-auto-max-w-max-pb-8-md-pb-10 {
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
  position: relative;
  padding-bottom: 2.5rem;
  padding-top: 2.5rem;
  width: 90%;
}
.search-bar {
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
  --bg-opacity: 1;
  background-color: rgba(242, 242, 242, var(--bg-opacity));
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.5rem;
  font-size: 17px;
}
.rounded-search-bar {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  color: rgba(35, 31, 32, var(--text-opacity));
  --bg-opacity: 1;
  font-size: 17px;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.rounded-full-border {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: Avenir LT Pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  color: rgba(35, 31, 32, var(--text-opacity));
  font-size: 17px;
  box-sizing: border-box;
  border-style: solid;
  --bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--bg-opacity));
  --border-opacity: 1;
  border-color: rgba(200, 199, 199, var(--border-opacity));
  border-radius: 9999px;
  border-width: 1px;
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  outline:none;
}
.input-search {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  --text-opacity: 1;
  --bg-opacity: 1;
  --border-opacity: 1;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  overflow: visible;
  padding: 0;
  line-height: inherit;
  color: inherit;
  flex-grow: 1;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 2px;
  outline: none;
}
.search-button{
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
    background-color: rgba(0,178,201,var(--bg-opacity));
    border-radius: 9999px;
    display: flex;
    align-items: center;
    --text-opacity: 1;
    color: rgba(255,255,255,var(--text-opacity));
    margin-left: 0;
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left: 2.5rem;
}
.hidden-block-button{
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    font-family: inherit;
    font-size: 100%;
    text-transform: none;
    cursor: pointer;
    line-height: inherit;
    --bg-opacity: 1;
    --text-opacity: 1;
    color: rgba(255,255,255,var(--text-opacity));
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e2e8f0;
    display: block;
    padding-right: 25px;
}
</style>
