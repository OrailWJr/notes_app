import passport from 'passport';
import { Strategy } from 'passport-local';
import mockUsers from '../utils/mockData.mjs';


passport.use(
    new Strategy((username, password, done) => {
        const findUser = mockUsers.find(
            (user) => user.username === username);
        try {
            if (!findUser) throw new Error("User not found");
            if (findUser.password != password)
                throw new Error("Invalid Credentials");
            done(null, findUser)
        } catch (err) {
            done(err, null);
    }

    })
)