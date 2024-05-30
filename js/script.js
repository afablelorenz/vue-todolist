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
        },
        removeTask: function(index){
            this.toDoList.splice(index,1);
        }
    }
}).mount('#app')