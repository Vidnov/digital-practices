<template>
  <section class="header">
    <div class="header__container">
      <div class="header__container__title">
        <vTitle> Список новостей </vTitle>
        <div class="mobile"></div>
        <vBtn @refresh="refresh" />
      </div>
      <div class="desktop"></div>
      <div class="header__container__input shadow desktop">
        <vInput @search="search" />
      </div>
    </div>
    <div class="header__container__input shadow mobile">
      <vInput @search="search" />
    </div>
  </section>
</template>

<script>
import vTitle from "../elements/vTitle.vue";
import vBtn from "../elements/vButton.vue";
import vInput from "../elements/vInput.vue";
export default {
  name: "vHeader",
  data() {
    return {};
  },
  components: {
    vTitle,
    vBtn,
    vInput,
  },
  methods: {
    search(value) {
      this.$emit("search", value);
    },
    refresh() {
      this.$emit("refresh");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid black;
  &__container {
    margin-top: 36px;
    margin-bottom: 36px;
    display: grid;
    grid-template-columns: auto 1fr minmax(120px, 321px);
    grid-gap: 30px;
    align-items: center;
    @media (max-width: 767px) {
      display: block;
    }
    &__title {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 30px;
      align-items: center;
      @media (max-width: 767px) {
        display: grid;
        grid-template-columns: auto 1fr auto;
      }
    }
    &__input {
      width: 100%;
      @media (max-width: 767px) {
        margin-bottom: 23px;
      }
    }
  }
}
</style>
