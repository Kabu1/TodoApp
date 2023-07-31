import axios from 'axios'
const base_url = import.meta.env.VITE_SOCKET_URL


const state = () => {
            console.log('are we here')
            console.log('are we here')

    return  {
        tasks :null
    }
}
//fetch data from the states
const getters = {
    getTasks(state: any){
        console.log('are we here')

    if(state.tasks == null && state.tasks === undefined){
        return state.tasks
    }
        return null
        }
    };

//used to change the state of the tasks, changes the value of the states
const mutations  = {

     SET_TASKS_STATE(state : any , payload: any){
        console.log('are we here')

        state.tasks = payload
     }
};

const actions = {
    
    async FetchTasks(context : any){
        console.log('are we here', base_url)
        try {
            // const response = await axios.get('${process.env.VITE_SOCKET_URL}/tasks');
            const response = await axios.get(`${base_url}tasks`); // Use the environment variable

            console.log('response', response)
            context.commit('SET_TASKS_STATE', response.data)
        } catch (error) {
            console.log('error', error);
            
        }
    }
};

export default {
    namespaced : true,
    state,
    getters,
    mutations,
    actions
};