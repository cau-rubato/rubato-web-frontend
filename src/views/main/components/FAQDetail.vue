<template>
  <div>
    <h6 class="mb-5 return-list" @click="$emit('return')">
      <i class="bi bi-chevron-left"
         style="margin-right: 10px;"></i>질문 목록으로 돌아가기</h6>

    <h2 class="word-keep-all">{{ $store.state.faqs[faqId].question }}</h2>
    <h5 class="mt-5 text-muted word-keep-all answer">{{ $store.state.faqs[faqId].answer }}</h5>
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
.answer {
  line-height: 160%;
}

.return-list:hover {
  cursor: pointer;
  color: #277DA1;
}
</style>