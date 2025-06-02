module.exports = {
  AUTH: {
    OTP: {
      CODE: Math.floor(1000 + Math.random() * 9000).toString(),
      EMAIL_MESSAGE: "تم إرسال رمز التحقق إلى البريد الإلكتروني",
      EMAIL_ERROR: "خطأ في إرسال رمز التحقق",
      EMAIL_EXIST: "يرجي المحاوله بعد خمس دقائق",
      OTP_ERROR: "رمز التحقق غير صالح",
      USER_CREARTE_ERROR: "خطآ في انشاء المستخدم",
      VERIFY_SUCCESS: "تم التحقق من المستخدم بنجاح",
    },
  },
};
