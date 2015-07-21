exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['dist/spec.button.js', 'dist/spec.checkbox.js'],
  capabilities: {'browserName' : 'chrome'},
  directConnect:false
}