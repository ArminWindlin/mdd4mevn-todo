<template>
    <div class="my-todos">

        <h1 class="mb-32 h1">My Todos</h1>

        <p class="mb-16 fs-14">Create new todo:</p>

        <!-- Form: todoForm -->
        <div class="w-full p-8 mb-32 rounded-5 border-box bg-light-grey">
            <label class="fs-14 mb-4 inline-block" for="text">Text:</label>
            <input v-model="todoForm.text" placeholder="text" id="text" class="mb-8 block w-256" @keyup.enter="submitTodoForm">
            <c-button @click="submitTodoForm">Submit Form</c-button>
        </div>

        <p class="mb-16 fs-14">Todos:</p>

        <!-- List: todoList -->
        <div>
            <div v-for="todo in todos" :key="todo._id" class="mb-8 p-8 bg-secondary-8 rounded-5">
                <p class="text fs-14 mb-8 p">{{ todo.text }}</p>
                <div class="flex ai-c mb-8 w-256">
                    <label class="fs-14" :for="todo._id">isDone</label>
                    <input :id="todo._id" v-model="todo.isDone" @change="putTodoList(todo)"
                        type="checkbox" :disabled="false">
                </div>
                <c-button @click="deleteTodoList(todo)" class="block" bg="warning" fg="white" v-if="user && user._id === todo.userId">Delete</c-button>
            </div>
        </div>

  </div>
</template>

<script>
import * as httpService from '../httpService.js';
import CButton from '../components/CButton';

export default {
    name: 'my-todos',
    components: {CButton},
    data() {
        return {
            todoForm: {
                text: '',
            },
            todos: [],
        };
    },
    computed: {
        userToken() {
            return this.$store.state.userToken;
        },
        todoTrigger() {
            return this.$store.state.todoTrigger;
        },
        user() {
            return this.$store.state.user;
        },
    },
    watch: {
        todoTrigger() {
            this.getTodoList();
        },
    },
    methods: {
        submitTodoForm() {
            httpService.postTodo(this.todoForm);
            this.todoForm = {
                text: '',
            };
        },
        getTodoList() {
            httpService.getTodos((data) => {
                this.todos = data;
            });
        },
        putTodoList(element) {
            httpService.putTodo(element)
        },
        deleteTodoList(element) {
            httpService.deleteTodo(element._id)
        },
    },
    created() {
        this.getTodoList();
    },
};
</script>

