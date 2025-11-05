export const getAllTask = (req,res) =>{
    res.send("All items")
}

export const getTask = (req,res)=>{
    // res.send("delete task with id")
    res.json({id:req.params.id})
}

export const createTask =  (req,res) =>{
    // res.send("create tasks")
    res.json(req.body)
}

export const updateTask = (req,res)=>[
    res.send("update task")
]

export const deleteTask=(req,res)=>{
    res.send("delete tasks")
}
