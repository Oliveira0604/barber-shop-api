export const addProfessionalPage = (req, res) => {

    const userName = req.user.name

    res.status(200).json({message: `Seja bem-vindo(a) ${userName}`})
}