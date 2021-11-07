import { student } from "@/types/student";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  state: {
    students: [
      new student(10, "イチロー", 21, 1),
      new student(20, "ジロー", 32, 2),
      new student(30, "サブロー", 43, 1),
    ],
  },

  mutations: {},
  actions: {},
  modules: {},

  getters: {
    getLookUpStudent(state) {
      return (name: string) => {
        const hitStudents = [];
        for (const student of state.students) {
          if (student.name.includes(name)) {
            hitStudents.push(student);
          }
        }
        return hitStudents;
        // return state.students.filter((student) => student.name.includes(name));
      };
    },
  },
});
