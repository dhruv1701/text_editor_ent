<template>
  <div id="app">
    <Header :setUsername="setUsername" :textLength="textLength" />
    <Editor :senderUsername="senderUsername" :recieverUsername="recieverUsername" :setTextLength="setTextLength" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Editor from './components/Editor.vue'


export default {
  name: 'app',
  components: {
    Header,
    Editor,
  },
  data(){
    return{
      senderUsername:null,
      recieverUsername:null,
      textLength : 0
    } 
  },
  methods : {
    setUsername(data){
      this.senderUsername=data.senderUsername
      this.recieverUsername=data.recieverUsername
    },
    setTextLength(data){
      this.textLength=data
    }
  }
}
</script>

<style>
#app {

}
</style>
