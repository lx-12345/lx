<template>
  <!--注册页面-->
  <div>
    <v-header>
      <h1 slot="title">注册</h1>
    </v-header>
    <section class="maya-reg-from" v-if="flag">
      <div class="mt-field">
        <label>手机：</label><input type="tel" placeholder="" id="mobilePhone">
      </div>
      <div class="mt-field">
        <label>图片验证码：</label><input type="input" placeholder="">
        <div class="code" @click="refreshCode">
          <s-identify :identifyCode="identifyCode"></s-identify>
        </div>
      </div>
      <div class="mt-field">
        <label>手机验证码：</label><input type="input" placeholder="" id="verifyCode"><input class="btnSendCode" type="button"
                                                                                       value="获取验证码"/>
      </div>
      <div class="mt-field">
        <label>邀请码：</label><input type="input" placeholder="" id="invitedCode">
      </div>
      <mt-button type="primary" class="maya-btn gradient" @click='flag = !flag'>下一步</mt-button>
    </section>
    <section class="maya-reg-from maya-reg-from2" v-if='!flag'>
      <div class="mt-field">
        <label>设置密码</label><input type="password" placeholder="请输入6-18位字母＋数字组合" value=""/>
      </div>
      <div class="mt-field">
        <label>确认密码</label><input type="password" placeholder="请再一次输入新密码" value="" id="loginPassword"/>
      </div>
      <mt-button type="primary" class="maya-btn " @click="MayaRegister">提交</mt-button>
    </section>
  </div>
</template>

<script>
  import Header from '../common/_header'
  import Sidentify from '../components/identify'
  import { Toast } from 'mint-ui'
  import axios from 'axios'
  import api from '../api/index.js'

  export default {
    components: {
      'v-header': Header,
      's-identify': Sidentify
    },
    data () {
      return {
        identifyCodes: 'abcdefghijklmnopqrstuvwxyz',
        identifyCode: '',
        flag: true
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
        const data = {}

        if (this.flag) {
          Toast('abcc')
          return
        }

//        return

        axios.post(api.loginByCode, data)
          .then(res => {
            console.log(res.data)
            if (res.data.code === 0) {
              this.$message({
                showClose: true,
                message: '注册成功',
                type: 'success'
              })
//              router.push({name: 'Login'})
            } else {
              this.$message({
                showClose: true,
                message: '注册失败',
                type: 'error'
              })
            }
          })
      }
    }

  }
</script>

<style>
  .maya-reg-from {
    padding: 0 0.2rem;
    margin-bottom: 1rem
  }

  .mt-field {
    height: 1rem;
    position: relative;
    color: #181818;
    line-height: 1rem;
    font-size: 0.28rem;
    border-bottom: thin solid #e5e5e5;
    padding: 0 0.2rem;
  }

  .mt-field label {
    width: 1.86rem;
    display: inline-block;
  }

  .mt-field input {
    width: 3rem;
  }

  .maya-btn {
    width: 6.9rem;
    height: 0.8rem;
    text-align: center;
    border: none;
    background: #e0e0e0;
  }

  .mt-field .btnSendCode {
    position: absolute;
    display: block;
    right: 0.2rem;
    height: 0.32rem;
    line-height: 0.32rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border-left: thin solid #8e57ff;
    color: #8e57ff;
    text-align: right;
    width: 1.75rem;
  }

  .code {
    height: 34px;
    position: absolute;
    right: 0.2rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .s-canvas {
    height: 34px;
    top: 50%;
  }

  .mint-field-core {
    font-size: 0.28rem;
    color: #181818;
  }

  .gradient {
    background: -moz-linear-gradient(left, #c155ee 0%, #9857fc 100%);
    background: -webkit-gradient(linear, top left, top right, color-stop(0%, #c155ee), color-stop(100%, #9857fc));
    background: -webkit-linear-gradient(left, #c155ee 0%, #ffffff 100%);
    background: -o-linear-gradient(left, #c155ee 0%, #9857fc 100%);
    background: -ms-linear-gradient(left, #c155ee 0%, #9857fc 100%);
    background: linear-gradient(to right, #c155ee 0%, #9857fc 100%);
  }

  .maya-reg-from2 .mt-field input {
    width: 4rem;
  }

</style>
