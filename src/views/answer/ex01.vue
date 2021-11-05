<template>
  <div class="container">
    <div class="profile">
      <div>名前:{{ myName }}</div>
      <div>年齢:{{ myAge }}歳</div>
      <div>10年後の年齢:{{ ageIn10Years }}歳</div>
      <div>
        趣味:
        <span v-for="hobby of hobbies" v-bind:key="hobby"
          >{{ hobby }}&nbsp;
        </span>
      </div>
      <br />
      <div><a v-bind:href="url">自社ホームページ</a></div>
      <br />
      <div><img v-bind:src="img" /></div>
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ex01Component extends Vue {
  private myName = "渡邊華";
  private myAge = 25;
  private ageIn10Years = this.myAge + 10;
  private hobbies = ["スイム", "バイク", "ラン"];
  private url = "https://www.rakus-partners.co.jp/";
  private img = "img/images.png";
}
</script>

<style>
.container {
  text-align: center;
}
.profile {
  padding: 20px;
  display: inline-block;
  text-align: left;
  border: solid 1px black;
}
</style>
