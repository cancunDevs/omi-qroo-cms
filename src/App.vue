<template>
  <div>
    <div class="container"
      v-if="!authenticated"
    >
      <img src="./assets/omi-qroo-logo.png" class="omi-qroo-logo--homepage" />
      <a
        class="button is-link"
        @click="login()">
          Log In
      </a>
    </div>

    <nav class="navbar is-transparent"
      v-if="authenticated"
    >
      <div class="navbar-brand">
        <a class="navbar-item">
          <img
            src="./assets/omi-qroo-logo.png"
            alt="Olimpiada de Informática Quintana Roo"
            width="112"
            height="28">
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/dashboard">
            Home
          </router-link>
          <router-link class="navbar-item" to="/hello">
            Test
          </router-link>
          <a class="navbar-item"
            @click="logout()">
              Log Out
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="button" href="https://facebook.com/omiqroo" target="_blank">
                  <span class="icon">
                    <i class="fab fa-facebook-square"></i>
                  </span>
                </a>
              </p>
              <p class="control">
                <a class="button" href="https://www.youtube.com/channel/UCaqljU1BgPVfQF36xp7bpyA" target="_blank">
                  <span class="icon">
                    <i class="fab fa-youtube-square"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-view
        :auth="auth"
        :authenticated="authenticated">
      </router-view>
    </div>
  </div>
</template>

<script>

import AuthService from './Auth/AuthService';

const auth = new AuthService();

// eslint-disable-next-line
const { login, logout, authenticated, authNotifier } = auth;

export default {
  name: 'app',
  data() {
    authNotifier.on('authChange', (authState) => {
      this.authenticated = authState.authenticated;
    });

    return {
      auth,
      authenticated,
    };
  },
  methods: {
    login,
    logout,
  },
};
</script>

<style scoped>
.omi-qroo-logo--homepage {
  width: 80%;
  height: auto;
  margin: 0 auto;
}
</style>
