//Requiring mongoose package
var mongoose=require("mongoose");

// Schema
var formSchema=new mongoose.Schema({
	branchname : String,
	branchmandal : String,
    branchdistrict : String
});

module.exports=mongoose.model("Form",formSchema);
