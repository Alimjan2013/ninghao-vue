<template>
  <h3>{{ name }}</h3>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      
    };
  },
  computed:{
    ...mapState(['name'])
  }
};
</script>

<style>
@import './styles/app.css';
</style>