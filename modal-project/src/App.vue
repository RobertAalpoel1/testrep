<template>
  <h1>{{ title }}</h1>
  <p>welcome...</p>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Ninja giveaway</h1>
      <p>Grab your ninja swag for half price</p>
    </Modal>
  </teleport>
  
  <teleport to=".modals" v-if="showModalTwo">
    <modal @close="toggleModalTwo">
      <slot>
        <h1>This is a new modal</h1>
        <p>With new text to</p>
      </slot>
    </modal>
  </teleport>

  <button @click="toggleModal">open modal</button>
  <button @click="toggleModalTwo">open modal 2</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My first Vue app',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;

}
</style>
