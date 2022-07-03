<template>
  <div>
    <h6 class="mb-5 return-list" @click="$emit('return')">
      <i class="bi bi-chevron-left"
         style="margin-right: 10px;"></i>질문 목록으로 돌아가기</h6>

    <h1 class="word-keep-all">{{ $store.state.faqs[faqId].question }}</h1>
    <p class="mt-5 lead">{{ $store.state.faqs[faqId].answer }}</p>
  </div>
</template>

<script>
export default {
  name: "FAQDetail",
  props: {
    faqId: Number
  }
}
</script>

<style scoped>
.return-list:hover {
  cursor: pointer;
  color: #277DA1;
}
</style>