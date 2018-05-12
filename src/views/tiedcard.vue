<template>
  <!--绑定银行卡-->
  <div>
    <v-header>
      <h1 slot="title">添加银行卡</h1>
    </v-header>
    <section class="maya-reg-from">
      <div class="mt-field">
        <label>姓名：</label><input type="tel" placeholder="请输入姓名"  v-model='username' value="" >
      </div>
      <div class="mt-field">
        <label>身份证号：</label><input type="input" placeholder="请输入身份证号" id="verifyCode" v-model='userid'>
      </div>
      <div class="mt-field">
        <label>银行：</label><input type="tel" placeholder="请选择银行"  v-model='cardname' value="" ><span class="icon-go" @click="checkcard"></span>
      </div>
      <div class="mt-field">
        <label>银行卡号：</label><input type="tel" placeholder="请输入银行卡号"  v-model='cardid' value="" >
      </div>
      <div class="mt-field">
        <label>预留手机号：</label><input type="tel" placeholder="请输入预留手机号"  v-model='cardphone' value="" >
      </div>
      <div class="mt-field">
        <label>开户行：</label><input type="tel" placeholder="请输入开户行"  v-model='cardidname' value="" >
      </div>
    </section>
    <mt-button type="primary" class="maya-btn">保存</mt-button>
    <mt-actionsheet :actions="actions" v-model="sheetVisible" v-if="flag">
    </mt-actionsheet>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Header from '../common/_header'
  import '../assets/css/style.css';
  import '../assets/css/maya-form.css'
  import { Actionsheet } from 'mint-ui';
  Vue.component('tiedcard', Actionsheet);
  export default {
    components: {
      'v-header': Header
    },
    data () {
      return {
        username: '',
        userid: '',
        cardname: '',
        cardid: '',
        cardphone: '',
        cardidname: '',
        sheetVisible: '',
        actions: [{name: '银行卡'}],
        flag: false
      }
    },
    methods: {
      checkcard () {
        alert('123');
        this.flag = true;
      }
      // changeStyle () {
      //   if (this.mobilePhone && this.GraphicCode && this.verifyCode && this.newloginPassword && this.newloginPassword2) {
      //     this.gradient = 'gradient'
      //   } else {
      //     this.gradient = ''
      //   }
      // }
    }
  }
</script>
<style>
  body{background: #f4f4f4}
  .maya-reg-from{background: #fff;
    border-top:thin solid #e5e5e5;
    border-bottom:thin solid #e5e5e5;}
  .maya-reg-from .mt-field:last-child{
    border:none
  }
  .mt-field{
    display: flex;
    flex:1;}
  .mt-field input{
    width: 5.14rem;
  text-align: right;}
  input::-ms-input-placeholder{text-align: left;}
  input::-webkit-input-placeholder{text-align: left;}
  .maya-reg-from .mt-field:nth-child(3){
    position: relative;
  }
  .mt-field span,.mt-field a{
    font-size: 0.46rem;
    right: 0;
    position: absolute;
    top: 50%;
    transform:translateY(-50%) rotate(90deg)
  }
  .mt-field icon-go:before{
    color: #c8c7cb;
  }
</style>
