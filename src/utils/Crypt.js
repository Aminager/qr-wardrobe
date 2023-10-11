import bcrypt from 'bcryptjs'

export function hashPassword(pass) {
    return bcrypt.hashSync(pass);
}

export function checkPassword(pass) {
    return bcrypt.compare(pass, hashPassword(pass))
}