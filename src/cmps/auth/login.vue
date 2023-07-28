<template>
  <div class="login-page">
    <div class="login-card">
      <div class="card-header">Login</div>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <form action="#" @submit.prevent="login">

        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input id="email" type="email" class="form-control" name="email" value required autofocus v-model="email" />
        </div>

        <div class="form-group ">
          <label for="password" class="form-label">Password</label>
          <input id="password" type="password" class="form-control" name="password" required v-model="password" />
        </div>

        <button type="submit" class="reserve-btn login-btn">Login</button>

      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      error: null
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("logIn", {
          email: this.email,
          password: this.password
        })
        this.$router.push("/")
      } catch (err) {
        err.value = err.message
      }
    }
  }
}

</script>

