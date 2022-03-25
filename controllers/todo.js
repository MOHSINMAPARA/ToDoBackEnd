const UserModel =require("./../models/todo")


        exports.createTask = async (req,res) => {
            try {

                const newTask = new UserModel(req.body)

                res.status(200).json(await newTask.save())

            }catch(err){
                    
                res.status(500).json({error:err})

            }


        }
        exports.getAllTaskInfo= async (req,res) => {
        
            try {
        
                const task=await UserModel.find()
        
                res.status(200).json(task)
        
            }catch(err){
                
                res.status(500).json({error:err})
        
            }
        
        
                }
        exports.getTaskInfo= async (req,res) => {
        
            try {
                
                const task= await UserModel.find({_id:req.Params.userId})
                
                res.status(200).json(task)
                
            }catch(err){
                        
                res.status(500).json({error:err})
                
            }
                
                
            }

            exports.updateTaskInfo=  (req,res) => {
                                                                      
                UserModel.findOneAndUpdate({_id:req.params.userId},req.body,{new:true},(err,data)=>{
                    if(err){
                            res.status(500).json({error:err})
                    }else{
                            res.status(200).json(data)
    
                    }}  )}                                                                                   
                                                                                
        exports.deleteTaskInfo=  (req,res) => {
                                                                      
            UserModel.findOneAndDelete({_id:req.params.userId},{new:true},(err,data)=>{
                if(err){
                        res.status(500).json({error:err})
                }else{
                        res.status(200).json(data)

                }}  )}                                                                                          
                                                                    
                                                                                
                                                                                        
        

