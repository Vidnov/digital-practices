<template>
  <div class="item-news-lenta-mobile">
    <div class="item-news-lenta-mobile__container">
      <div class="item-news-lenta-mobile__container__image">
        <img class="news_img" :src="data.img" :height="200" alt="" />
      </div>
      <div class="item-news-lenta-mobile__container__content">
        <h2
          class="item-news-lenta__container__content__h2"
          @click="more(data.link)"
        >
          {{ data.title }}
        </h2>
        <p class="item-news-lenta__container__content__p">
          {{ data.context }}
        </p>
        <div class="item-news-lenta__container__content__more">
          <a class="link" href="#" @click="more(data.link)">Подробнее</a>
        </div>
      </div>
      <div class="item-news-lenta-mobile__container__footer">
        <p @click="goto(data.page)">{{ data.page }}</p>
        <div></div>
        <p>{{ data.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../../../assets/img/test.png";
export default {
  name: "itemNewsLenta",
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return { img: img };
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
.item-news-lenta-mobile {
  margin-top: 20px;
  width: 100%;

  background: white;
  border-radius: 3px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  &__container {
    display: grid;
    justify-items: center;
    padding: 20px;
    padding-bottom: 0;
    width: auto;
    &__image {
      width: 100%;
      .news_img {
        width: 100%;
      }
    }
    &__content {
      display: grid;
      grid-template-rows: auto auto auto;
      grid-gap: 20px;
    }
    &__footer {
      width: 100%;
      display: grid;
      grid-template-columns: auto 1fr auto;
      color: #dcdcdc;
      margin-top: 20px;
      margin-bottom: 4px;
      a {
        color: #dcdcdc;
        display: block;
      }
    }
  }
}
</style>
