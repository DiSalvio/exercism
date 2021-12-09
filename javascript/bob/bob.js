export const hey = (message) => {
  let no_letters = message.match(/[a-zA-Z]+/, '') === null
  let all_whitespace = message.replace(/\s+/g, '') === ''
  let yelling = message === message.toUpperCase()
  let question = message.trim().endsWith('?')
  if (all_whitespace) {
    return "Fine. Be that way!"
  }
  if (!no_letters && yelling) {
    if (question) {
      return "Calm down, I know what I'm doing!"
    } else {
      return "Whoa, chill out!"
    }
  } else if (question) {
    return "Sure."
  } else{
    return "Whatever."
  }
};
