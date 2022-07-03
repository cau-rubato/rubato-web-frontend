<template>
  <div class="footer bg-dark">
    <div class="container p-5">
      <div class="row">
        <div class="col">
          <p class="lead copyright">
            {{ copyright }},
          </p>
          <p class="text-light lead" style="display: inline-block;">
            ALL RIGHTS RESERVED
          </p>
        </div>
        <div class="col" style="text-align: right">
          <h2 class="sns" v-for="(sns, i) in sns_list" :key="i">
            <a :href="sns.href"><i :class="sns.icon"></i></a>
          </h2>
        </div>
        <p class="text-light address word-keep-all">{{ address }}</p>
        <p class="text-light email word-keep-all">Email : {{ email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterLayout",
  data() {
    return {
      copyright: "@RUBATO",
      address:
        "서울특별시 동작구 흑석로 84 중앙대학교 서울캠퍼스 학생회관 607호",
      email: "rubato-cau@gmail.com",
      sns_list: [
        {
          name: "facebook",
          icon: "bi bi-facebook text-light",
          href: "https://www.facebook.com/CAUrubato",
        },
        {
          name: "instagram",
          icon: "bi bi-instagram text-light",
          href: "https://www.instagram.com/rubato_cau1985/",
        },
        {
          name: "youtube",
          icon: "bi bi-youtube text-light",
          href: "https://www.youtube.com/channel/UCHwzULktVXIoA0HotXKRNlg",
        },
      ],
    };
  },
};
</script>

<style>
.copyright {
  color: #277da1;
  display: inline;
}

.sns {
  display: inline;
  margin-left: 0.5rem;
}
</style>