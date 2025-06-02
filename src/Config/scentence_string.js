module.exports = {
    AUTH: {
      OTP: {
        generateCode: () => Math.floor(1000 + Math.random() * 9000).toString(),
        EMAIL_MESSAGE: "تم إرسال رمز التحقق إلى البريد الإلكتروني",
        EMAIL_ERROR: "حدث خطأ أثناء إرسال رمز التحقق",
        EMAIL_EXIST: "يرجى المحاولة مرة أخرى بعد 5 دقائق",
        OTP_ERROR: "رمز التحقق غير صالح",
        USER_CREARTE_ERROR: "حدث خطأ أثناء إنشاء المستخدم",
        VERIFY_SUCCESS: "تم التحقق من المستخدم بنجاح",
      },
      VALIDATION: {
        EMAIL_REQUIRED: "برجاء إدخال البريد الإلكتروني بشكل صحيح",
        OTP_LENGTH: "رمز التحقق يجب أن يكون مكون من 4 أرقام",
        OTP_NUMERIC: "رمز التحقق يجب أن يحتوي على أرقام فقط",
      },
    },
  };
  