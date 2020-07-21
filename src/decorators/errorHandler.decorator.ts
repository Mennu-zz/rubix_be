function defaultErrorHandler(error: Error) {
    throw error;
}

export default function Catch(handleError: Function = defaultErrorHandler) {
        return (target: object, propertyKey: string, descriptor: PropertyDescriptor) => {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args: any[]) {
                try {
                    const result = originalMethod.apply(this, args);
                    if (result && typeof result.then === 'function' && typeof result.catch === 'function') {
                        return result.catch((error: any) => {
                            handleError(error);
                        })
                    }
                    return result;
                } catch (error) {
                    handleError(error);
                }
            }
        }
}