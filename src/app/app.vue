<template>
  <!-- <h3 @click="onClickName">{{ name }}</h3> -->
  <h3>
    {{name}}
    <span v-if="loading">加载中</span>
    {{user.currentUser}}
  </h3>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
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
    ...mapGetters(['name'])
    ...mapState(['loading','user'])

  },
  created(){
    // this.$store.dispatch('getName')
    this.getName()
    this.getCurrentUser()
  }

  methods:{
    ...mapMutations(['setName']),
    ...mapActions({
      getName:'getName',
      getCurrentUser:'getCurrentUser'
    })
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