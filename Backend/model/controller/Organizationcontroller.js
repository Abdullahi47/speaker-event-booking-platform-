const imagemode = require("../organization");

// CREATE
const create = async (req, res) => {
    try {
        const newimage = await imagemode.create({
            name: req.body.name,
            image: req.file.filename
        });

        res.status(201).json(newimage);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
};


// GET
const get = async (req, res) => {
    try {
        const images = await imagemode.find();

        res.status(200).json(images);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
};


// PUT
const update = async (req, res) => {
    try {
        const data = {
            name: req.body.name
        };

        // Haddii image cusub la soo diro
        if (req.file) {
            data.image = req.file.filename;
        }

        const updatedimage = await imagemode.findByIdAndUpdate(
            req.params.id,
            data,
            { new: true }
        );

        res.status(200).json(updatedimage);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
};


// DELETE
const remove = async (req, res) => {
    try {
        const deletedimage = await imagemode.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json({
            message: "Image deleted successfully",
            data: deletedimage
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
};


module.exports = {
    create,
    get,
    update,
    remove
};
