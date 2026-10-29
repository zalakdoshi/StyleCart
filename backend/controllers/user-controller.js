import User from "../models/users.js";
import bcrypt from "bcryptjs";

// export const getAllUser = async (req, res, next) => {
//   let users;
//   try {
//     users = await User.find();
//   } catch (err) {
//     console.log(err);
//   }
//   if (!users) {
//     return res.status(404).json({ message: "No Users Found" });
//   } else {
//     return res.status(200).json({ users });
//   }
// };

export const getAllUser = async (req, res, next) => {
  let users;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  try {
    users = await User.find().skip(startIndex).limit(limit);
    if (!users) {
      return res.status(200).json({ message: "No User Found" });
    } else {
      return res.status(200).json({
        totalCount: users.length,
        currentPage: page,
        totalPages: Math.ceil(users.length / limit),
        User: users,
      });
    }
  } catch (err) {}
  console.log(err);
};

export const show = async (req, res, next) => {
  let users;
  const id = req.params.id;

  try {
    users = await User.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(200).json({ message: "No User Found" });
  } else {
    return res.status(200).json({ users });
  }
};

export const update = async (req, res, next) => {
  let users;
  const id = req.params.id;
  const { username, email, contact, type, status } = req.body;
  if (!username) {
    res.status(200).json({ message: "Enter name" });
  } else if (!email) {
    res.status(200).json({ message: "Enter email" });
  } else if (!contact) {
    res.status(400).json({ message: "Enter Contact" });
  } else if (!type) {
    res.status(400).json({ message: "Enter Type" });
  } else {
    try {
      users = await User.findByIdAndUpdate(id, {
        username: username,
        email,
        contact: contact,
        type: type,
        status: status,
      });
      if (!User) {
        return res.status(200).json({ message: "No User Found" });
      } else {
        return res.status(200).json({ users });
      }
    } catch (err) {
      console.log(err);
    }
  }
};

export const singup = async (req, res, next) => {
  const { username, email, password, contact, type, status } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User Already Exists! Login instead" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  if (!username) {
    res.status(200).json({ message: "Enter name" });
  } else if (!email) {
    res.status(200).json({ message: "Enter email" });
  } else if (!password) {
    res.status(200).json({ message: "Enter Password" });
  } else if (!contact) {
    res.status(200).json({ message: "Enter Contact" });
  } else if (!type) {
    res.status(200).json({ message: "Enter Type" });
  } else {
    const user = new User({
      username,
      email,
      password: hashedPassword,
      contact,
      type,
      status: "Active",
    });

    try {
      await user.save();
    } catch (err) {
      return console.log(err);
    }
    return res.status(201).json({ user });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ message: "Couldn't find user by this Email" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password" });
  }
  return res.status(200).json({ message: "Login Successfull" });
};
