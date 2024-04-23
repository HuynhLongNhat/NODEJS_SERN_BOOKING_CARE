import handbookService from "../services/handbookService";
let createHandbook = async (req, res) => {
    try {
        let infor = await handbookService.createHandbook(req.body);
        return res.status(200).json(infor);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from the server ",
        });
    }
};

let getAllHandbook = async (req, res) => {
    try {
        let infor = await handbookService.getAllHandbook();
        return res.status(200).json(infor);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from the server ",
        });
    }
};

let getHandbookById = async (req, res) => {

    try {
        let infor = await handbookService.getHandbookById(
            req.query.id

        );
        return res.status(200).json(infor);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from the server ",
        });
    }
};
module.exports = {
    createHandbook: createHandbook,
    getAllHandbook: getAllHandbook,
    getHandbookById: getHandbookById,
};
