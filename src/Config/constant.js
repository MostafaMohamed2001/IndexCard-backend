module.exports = {
  AUTH: {
    COMMON:{
      EMAIL_ERROR: "حدث خطأ أثناء إرسال رمز التحقق",
      USER_CREARTE_ERROR: "حدث خطأ أثناء إنشاء المستخدم",
    },
    OTP: {
      generateCode: () => Math.floor(1000 + Math.random() * 9000).toString(),
      EMAIL_MESSAGE: "تم إرسال رمز التحقق إلى البريد الإلكتروني",
      EMAIL_EXIST: "تم إرسال رمز تحقق مسبقًا، الرجاء الانتظار 30 ثانية ثم المحاولة مجددًا",
      OTP_ERROR: "رمز التحقق غير صالح",
      OTP_EXPIRED: "انتهت صلاحية رمز التحقق، يرجى طلب كود جديد",
      VERIFY_SUCCESS: "تم التحقق من المستخدم بنجاح",
    },
    LOGIN:{
      EMAIL_NOT_EXISIT:"هذا الحساب غير مسجل يرجي إنشاء حساب أولا"
    },
    VALIDATION: {
      EMAIL_REQUIRED: "برجاء إدخال البريد الإلكتروني بشكل صحيح",
      OTP_LENGTH: "رمز التحقق يجب أن يكون مكون من 4 أرقام",
      OTP_NUMERIC: "رمز التحقق يجب أن يحتوي على أرقام فقط",
    },
  },
};
