import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../services/auth.service";
import { userService } from "../../services/user.service";

export default {
  state: {
    user: {
      loggedIn: false,
      data: null,
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
  },
  actions: {
    async register({ commit }, { email, password, name, phone }) {
      const userDb = {
        fullName: name,
        username: "",
        imgUrl: "",
        email,
        phone,
      };
      console.log(userDb);

      await userService.signup(userDb);

      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response) {
        console.log(response);

        commit("SET_USER", response.user);
        response.user.updateProfile({ displayName: name, email });
      } else {
        throw new Error("Unable to register user");
      }
    },
    async logIn({ commit }, { email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      if (response) {
        // const dbUser = await axios.post("/");

        commit("SET_USER", response.user);
        commit("SET_LOGGED_IN", true);
      } else {
        throw new Error("login failed");
      }
    },
    async logOut({ commit }) {
      await signOut(auth);
      commit("SET_USER", null);
    },

    async fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        commit("SET_USER", null);
      }
    },
  },
};
