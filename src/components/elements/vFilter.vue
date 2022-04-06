<template>
  <div class="filter">
    <ul class="filter-link">
      <li
        v-for="element in filter"
        :key="element.id"
        :class="element.class"
        @click="activeFilter(element.id)"
      >
        {{ element.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "vFilter",
  data() {
    return {
      filter: [
        { id: 0, title: "Все", class: "active" },
        { id: 1, title: "Lenta.ru", class: "" },
        { id: 2, title: "Mos.ru", class: "" },
      ],
    };
  },
  methods: {
    activeFilter(id) {
      this.filter = this.filter.filter((el) => {
        if (el.id == id) {
          el.class = "active";
        } else {
          el.class = "";
        }
        return el;
      });

      this.$emit("filter", id);
    },
  },
};
</script>
<style lang="scss" scoped>
.filter {
  max-width: 160px;
}
ul {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  list-style: none;
  li {
    cursor: pointer;
    font-family: Arial;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #0029ff;
  }
}
.active {
  color: black;
}
</style>
