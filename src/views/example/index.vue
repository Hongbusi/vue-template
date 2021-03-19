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
      <h1>Moment</h1>
      <p>{{ $t('example.detailedTutorial') }}：<a href="http://momentjs.cn/" target="_blank">Moment</a></p>

      <p>{{ $t('example.dateFormatting') }}</p>
      <div class="moment-method">
        <p>{{ $moment().format('MMMM Do YYYY, h:mm:ss a') }}</p>
        <p>{{ $moment().format('dddd') }}</p>
        <p>{{ $moment().format('MMMM Do YYYY') }}</p>
        <p>{{ $moment().format('YYYY [escaped] YYYY') }}</p>
        <p>{{ $moment().format() }}</p>
      </div>

      <p>{{ $t('example.relativeTime') }}</p>
      <div class="moment-method">
        <p>{{ $moment("20111031", "YYYYMMDD").fromNow() }}</p>
        <p>{{ $moment("20120620", "YYYYMMDD").fromNow() }}</p>
        <p>{{ $moment().startOf('day').fromNow() }}</p>
        <p>{{ $moment().endOf('day').fromNow() }}</p>
        <p>{{ $moment().startOf('hour').fromNow() }}</p>
      </div>

      <p>{{ $t('example.calendarTime') }}</p>
      <div class="moment-method">
        <p>{{ $moment().subtract(10, 'days').calendar() }}</p>
        <p>{{ $moment().subtract(6, 'days').calendar() }}</p>
        <p>{{ $moment().subtract(3, 'days').calendar() }}</p>
        <p>{{ $moment().subtract(1, 'days').calendar() }}</p>
        <p>{{ $moment().calendar() }}</p>
        <p>{{ $moment().add(1, 'days').calendar() }}</p>
        <p>{{ $moment().add(3, 'days').calendar() }}</p>
        <p>{{ $moment().add(10, 'days').calendar() }}</p>
      </div>

      <p>{{ $t('example.multilingualSupport') }}</p>
      <div class="moment-method">
        <p>{{ $moment.locale() }}</p>
        <p>{{ $moment().format('LT') }}</p>
        <p>{{ $moment().format('LTS') }}</p>
        <p>{{ $moment().format('L') }}</p>
        <p>{{ $moment().format('l') }}</p>
        <p>{{ $moment().format('LL') }}</p>
        <p>{{ $moment().format('ll') }}</p>
        <p>{{ $moment().format('LLL') }}</p>
        <p>{{ $moment().format('lll') }}</p>
        <p>{{ $moment().format('LLLL') }}</p>
        <p>{{ $moment().format('llll') }}</p>
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
      this.$i18n.locale = newLang;
      this.$store.dispatch('app/setLanguage', newLang);
      this.$moment.locale(newLang);
    }
  },
  created() {},
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

  .moment-method {
    padding: 5px;
    border: 1px solid rgba(34, 34, 34, 0.2);
    border-radius: 4px;
    background-color: rgba(34, 34, 34, 0.03);
  }
}
</style>
