
## Breakout 1

1. Create a trial account at GCP. You need to provide payment but it won't charge any money after the trial period. Only one in each group needs to do this, but I encourage all of you to try it out after the session.
2. If you haven't installed it already, go install the [gcloud CLI](https://cloud.google.com/sdk/docs/install)
3. Copy the code below into a file in the root of the NodeJS server (same level as the package.json) and name it app.yaml
4. Open up your terminal and run `gcloud auth login` to authenticate your terminal.
5. Make sure that you have a start script in `package.json`.
5. When standing in the root of the NodeJS server run `gcloud app deploy` in your terminal and follow the instructions.
6.  The first time you do this it might give you an error complaining about permissions. If this happens you should go to the IAM & Admin section of the GCP portal. Add the following roles to the account stated in the terminal xyz@cloudbuild.gserviceaccount.com 
- Cloud Build Service Agent
- Container Registry Service Agent
- Storage Object Viewer
- Storage Object Creator
7. Run the `gcloud app deploy` command once again.
8. Verify that it got deployed and try it out via the public URL printed in the terminal. 

```yaml
runtime: nodejs16 # or another supported version
instance_class: F2
handlers:

- url: /.*
  secure: always
  redirect_http_response_code: 301
  script: auto
```


## Breakout 2

1. Make sure that you are standing in the root directory of the client application.
2. Run `npm run build` to build the application.
3. Copy the code below into a file in the root of the NodeJS server (same level as the package.json) and name it app.yaml


```yaml
runtime: nodejs16  # or another supported version
service: gcp-booster-client
handlers:
- url: /(.*\..+)$
  static_files: build/\1
  upload: build/(.*\..+)$
- url: /.*
  static_files: build/index.html
  upload: build/index.html
```
4. Run the `gcloud app deploy` command.
5. Verify that the API works when hitting it directly via the browser.
6. Verify that the client successfully sent a request to the API which is displayed in the client application. 
7. If nothing happens and you get CORS errors in the client you need to configure cors in the API (NOT THE CLIENT).

```js
const cors = require("cors")
app.use(cors())
```
8. Deploy the API once again.
9. (BONUS) To make sure that you always build before you try to deploy (or you'll just publish the old build again) you can go into the `package.json` and add this to scripts:
```json
    "deploy": "react-scripts build && gcloud app deploy"
```
10. (BONUS)  excecute `npm run deploy` in the terminal.