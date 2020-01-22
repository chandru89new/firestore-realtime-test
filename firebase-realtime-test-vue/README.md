## demo for vue-firestore (realtime data updates)

### setup

- clone this repo
- open `firebase-realtime-test-vue` folder
- rename `firestore.config.example.js` to `firestore.config.js`
- put in your configuration keys in the `firestore.config.js` file
- in the `HelloWorld.vue` component, tweak `collection` and `document` values to match the ones you have in your firestore database.
- open folder in terminal and `yarn serve` (or `npm run serve`)

### to test the demo

once you've served the app locally:

- open your firestore database and edit the document you're polling in your HelloWorld.vue component.
- check your app for changes.
