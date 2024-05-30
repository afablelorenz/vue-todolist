const { createApp } = Vue;

createApp({
    data(){
        return{
            toDoList: [
                {
                    text: 'Pane',
                    done: false,
                },
                {
                    text: 'Formaggio',
                    done: true,
                },
                {
                    text: 'Pasta',
                    done: false,
                }]
        }
            
    },
    methods: {
        invertDone: function(index){
            this.toDoList[index].done = !this.toDoList[index].done;
        }
    }
}).mount('#app')