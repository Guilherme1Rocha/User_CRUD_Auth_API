import crypto from 'crypto'

export const random = () => crypto.randomBytes(128).toString('base64')
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(getRequiredEnvVariable('SECRET')).digest('hex');
};

export const getRequiredEnvVariable = (envName: string): string => {
    const value = process.env[envName];
    if (!value) {
        throw new Error(`Missing value for ${envName}`);
    }

    return value;
};