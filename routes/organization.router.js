const express = require ('express')
const router = express.Router()

const OrganizationController = require('../controller/organization.controller')

//Routes are uls for your API

router.get('/organizations',  OrganizationController.GetOrganizationList);
router.get('/organization/:organization_d',OrganizationController.GetOrganizationById)
router.get('/organization/:organization_id/admins',OrganizationController.GetAdminsByOrganization)
router.post('/organization', OrganizationController.AddOrganization)
router.put('/organization/:organization_id',OrganizationController.UpdateOrganization)
router.delete('/organization/:organization_id',OrganizationController.DeleteOrganization)


module.exports = router
