<template>
  <div class="home">
    <h1>vue-template</h1>
    <div class="home-link">
      Example：
      <router-link to="/example">案例</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.home {
  text-align: center;
  padding-top: 200px;
}

.home-link {
  margin-top: 100px;

  a {
    text-decoration: underline;
    transition: all 0.3;
  }

  a:hover {
    color: red;
  }
}
</style>
