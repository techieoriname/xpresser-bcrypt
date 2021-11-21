import {hashSync, compareSync} from "bcrypt"
import {getInstance} from "xpresser";

const $ = getInstance()

// Get config
const saltRounds = $.config.get('bcrypt.salt');

//sync style
export const hash = ($password: string | Buffer): Error | null | string => {
    return hashSync($password, saltRounds);
}

export const compare = ($password: string | Buffer, $hash: string): Error | null | boolean => {
    return compareSync($password, $hash)
}
