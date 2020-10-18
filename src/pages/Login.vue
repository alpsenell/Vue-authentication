<template>
    <div class="login">
      <img src="../assets/hedwig-icon.png" alt="logo">
      <h2>Please sign in</h2>
      <input-email v-model="userInfo.email"></input-email>
      <input-password v-model="userInfo.password"></input-password>
      <sign-in
        :disable="disableButton"
        :is-authenticating="isAuthenticating"
        @login="login">
      </sign-in>
      <p class="copyright">Hedwig © 2020</p>
      <modal
        :status="modalStatus"
        title="Warning"
        :description="modalDescription">
      </modal>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import firebase from 'firebase';
import Modal from '@/components/Modal.vue';
import InputEmail from '@/organisms/InputEmail.vue';
import InputPassword from '@/organisms/InputPassword.vue';
import SignIn from '@/organisms/SignIn.vue';

export default {
  components: {
    InputEmail,
    InputPassword,
    SignIn,
    Modal
  },

  data () {
    return {
      userInfo: {
        email: '',
        password: ''
      },
      isAuthenticating: false,
      modalStatus: false,
      modalDescription: ''
    };
  },

  computed: {
    ...mapState('COMMON_STORE', [
      'inputErrors'
    ]),

    /**
     * @return {boolean}
     */
    isEmptyInputExist () {
      return !this.userInfo.password || !this.userInfo.email;
    },

    /**
     * @return {boolean}
     */
    disableButton () {
      return this.inputErrors.email || this.inputErrors.password || this.isEmptyInputExist;
    }
  },

  methods: {
    ...mapActions('COMMON_STORE', [
      'setUserEmail'
    ]),
    /**
     * @return {boolean}
     */
    login () {
      this.isAuthenticating = true;

      firebase.auth().signInWithEmailAndPassword(this.userInfo.email, this.userInfo.password).then(
        ({ user: { email } }) => {
          this.setUserEmail(email);

          this.isAuthenticating = false;

          this.$router.push({
            path: '/'
          });
        },
        ({ message }) => {
          this.isAuthenticating = false;
          this.modalDescription = message;
          this.modalStatus = true;
        }
      );

      return true;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../sass/_variables.scss';

  .login {
    background-color: $main-bg;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    img {
      width: 300px;
      align-self: center;
      margin-bottom: 20px;
    }
    h2 {
      font-size: $header-font-size;
      color: $header;
      font-weight: normal;
    }
    .copyright {
      color: $input-placeholder;
      margin-top: 100px;
    }
  }
</style>
