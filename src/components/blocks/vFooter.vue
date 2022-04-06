<template>
  <div class="pagination-blok">
    <el-pagination
      :page-size="1"
      :pager-count="4"
      layout="prev, pager, next"
      :total="pages"
      :small="small"
      :disabled="disabled"
      :background="background"
      :current-page="currentPage"
      @current-change="changePage"
    />
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Number,
    },
    currentPage: {
      type: Number,
    },
  },
  data() {
    return {
      small: false,
      disable: true,
      background: true,
    };
  },
  methods: {
    changePage(value) {
      this.$emit("current-change", value);
    },
  },
};
</script>

<style></style>
