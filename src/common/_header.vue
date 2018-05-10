<template>
    <header>
      <span class="icon-go"></span>
      <slot name="title"></slot>
    </header>
</template>

<script>
import '../assets/css/style.css';
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
 header{
   display: flex;
   height:0.88rem;
   background: url("../assets/image/m-maya-top.jpg") 0 0 repeat-y; background-size: 100% 100%;
   text-align: center;
   align-items: center;
   justify-content: space-between;
   position: relative;
   padding: 0 0.2rem;
   margin-bottom: 0.4rem;
   box-sizing: content-box;
 }
 header h1{
 font-size:0.36rem;color: #fff;
   display: block;
   font-weight: 400;
   margin-right:3.2rem;
   letter-spacing: 0.2rem;
 }
 header span,header a {
   display: inline-block;
   font-size: 0.46rem;
   transform: rotate(-180deg);
 }
 .icon-go:before{
   color:#fff;
 }
</style>
