<template>
  <div class="admin-app">
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
    <div class="navbar" role="navigation">
      <div class="container">
        <router-link class="navbar-item" to="/admin">View Products</router-link>
        <router-link class="navbar-item" to="/admin/new">New Product</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
      msg: 'Welcome to your Admin page',
    }
  },
}
</script>
