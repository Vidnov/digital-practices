<template>
  <div class="item-news-block">
    <div class="item-news-block__container">
      <div class="item-news-block__container__title-container">
        <h2 class="title-container__title" @click="more(data.link)">
          {{ data.title }}
        </h2>
      </div>
      <div class="item-news-block__container__preview-container">
        <p>
          {{ data.context }}
        </p>
      </div>
      <div class="item-news-block__container__more-container">
        <a class="link" href="#" @click="more(data.link)">Подробнее</a>
      </div>
      <div class="item-news-block__container__footer-container">
        <a href="#" @click="goto(data.page)"> {{ data.page }}</a>
        <div></div>
        <p>{{ data.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    goto(url) {
      window.open("http://" + url);
    },
    more(url) {
      window.open(url);
    },
  },
};
</script>

<style lang="scss" scoped>
.item-news-block {
  display: grid;
  background: white;
  width: 100%;
  max-width: 520px;
  height: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  &__container {
    width: auto;
    padding: 0 30px;
    &__title-container {
      margin-top: 30px;
      margin-bottom: 25px;
      h2 {
        cursor: pointer;
      }
    }
    &__preview-container {
      margin-bottom: 20px;
    }
    &__more-container {
      margin-bottom: 20px;
    }
    &__footer-container {
      display: grid;
      grid-template-columns: auto 1fr auto;
      color: #dcdcdc;
      margin-bottom: 16px;
      a {
        color: #dcdcdc;
        display: block;
      }
      p {
      }
    }
  }
}
</style>
>
