import Activity from '../dal/Activity';
import {Router} from 'express';
const router = Router();

/* GET bucket activities */
export function pourBucket(req, res) {
  Activity.find().then((doc) => {
    res.send(doc);
    res.end('docs');
  }).catch((err) => {
    res.end(500, err);
  });
};

export {router};


export function addToBucket(req, res) {
  var newActivity = new Activity(req.body);

  newActivity.save((err, activity) => {
    if (err)
      return res.send(500, {error: err});
    
    return res.send("successfully saved");
  })
};


