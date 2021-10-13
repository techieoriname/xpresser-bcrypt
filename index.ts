import {hash as Hash, compare as Compare} from "bcrypt"
import {getInstance} from "xpresser";

const $ = getInstance()

// Get config
const config = $.config.path('bcrypt');

const saltRounds = config.get("saltRounds")

//sync style
export const hash = ($password: string | Buffer): Error | null | string => {
    let hashResult: Error | null | string = null
    Hash($password, saltRounds, function(err, hash) {
        if(err) {
            hashResult = err
        }

        hashResult = hash
    });

    return hashResult
}

export const compare = ($password: string | Buffer, $hash: string): Error | null | boolean => {
    let compareResult: Error | null | boolean = null
    Compare($password, $hash, function(err, result) {
        if(err) {
            compareResult = err
        }

        compareResult = result
    });

    return compareResult
}
