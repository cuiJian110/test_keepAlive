<template>
  <div id="app">
    <div>
        <button @click='$router.push({name: "page1"})'>page1</button>
        <button @click='$router.push({name: "page2"})'>page2</button>
        <button @click='$router.push({name: "page4"})'>page4</button>
        <button @click='$router.go(-1)'>goBack</button>
    </div>
    <keep-alive>
        <router-view v-if='$route.meta.isCache'/>
    </keep-alive>
        <router-view v-if='!$route.meta.isCache'/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.log(this.$route)
    console.log(this.$router)
  }
}
</script>

<style>
</style>
