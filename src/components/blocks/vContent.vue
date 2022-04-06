<template>
  <section class="content">
    <div class="content__option-block">
      <vFilter @filter="filter" />
      <div></div>
      <vSwitch @update="update" />
    </div>
    <div class="content__news">
      <vNews v-if="data.length > 0" :data="data" :mode="mode" />
      <el-empty v-else description="Нет новостей" />
    </div>
  </section>
</template>

<script>
import vFilter from "../elements/vFilter.vue";
import vSwitch from "./vSwitchNews.vue";
import vNews from "./vNews.vue";
export default {
  name: "vContent",
  props: {
    data: {
      type: Array,
    },
  },
  components: {
    vFilter,
    vSwitch,
    vNews,
  },
  data() {
    return {
      api: [],
      mode: "lenta",
    };
  },
  mounted() {
    this.initMode();
  },
  methods: {
    initMode() {
      let key = localStorage.getItem("News");
      if (key) {
        this.mode = key;
      }
    },
    update(key) {
      this.mode = key;
    },
    filter(id) {
      this.$emit("filter", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 25px;
  &__option-block {
    display: grid;
    grid-template-columns: auto 1fr auto;
  }
  &__news {
    margin-top: 30px;
  }
}
</style>
