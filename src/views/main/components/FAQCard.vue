<template>
  <div class="faq-card mb-1" @click="$emit('selected', this.faq.id)">
    <div class="row">
      <h4 class="quest"><div class="qicon main-color">Q.</div>{{ faq.question }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQCard",
  props: {
    faq: Object
  }
}
</script>

<style scoped>
.faq-card {
  width: 100%;
  padding-bottom: 1rem;
  padding-top: 1.2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 8px;
}

.faq-card:hover {
  cursor: pointer;
  background-color: #E8E9Ea;
}

.quest {
  font-weight: 400;
  line-height: 150%;
  text-align: left;
  word-break: keep-all;
}

.qicon {
  display: inline;
  margin-right: 0.5rem;
}

</style>