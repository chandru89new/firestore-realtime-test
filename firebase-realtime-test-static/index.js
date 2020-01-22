// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
var citiesRef = db.collection("cities");

/**
 * IMPORTANT:
 * uncomment this chunk after you've opened index.html once.
 */

// citiesRef.doc("SF").set({
//   name: "San Francisco",
//   state: "CA",
//   country: "USA",
//   capital: false,
//   population: 860000,
//   regions: ["west_coast", "norcal"]
// });
/** end of the chunk */

$(document).ready(() => {
  var docRef = citiesRef.doc("SF");
  var el = $("#data");
  docRef.onSnapshot(function(doc) {
    // console.log("Current data: ", doc.data());
    var data = doc.data();
    var html = "";
    for (item in data) {
      if (data.hasOwnProperty(item)) {
        html += `<p><strong>${item}</strong>: ${data[item]}</p>`;
      }
    }
    el.html(html);
  });
});
