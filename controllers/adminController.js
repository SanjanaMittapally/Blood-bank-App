const userModel = require("../models/userModel");

const getDonarsListController = async (req, res) => {
    try {
        const donarData = await userModel
            .find({
                role: 'donar'
            })
            .sort({
                createdAt: -1
            })

        return res.status(200).send({
            success: true,
            totalCount: donarData.length,
            message: "Donar List fetched successfully",
            donarData,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error In Donar List API",
            error,
        });
    }
}


const getHospitalListController = async (req, res) => {
    try {
        const hospitalData = await userModel
            .find({
                role: 'hospital'
            })
            .sort({
                createdAt: -1
            })

        return res.status(200).send({
            success: true,
            totalCount: hospitalData.length,
            message: "Hospital List fetched successfully",
            hospitalData,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error In Hospital List API",
            error,
        });
    }
}


const getOrgListController = async (req, res) => {
    try {
        const orgData = await userModel
            .find({
                role: 'organisation'
            })
            .sort({
                createdAt: -1
            })

        return res.status(200).send({
            success: true,
            totalCount: orgData.length,
            message: "Organisation List fetched successfully",
            orgData,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error In Organisation List API",
            error,
        });
    }
}

const deleteDonarController = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        return res.status(200).send({
            success: true,
            message: "Donar Record Deleted successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error In deleting Donar API",
            error,
        });
    }
};


const deleteHospitalController = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        return res.status(200).send({
            success: true,
            message: "Hospital Record Deleted successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error In deleting Hospital API",
            error,
        });
    }
}

const deleteOrgController = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        return res.status(200).send({
            success: true,
            message: "Organisation Record Deleted successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error In deleting Organisation API",
            error,
        });
    }
}

module.exports = {
    getDonarsListController,
    getHospitalListController,
    getOrgListController,
    deleteDonarController,
    deleteHospitalController,
    deleteOrgController
}