<template>
  <div id="nav"></div>
  <router-view />
</template>
<script></script>
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
