<template>
  <!--注册页面-->
  <div>
    <v-header>
      <h1 slot="title">注册</h1>
    </v-header>
    <section class="maya-reg-from">
      <div class="mt-field">
        <label>手机：</label><input type="tel" placeholder="" v-model="mobilePhone" value="" @blur='vmobilePhone()'>
      </div>
      <div class="mt-field">
        <label>图片验证码：</label><input type="input" placeholder="" v-model="GraphicCode" @blur='vGraphicCode()'>
        <div class="code" @click="refreshCode">
          <s-identify :identifyCode="identifyCode"></s-identify>
        </div>
      </div>
      <div class="mt-field">
        <label>手机验证码：</label><input type="input" placeholder="" id="verifyCode" v-model="verifyCode" @blur='vverifyCode()'><input
        class="btnSendCode" type="button" value="获取验证码"/>
      </div>
      <div class="mt-field">
        <label>邀请码：</label><input type="input" placeholder="" id="invitedCode" v-model="invitedCode">
      </div>
      <div class="mt-field mt-field2">
        <label>设置密码</label><input type="password" placeholder="请输入6-18位字母＋数字组合" value="" v-model="loginPassword" @blur='vloginPassword'
      />
      </div>
      <div class="mt-field mt-field2">
        <label>确认密码</label><input type="password" placeholder="请再一次输入新密码" value="" v-model="loginPassword" @blur='vloginPassword2'/>
      </div>
      <mt-button type="primary" class="maya-btn" @click='MayaRegister'>提交</mt-button>

    </section>
    <mt-button type="primary" class="maya-btn" @click="MayaRegister">提交</mt-button>
  </div>
</template>

<script>
  import Header from '../common/_header'
  import Sidentify from '../components/identify'
  import { Toast } from 'mint-ui' // 提示框
  import axios from '../utils/request'
  import api from '../api/index.js'
  import '../assets/css/maya-form.css'

  // import AES from 'crypto-js/aes'
  // import MD5 from 'crypto-js/md5'
  // import {encryption} from '../utils/my-crypto-js'
  export default {
    components: {
      'v-header': Header,
      's-identify': Sidentify
    },
    data () {
      return {
        identifyCodes: 'abcdefghijklmnopqrstuvwxyz',
        identifyCode: '',
        mobilePhone: '',
        GraphicCode: '',
        verifyCode: '',
        invitedCode: '',
        loginPassword: '',
        loginPassword2: '',
        Flag: true
      }
    },
    mounted () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    methods: {
      vmobilePhone () {
        this.Flag = true
        const reg = /^[1][3,4,5,7,8][0-9]{9}$/g
        if (!this.mobilePhone) {
          this.Flag = false
          Toast('请输入手机号')
        } else if (!reg.test(this.mobilePhone)) {
          this.Flag = false
          Toast('手机号码格式不正确')
        }
      },
      vGraphicCode () {
        this.Flag = true
        if (!this.GraphicCode) {
          this.Flag = false
          Toast('图形验证码必填')
        } else if (this.GraphicCode !== this.identifyCode) {
          this.Flag = false
          Toast('图形验证码错误')
        }
      },
      vverifyCode () {
        this.Flag = true
        if (!this.verifyCode) {
          this.Flag = false
          Toast('验证码必填')
        }
      },
      vloginPassword () {
        this.Flag = true
        const pattern = /^[a-zA-Z0-9]{6,18}$/g
        if (!this.loginPassword) {
          this.Flag = false
          Toast('请输入密码')
        } else if (!pattern.test(this.loginPassword)) {
          this.Flag = false
            Toast('请输入6-18位字母＋数字组合')
        }
      },
      vloginPassword2 () {
        this.Flag = true
        if (!this.loginPassword2) {
          this.Flag = false
          Toast('请再次输入密码')
        } else if (this.loginPassword2 !== this.loginPassword) {
          this.Flag = false
          Toast('两次输入密码不一致!')
        }
      },
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
//        this.vmobilePhone()
//        if (!this.Flag) {
//          return
//        }
//        this.vverifyCode()
        alert('123')
        const data = {}
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

</style>
