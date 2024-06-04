<template>
  <button @click="handleClick" class="bg-black w-6" >{{ label }}</button>
</template>

<script>
import apiCliente from '@/services/api';

export default {
  name: 'BotonInteractivo',
  props: {
    label: {
      type: String,
      required: true,
      default: "Boton de Prueba"
    },
    action: {
      type: Function,
      required: true
    }
  },
  methods: {
    async handleClick() {
      try {
        const resp = await apiCliente.get('/');
        console.log(resp)
      } catch (error) {
        console.log("Error: ", error)
      }
    }
  }
}
</script>

<style scoped>
/* button {
  background-color: aqua;
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
} */
</style>
