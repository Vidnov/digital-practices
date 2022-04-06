<template lang="">
  <div class="pagination">
    <ul>
      <li
        v-for="index in Pages"
        :key="index"
        @click="getPages(index)"
        :class="{ active: index == pageActive }"
      >
        {{ index }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return { pageActive: 1 };
  },
  methods: {
    getPages(Page) {
      this.pageActive = Page;
      this.$emit("Switching", Page);
    },
  },
  watch: {
    Pages() {
      this.pageActive = 1;
    },
  },
  mounted() {
    const { page } = this.$route.query;
    this.pageActive = page || 1;
  },
  computed: {
    isActive() {
      return true;
    },
  },
  props: {
    Pages: {
      type: Number,
      default: 1,
    },
  },
};
</script>
<style lang="scss">
.pagination {
  display: grid;
}
ul {
}
li {
  font-family: Arial;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;

  color: black;
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
  list-style: none; /* Убираем маркеры */
}
.active {
  color: #0029ff;
}
</style>
