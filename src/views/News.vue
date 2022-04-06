<template>
  <div class="container">
    <vHeader @search="searchBlock" @refresh="refresh" />
    <vContent :data="data" @filter="filter" />
    <vFooter
      v-if="data.length > 0 && !search"
      :pages="pages"
      :currentPage="Page"
      @current-change="changePage"
    />
  </div>
</template>

<script>
import axios from "axios";
import vHeader from "../components/blocks/vHeader.vue";
import vContent from "../components/blocks/vContent.vue";
import vFooter from "../components/blocks/vFooter.vue";
export default {
  name: "App",
  data() {
    return {
      dataNews: [],
      itemLenta: [],
      itemMos: [],
      Page: 1,
      search: "",
      Panel: 0,
    };
  },
  components: {
    vHeader,
    vContent,
    vFooter,
  },
  created() {},
  mounted() {
    console.log(process.env);
    const { page, search } = this.$route.query;
    this.search = search;
    if (page) {
      this.Page = Number(page);
    }

    this.getLenta();
    this.getMos();
  },
  computed: {
    pages() {
      let pages;
      pages = this.dataNews.length / 4;
      return Math.ceil(pages);
    },
    data() {
      let arr = [];
      arr = this.createDataNews();
      if (this.search) {
        arr = arr.filter((el) => {
          if (
            el?.title?.includes(this.search) ||
            el?.context?.includes(this.search)
          ) {
            return el;
          }
        });
        return arr;
      } else {
        return arr.slice(4 * this.Page - 4, 4 * this.Page);
      }
    },
  },
  methods: {
    searchBlock(value) {
      this.search = value;
    },
    changePage(value) {
      this.Page = value;
    },

    //Создаем единый массив данных новостей
    createDataNews() {
      this.dataNews = this.itemLenta.concat(this.itemMos);
      this.dataNews = this.dataNews.map((el) => {
        let obj = {
          img: "",
          title: "",
          context: "",
          date: "",
          link: "",
          page: "",
        };

        obj.img = el?.enclosure?._attributes?.url;
        obj.title = el?.title?._text;
        obj.context = el?.description?._text || el.description?._cdata;
        obj.date = new Date(el?.pubDate?._text).toLocaleString();
        obj.link = el?.link?._text;
        obj.page = el?.site;

        return obj;
      });
      this.dataNews = this.dataNews.sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        } else {
          return -1;
        }
      });
      return this.dataNews;
    },
    async getLenta() {
      try {
        let {
          data: {
            rss: {
              channel: { item },
            },
          },
        } = await axios.get("http://localhost:3000/lenta");

        item = item.filter((el) => {
          el.site = "www.lenta.ru";
          return el;
        });
        this.itemLenta = item;
      } catch (error) {
        console.log(error);
      }
    },
    async getMos() {
      try {
        let {
          data: {
            rss: {
              channel: { item },
            },
          },
        } = await axios.get("http://localhost:3000/mos");
        item = item.filter((el) => {
          el.site = "www.mos.ru";
          return el;
        });
        this.itemMos = item;
      } catch (error) {
        console.log(error);
      }
    },
    refresh() {
      this.Page = 1;
      this.search = "";
      this.itemLenta = [];
      this.itemMos = [];
      this.getLenta();
      this.getMos();
    },
    filter(id) {
      this.Panel = id;
      switch (this.Panel) {
        case 0:
          this.itemLenta = [];
          this.itemMos = [];
          this.getLenta();
          this.getMos();
          this.Page = 1;
          break;
        case 1:
          this.itemLenta = [];
          this.itemMos = [];
          this.getLenta();
          this.Page = 1;
          break;
        case 2:
          this.itemLenta = [];
          this.itemMos = [];
          this.Page = 1;
          this.getMos();
          break;
      }
    },
    Switching(key) {
      this.Page = key;
    },
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
body {
  background: #e5e5e5;
}
svg {
  cursor: pointer;
}
img {
  background: #e5e5e5;
}

h2 {
  line-height: 22px;
  color: #0029ff;
  font-size: 18px;
  font-weight: 700;
}
p {
  font-size: 14px;
  font-weight: 400;
}

a {
  font-family: Arial;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
}
.container {
  margin: 0 auto;
  max-width: 1060px;
  padding: 0 20px;
}
.shadow {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.05);
}
.pagination-blok {
  margin-top: 50px;
  display: grid;
  justify-content: center;
}

.desktop {
  @media (max-width: 767px) {
    display: none;
  }
}
.mobile {
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
}
</style>
