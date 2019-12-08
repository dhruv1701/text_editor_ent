<template>
    <div id="Header">
        <b-container class="bv-example-row" >
            <b-row>
                <b-col>
                    <div id="header">
                        <div>
                            <h1>TEXT EDITOR</h1>
                        </div>
                        <div>
                            <b-badge variant="info">CHARACTERS COUNT {{ textLength }}</b-badge>
                            <br>
                            <b-input-group prepend="Username" class="mb-2">
                                <b-form-input placeholder="Sender's username" v-model="senderUsername"></b-form-input>
                                <b-form-input placeholder="Reciever's username" v-model="recieverUsername"></b-form-input>
                                <b-input-group-append>
                                    <b-button variant="outline-success" @click="setUsername({senderUsername : senderUsername, recieverUsername : recieverUsername})">Submit</b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <br>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props : {
        setUsername: Function,
        textLength : Number
    },
    data(){
        return {
            senderUsername : null,
            recieverUsername : null
        }
    },
}
</script>

<style scoped>
.bv-example-row{
    text-align: center
}
.mb-2{
    width: 50%;
    left: 25%;
    margin-top:10px;
}
</style>