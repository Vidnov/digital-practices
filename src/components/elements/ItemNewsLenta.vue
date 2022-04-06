<template>
  <div class="item-news-lenta">
    <div class="item-news-lenta__container">
      <div class="item-news-lenta__container__content">
        <div class="container__image">
          <img :src="data.img" alt="" :width="200" :height="100" />
        </div>
        <div class="container__content">
          <h2 class="container__content__h2" @click="more(data.link)">
            {{ data.title }}
          </h2>
          <p class="container__content__p">
            {{ data.context }}
          </p>
        </div>
      </div>
      <div class="item-news-lenta__container__footer">
        <a href="#" @click="goto(data.page)">{{ data.page }}</a>
        <div></div>
        <p>{{ data.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../../assets/img/test.png";
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
.item-news-lenta {
  margin-top: 20px;
  width: 100%;
  background: white;
  border-radius: 3px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  &__container {
    padding: 30px;
    padding-bottom: 0;
    &__content {
      display: grid;
      grid-template-columns: min-content 1fr;
      grid-gap: 30px;
      h2 {
        cursor: pointer;
      }
    }
    &__footer {
      display: grid;
      grid-template-columns: auto 1fr auto;
      color: #dcdcdc;
      margin-top: 30px;
      a {
        color: #dcdcdc;
        display: block;
      }
    }
  }
}
.container__content {
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-gap: 20px;
}
</style>
