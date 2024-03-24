import { Router } from 'express';

const router = Router()

router.get('/user/notesList', (req, res) => {
    res.send('I have the basics down')
})

export default router;