import {createStore} from 'vuex'

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
            faqs: [
                {
                    id: 0,
                    question: "루바토 입단비는 얼마인가요?",
                    answer: "2만원입니다."
                },
                {
                    id: 1,
                    question: "악기가 없는 사람도 활동할 수 있나요?",
                    answer: "네! 동방에 공용 악기가 있습니다. 다만 공용이다보니 좋은 악기는 아니라 몇번 해보고 마음에 들면 연습용으로 구매하셔서 시작하시는 걸 추천드립니다!"
                },
                {
                    id: 2,
                    question: "루바토는 주로 언제 활동하나요?",
                    answer: "여름방학과 겨울방학 때 정기 연주회가 있습니다. 방학에는 주 3회의 총연습과 파트 연습이 있습니다. 또한 2박 3일 ~ 3박 4일 동안 뮤직캠프도 갑니다! 연습도 하고 부원들과 다양한 활동도 하면서 친해지는 시간을 가지고 있어요~ 학기 중에는 앙상블이나 콰르텟을 주로 진행하며 학기에 한번정도 연주회를 하기도 합니다!"
                },
                {
                    id: 3,
                    question: "연주회를 하지 않아도 동방 이용이 가능한가요?",
                    answer: "넵 이용 가능합니다. 입단비를 내시고, 재등록을 하신 상태라면 언제든지 가능합니다."
                },
                {
                    id: 4,
                    question: "악기를 배워본 적이 없는데 그래도 가입이 가능한가요?",
                    answer: "물론이죠! 하고자 하는 열정과 노력만 있다면 가능합니다! 다만 가르쳐주는 시스템은 없기에 선생님을 구하셔야 합니다."
                }
            ],
        }
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})
