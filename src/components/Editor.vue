<template>
    <div id="Editor">
        <b-form-textarea id="textarea-rows" placeholder="First enter your username (sender's username)" rows="12" v-model="text" :disabled="!senderUsername">{{ text }}</b-form-textarea>
    </div>
</template>

<script>
import io from 'socket.io-client';

export default {
    name: 'Editor',
    props : {
        senderUsername : String,
        recieverUsername : String,
        setTextLength: Function
    },
    data(){
        return {
            text : null,
            socket : io('localhost:3001')
        }
    },
    watch:{
        text(){
            this.socket.emit('updatedText',{senderUsername: this.senderUsername,recieverUsername : this.recieverUsername,text: this.text});
            this.setTextLength(this.text.length)
        }
    },
    mounted(){
        this.socket.on('recievedText',(data)=>{
            var a=data.recieverUsername
            var b=this.senderUsername
            if(a===b){
            this.text = data.text;
            }
        })
    }
}
</script>