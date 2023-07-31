import axios from 'axios'


const state = () => {
    return  {
        tasks :null
    }
}
//fetch data from the states
const getters = {
    getTasks(state: any){
    if(state.tasks == null && state.tasks === undefined){
        return state.tasks
    }
        return null
        }
    };

//used to change the state of the tasks, changes the value of the states
const mutations  = {
     SET_TASKS_STATE(state : any , payload: any){
        state.tasks = payload
     }
}

const actions = {
    async FetchTasks(context : any){
        try {
            const response = await axios.get('${process.env.VITE_SOCKET_URL}/tasks');
            context.commit('SET_TASKS_STATE', response.data)
        } catch (error) {
            console.log('error', error);
            
        }
    }
}

export default {
    namespaced : true,
    state,
    getters,
    mutations,
    actions
}