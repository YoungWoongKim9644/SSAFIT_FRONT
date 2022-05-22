import { createApi } from "@/api";
import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";

Vue.use(Vuex);

const api = createApi();

export default new Vuex.Store({
  state: {
    user : {},
    boards: [],
    board: {},
    tmdbTopRatedMovies: [],
    isLogin: false,
    todos : [],
    videos : [],
    reviews : []
  },
  getters: {},
  mutations: {


    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem)
      console.log(state.todos)
    },
    DELETE_TODO(state, todoItem) {
      const index = state.todos.indexOf(todoItem)
      state.todos.splice(index, 1)
    },
    UPDATE_TODO(state, todoItem) {
      const index = state.todos.indexOf(todoItem)
      state.todos[index].done = !state.todos[index].done
    },

    GET_BOARDS(state, payload) {
      state.boards = payload;
    },
    GET_BOARD(state, payload) {
      state.board = payload;
    },
    CREATE_BOARD(state, payload) {
      state.boards.push(payload);
    },
    UPDATE_BOARD(state, payload) {
      state.board = payload;
    },
    GET_TMDB_TOP_RATED(state, movies) {
      state.tmdbTopRatedMovies = movies;
    },
    USER_LOGIN(state, token) {
      console.log("token", token);
      state.isLogin = true;
      sessionStorage.setItem("auth-token", token);
      api.defaults.headers["auth-token"] = token;
    },
    USER_LOGOUT(state) {
      state.isLogin = false;
      sessionStorage.removeItem("auth-token");
      api.defaults.headers["auth-token"] = "";
    },

    INSERT_VIDEOS(state, videos){
      state.videos = videos
    },

    GET_REVIEWS(state, reviews){
      state.reviews = reviews
      console.log("mutation")
      console.log(state.reviews)
    },

    INSERT_USER_INFO(state, user){
      state.user = user
    }
  },
  actions: {

    getReviews({commit}, id){
      console.log("get_reviews")
      const API_URL = `/review/list`;
      api({
        url : API_URL,
        method : "GET",
        params : {id}
      })
      .then((res) => {
        console.log("res.data")
        console.log(res.data)
        commit('GET_REVIEWS', res.data)
      })
    },


    createTodo({commit}, payload) {
      commit('CREATE_TODO', payload)
    },
    deleteTodo({ commit }, payload) {
      commit('DELETE_TODO', payload)
    },
    updateTodo({ commit }, payload) {
      commit('UPDATE_TODO', payload)
    },

    insertVideos({commit}, payload){
      commit('INSERT_VIDEOS', payload)
    },


    insertUser({commit}, {user}){

      const API_URL = `/user/join`;
      api({
        url : API_URL,
        method: "POST",
        data : user 
      }).then((res) => {
        if(res.data == 1){
          alert("회원 가입이 성공했습니다.")
          
        }
        else{
          alert("아이디가 중복되었습니다.")
        }
      })
    },
    getBoards({ commit }, payload) {
      let params = null;

      if (payload) {
        params = payload;
      }
      const API_URL = `/board`;
      api({
        url: API_URL,
        method: "GET",
        params,
      })
        .then((res) => {
          console.log(res);
          commit("GET_BOARDS", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getBoard({ commit }, id) {
      const API_URL = `/board/${id}`;
      api({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          commit("GET_BOARD", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createBoard({ commit }, board) {
      const API_URL = `/board`;
      api({
        url: API_URL,
        method: "POST",
        params: board,
      })
        .then(() => {
          commit("CREATE_BOARD", board);
          router.push("/board");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateBoard({ commit }, board) {
      const API_URL = `/board`;
      api({
        url: API_URL,
        method: "PUT",
        params: board,
      })
        .then(() => {
          commit("UPDATE_BOARD", board);
          router.push({ name: "boardDetail", params: { id: board.id } });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteBoard(context, id) {
      context; //이거 안하면 난리남...
      const API_URL = `/board/${id}`;
      api({
        url: API_URL,
        method: "DELETE",
      })
        .then(() => {
          router.push({ name: "boardList" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getTmdbTopRated({ commit }) {
      const TMDB_KEY = process.env.VUE_APP_TMDB_API_KEY;
      const API_URL = `https://api.themoviedb.org/3/movie/popular`;
      const params = {
        api_key: TMDB_KEY,
        language: "ko",
        region: "KR",
      };
      api({
        url: API_URL,
        method: "GET",
        params,
      }).then((res) => {
        commit("GET_TMDB_TOP_RATED", res.data.results);
      });
    },
    userLogin({ commit }, { user, call }) {
      console.log("hehe")
      const API_URL = `user/login`;
      api({
        url: API_URL,
        method: "POST",
        data: user,
      }).then(({ data }) => {
        commit("USER_LOGIN", data["auth-token"]);
        commit("INSERT_USER_INFO", user)
        // router.push({ name: "home" });
        if (call) {
          router.push(call);
        } else {
          router.push({ name: "home" });
        }
      });
    },

    writeReview({commit}, review){
      commit("INSERT_REVIEW", {title, content})
      const API_URL = `review/write`
      api({
        url: API_URL,
        method : "POST",
        data: review
      }).then(()=>{
        alert("리뷰를 등록했습니다.")
        router.push({name : 'reviewList'})
      });

  },

  updateReview({commit} , review){
    const API_URL = `review/update/${review.no}`
    api({
      url : API_URL,
      method : "PUT",
      data : review
    }).then(()=>{
      router.push({name : 'reviewList'})
    })
  },

    deleteReview({commit}, no){
      console.log(no)
      const API_URL = `review/delete`
      api({
        url : API_URL,
        method : "DELETE",
        params : {no}
      }).then(()=>{
        router.push({name : 'reviewList'})
      })
    }
  },
  modules: {},
});