import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';
export class JWT {

    public static generateToken(payload: Record<string, string|number>): string {
        return jwt.sign(payload, 'shhhhh', { expiresIn: '1h' });
    }

    public static async validateToken(token: string): Promise<Record<string, string|number>> {
        try {
            const decodedToken = jwt.verify(token, 'shhhhh');
            return decodedToken as Record<string, string>;
        } catch (err) {
            throw new createHttpError.Unauthorized();
        }
    }
}