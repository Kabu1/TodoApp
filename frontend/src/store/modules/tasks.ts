// const base_url = import.meta.env.VITE_SOCKET_URL
import TaskService from '@/apis/taskService'

const state = () => {
    return  {
        tasks :null
    }
}
//fetch data from the states

const getters = {
    GetTasks(state: any) {
        if (state.tasks !== null && state.tasks !== undefined) {
            return state.tasks.data
        }
        return null
    }
};
//used to change the state of the tasks, changes the value of the states
const mutations  = {

     SET_TASKS_STATE(state : any , payload: any){
        state.tasks = payload
     }
};

const actions = {
    
    async FetchTasks(context : any){
        try {
            // const response = await axios.get('${process.env.VITE_SOCKET_URL}/tasks');
            const response = await TaskService.fetch(); // Use the environment variable

            context.commit('SET_TASKS_STATE', response.data)
        } catch (error) {
            console.log('error', error);
            
        }
    },
       
    async MarkTaskProgress(context : any, payload: any){
        try {
            // const response = await axios.get('${process.env.VITE_SOCKET_URL}/tasks');
            const response = await TaskService.update(payload); // Use the environment variable

            console.log('response', response)
            context.dispatch('FetchTasks')
        } catch (error) {
            console.log('error', error);
            
        }
    },
         
    async DeleteTask(context : any, payload: any){
        try {
            // const response = await axios.get('${process.env.VITE_SOCKET_URL}/tasks');
            const response = await TaskService.delete(payload); // Use the environment variable

            console.log('response', response)
            context.dispatch('FetchTasks')
        } catch (error) {
            console.log('error', error);
            
        }
    },
    async CreateTask(context : any, payload: any){
        try {
            // const response = await axios.get('${process.env.VITE_SOCKET_URL}/tasks');
            const response = await TaskService.create(payload); // Use the environment variable

            console.log('response', response)
            context.dispatch('FetchTasks')
        } catch (error) {
            console.log('error', error);
            
        }
    },
    
};

export default {
    namespaced : true,
    state,
    getters,
    mutations,
    actions
};