//add a record of user to the users table in database
import User from '../../Models/User'
import bcrypt from 'bcrypt';
//send successfull signup message to the frontend along with the user id and a jwt token with expiry date
export default async function handler(req, res) {
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        isDoctor: req.body.isDoctor == 'true',
        isHospitalAdmin: req.body.isDoctor == 'true',
        passHash: bcrypt.hashSync(req.body.password, process.env.SALT)
    })
    console.log(await user)
    res.status(200).json(await user)
}