const isPhoneNumberValid = (phoneNumber) => {
    const regexWithCountryCode = /^(\+91)?[6-9]\d{9}$/;
    const regexWithoutCountryCode = /^[6-9]\d{9}$/;
  
    return (
      //   REUSABLE_PHONE_NUMBERS.includes(phoneNumber) ||
      regexWithCountryCode.test(phoneNumber) ||
      regexWithoutCountryCode.test(phoneNumber)
    );
  };
  
  
  
  module.exports = {
    isPhoneNumberValid
  };