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
                },],
                newTaskInput : '',
        }
            
    },
    methods: {
        invertDone: function(index){
            this.toDoList[index].done = !this.toDoList[index].done;
        },
        removeTask: function(index){
            this.toDoList.splice(index,1);
        },
        addNewTask: function(newTask){
            let newTaskObject = {
                text: newTask,
                done: false,
            }

            this.toDoList.push(newTaskObject);
            this.newTaskInput = '';
        }
    }
}).mount('#app')