// logger.interceptor.ts
import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { tap } from 'rxjs/operators';
  
  @Injectable()
  export class LoggerInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const functionName = context.getHandler().name;
  
      console.log(`Before calling "${functionName}"`);
      const now = Date.now();
      return next
        .handle()
        .pipe(
          tap(() =>
            console.log(`After calling "${functionName}": ${Date.now() - now}ms`)
          ),
        );
    }
  }
  