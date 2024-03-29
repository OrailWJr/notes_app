import passport from 'passport';
import { Strategy } from 'passport-local';
import { User } from '../mongoose/schemas/users.mjs';
passport.serializeUser((user, done) => {
    console.log('inside serializer');
    console.log(user);
    done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
    try {
        const findUser = await User.findById(id)
        if (!findUser) throw new Error("User not Found!!")
        done(null, findUser);
    }catch (err) {
        done(err, null)
    }
})

export default passport.use(
    new Strategy(async (username, password, done) => {
        try {
            const findUser = await User.findOne({ username });
            if (!findUser) throw new Error('User not found');
            console.log(findUser.password, password)
            if (findUser.password !== password) throw new Error('BAD CREDENTIALS');
            done(null, findUser)
        } catch (err) {
            console.log('this is the error',err)
            done(err, null);
    }

    })
)