# spectangular-demo
Demo implementation of e2e tests with spectangular

# Spectanglar
Spectangular is a library which makes it easier to write e2e tests in protractor for Angular applications.

[Spectangular github](https://github.com/schubergphilis/spectangular)

## Demo angular-material

`npm install`

# Chrome with direct connect

Configure conf.js 

`directConnect:true` 

Chrome is the default browser

# Firefox with webdriver

Configure conf.js

`
  capabilities: {'browserName' : 'firefox'},
  directConnect:false
`

Installation of the webdriver manager for protractor
`npm run-script up-driver`

Run in a separate console in order to start the webdriver manager
`npm run-script driver`

# Run the tests
`grunt test`

