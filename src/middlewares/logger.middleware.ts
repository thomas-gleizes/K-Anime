import { ApiRequest, ApiResponse } from 'app/next';
import {
  apiLogger as apiLoggerService,
  ssrLogger as ssrLoggerService,
} from 'services/logger.service';
import ip from 'utils/ip';
import trace from 'utils/trace';
import { GetServerSidePropsContext } from 'next/types';

export function apiLogger(req: ApiRequest, res: ApiResponse, next): void {
  apiLoggerService(req);
  trace(`(${ip(req)}) ${req.method} ${req.url}`);

  next();
}

export function ssrLogger(context: GetServerSidePropsContext): void {
  ssrLoggerService(context).catch((e) => console.log('ssr log failed :', e));
  trace(`(${ip(context.req)}) ${context.req.method} ${context.resolvedUrl}`);
}
