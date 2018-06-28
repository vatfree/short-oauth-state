OAuth._stateParam = function (loginStyle, credentialToken, redirectUrl, extras) {
  return setStateParam(loginStyle, credentialToken, redirectUrl, extras)
}

OAuth._stateParamAsync = function (loginStyle, credentialToken, redirectUrl, extras, callback) {
  setStateParam(loginStyle, credentialToken, redirectUrl, extras, callback)
}

function setStateParam (loginStyle, credentialToken, redirectUrl, extras, callback) {
  let state = {
    loginStyle,
    credentialToken,
    isCordova: Meteor.isCordova
  };
  if (typeof extras === 'function') {
    callback = extras;
  }
  else if (extras) {
    for (let key in extras) {
      state[key] = extras[key];
    }
  }

  if (loginStyle === 'redirect') {
    state.redirectUrl = redirectUrl || ('' + window.location)
  }

  let id = Random.id()

  Meteor.call('ulion:short-oauth-state.setState', id, state, function (err) {
    if (callback) {
      callback(err, id)
    } else if (err) {
      console.error(err)
    }
  })

  return id
}