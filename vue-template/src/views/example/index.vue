<template>
  <div class="example">
    <header class="navbar clearfix">
      <div class="float-left">
        <router-link to="/">vue-template</router-link>
      </div>
      <div class="float-right">
        <select v-model="selectedLanguage">
          <option value="zh-cn">{{ $t('lang.zh') }}</option>
          <option value="en">{{ $t('lang.en') }}</option>
        </select>
      </div>
    </header>

    <section class="example-section">
      <h1>Day.js</h1>
      <p>{{ $t('example.detailedTutorial') }}：<a href="https://dayjs.gitee.io/zh-CN/" target="_blank">Day.js</a></p>

      <p>{{ $t('example.dateFormatting') }}</p>
      <div class="dayjs-method">
        <p>{{ $dayjs().format('dddd') }}</p>
        <p>{{ $dayjs().format('YY/MM/DD') }}</p>
        <p>{{ $dayjs().format('YYYY/MM/DD') }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Example',
  props: {},
  data() {
    return {
      selectedLanguage: this.$store.getters.language
    };
  },
  watch: {
    'selectedLanguage': function(newLang) {
      // this.$i18n.locale = newLang;
      // this.$store.dispatch('app/setLanguage', newLang);
      // this.$dayjs.locale(newLang);
    }
  },
  created() {
    console.log(this.$store.getters.language);
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.example {
  padding-bottom: 20px;
  text-align: center;

  .float-left {
    float: left;
  }

  .float-right {
    float: right;
  }

  .clearfix::after {
    display: block;
    content: " ";
    clear: both;
  }
}

.navbar {
  padding: 0 50px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eaecef;
}

.example-section {
  width: 1200px;
  margin: 0 auto;

  a {
    text-decoration: underline;
    transition: all 0.3;
  }

  a:hover {
    color: red;
  }

  h1 {
    margin: 16px 0;
  }

  p {
    margin: 10px 0;
  }

  .dayjs-method {
    padding: 5px;
    border: 1px solid rgba(34, 34, 34, 0.2);
    border-radius: 4px;
    background-color: rgba(34, 34, 34, 0.03);
  }
}
</style>
