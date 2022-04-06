<template>
  <div class="btn" @click="refresh">
    <img class="btn__img" :src="refreshIcon" alt="refresh" />
  </div>
</template>

<script>
import refreshIcon from "../../assets/icon/refresh.svg";
export default {
  data() {
    return {
      refreshIcon: refreshIcon,
    };
  },
  methods: {
    refresh() {
      this.$emit("refresh");
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  cursor: pointer;
  height: 40px;
  width: 40px;
  background-color: white;

  border-radius: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  display: grid;
  justify-content: center;
  align-items: center;
  &__img {
    transition-property: background-color;
    transition-duration: 3s;
    background: white;
  }
}
</style>
