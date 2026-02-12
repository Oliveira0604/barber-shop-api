export const getToken = (requisition) => {

    const authorizationHeader = requisition.headers.authorization
    const token = authorizationHeader.split(' ')[1]

    return token
}