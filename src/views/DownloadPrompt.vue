<template>
  <div class="maya-bg">
    <div class="maya-logo">
      <img width="54%" src="../assets/image/maya-logo.png" alt="">
    </div>
    <div class="QR-code">
      <div class="Android-code">
        <div class="QR-code-icon">
          <img src="../assets/image/code.png" alt="">
        </div>
        <p>手机扫描二维码下载</p>
        <img height="16px" src="../assets/image/Android.png" alt="">
        <div class="btn">
          <button>下载</button>
        </div>
      </div>
      <div class="IOS-code">
        <div class="QR-code-icon">
          <img src="../assets/image/code.png" alt="">
        </div>
        <p>手机扫描二维码下载</p>
        <img height="16px" src="../assets/image/IOS.png" alt="">
        <div class="btn">
          <button>下载</button>
        </div>
      </div>
    </div>
    <div class="text-maya">全球首个消费4.0的移动互联网商城</div>
  </div>
</template>

<script>
    export default {
        data () {

        }
    }
</script>

<style scoped>
  .maya-bg{
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/image/xz-bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .maya-logo{
    text-align: center;
    padding-top: 25%;
  }
  .QR-code{
    margin: 18% 20px 15% 20px;
    display: flex;
    justify-content: space-around;
  }
  .Android-code,.IOS-code{
    width: 36%;
    background-color: #fff;
    border-radius: 5px;
  }
  .Android-code>img,.IOS-code>img{
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
  }
  .Android-code>p,.IOS-code>p{
    text-align: center;
    font-size: small;
    margin-bottom: 15px;
  }
  .Android-code .QR-code-icon,.IOS-code .QR-code-icon{
    margin: 20px;
  }
  .Android-code .QR-code-icon img,.IOS-code .QR-code-icon img{
    width: 100%;
  }
  .Android-code .btn,.IOS-code .btn{
   margin: 20px 10px;
    font-size: medium;
  }
  .Android-code .btn button,.IOS-code .btn button{
    width: 100%;
    height: 36px;
    line-height: 30px;
    border-radius: 5px;
    background-color: #24aa37;
    border: none;
    outline: none;
    color: #fff;
    font-size: 16px;
  }
  .Android-code .btn button:focus,.IOS-code .btn button:focus{
    background-color: #208f30;
  }
  .text-maya{
    font-size: 16px;
    text-align: center;
    color: #f6ae0c;
    position: fixed;
    width: 100%;
    bottom: 10%;
  }
</style>
