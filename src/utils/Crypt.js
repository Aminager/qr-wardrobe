import bcrypt from 'bcryptjs'

export function hashPassword(pass) {
    const salt = bcrypt.genSaltSync(10);
    return {"pass": bcrypt.hashSync(pass, salt), salt};
}

export function checkPassword(pass, salt) {
    return bcrypt.compare(pass, bcrypt.hashSync(pass, salt))
}