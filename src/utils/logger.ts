const pino = require('pino');

class Logger {
    serializers: any;
    instance: any;

  constructor() {
    this.serializers = {
      req: Logger.reqSerializer,
      res: Logger.resSerializer,
      err: Logger.errSerializer,
    };
    this.instance = pino({
      level: process.env.LOG_LEVEL || 'info',
      serializers: this.serializers,
    });
  }

  static selectHeaders(headers: any = {}) {
      const { connection, host } = headers;
      const accessToken = headers['x-access-token'] || 'N/A';
      const userAgent = headers['user-agent'] || 'N/A';
      return { connection, host, accessToken, userAgent };
  }

  static reqSerializer({
    id, url, method, headers,
  }: any) {
    return {
      id,
      url,
      method,
      headers: Logger.selectHeaders(headers),
    };
  }

  static resSerializer({ statusCode, headers }: any) {
    return {
      statusCode,
      headers: Logger.selectHeaders(headers),
    };
  }

  static errSerializer({ type, message, stack }: any) {
    return { type, message, stack };
  }

  info({ payload = null, message }: any) {
    this.instance.info(payload, message);
  }

  warn({ payload = null, message }: any) {
    this.instance.warn(payload, message);
  }

  error({ payload = null, message }: any) {
    this.instance.error(payload, message);
  }
}

export default new Logger();