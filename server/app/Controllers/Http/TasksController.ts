import Task from "../../Models/Task"

export default class TasksController{
    public async index({response}){
        // fetch task from the db
        const tasks = await Task.query().paginate(1, 10);
        console.log('TASKS', tasks)
        // return the json response
        return response.status(200).json({
            messages: ['Successfully fetched your latest tasks'],
            data: tasks
        })
    }
}


// export default class RolesController {

// 	public async index({ response } : HttpContextContract)
// 	{
//     const result = await (new RoleRepository()).index();

//     return response.status(result.statusCode).json(result);
//   }
// }