<template>
  <!--忘记密码-->
  <div>
    <v-header>
      <h1 slot="title">忘记密码</h1>
    </v-header>
    <section class="maya-reg-from">
      <div class="mt-field">
        <label>手机：</label><input type="tel" placeholder=""  v-model="mobilePhone" value="" @keyup='changeStyle'>
      </div>
      <div class="mt-field">
        <label>图片验证码：</label><input type="input" placeholder="" v-model="GraphicCode" @keyup='changeStyle'>
        <div class="code" @click="refreshCode">
          <s-identify :identifyCode="identifyCode"></s-identify>
        </div>
      </div>
      <div class="mt-field">
        <label>手机验证码：</label><input type="input" placeholder="" id="verifyCode" v-model="verifyCode"><input class="btnSendCode" type="button" value="获取验证码" @keyup='changeStyle'/>
      </div>
      <div class="mt-field mt-field2">
        <label>设置新密码</label><input type="password" placeholder="请输入6-18位字母＋数字组合" value="" v-model="newloginPassword" @keyup='changeStyle'/>
      </div>
      <div class="mt-field mt-field2">
        <label>确认新密码</label><input type="password" placeholder="请再一次输入新密码" value="" v-model="newloginPassword2" @keyup='changeStyle'/>
      </div>
    </section>
    <mt-button type="primary" class="maya-btn" :class='gradient' @click="MayaRegister">提交</mt-button>
  </div>
</template>

<script>
  import Header from '../common/_header'
  import Sidentify from '../components/identify'
  import '../assets/css/maya-form.css'
  export default {
    components: {
      'v-header': Header,
      's-identify': Sidentify
    },
    data () {
      return {
        gradient: '',
        identifyCodes: 'abcdefghijklmnopqrstuvwxyz',
        identifyCode: '',
        mobilePhone: '',
        GraphicCode: '',
        verifyCode: '',
        newloginPassword: '',
        newloginPassword2: ''
      }
    },
    mounted () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    methods: {
      randomNum (min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      },
      refreshCode () {
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 4)
      },
      makeCode (o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
        }
        console.log(this.identifyCode)
      },
      MayaRegister () {
        alert('123')
      },
      changeStyle () {
        if (this.mobilePhone && this.GraphicCode && this.verifyCode && this.newloginPassword && this.newloginPassword2) {
          this.gradient = 'gradient'
        } else {
          this.gradient = ''
        }
      }
    }
  }
</script>
<style>
</style>
