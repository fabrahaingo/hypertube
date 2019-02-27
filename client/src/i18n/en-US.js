
const flatten = require('flat');


const enUS = {
  watchList: {
    title: 'Watchlist',
    subtitle: 'What are you gonna watch today ?',
    remove: 'remove from list',
    watchnow: 'watch now',
    markseen: 'mark as seen',
    markunseen: 'mark as unseen',
  },
  searchBar: {
    sortBy: 'Sort',
  },
  movies: {
    watch: 'watch now',
    addList: '+ list',
    deleteList: '- list',
    noMoviesYet: 'No movies to show... For now. ;)',
  },
  user: {
    back: 'back',
  },
  users: {
    noUsers: 'No users',
  },
  movie: {
    title: 'movie image',
    year: 'Year: ',
    runtime: 'Runtime: ',
    genre: 'Genre: ',
    director: 'Director: ',
    actors: 'Actors: ',
    awards: 'Awards: ',
    rating: 'Rating: ',
    comments: 'Comments',
    submit: 'submit',
    noComments: 'There is not comments yet !',
    commentInput: 'Say something',
    at: ' at ',
    the: ' the ',
    markSeen: 'mark as seen',
    markUnseen: 'mark as unseen',
    error: 'Oops, seems like the movie you\'re searching for doesnt exist',
    loading: 'loading',
    deleteList: '- list',
  },
  resetPassword: {
    title: 'Hi, if you\'ve forgotten your password, enter your email below!',
    resetForEmail: 'Hi {email}, Enter your new password twice below!',
    email: 'email',
    newPassword: 'New password',
    newPasswordRepeat: 'Repeat password',
    submit: 'Confirm',
    emptyEmail: 'Email field is empty',
    invalidEmail: 'Not a valid Email',
    notAvailableForOAuthAccount: 'You don\'t have a password!',
    hashAndKeyNotCorresponding: 'This link is no longer valid, you must start over',
    noUser: 'No user has this mail',
    emailSendSuccess: 'We have sent you an email with instructions on how to reset your password',
    clearAll: 'start over',
    success: 'Successfully changed your password!',
  },
  changePassword: {
    uppercase: 'Missing uppercase letter',
    lowercase: 'Missing lowercase letter',
    min: 'Need at least 8 characters',
    max: 'No more than 30 characters',
    digits: 'Missing digit',
    spaces: 'Cannot contain spaces',
    notEqual: 'Passwords do not match',
  },
  uppercase: 'Missing uppercase letter',
  lowercase: 'Missing lowercase letter',
  min: 'Need at least 8 characters',
  max: 'No more than 30 characters',
  digits: 'Missing digit',
  spaces: 'Cannot contain spaces',
  notEqual: 'Passwords do not match',
  settings: {
    changePassword: {
      button: 'Change Password',
      submit: 'Confirm',
      currentPassword: 'Current Password',
      newPassword: 'New Password',
      repeatNewPassword: 'Repeat it',
      cancelChangePassword: 'Cancel',
      success: 'Successfully changed your password!',
    },
    update: {
      emptyUsername: 'You cannot have an empty username',
      emptyFirstName: 'You cannot have an empty first name',
      emptyLastName: 'You cannot have an empty last name',
      emptyEmail: 'You cannot have an empty email',
      userAlreadyExists: 'That username is taken',
      emailAlreadyExist: 'That email is already in use',
      badValue: 'Tried to set boolean to other than true/false',
    },
    userName: 'Username:',
    firstName: 'First Name:',
    lastName: 'Last Name:',
    email: 'Email:',
    darkTheme: 'Dark Theme:',
    locale: 'Locale:',
    imageChangeTitle: 'Modify your image',
    valuesChangeTitle: 'Update your information',
  },
  navigation: {
    error: {
      notAuthed: 'You are not permitted to view the page',
    },
  },
  logout: {
    logoutButton: 'Sign out',
  },
  login: {
    tooltip: 'Login',
    userName: 'User name',
    email: 'Email',
    password: 'Password',
    loginButton: 'Sign In',
    provider: {
      google: 'Sign in with Google',
      github: 'Sign in with Github',
      fortytwo: 'Sign in with 42',
      gitlab: 'Sign in with Gitlab',
      reddit: 'Sign in with Reddit',
    },
    forgotPassword: 'Forgot your password?',
    registerTab: 'Register, or login using Oauth',
    success: 'Successfully logged in',
    emptyPasswordOrLogin: 'Missing username or password',
    oAuthAccount: 'this account uses oAuth to login',
    noUser: 'No user has this username',
  },
  token: {
    invalidToken: 'your login token has been invalidated, please login again',
  },
  api: {
    success: {
      login: 'Successfully logged in!',
    },
    error: {
      login: 'Login error',
      'Network Error': 'Failed to connect to API',
      cantConnectToDb: 'Cant reach the API...',
    },
  },
  register: {
    profileIsFilled: 'successfully changed value',
    title: 'REGISTER',
    userName: 'User name',
    email: 'Email',
    firstName: 'First Name',
    lastName: 'Last Name',
    password: 'Password',
    submit: 'Submit',
    profilePicture: 'Change photo',
    addImage: 'Add Photo',
    provider: {
      google: 'Register with Google',
      github: 'Register with GitHub',
      fortytwo: 'Register with 42',
      gitlab: 'Register with Gitlab',
      reddit: 'Register with Reddit',
    },
    userAlreadyRegistered: 'A user with that username or email already exists...',
    passwordTooShort: 'Your password is too short',
    passwordMissDigit: 'You need a digit in your password',
    correctForm: 'Problem with your image',
    emptyFields: 'Missing fields',
    error: {
      passwordLengthTooLong: 'Too long',
      passwordLengthTooShort: 'Too short',
      emailBadFormat: 'Improperly formatted email',
      notNumberOrLetter: 'Invalid Character',
      noUserName: 'please enter a valid username',
      noEmail: 'Please enter your email',
      noFirstName: 'Please enter your first name',
      noLastName: 'Please enter your last name',
      noPassword: 'Enter a valid password',
      missingImage: 'Please upload a valid image',
      formInvalid: 'Please do not forget anything',
    },
  },
  searchbar: {
    selected: {
      popular: 'Seeds',
      alphabetical: 'Alphabet',
      rating: 'Rating',
      date: 'Date',
    },
    popular: 'Seeds',
    alphabetical: 'Alphabet',
    rating: 'Rating',
    date: 'Date',
  },
};

export default flatten(enUS);
