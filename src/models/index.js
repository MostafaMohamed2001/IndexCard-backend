const  mongoose  = require("mongoose");

const userSchema = require("./user.schema");
const adminSchema = require("./admin.schema");
const otpSchema = require("./otp.schema");
const emergencySchema = require("./emergency.shema");
const notificationSchema = require("./notification.schema");
const analysisTypeSchema = require("./analysisType.schema");

module.exports = {
  UserModel: mongoose.model("User", userSchema),
  AdminModel: mongoose.model("Admin", adminSchema),
  OtpModel: mongoose.model("Otp",otpSchema ),
  EmergencyModel: mongoose.model("Emergency", emergencySchema), 
  NotificationModel: mongoose.model("Notification", notificationSchema), 
  AnalysisTypeModel: mongoose.model("AnalysisType", analysisTypeSchema)
};
