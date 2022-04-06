<template>
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="8" height="8" :fill="color" />
    <rect y="10" width="8" height="8" :fill="color" />
    <rect x="10" width="8" height="8" :fill="color" />
    <rect x="10" y="10" width="8" height="8" :fill="color" />
  </svg>
</template>

<script>
export default {
  data() {
    return {
      varColor: {
        active: "#0029FF",
        disable: "#C4C4C4",
      },
    };
  },
  props: {
    status: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    color() {
      if (this.status) {
        return this.varColor.active;
      } else {
        return this.varColor.disable;
      }
    },
  },
};
</script>

<style lang="scss"></style>
