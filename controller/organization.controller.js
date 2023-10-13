const OrganizationService = require('../service/organization.service')

// creating Organization API for the node APP
const GetOrganizationList = async (req, res, next) => {
	try {
		const organizations = await OrganizationService.Find({});

		return res.status(200).json({
			message: 'Ok',
			data: organizations,
		});
	} catch (error) {
		return next(new Error(error.message));
	}
};

const GetOrganizationById = async (req, res, next) => {
	try {
		const { organization_id } = req.params;

		const organization = await OrganizationService.FindOne({
			_id : organization_id
		});
		if (!organization) {
			return res.status(404).json({
				message: 'Data Not Found',
			});
		}

		return res.status(200).json({
			message: 'Ok',
			data: organization,
		});
	} catch (error) {
		return next(new Error(error.message));
	}
};


const GetAdminsByOrganization = async(req,res,next) =>{
	const {organization_id} = req.params
	try {
	
		const admins = await OrganizationService.FindOneAndPopulate({
			_id : organization_id,},
			"admins",
		)
		
		return res.status(200).json({
			message : "OK",
			data: admins
		})

} catch (error) {
	return next(new Error(error.message))
}
}

const AddOrganization = async (req, res, next) => {
	try {
		const {
			org_name,
			org_description,
			org_country,
			org_city,
			org_picture,
			admins,
		} = req.body;

		const existing_organization = await OrganizationService.FindOne({
			org_name,
		});
		if (existing_organization) {
			return res.status(409).json({
				message: 'Data exists',
			});
		}

		const new_org = await OrganizationService.Create({
			org_name,
			org_description,
			org_country,
			org_city,
			org_picture,
			admins,
		});

		return res.status(200).json({
			message: 'Ok',
			data: new_org,
		});
	} catch (error) {
		return next(new Error(error.message));
	}
};

const UpdateOrganization = async (req, res, next) => {
	try {
		const { organization_id } = req.params;
		const {
			org_name,
			org_description,
			org_country,
			org_city,
			org_picture,
			admins,
		} = req.body;

		const organization = await OrganizationService.FindOne({
			_id: organization_id,
		});
	
		if (!organization) {
			return res.status(404).json({
				message: 'Data Not Found',
			});
		}

		update_doc =await OrganizationService.FindOneAndUpdate(
			{ _id: organization_id },
			{
				org_name,
				org_description,
				org_country,
				org_city,
				org_picture,
				admins,
			}
		);

		const newdoc = await OrganizationService.FindOne({
			_id : update_doc.id
		})

		return res.status(200).json({
			message: 'Ok',
			data: newdoc,
		});
		
	} catch (error) {
		return next(error);
		
		
	}
};


const DeleteOrganization = async (req,res,next) =>{
		
    try {
        const { organization_id } = req.params;
		

       const organization= await OrganizationService.FindOne({
            _id : organization_id,
        })
       
        if (!organization){
            return res.status(404).json({
                message : 'Data Not Found',
            })

        }
		

       const deletedOrganization =await OrganizationService.DeleteOne({      _id : organization_id })
       
        return res.status(200).json({
            message: `${deletedOrganization.deletedCount} deleted`,
            data : deletedOrganization,
            
        })

		
    } catch (error) {
        return next(new Error(error.message));
        
    }
	
    
}


module.exports ={
    GetOrganizationList,
	GetOrganizationById,
	AddOrganization,
	UpdateOrganization,
	DeleteOrganization,
	GetAdminsByOrganization,

}