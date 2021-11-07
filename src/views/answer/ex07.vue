<template>
  <div class="lookUpStudent">
    <h1>従業員検索</h1>
    <div>名前：<input type="text" v-model="name" /></div>
    <button v-on:click="lookUpStudents">検索</button>
    <hr />
    <h2>検索結果（{{ hitNumber }}件）</h2>
    <div v-for="student of students" v-bind:key="student.id">
      {{ student.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ex06Component extends Vue {
  private name = "";
  private students = [];

  lookUpStudents(): void {
    this.students = this["$store"].getters.getLookUpStudent(this.name);
  }

  get hitNumber() {
    return this.students.length;
  }
}
</script>

<style></style>
