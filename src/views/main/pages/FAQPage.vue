<template>
  <div class="faq bg-light">
    <div class="container page px-5">
      <h2 class="page-title main-color">FAQ</h2>
      <h2 class="display-4 page-head mt-4">자주 묻는 질문</h2>
      <h5 class="text-muted mt-3">자주 문의되는 질문에 대한 내용을 정리하였습니다.</h5>

      <div class="mt-5">
        <div v-if="toggle">
          <FAQCard v-for="faq in $store.state.faqs" :key="faq" :faq="faq" @selected="showAnswer($event)" />
        </div>

        <FAQDetail v-else @return="showCards" :faq-id="currentFAQId" />

      </div>
    </div>
  </div>
</template>

<script>
import FAQCard from "@/views/main/components/FAQCard";
import FAQDetail from "@/views/main/components/FAQDetail";
export default {
  name: "FaqPage",
  components: {FAQDetail, FAQCard},
  data() {
    return {
      toggle: true, // true: Cards, false: Detail
      currentFAQId: 0,
    }
  },
  methods: {
    showAnswer(id) {
      this.currentFAQId = id;
      this.toggle = false;
    },
    showCards() {
      this.toggle = true;
    }
  }
}
</script>

<style scoped>
</style>