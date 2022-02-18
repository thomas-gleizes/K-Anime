import { NextApiRequest, NextApiResponse } from 'next';

import handler from '@lib/routing';
import { withSessionApi } from '@services/session';
import { UserModel } from '@models';
import Security from '@services/security';
import { ApiError, SchemaError } from '@errors';
import { resetPasswordSchema } from '@validations/users';

handler.patch(async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;

  try {
    await resetPasswordSchema.validate(body);
  } catch (err) {
    throw new SchemaError(err);
  }

  const user = await UserModel.checkResetPasswordToken(body.token);
  if (!user) throw new ApiError(404, 'token not found');

  const hash = Security.sha256(body.newPassword + user.username);

  await UserModel.resetPassword(user.id, hash);

  res.send({ success: true });
});

export default withSessionApi(handler);