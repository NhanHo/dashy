"use strict";(self.webpackChunkdashy=self.webpackChunkdashy||[]).push([[360],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,m=p["".concat(l,".").concat(c)]||p[c]||h[c]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1416:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},l="Troubleshooting",u={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"This document contains common problems and their solutions.",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",editUrl:"https://github.com/Lissy93/dashy/edit/gh-pages/docs/docs/troubleshooting.md",version:"current",frontMatter:{},sidebar:"dashySidebar",previous:{title:"Management",permalink:"/docs/management"},next:{title:"User Showcase",permalink:"/docs/showcase"}},d=[{value:"<code>Refused to Connect</code> in Modal or Workspace View",id:"refused-to-connect-in-modal-or-workspace-view",children:[{value:"NGINX",id:"nginx",children:[]},{value:"Caddy",id:"caddy",children:[]},{value:"Apache",id:"apache",children:[]}]},{value:"Yarn Error",id:"yarn-error",children:[]},{value:"Auth Validation Error: &quot;should be object&quot;",id:"auth-validation-error-should-be-object",children:[]},{value:"DockerHub <code>toomanyrequests</code>",id:"dockerhub-toomanyrequests",children:[]},{value:"Config Validation Errors",id:"config-validation-errors",children:[]},{value:"Node Sass does not yet support your current environment",id:"node-sass-does-not-yet-support-your-current-environment",children:[]},{value:"Error: Cannot find module &#39;./_baseValues&#39;",id:"error-cannot-find-module-_basevalues",children:[]},{value:"Invalid Host Header while running through ngrok",id:"invalid-host-header-while-running-through-ngrok",children:[]},{value:"Warnings in the Console during deploy",id:"warnings-in-the-console-during-deploy",children:[]},{value:"Status Checks Failing",id:"status-checks-failing",children:[]}],h={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"This document contains common problems and their solutions."),(0,o.kt)("h2",{id:"refused-to-connect-in-modal-or-workspace-view"},(0,o.kt)("inlineCode",{parentName:"h2"},"Refused to Connect")," in Modal or Workspace View"),(0,o.kt)("p",null,"This is not an issue with Dashy, but instead caused by the target app preventing direct access through embedded elements. It can be fixed by setting the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options"},(0,o.kt)("inlineCode",{parentName:"a"},"X-Frame-Options"))," HTTP header set to ",(0,o.kt)("inlineCode",{parentName:"p"},"ALLOW [path to Dashy]")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"SAMEORIGIN"),", as defined in ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7034"},"RFC-7034"),". These settings are usually set in the config file for the web server that's hosting the target application, here are some examples of how to enable cross-origin access with common web servers:"),(0,o.kt)("h3",{id:"nginx"},"NGINX"),(0,o.kt)("p",null,"In NGINX, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://nginx.org/en/docs/http/ngx_http_headers_module.html"},(0,o.kt)("inlineCode",{parentName:"a"},"add_header"))," module within the app block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"server {\n  ...\n  add_header X-Frame-Options SAMEORIGIN always;\n}\n")),(0,o.kt)("p",null,"Then reload with ",(0,o.kt)("inlineCode",{parentName:"p"},"service nginx reload")),(0,o.kt)("h3",{id:"caddy"},"Caddy"),(0,o.kt)("p",null,"In Caddy, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://caddyserver.com/docs/caddyfile/directives/header"},(0,o.kt)("inlineCode",{parentName:"a"},"header"))," directive."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"header {\n  X-Frame-Options SAMEORIGIN\n}\n")),(0,o.kt)("h3",{id:"apache"},"Apache"),(0,o.kt)("p",null,"In Apache, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/current/mod/mod_headers.html"},(0,o.kt)("inlineCode",{parentName:"a"},"mod_headers"))," module to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Frame-Options")," in your config file. This file is usually located somewhere like `/etc/apache2/httpd.conf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Header set X-Frame-Options: "ALLOW-FROM http://[dashy-location]/" \n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"yarn-error"},"Yarn Error"),(0,o.kt)("p",null,"For more info, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/issues/1"},"Issue #1")),(0,o.kt)("p",null,"First of all, check that you've got yarn installed correctly - see the ",(0,o.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/install"},"yarn installation docs")," for more info."),(0,o.kt)("p",null,"If you're getting an error about scenarios, then you've likely installed the wrong yarn... (you're ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yarnpkg/yarn/issues/2821"},"not")," the only one!). You can fix it by uninstalling, adding the correct repo, and reinstalling, for example, in Debian:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sudo apt remove yarn")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sudo apt update && sudo apt install yarn"))),(0,o.kt)("p",null,"Alternatively, as a workaround, you have several options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Try using ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/get-npm"},"NPM")," instead: So clone, cd, then run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run build")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"npm start")),(0,o.kt)("li",{parentName:"ul"},"Try using ",(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Docker")," instead, and all of the system setup and dependencies will already be taken care of. So from within the directory, just run ",(0,o.kt)("inlineCode",{parentName:"li"},"docker build -t lissy93/dashy .")," to build, and then use docker start to run the project, e.g: ",(0,o.kt)("inlineCode",{parentName:"li"},"docker run -it -p 8080:80 lissy93/dashy")," (see the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Lissy93/dashy/blob/master/docs/deployment#deploy-with-docker"},"deploying docs")," for more info)")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"auth-validation-error-should-be-object"},'Auth Validation Error: "should be object"'),(0,o.kt)("p",null,"In V 1.6.5 an update was made that in the future will become a breaking change. You will need to update you config to reflect this before V 2.0.0 is released. In the meantime, your previous config will continue to function normally, but you will see a validation warning. The change means that the structure of the ",(0,o.kt)("inlineCode",{parentName:"p"},"appConfig.auth")," object is now an object, which has a ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," property."),(0,o.kt)("p",null,"For more info, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/discussions/177"},"this announcement"),"."),(0,o.kt)("p",null,"You can fix this by replacing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"auth:\n- user: xxx\n  hash: xxx\n")),(0,o.kt)("p",null,"with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"auth:\n  users:\n  - user: xxx\n    hash: xxx\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"dockerhub-toomanyrequests"},"DockerHub ",(0,o.kt)("inlineCode",{parentName:"h2"},"toomanyrequests")),(0,o.kt)("p",null,"This situation relates to error messages similar to one of the following, returned when pulling, updating or running the Docker container from Docker Hub."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Continuing execution. Pulling image lissy93/dashy:release-1.6.0 \nerror pulling image configuration: toomanyrequests\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"You have reached your pull rate limit. You may increase the limit by authenticating and upgrading: https://www.docker.com/increase-rate-limit\n")),(0,o.kt)("p",null,"When DockerHub returns one of these errors, or a ",(0,o.kt)("inlineCode",{parentName:"p"},"429")," status, that means you've hit your rate limit. This was ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/blog/scaling-docker-to-serve-millions-more-developers-network-egress/"},"introduced")," last year, and prevents unauthenticated or free users from running docker pull more than 100 times per 6 hours.\nYou can ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/blog/checking-your-current-docker-pull-rate-limits-and-status/"},"check your rate limit status")," by looking for the ",(0,o.kt)("inlineCode",{parentName:"p"},"ratelimit-remaining")," header in any DockerHub responses. "),(0,o.kt)("h4",{id:"solution-1---use-an-alternate-container-registry"},"Solution 1 - Use an alternate container registry"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dashy is also availible through GHCR, which at present does not have any hard limits. Just use ",(0,o.kt)("inlineCode",{parentName:"li"},"docker pull ghcr.io/lissy93/dashy:latest")," to fetch the image"),(0,o.kt)("li",{parentName:"ul"},"You can also build the image from source, by cloning the repo, and running ",(0,o.kt)("inlineCode",{parentName:"li"},"docker build -t dashy .")," or use the pre-made docker compose")),(0,o.kt)("h4",{id:"solution-2---increase-your-rate-limits"},"Solution 2 - Increase your rate limits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Logging in to DockerHub will increase your rate limit from 100 requests to 200 requests per 6 hour period"),(0,o.kt)("li",{parentName:"ul"},"Upgrading to a Pro for $5/month will increase your image requests to 5,000 per day, and any plans above have no rate limits"),(0,o.kt)("li",{parentName:"ul"},"Since rate limits are counted based on your IP address, proxying your requests, or using a VPN may work")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"config-validation-errors"},"Config Validation Errors"),(0,o.kt)("p",null,"The configuration file is validated against ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/utils/ConfigSchema.json"},"Dashy's Schema")," using AJV."),(0,o.kt)("p",null,"First, check that your syntax is valid, using ",(0,o.kt)("a",{parentName:"p",href:"https://codebeautify.org/yaml-validator/"},"YAML Validator")," or ",(0,o.kt)("a",{parentName:"p",href:"https://codebeautify.org/jsonvalidator"},"JSON Validator"),". If the issue persists, then take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/utils/ConfigSchema.json"},"schema"),", and verify that the field you are trying to add/ modify matches the required format. You can also use ",(0,o.kt)("a",{parentName:"p",href:"https://www.jsonschemavalidator.net/s/JFUj7X9J"},"this tool")," to validate your JSON config against the schema, or run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn validate-config"),"."),(0,o.kt)("p",null,"If you're trying to use a recently released feature, and are getting a warning, this is likely because you've not yet updated the the current latest version of Dashy."),(0,o.kt)("p",null,"If the issue still persists, you should raise an issue."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"node-sass-does-not-yet-support-your-current-environment"},"Node Sass does not yet support your current environment"),(0,o.kt)("p",null,"Caused by node-sass's binaries being built for a for a different architecture\nTo fix this, just run: ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn rebuild node-sass")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"error-cannot-find-module-_basevalues"},"Error: Cannot find module './_baseValues'"),(0,o.kt)("p",null,"Clearing the cache should fix this: ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn cache clean"),"\nIf the issue persists, remove (",(0,o.kt)("inlineCode",{parentName:"p"},"rm -rf node_modules\\ yarn.lock"),") and reinstall (",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),") node_modules"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"invalid-host-header-while-running-through-ngrok"},"Invalid Host Header while running through ngrok"),(0,o.kt)("p",null,"Just add the ",(0,o.kt)("a",{parentName:"p",href:"https://ngrok.com/docs#http-host-header"},"-host-header")," flag, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'ngrok http 8080 -host-header="localhost:8080"')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"warnings-in-the-console-during-deploy"},"Warnings in the Console during deploy"),(0,o.kt)("p",null,"Please acknowledge the difference between errors and warnings before raising an issue about messages in the console. It's not unusual to see warnings about a new version of a certain package being available, an asset bundle bing oversized or a service worker not yet having a cache. These shouldn't have any impact on the running application, so please don't raise issues about these unless it directly relates to a bug or issue you're experiencing. Errors on the other hand should not appear in the console, and they are worth looking into further."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"status-checks-failing"},"Status Checks Failing"),(0,o.kt)("p",null,"If you're using status checks, and despite a given service being online, the check is displaying an error, there are a couple of things you can look at:"),(0,o.kt)("p",null,"If your service requires requests to include any authorization in the headers, then use the  ",(0,o.kt)("inlineCode",{parentName:"p"},"statusCheckHeaders")," property, as described in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/status-indicators#setting-custom-headers"},"docs"),"."),(0,o.kt)("p",null,"If you are still having issues, it may be because your target application is blocking requests from Dashy's IP. This is a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS error"),", and can be fixed by setting the headers on your target app, to include:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Access-Control-Allow-Origin: https://location-of-dashy/\nVary: Origin\n")),(0,o.kt)("p",null,"If the URL you are checking has an unsigned certificate, or is not using HTTPS, then you may need to disable the rejection of insecure requests. This can be done by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"statusCheckAllowInsecure")," to true for a given item."),(0,o.kt)("p",null,"If you get an error, like ",(0,o.kt)("inlineCode",{parentName:"p"},"Service Unavailable: Server resulted in a fatal error"),", even when it's definitely online, this is most likely caused by missing the protocol. Don't forget to include ",(0,o.kt)("inlineCode",{parentName:"p"},"https://")," (or whatever protocol) before the URL, and ensure that if needed, you've specified the port."),(0,o.kt)("p",null,"Currently, the status check needs a page to be rendered, so if this URL in your browser does not return anything, then status checks will not work. This may be modified in the future, but in the meantime, a fix would be to make your own status service, which just checks if your app responds with whatever code you'd like, and then return a 200 plus renders an arbitrary message. Then just point ",(0,o.kt)("inlineCode",{parentName:"p"},"statusCheckUrl")," to your custom page."),(0,o.kt)("p",null,"For further troubleshooting, use an application like ",(0,o.kt)("a",{parentName:"p",href:"https://postman.com"},"Postman")," to diagnose the issue. Set the parameter to ",(0,o.kt)("inlineCode",{parentName:"p"},"GET"),", and then make a call to: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://[url-of-dashy]/ping/?&url=[service-url]"),". Where the service URL must have first been encoded (e.g. with ",(0,o.kt)("inlineCode",{parentName:"p"},"encodeURIComponent()")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.urlencoder.io/"},"urlencoder.io"),")"),(0,o.kt)("p",null,"If you're serving Dashy though a CDN, instead of using the Node server or Docker image, then the Node endpoint that makes requests will not be available to you, and all requests will fail. A workaround for this may be implemented in the future, but in the meantime, your only option is to use the Docker or Node deployment method."))}p.isMDXComponent=!0}}]);