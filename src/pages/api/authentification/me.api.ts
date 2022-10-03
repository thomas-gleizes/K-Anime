import { Get } from 'next-api-decorators';

import { apiHandler } from 'services/handler.service';
import { usersMapper } from 'mappers';
import { userModel } from 'models';
import ApiHandler from 'class/ApiHandler';
import { GetSession, AuthGuard } from 'decorators';

class AuthProfilHandler extends ApiHandler {
  @Get()
  @AuthGuard()
  async refresh(@GetSession() session): Promise<RefreshUserResponse> {
    const user = await userModel.findById(session.user.id);

    return { success: true, user: usersMapper.one(user) };
  }
}

export default apiHandler(AuthProfilHandler);