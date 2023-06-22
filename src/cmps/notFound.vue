<template>
    <div class="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <router-link to="/" class="home-link">Go to Homepage</router-link>
    </div>
  </template>
  
  <style scoped>
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  
  h1 {
    font-size: 4rem;
    margin-bottom: 0.5rem;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  
  .home-link {
    padding: 0.8rem 1.5rem;
    background-color: #007bff;
    color: #fff;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .home-link:hover {
    background-color: #0056b3;
  }
  </style>
  