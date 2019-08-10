const express = require('express')

const db = require('./data/db.js')

const router = express.Router()

router.post('/',async(req, res)=>{
    const newpost = req.body
    const {title, contents} = newpost
    if(!title || !contents){
        res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
    }
    try {
        const posts = await db.insert(newpost)
        res.status(201).json(posts)
    } catch(error){
        res.status(500).json({ error: "There was an error while saving the post to the database" })
    }
})

router.get('/',async(req, res)=>{
    try {
    const posts = await db.find()
    res.status(200).json(posts)
    } catch(error){
        console.log(error)
        res.status(500).json({message:'Error retrieving from the db'})
    }
})

router.get('/:id',async(req, res)=>{
    try {
    const id = req.params.id
    const post = await db.findById(id)
    if(!post){res.status(404).json({ message: "The post with the specified ID does not exist." })}
    res.status(200).json(post)
    } catch(error){
        console.log(error)
        res.status(500).json({error: "The post information could not be retrieved."})
    }
})




module.exports = router