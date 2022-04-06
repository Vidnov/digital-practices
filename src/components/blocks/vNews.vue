<template>
  <div class="news">
    <div class="news__block" v-if="mode == 'block'">
      <ItemNewsBlock v-for="(d, index) in data" :key="index" :data="d" />
    </div>
    <div class="news__lenta" v-else>
      <ItemNewsLenta
        class="desktop"
        v-for="(d, index) in data"
        :key="index"
        :data="d"
      />
      <ItemNewsLentaMobile
        class="mobile"
        v-for="(d, index) in data"
        :key="index"
        :data="d"
      />
    </div>
  </div>
</template>

<script>
import ItemNewsLentaMobile from "../elements/mobile/ItemNewsLenta.vue";
import ItemNewsBlock from "../elements/ItemNewsBlock.vue";
import ItemNewsLenta from "../elements/ItemNewsLenta.vue";
export default {
  components: {
    ItemNewsBlock,
    ItemNewsLenta,
    ItemNewsLentaMobile,
  },
  props: {
    mode: {
      type: String,
    },
    data: {
      type: Array,
    },
  },
  data() {
    return {
      modeNews: false,
    };
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
.news {
  &__block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    @media (max-width: 767px) {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }
}
</style>
