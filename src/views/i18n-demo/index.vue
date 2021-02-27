<template>
  <div class="i18n-demo">
    {{ $t('lang.Language') }}
    <select v-model="selectedLanguage">
      <option value="zh">{{ $t('lang.zh') }}</option>
      <option value="en">{{ $t('lang.en') }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'I18nDemo',
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
    }
	},
  created() {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.i18n-demo {
  text-align: center;
}
</style>
