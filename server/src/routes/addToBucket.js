import Activity from '../dal/Activity';

export function addToBucket(req,res){
  var newActivity = new Activity(req.body);

  newActivity.save((err, activity) => {
    if (err)
      return res.send(500, { error: err });

    console.log(activity);

    return res.send("successfully saved");
  })

}
