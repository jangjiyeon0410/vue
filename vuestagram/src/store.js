import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
	state() {
		return {
			name: 'Kim',
			age: 20,
			likes: 30,
			liked: true,
			more: {},
		};
		// [
		// 	{
		// 		name: 'Kim Hyun',
		// 		userImage: 'https://placeimg.com/100/100/arch',
		// 		postImage: 'https://placeimg.com/640/480/arch',
		// 		likes: 36,
		// 		date: 'May 15',
		// 		liked: false,
		// 		content: '오늘 무엇을 했냐면요 아무것도 안했어요 ?',
		// 		filter: 'perpetua',
		// 	},
		// 	{
		// 		name: 'John Doe',
		// 		userImage: 'https://placeimg.com/200/200/people',
		// 		postImage: 'https://placeimg.com/640/480/people',
		// 		likes: 20,
		// 		date: 'Apr 20',
		// 		liked: false,
		// 		content: '흔한 자랑스타그램',
		// 		filter: 'clarendon',
		// 	},
		// 	{
		// 		name: 'Minny',
		// 		userImage: 'https://placeimg.com/100/100/animals',
		// 		postImage: 'https://placeimg.com/640/480/animals',
		// 		likes: 49,
		// 		date: 'Apr 4',
		// 		liked: false,
		// 		content: '우리집 개는 화장실 물도 내림',
		// 		filter: 'lofi',
		// 	},
		// ];
	},
	mutations: {
		//state변경은 무조건 mutations가 함.
		function() {
			//ajax요청 코드 작성은 가능하나, mutations 안 함수가 순차적으로 실행한다는 보장이 없음. (changeName함수가 3초 걸리면? -> 코드 실행이 오래걸리거나 비동기 처리를 위해서는 actions에 작성하자)
		},

		setMore(state, data) {
			state.more = data;
		},
		changeName(state) {
			state.name = 'park';
		},
		changeAge(state, payload) {
			state.age += payload;
		},
		clickedLikes(state) {
			if (state.liked == true) {
				state.likes++;
				state.liked = false;
			} else {
				state.likes--;
				state.liked = true;
			}
		},
	},
	actions: {
		// ajax 요청
		getData(context) {
			axios
				.get(`https://codingapple1.github.io/vue/more0.json`)
				.then((result) => {
					console.log(result.data);
					context.commit('setMore', result.data);
				});
		},
	},
});

export default store;
