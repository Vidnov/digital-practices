<template>
  <div class="news-switch">
    <SwitchLenta :status="Active" @click="SwitchNews('lenta')" />
    <SwitchBlock :status="Active" @click="SwitchNews('block')" />
  </div>
</template>
<script>
import SwitchBlock from "../elements/SwitchNewsBlock.vue";
import SwitchLenta from "../elements/SwitchNewsLenta.vue";
export default {
  components: {
    SwitchBlock,
    SwitchLenta,
  },
  data() {
    return {
      Active: false,
    };
  },
  methods: {
    SwitchNews(key) {
      switch (key) {
        case "lenta":
          localStorage.setItem("News", "lenta");
          this.Active = false;
          this.$emit("update", "lenta");
          break;
        case "block":
          localStorage.setItem("News", "block");
          this.Active = true;
          this.$emit("update", "block");
          break;
      }
    },
  },
  mounted() {
    let key = localStorage.getItem("News");
    if (key == "lenta") {
      this.Active = false;
    } else {
      this.Active = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.news-switch {
  display: grid;
  grid-template-columns: 18px 18px;
  grid-gap: 10px;
}
</style>
