const express = require('express')
const router = express.Router()
const Lottery= require('./lottery.model')

router.get('/', async (req, res) => {
    try {
        const lottery= await Lottery.find()
        res.json(lottery)
    } 
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


router.get('/:id',async (req, res) => {
    try{
        console.log(req.params.id)
    const lottery= await Lottery.findOne({id:req.params.id})
    res.json(lottery)
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
})
router.get('/phone/:phone',async (req, res) => {
    try{
        
    const lottery= await Lottery.find({"infos.phone":req.params.phone})
    res.json(lottery.length)
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
})
router.get('/tirage/test',async (req, res) => {
    try{
        
    const lottery= await Lottery.find({"empty":false})
    console.log(Math.floor(Math.random()*lottery.length))
    const winner= lottery[(Math.floor(Math.random()*lottery.length))]
    res.json(winner)
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
})
router.post('/',async (req, res) => {
    console.log(req.body)
    const lotteryEntry= new Lottery({
        id:req.body.id,
        empty:req.body.empty
    })
    try {
        const newLotteryEntry = await lotteryEntry.save()
        res.status(201).json(newLotteryEntry)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})


router.put('/', async (req, res) => {
    try {
        lottery = await Lottery.findOne({id:req.body.id})
        lottery.infos=req.body.content||null
        lottery.empty= req.body.empty
        lottery.save()
        res.send(lottery)
    } catch (error) {
        
    }
})


router.delete('/:id', (req, res) => {
})

module.exports = router

