import { Router, response} from 'express';
import { query, validationResult, body } from 'express-validator';


const mockUsers = [
    {id:1, username:"CropOriginal", lname: "cropGhost"},
    {id:2, username:"Orail", lname: "adeame"},
    {id:3, username:"Tester 2 ", lname: "chester"},
    {id:4, username:"pmoney", lname: "white"},
]
const router = Router();

router.get('/api/users', (req, res) =>{
    const {
        query: {filter, value}
    } = req;
 
    if (filter && value ) return res.send(
        mockUsers.filter((user) => 
            user[filter].includes(value)
        )
    )
    return res.send(mockUsers)
})

router.post('/api/users', (req, res) => {
    console.log(req.body)
    const { body } = req;
    const newUser = { id: mockUsers[mockUsers.length - 1].id +1, ...body };
    mockUsers.push(newUser);
    console.log(mockUsers);
    return res.status(201).send(newUser)
});

router.put('api/users/:id', (req, res) =>{
    
})


router.get('/api/users/:id', (req, res) => {
    const parsedId = parseInt(req.params);
    if (isNaN(parsedId)) 
        return response.status(400).send({msg : "Bad Request. Invalid Id."});
    const findUser = mockUsers.find((user) => user.id === parsedId);
    if (!findUser) return resonse.sendStatus(404);
    return response.send(findUser)
});

export default router;