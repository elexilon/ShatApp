// See: https://github.com/gcanti/tcomb-form-native
import t from 'tcomb-form-native'

const Person = t.struct({
  name: t.String,
  email: t.String,
  password: t.String,
});

export const formOptions = {
  fields: {
    email: {
      keyboardType: 'email-address', // change keyboard layout to email input
      autoCapitalize: 'none', // start email addresses with lower-case
    },
    password: {
      secureTextEntry: true,  // mask password input
    }
  }
}

export default Person;
