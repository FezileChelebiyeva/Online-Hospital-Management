// module.exports.register = async (req, res) => {
//   const { password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 16);

//   try {
//     const newPatient = new useModel({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       password: hashedPassword,
//       doctor: req.body.doctor,
//       job: req.body.job,
//       birthday: req.body.birthday,
//       address: req.body.address,
//       phone: req.body.phone,
//     });

//     const result = await newPatient.save();
//     const { password, ...rest } = result.toJSON();
//     const token = createToken(newPatient._id);
//     res.cookie("jwt", token, {
//       withCredentials: true,
//       maxAge: maxAge * 1000,
//     });
//     res.status(201).json({ patient: newPatient._id, created: true });
//   } catch (err) {
//     res.status(404).json({ message: err });
//   }
// };
