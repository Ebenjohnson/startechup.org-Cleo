
const  Organization  = require("../models/organization.model")


const Create = async (data) => {
   try {
      const organization  =await Organization.create(data)
   return organization
   } catch (error) {
      throw new Error(error)
   }
   
}

const Find = async () => {
	try {
		const organization = await Organization.find({});
		return organization;
	} catch (error) {
		throw Error(error);
	}
};


const FindOne = async (query) => {
try {
   const organization  =await Organization.findOne(query)
    return organization
} catch (error) {
   throw error
}
 }

const FindOneAndPopulate = async(query,populate_field)=>{
   try {
      const organization = await organization.findOne(query).populate(populate_field)
      const admins =organization.admins
      return admins 
   } catch (error) {
      throw error
   }

}

 const FindOneAndUpdate = async (filter,data) => {
   try {
      const organization  =await Organization.findOneAndUpdate(filter,{...data})
      return organization
   } catch (error) {
      throw errow;
   }
 
 }

 const DeleteOne = async (filter) => {
   try {
      const organizations  =await Organization.deleteOne(filter)
      return organizations
   } catch (error) {
      throw error
   }

 }

module.exports ={
    Find,
    FindOne,
    Create,
    FindOneAndPopulate,
    FindOneAndUpdate,
    DeleteOne
}