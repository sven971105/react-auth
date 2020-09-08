export declare interface TokenInterface {
    authToken: string | null
    authTokenType: string | null
    expireAt: Date | null
    authState: object | null
}

export declare interface signInFunctionParams {
    token: string,
    tokenType: string | 'Bearer',
    expiresIn: number,
    authState: object
}