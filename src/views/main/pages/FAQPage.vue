<template>
  <div class="faq bg-light">
    <div class="container py-6 pt-6 px-custom">
      <h2 class="text-custom"><strong>FAQ</strong></h2>
      <h2 class="display-4 concert-title mt-4">자주 묻는 질문</h2>
      <p class="lead">자주 문의되는 질문에 대한 내용을 정리하였습니다.</p>
      <div style="padding-top: 60px">
        <div v-if="faqState==='list'">
          <div class="faq-card mb-1" v-for="(faq, i) in faqs" :key="i" @click="showFaq(faq)">
            <div class="row">
              <h4 class="qicon text-secondary col-1">Q.</h4>
              <h4 class="col-11 quest" style="text-align:left">{{ faq.title }}</h4>
            </div>
          </div>
        </div>

        <div v-else-if="faqState==='detail'">
          <h6 class="mb-5 return-list" @click="faqState='list'"><i class="bi bi-chevron-left" style="margin-right: 10px;"></i>질문 목록으로 돌아가기</h6>
          <h1>{{ currentFaq.title }}</h1>
          <p class="mt-5 lead">{{ currentFaq.detail }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqPage",
  data() {
    return {

      faqs: [
        {
          title: "어떻게 가입해여??",
          detail: "몰라여"
        },
        {
          title: "회비는 얼마에여??",
          detail: "몰라여"
        },
        {
          title: "몇살이에여??",
          detail: "25이요"
        },
        {
          title: "회비는 얼마에여??",
          detail: "몰라여"
        },
        {
          title: "회비는 얼마에여??",
          detail: "몰라여"
        },
        {
          title: "회비는 얼마에여??",
          detail: "몰라여"
        },
      ],
      faqState: "list",
      currentFaq: Object,
    }
  },
  methods: {
    showFaq(faq) {
      this.faqState = 'detail'
      this.currentFaq = faq
    }
  }
}
</script>

<style scoped>

</style>