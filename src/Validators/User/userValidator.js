const { checkValidation } = require("./../../middlewares");
const { check } = require("express-validator");

const createUserValidation = [
  check("username").not().isEmpty().withMessage("Username is required"),
  check("email").isEmail().withMessage("A valid email is required"),
  check("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),
  check("phone").not().isEmpty().withMessage("Phone is required"),
  check("address").not().isEmpty().withMessage("Address is required"),
  check("boardId").not().isEmpty().withMessage("Board ID is required"),
  check("city").not().isEmpty().withMessage("City is required"),
  checkValidation,
];

module.exports = {
    createUserValidation,
};
