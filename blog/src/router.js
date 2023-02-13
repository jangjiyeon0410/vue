import { createWebHistory, createRouter } from "vue-router";  //라이브러리명을 적음
import ListContent from "./components/ListContent.vue";
import mainPage from "./components/mainPage.vue";
import detailPage from "./components/DetailPage.vue"
import authorName from "./components/Author.vue"
import commentView from "./components/Comment.vue"

const routes = [
  {
    path: "/list",
    components: {
      default: ListContent,
      commentView: commentView
    }
  },
  {
    path: "/home",
    component: mainPage,
  },
  {
    path: "/detail/:randomName(\\d+)",
    //정규식 vue route 공식 홈페이지 참조
    ///:id* -> :id:id:id:id
    component: detailPage,
    children: [
      {
        path: "author",
        component: authorName,
      },
      {
        path: "comment",
        component: commentView,
      }
    ]
  },
  // {
  //   path: "/:404page(.*)",
  //   //(.*): 모든문자(anything)
  //   component: 404PageComponent,
  // },
  // 모든문자 -> /list도 포함인데, 요소 쓰는 순서대로 보여짐
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 