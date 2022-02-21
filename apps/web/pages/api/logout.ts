import {api} from "../../src/server-setup"

export default api(async (_req, res, ctx) => {
  const blitzContext = ctx

  await blitzContext.session.$revoke()

  res.status(200).json({userId: blitzContext.session.userId})
})
