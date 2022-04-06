<template>
  <h1>
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: "vTitle",
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: Arial;
  font-size: 36px;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: 0em;
  text-align: left;
}
</style>
