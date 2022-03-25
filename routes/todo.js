const express=require("express")

const router =express.Router()

//new task
router.post("/", require("./../controllers/todo").createTask)

//all task
router.get("/", require("./../controllers/todo").getAllTaskInfo)

//one task
router.get("/:userId", require("./../controllers/todo").getTaskInfo)

//for update
router.put("/:userId", require("./../controllers/todo").updateTaskInfo)

//for delete
router.delete("/:userId", require("./../controllers/todo").deleteTaskInfo)


module.exports=router