import Activity from '../dal/Activity';

/* GET bucket activities */
export function pourBucket(req, res) {
  Activity.find().then((doc) => {
    res.send(doc);
    res.end('docs');
  }).catch((err) => {
    res.end(500, err);
  });
};

export function filterBucket(req, res) {

  const filters = req.body.filters

  Activity.find({tags:{'$in':filters}}).then((doc) => {
    res.send(doc);
    res.end('docs');
  }).catch((err) => {
    res.end(500, err);
  });
};



/* POST to add to the bucket */
export function addToBucket(req, res) {
  var newActivity = new Activity(req.body);

  newActivity.save((err) => {
    if (err)
      return res.send(500, {error: err});

    return res.send("successfully saved");
  })
};


