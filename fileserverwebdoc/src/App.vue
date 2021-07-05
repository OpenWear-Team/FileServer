<template>
  <a-layout class="g-container">
      <div class="trigger" v-if="breakpoint" @click="isfold = !isfold">
        <a-icon class="icon" type="menu-fold" />
      </div>
    <router-view :breakpoint="breakpoint"></router-view>
  </a-layout>
</template>
<script>

export default {
  name: "App",
  data: function() {
    return {
      theme: "dark",
      breakpoint: false,
      isfold: true
    };
  },
  computed: {
    cancollapse: function() {
      if (!this.breakpoint) {
        return false;
      } else {
        if (this.isfold) return true;
        else {
          return false;
        }
      }
    }
  },
  methods: {
    onBreakpoint: function(broken) {
      this.breakpoint = broken;
    }
  }
};
</script>

<style lang="less">
.g-container {
  height: 100vh;
}
body {
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
}
</style>
