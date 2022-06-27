<template>
  <div class="navbar">
    <div class="navbar-item">
      <RouterLink to="/">Home</RouterLink>
    </div>
    <div class="navbar-item">
      <RouterLink to="/random-hat">Hat Game</RouterLink>
    </div>
    <div class="navbar-item">
      Random Hat
    </div>
  </div>
</template>

<style scoped>
.navbar {
  background-color: #333;
  width: 100%;
}

.navbar-item {
  padding: 25px;
  color: #FFF;
}

p {
  color: white;
}
</style>