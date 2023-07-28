<template>
  <div class="register-page">
    <div class="register-card">
      <div class="card-header">Register</div>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <form action="#" @submit.prevent="register">

        <div class="form-group">
          <label for="name" class="form-label">Name</label>
          <input id="name" type="name" class="form-control" name="name" value required autofocus v-model="name" />
        </div>

        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input id="email" type="email" class="form-control" name="email" value required autofocus v-model="email" />
        </div>

        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <input id="password" type="password" class="form-control" name="password" required v-model="password" />
        </div>

        <div class="form-group">
          <label for="phone" class="form-label">Phone</label>
          <input type="tel" class="form-control" name="phone" required id="phone" v-model="phone" />
        </div>

        <button type="submit" class="reserve-btn register-btn">Register</button>
      </form>
    </div>

  </div>
</template>

<script>


export default {
  name: "register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      phone: "",
      error: null
    }
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch("register", {
          email: this.email,
          password: this.password,
          name: this.name,
          phone:this.phone
        })
        this.$router.push("/")
      } catch (err) {
        err.value = err.message
      }
    }
  },
  components: {}
}


</script>