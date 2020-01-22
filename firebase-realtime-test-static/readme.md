## firebase / firestore real-time data update

this repo demos (or helps demo) firestore real-time data update handler.

**Setup & Run instructions**:

- clone repo
- open `firebase-realtime-test-static` folder
- add your API configuration in `config.example.js`
- rename `config.example.js` to `config.js`
- then, open `index.html` (preferably served locally)
- once you've done that, check your firestore (in firebase console). you should see a new "cities" collection with one single document called "SF".
- open `index.js` and comment out the chunk:

```js
/**
 * IMPORTANT:
 * uncomment this chunk after you've opened index.html once.
 */
citiesRef.doc("SF").set({
  name: "San Francisco",
  state: "CA",
  country: "USA",
  capital: false,
  population: 860000,
  regions: ["west_coast", "norcal"]
});
/** end of the chunk */
```

- finally, go to your firestore (console) and modify a field (add, edit or delete)
- check your browser (index.html) and the changes will be shown.
