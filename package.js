Package.describe({
  name: 'vatfree:short-oauth-state',
  version: '0.1.2',
  summary: 'make oauth state short in url',
  git: 'https://github.com/vatfree/short-oauth-state',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('2.3')
  api.use('ecmascript')
  api.use('mongo', 'server')
  api.use('oauth')
  api.use('random')

  api.addFiles('server.js', 'server')
  api.addFiles('client.js', 'client')
})
