We always need a *package.json* file whenever we need to download any third party npm packages

when we run npm install on any package, it installs form the npm registry and downloads in the node modules

package-lock.json is automatically generated whenever the node modules folder is modified or made.

in package.json, there is ^ in dependency version so that means if there is an update in the package version, node will update it in case another person tries to duplicate our project.
this is where package-lock.json comes in as it specifies the exact version of the dependency we are using so that decreases a lot of confusion in case of collaboration.
