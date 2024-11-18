<template>
  <div class="layout">
    <HeaderComponentVue />
    <main>
      <img src="../assets/logo.png" alt="Logo Vue" />
      <div>
        <input
          type="text"
          placeholder="Usuário do Github..."
          id="search"
          v-model="searchValue"
        />
        <button id="search-button" @click="searchRepositories">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
            />
          </svg>
        </button>
      </div>
      <div v-for="repository in repositories" :key="repository.id">
        <div class="card">
          <h3>{{ repository.name }}</h3>
          <p class="link">{{ repository.clone_url }}</p>
        </div>
      </div>
      <div v-if="!result">
        <p>Nenhum usuário no Github foi encontrado...</p>
      </div>
    </main>
    <FooterComponentVue />
  </div>
</template>

<script setup>
import HeaderComponentVue from "@/components/HeaderComponent.vue";
import FooterComponentVue from "@/components/FooterComponent.vue";
import { ref } from "vue";
import githubApi from "../../services/githubApi.ts";

const repositories = ref([]);
const searchValue = ref("");
const result = ref(true);

const searchRepositories = () => {
  githubApi.get(`${searchValue.value}/repos`).then((response) => {
    repositories.value = response.data;
    if(response.data.length == 0){
      result.value = false
    } else {
      result.value = true
    }
  });
};
</script>

<style scoped>

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

main {
  flex: 1; 
  padding-bottom: 2rem;
}

#search {
  padding: 0.5rem 1rem;
  border: 1px solid #2c3e50;
}

#search-button {
  padding: 0.5rem;
  background-color: #41b883;
  border: 1px solid #2c3e50;
  color: #fefefe;
  font-weight: bold;
}

#search-button:hover {
  background-color: #2c3e50;
  color: #41b883;
  cursor: pointer;
}

.card {
  border: 1px solid #41b883;
  background-color: #35495e;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  text-align: center;
  color: #fefefe;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  transition: all 0.5s;
}

.card:hover {
  padding: 1.6rem;
}

.card h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #41b883;
}

.card p {
  font-size: 1rem;
  color: #dcdcdc;
}

.link {
  font-weight: bold;
  color: #41b883;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.link:hover {
  color: #fefefe;
  text-shadow: 0 0 5px #41b883;
}

@media (max-width: 768px) {
  .card {
    padding: 0.5rem;
    width: 100%;
  }

  .card h3 {
    font-size: 0.9rem;
  }

  .card p {
    font-size: 0.7rem;
  }

  .link {
    font-size: 0.7rem;
  }
}
</style>
