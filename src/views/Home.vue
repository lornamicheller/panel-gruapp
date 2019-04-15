<template>
  <div class="home container-fluid" style="padding: 0;">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">
    <img src="../assets/logo.svg" width="100px" height="40px" style="padding-bottom: 10px;">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Aceptados</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Solicitantes</a>
      </li>
      <li class="nav-item log-out">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Logout</a>
      </li>
    </ul>
  </div>
</nav>

<div class="container">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Dirección</th>
      <th scope="col">Perfíl</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Little</td>
      <td>Jane</td>
      <td>Hotel Sheraton, San Juan</td>
      <td><button type="button" class="btn btn-primary profile"><router-link class="profile-link" to="/profile">Perfíl</router-link></button></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>Little</td>
      <td>Jane</td>
      <td>Hotel Sheraton, San Juan</td>
      <td><button type="button" class="btn btn-primary profile"><router-link class="profile-link" to="/profile">Perfíl</router-link></button></td>
    </tr>
  </tbody>
</table>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.profile {
  background-color: #6561ab !important;
  border: 1px solid #6561ab !important;
}

.profile-link {
  color: white;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 15px;
}
</style>
