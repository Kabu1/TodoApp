import Task from "../../Models/Task"

export default class TasksController{
    public async index({response}){
        // fetch task from the db
        try {
            const tasks = await Task.query().paginate(1, 10);
            console.log('TASKS', tasks)
            // return the json response
            return response.status(200).json({
                messages: ['Successfully fetched your latest tasks'],
                data: tasks
            })
        } catch (error) {
            return response.status(200).json({
                messages: ['Error'],
                data: {}
            })
            
        }
       
    }
    public async store({request, response}){
        // grab the request
        const taskData = request.body()
        console.log('taskData', taskData, request.body);
        // create a task
        try {
            const newTask = await Task.create({title: taskData.title, task: taskData.task })
            console.log('newTask', newTask);

                    // return response
            response.status(201).json({
                messages: ['Task Successfully Created'],
                data: newTask
            })
        } catch (error) {
            response.status(201).json({
                messages: ['Please fill all the required fields'],
                data: {}
            })
            
        }
    }
}


// export default class RolesController {

// 	public async index({ response } : HttpContextContract)
// 	{
//     const result = await (new RoleRepository()).index();

//     return response.status(result.statusCode).json(result);
//   }
// }