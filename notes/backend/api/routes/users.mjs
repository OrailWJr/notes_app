import { Router} from 'express';
import { query, validationResult, matchedData, checkSchema} from 'express-validator';
import { createUserValidationSchema } from '../../utils/validationSchemas.mjs';
import mockUsers from '../../utils/mockData.mjs';
import {User} from '../../mongoose/schemas/users.mjs';


const router = Router();

const resolveIndexByUserId = (req, res, next) => {
    const {
        params: {id},
    } = req;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return res.sendStatus(400)
    const userIndex = mockUsers.findIndex((user) => user.id === parsedId);
    if (userIndex === -1) return res.sendStatus(404)
    req.userIndex = userIndex;
    next();
}
router.get('/api/users', query('filter')
        .isString()
        .notEmpty()
        .withMessage('Must not be empty')
        .isLength({min:3, max:10})
        .withMessage('must be between 3 and 10 characters'),
         (req, res) =>{
            const result = validationResult(req)
            console.log(result)
    const {
        query: {filter, value}
    } = req;
    console.log(req.session);
    console.log(req.session.id)
    if (filter && value ) return res.send(
        mockUsers.filter((user) => 
            user[filter].includes(value)
        )
    )
    return res.send(mockUsers)
})

router.post('/api/users/', 
checkSchema(createUserValidationSchema),  
    async (req, res) => {
    const result = validationResult(req)
    if (!result.isEmpty())
        return res.status(400).send({ errors: result.array()});

    const data = matchedData(req)
        console.log(data)
    const newUser = new User(data);
    try {
        const saveduser = await newUser.save();
        return res.status(200).send('User has been created');
    }catch (err){
        console.log('error is: ', err)
        return res.status(400).send('User Already Created');
    }
   
    mockUsers.push(newUser);
    return res.status(201).send(newUser)
});

router.put('/api/users/:id', resolveIndexByUserId, (req, res) =>{
    const {body, userIndex} = req;
    mockUsers[userIndex] = { id: mockUsers[userIndex].id, ...body}
    return res.send(200);
})


router.get('/api/users/:id', resolveIndexByUserId, (req, res) => {
    const {userIndex} = req;
    const findUser = mockUsers[userIndex]
    if (!findUser) return res.sendStatus(404);
    return res.send(findUser)
});

export default router;