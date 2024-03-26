import { Router } from 'express';

const router = Router()

router.get('/api/notesList', (req, res) => {
    console.log(req.headers.cookie)
    console.log(req.cookies)
    if (req.cookies.hello && req.cookies.hello === 'world')
        return res.send('hello')
    return res.send({ msg: 'you need to return a cookie'})
    
})

export default router;