<template>
  <header>
    <nav >
      <RouterLink to="" class="nav-links">início</RouterLink>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
header {
  background-color: #41b883;
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
}

nav {
    display: flex;
    gap: 1rem;
}

.nav-links{
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    transition: all 0.2s;
}

.nav-links:hover{
    color: #fefefe;
}

</style>
