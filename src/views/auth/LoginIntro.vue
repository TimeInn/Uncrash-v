<template>
  <div class="container">
    <div class="logo">
      <router-link :to="{ name: 'login' }">
        <img src="/favicon.png" alt="logo">
      </router-link>
    </div>
    <div class="title">服务器状况实时监控平台</div>
    <p class="description">Fast website and server uptime monitoring.</p>
    <a-button class="button" ghost style="border-radius: 30px; width: 120px">注册</a-button>
  </div>
</template>

<script>
export default {
  name: 'LoginIntro'
}
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;

    .logo {
      img {
        width: 60px;
      }
    }
    .title {
      margin-top: 50px;
      font-weight: 500;
      font-size: 22px;
      line-height: 1.5;
      text-align: center;
      color: #fff;
    }
    .description {
      margin-top: 30px;
      font-size: 13px;
      color: #fff;
    }
  }
</style>
