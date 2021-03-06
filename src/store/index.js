import { createApi } from "@/api";
import Vue from "vue";
import Vuex, { Store } from "vuex";
import router from "@/router";
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

const api = createApi();

export default new Vuex.Store({
  plugins : [createPersistedState()],
  state: {
    user : {},
    boards: [],
    board: {},
    tmdbTopRatedMovies: [],
    isLogin: false,
    totalTodos : [],
    todos : [],
    videos : [],
    reviews : [],
    week : [],
    dibs : [],
    follower : [],
    followed : [],
    searched : []
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
      state.todos[index].isDone = !state.todos[index].isDone
      console.log("update")
      console.log(state.todos)
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
    },

    THIS_WEEK(state, week){
      state.week = week
    },

    GET_TODOS(state, todos){
      let transform = todos.map(e => {
        if(e.isDone == "0") e.isDone = false
        if(e.isDone == "1") e.isDone = true
        return e;
      })
      
      state.totalTodos = transform
      
      const d = new Date();
      const year = d.getFullYear();
      const month = d.getMonth() + 1; 
      const date = d.getDate();
      const formedDate = year 
      + "-" + ( month >= 10 ? month : '0' + month ) 
      + "-" + (date >= 10 ? date : '0' + date)

      transform = state.totalTodos.map(e => {
        if(e.date === formedDate) return e;
      })

      state.todos = transform.filter(Boolean)
      console.log(state.todos)
    },

    SELECT_PART(state, selected){
      state.videos = selected
    },

    GET_DIBS(state, dibs){
      state.dibs = dibs
      console.log("DIBS")
      console.log(dibs)
    },

    INSERT_DIBS(state, dibs){
      state.dibs.push(dibs)
    },

    DELELTE_DIBS(state, dibs){      
      const itemIdx = state.dibs.indexOf(dibs)
      if(itemIdx > -1) state.dibs.splice(itemIdx,1)
    },

    GET_FOLLOWER_INFO(state, payload){
      state.follower = payload.map(e => e.id)
    },

    GET_FOLLOWED_INFO(state, payload){
      state.followed = payload.map(e => e.id)
    },

    SEARCH_USER(state, users){
      state.searched = users
    },

    FOLLOW(state, payload){
      state.follower.push(payload.followedId)
    },

    UN_FOLLOW(state, payload){
      const itemIdx = state.follower.indexOf(payload.followedId)
      if(itemIdx > -1) state.follower.splice(itemIdx,1)
    }

  },
  actions: {

    selectPart({commit}, selected){
      const API_URL = `/video/part/${selected}`;
      api({
        url : API_URL,
        method : "GET",
        data : selected
      })
      .then((res) => {
        console.log("res.data")
        console.log(res.data)
        commit('SELECT_PART', res.data)
      })

    },

    getTodos({commit}, id){
      console.log("getTodos")
      const API_URL = `/todo/list/${id}`;
      api({
        url : API_URL,
        method : "POST",
        data : id
      })
      .then((res) => {
        console.log("res.data")
        console.log(res.data)
        commit('GET_TODOS', res.data)
      })
    },


    thisWeek({commit}, week){
      commit('THIS_WEEK', week)
    },

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


    createTodo({commit}, todo) {
      console.log("actions create")
      const API_URL = `/todo/insert`;
      api({
        url : API_URL,
        method : "POST",
        data : todo
      })
      .then(() => {
        commit('CREATE_TODO', todo)
      })
    },

    deleteTodo({ commit }, todo) {
      const API_URL = `/todo/delete`;
      api({
        url : API_URL,
        method : "DELETE",
        data : todo
      })
      .then(() => {
        commit('DELETE_TODO', todo)
      })
    },
    updateTodo({ commit }, todo) {
      console.log("actions update")
      const API_URL = `/todo/update`;
      api({
        url : API_URL,
        method : "PUT",
        data : todo
      })
      .then(() => {
        commit('UPDATE_TODO', todo)
      })

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
          alert("?????? ????????? ??????????????????.")
          
        }
        else{
          alert("???????????? ?????????????????????.")
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
      context; //?????? ????????? ?????????...
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
      // commit("INSERT_REVIEW", {title, content})
      const API_URL = `review/write`
      api({
        url: API_URL,
        method : "POST",
        data: review
      }).then(()=>{
        alert("????????? ??????????????????.")
        
      });

  },

  updateReview({commit} , review){
    const API_URL = `review/update/${review.no}`
    api({
      url : API_URL,
      method : "PUT",
      data : review
    }).then(()=>{
      router.go()
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
        router.go()
      })
    },

    getDibs({commit}, id){
      const API_URL = `dibs/list`
      api({
        url : API_URL,
        method : "GET",
        params : {id}
      }).then((res) => {
        commit("GET_DIBS", res.data)
      })
    },

    insertDibs({commit}, dibs){
      const API_URL = `dibs/insert`
      api({
        url : API_URL,
        method : "POST",
        data : dibs,    
      }).then(()=>{
        commit("INSERT_DIBS", dibs)
      })
    },

    deleteDibs({commit}, dibs){
      const API_URL = `dibs/delete`
      api({
        url : API_URL,
        method : "DELETE",
        data : dibs,    
      }).then(()=>{
        commit("DELETE_DIBS", dibs)
      })
    },

    getFollowInfo({commit}, user){
      const API_URL = `user/follower/list`
      api({
        url : API_URL,
        method : "POST",
        data : {mode : "1" , id: user.id},    
      }).then((res)=>{
        commit("GET_FOLLOWER_INFO", res.data)
      })

      api({
        url : API_URL,
        method : "POST",
        data : {mode : "2" , id: user.id},    
      }).then((res)=>{
        commit("GET_FOLLOWED_INFO", res.data)
      })
    },

    searchUser({commit}, id){
      const API_URL = `user/search`
      api({
        url : API_URL,
        method : "POST",
        data : id
      }).then((res)=>{
        console.log(res.data)
        commit("SEARCH_USER", res.data)
      })
    },

    follow({commit}, payload){
      const API_URL = `user/follower/insert`
      api({
        url : API_URL,
        method : "POST",
        data : payload
      }).then((res)=>{
        if(res.data){
          commit("FOLLOW", payload)
        }
      })
    },
    
    unFollow({commit}, payload){
      const API_URL = `user/follower/update`
      api({
        url : API_URL,
        method : "PUT",
        data : payload
      }).then(()=>{
          commit("UN_FOLLOW", payload)
      })
    },

    getBoards({ commit }) {
      
      const API_URL = `/board/list`;
      api({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          console.log(res);
          commit("GET_BOARDS", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createBoard({ commit }, board) {
      console.log(board)
      const API_URL = `/board/write`;
      api({
        url: API_URL,
        method: "POST",
        data: board,
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
      context; //?????? ????????? ?????????...
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
    }

  },
  modules: {},
});