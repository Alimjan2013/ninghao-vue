<template>
  <h3 @click="onClickName">{{ name }}</h3>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
  data() {
    return {
      
    };
  },
  computed:{
    // ...mapState(['name'])
    // ...mapState({
      // appName:'name'
    // })
    // ...mapGetters(['name'])

  },
  methods:{
    ...mapMutations(['setName']),
    onClickName(){
      if(this.$store.state.name ==='WebDev'){
        // this.$store.commit('setName',"web开发者")
        this.setName('web开发者')
      }else{
        // this.$store.commit('setName',"WebDev")
        this.setName('WebDev')
      }
    }
  }
};
</script>

<style>
@import './styles/app.css';
</style>