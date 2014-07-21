proxy-provider
==============

## this node module provides the current being proxy used by the application if any.

### Requires ember-cli >= 0.0.37, which is currently unreleased. ([Added here](https://github.com/stefanpenner/ember-cli/pull/1097))

It does NOT add body-parser if you are using the proxy server.


### Installation / Usage

From within your Ember CLI application (must be > 0.0.36), run the following:

```bash
npm install --save-dev proxy-provider
```
#### After installing require the package
 
#### Example:

#### var proxy_method = require('ember-cli-body-parser');

#### var proxy_url= proxy_method.prototype.get_proxy() ;   (will give the proxy being used)


#### Stay tuned for more versions and other npm plugins.

