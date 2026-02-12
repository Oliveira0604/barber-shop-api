

export const loadHome = (req, res) => {

    const userName = req.user.name

    res.status(200).json({message: `Olá ${userName}`})
  
}