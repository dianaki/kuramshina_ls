<template>
  <div class="container">
    <div class="header">
      <div class="title">Блок "Работы"</div>
    </div>
    <tagsAdder />
  </div>
</template>

<script>
import tagsAdder from '../../components/tagsAdder';

export default {
  name: 'works',
  components: {
    tagsAdder
  },
}
</script>

<style lang="postcss" scoped>

.title {
  font-size: 21px;
  font-weight: bold;
  color: #414C63;
  margin-right: 54px;
}
</style>