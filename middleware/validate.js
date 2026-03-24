const validator = require("../helpers/validate");

const saveUser = (req, res, next) => {
    const validationRule = {
        firstName: "required|string",
        lastName: "required|string",
        email: "required|email",
        password: "required|string",
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
        res.status(412).send({
            success: false,
            message: "Validation failed",
            data: err,
        });
        } else {
        next();
        }
    });
};

const saveCharacter = (req, res, next) => {
    const validationRule = {
        charName: "required|string",
        charRace: "required|string",
        charClass: "required|string",
        charLevel: "required|integer",
        charAlignment: "required|string",
        charBackground: "required|string",
        charAge: "integer",
        charHeight: "integer",
        charWeight: "integer",
        charEyes: "string",
        charSkin: "string",
        charBonds: "string",
        charFlaws: "string",
        charIdeals: "string",
        charPersonalityTraits: "string",

        hp: "required|integer",
        ac: "required|integer",
        str: "required|integer",
        dex: "required|integer",
        con: "required|integer",
        int: "required|integer",
        wis: "required|integer",
        cha: "required|integer",
    };
    validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
        res.status(412).send({
            success: false,
            message: "Validation failed",
            data: err,
        });
        } else {
        next();
        }
    });
};

module.exports = {
    saveUser,
    saveCharacter,
};
