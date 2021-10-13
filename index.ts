import {hash as Hash, compare as Compare, hashSync, compareSync} from "bcrypt"
import {getInstance} from "xpresser";

const $ = getInstance()

// Get config
const config = $.config.path('bcrypt');

const saltRounds = config.get("saltRounds")

//sync style
export const hash = ($password: string | Buffer): Error | null | string => {
    return hashSync($password, saltRounds);
}

export const compare = ($password: string | Buffer, $hash: string): Error | null | boolean => {
    return compareSync($password, $hash)
}
