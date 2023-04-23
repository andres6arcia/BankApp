import { Controller, Get, Req, Res } from '@nestjs/common';
// import { LoginUseCase } from '../../application/use-cases/login';
// import { LoginCommand } from '../utils/commands/login.command';
// import { AutheticationService } from '../persistence/services/authetication.service';

@Controller('authentication')
export class AuthetinticationController {
  constructor(
    // private readonly autheticationService: AutheticationService,
  ) {}

  // @Post('')
  // async login(@Body() command: LoginCommand) {
  //   const useCase = new LoginUseCase(
  //     this.autheticationService,
  //   )
  //   return await useCase.execute(command);
  // }

  @Get('')
  async home(@Req() req, @Res() res) {
    console.log('Headers:', req.headers );
    console.log('req.oidc.user: ', req.oidc.user);
    res.status(200).send(req.oidc.user);
  }

}
