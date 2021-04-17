import UserModel from '../models/user.js';
import Hasher from '../services/hasher.js';

const User = {
  register: async (req, res) => {
    const {
      fullName, email, password,
    } = req.body;

    const hash = await Hasher.hash(password);

    const newUser = new UserModel({
      fullName,
      email,
      password: hash,
    });

    let user;
    try {
      user = await newUser.save();
    } catch (err) {
      if (err.code === 11000) {
        return res.status(409).send({
          error: 'Email already taken',
        });
      }

      return res.status(500).send({
        error: 'Internal error',
      });
    }

    const userRemovedPassword = user.toJSON();
    delete userRemovedPassword.password;

    return res.status(201).send(userRemovedPassword);
  },

  login: async (req, res) => {
    let user;

    try {
      user = (await UserModel.findOne({
        email: req.body.email,
      }, '+password').exec());
    } catch (err) {
      return res.status(500).send({
        error: 'Internal error',
      });
    }

    if (!user || !await Hasher.validateHash(req.body.password, user.password)) {
      return res.status(401).send({
        error: 'Incorrect credentials',
      });
    }

    user = user.toJSON();
    delete user.password;

    return res.status(200).send(user);
  },
};

export default User;
