import passport from 'passport';
import { Strategy } from 'passport-local';
import mockUsers from '../utils/mockData.mjs';

passport.serializeUser((user, done) => {
    console.log('inside serializer');
    console.log(user);
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    console.log('inside deserializer');
    try {
        const findUser = mockUsers.find((user) => user.id === id);
        if (!findUser) throw new Error("User not Found!!")
        done(null, findUser);
    }catch (err) {
        done(err, null)
    }
})

export default passport.use(
    new Strategy((username, password, done) => {
        console.log(`username: ${username} and password: ${password}`)
        const findUser = mockUsers.find(
            (user) => user.username === username);
        try {
            if (!findUser) throw new Error("User not found");
            if (findUser.password != password)
                throw new Error("Invalid Credentials");
            done(null, findUser)
        } catch (err) {
            console.log('this is the error',err)
            done(err, null);
    }

    })
)