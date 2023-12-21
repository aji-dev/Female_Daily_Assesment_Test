import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const BodyParamDecorator = createParamDecorator(
    (data: string, context : ExecutionContext) =>{
        const parameter = context.switchToHttp().getRequest();
        const retParameter = {...parameter.body, ...parameter.params}
        return retParameter        
    }
)