import { Router } from 'express';
const router = Router();
import users from '../users/users'

/* GET users listing. */
router.get('/', function(req, res) {

  console.log(req.query);

  const username = req.query['username'];
  const password = users[username];

  if(password === req.query['password'])
    res.end(req.query['username']);
  else {
    res.status(401);
    res.end('unauthorized');
  }
});

export default router;
