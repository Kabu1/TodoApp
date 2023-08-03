import Api from './api'

export default {
    fetch() {
        return Api().get('tasks');
    },
    create(payload: any) {
        return Api().post('tasks/new', payload)
    },
    update(payload : any){
        return Api().patch(`tasks/progress/${payload.id}`, payload.data)
         
    },
    delete(payload : any) {
        console.log('payload', payload)
        return Api().delete(`tasks/delete/${payload.id}`)
    }

}