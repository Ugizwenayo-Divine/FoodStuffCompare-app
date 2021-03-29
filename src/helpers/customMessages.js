const responseMessage = {
    userSignupSuccess: 'Your account has been created successfully!',
    alreadyExistEmailOrUsername: 'The user with the provided email or username already exists',
    invalidFirstname:
      'The first name should consist of alphabets and at least 3 minimum characters, without whitespaces or special characters',
    invalidLastname:
      'The last name should consist of alphabets alphabets and at least 3 minimum characters, without whitespaces or special characters',
    invalidUsername:
      'Username should consists of alphabets, numbers, 3 minimum characters and special characters like @._-, without whitespace',
    invalidEmail: 'Email should look like example@email.com',
    invalidGender: 'Gender should be male or female',
    invalidPassword:
      'Password should consists of alphabets, capital letter, special characters, numbers and at least 8 characters minimum',
    invalidPhoneNumber:
      'PhoneNumber should consists of numbers, without whitespace or special characters and start with 078',
    invalidType: 'user type must be client or enumerator',
    tokenMissing: 'the token is missing',
    tokenInvalid: 'the token is invalid',
    notAllowed: 'you are not allowed for this service',
    notUserExist: 'the user does not exist',
    wrongcredentials: 'the email or password is incorrect',
    invalidName: 'The name must not be empty and must be greater than 3',
    invalidCategory: 'the category must not be empty and must be greater than 3',
    invalidPrice: 'The price must not be empty and must be greater than 3',
    noproducts:'The products not exist', 
    productExist: 'The product already exists',      
}
export default responseMessage;