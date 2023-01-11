const curdSchema = require('../Models/curdSchema')


const getUser = async(req, resp) => {
    try {
        console.log("GET request");
        const crud = await curdSchema.find();
        resp.json(crud);  
    }
    catch (err) {
        resp.send("Error = " +err);
    }
};

const createUser = async(req,res) =>{
    console.log(req.body);

const curdData = new curdSchema({
    name : req.body.name,
    email : req.body.email,
    
});
try{
    const addRes = await curdData.save();
    res.json({
      status: "sucessful",
      data: addRes,  
    })
}

catch (err){
    res.send(
        {
            status : "failure",
            data : "error Occure" +err.message
        }

    );
}
};





const updateUser =  async (req, resp) => {
    console.log(req.params.id);
    try {
    const crud = await curdSchema.findByIdAndUpdate(req.params.id, req.body,{
    new: true,
    runValidators: true,
});
resp.json(crud);
    }
    catch (err) {
        resp.send("Error = " +err);
    }
};

const deleteUser = async (req, res) => {
    await curdSchema.findOneAndDelete(req.params.id);
    try {
        res.status(204).send().json({
            status: "success",
            data: {},
        });
    }
    catch (err) {
        res.status(500).json({
            status: "Failed",
            message: err,
        });
    }

};




module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}