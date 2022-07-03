import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      managers: [
      {
        name: "이진욱",
        type: "회장",
        instrument: "Vc",
        generation: 37,
        department: "전자전기공학부",
        studentID: 17,
        imgRoute: require("@/assets/images/main.jpeg")
      },
      {
        name: "박민정",
        type: "부회장",
        instrument: "Vn",
        generation: 37,
        department: "중어중문학과",
        studentID: 20,
        imgRoute: require("@/assets/images/main.jpeg")
      },
      {
        name: "손차희",
        type: "총무",
        instrument: "Vn",
        generation: 37,
        department: "경영학과",
        studentID: 21,
        imgRoute: require("@/assets/images/main.jpeg")
      },
    ],
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
