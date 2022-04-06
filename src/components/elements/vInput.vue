<template>
  <div class="input-content">
    <div class="input-content__input-block">
      <input
        class="input-content__input-block__input"
        type="text"
        @input="searchNews"
      />
    </div>
    <div class="input-content__icon-block">
      <img
        :src="search"
        class="input-content__icon-block__icon-search"
        alt="search"
      />
    </div>
  </div>
</template>

<script>
import search from "../../assets/icon/search.svg";
export default {
  name: "vInput",
  data() {
    return {
      search: search,
    };
  },
  methods: {
    searchNews(value) {
      this.$emit("search", value.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
.input-content {
  width: 100%;
  background: white;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-gap: 10px;
  &__input-block {
    width: 100%;
    &__input {
      border-radius: 3px;
      padding-left: 20px;
      background: white;
      border: none;
      width: 100%;
      height: 40px;
      outline: none;
    }
  }
  &__icon-block {
    border-radius: 3px;
    background: white;
    position: relative;
    width: 40px;
    &__icon-search {
      position: absolute;
      top: 10px;
      right: 10px;
      background: white;
    }
  }
}
</style>
