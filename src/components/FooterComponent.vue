<template>
  <footer class="footer">
    <div class="footer-content">
      <p>
        &copy; 2024 - Desenvolvido por Paulo Ricardo <span class="vue-heart">❤</span>
      </p>
      <a href="#" class="footer-link">Usando Vue.js</a>
    </div>
  </footer>
</template>

<style>
.footer {
  margin-top: 1rem;
  background-color: #35495e;
  padding: 1.5rem;
  text-align: center;
  color: #fefefe;
  font-size: 1rem;
  border-top: 3px solid #41b883;
  
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.footer-link {
  color: #41b883;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
}

.footer-link:hover {
  color: #fefefe;
  text-shadow: 0 0 5px #41b883;
}

.vue-heart {
  color: #41b883;
  font-size: 1.2rem;
}
@media (max-width: 768px) {
  .footer {
    font-size: 0.9rem;
    padding: 1rem;
  }

  .vue-heart {
    font-size: 1rem;
  }
}
</style>
