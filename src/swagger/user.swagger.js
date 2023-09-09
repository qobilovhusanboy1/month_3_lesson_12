/**
 * @swagger
 * /api/user/payment:
 *   post:
 *     summary: user Balance
 *     tags: [User]
 *     description: User Balance.
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 balance:
 *                   example: 10000
 *                   type: number
 *                   required: true
 * 
 *     responses:
 *       201:
 *         description: User Balance.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Success
  *                 id:
 *                   example: 1
 *                   type: number
 *                 username:
 *                   example: username
 *                   type: string
 *                 password:
 *                   example: hashed_password
 *                   type: string
 *                 fullname:
 *                    example: fullname
 *                    type: string
 *                 balance:
 *                    example: 120000
 *                    type: number
 *                 create_at:
 *                     example: 2023-08-29T14:29:48.588Z
 *                     type: string
 *                 is_admin:
 *                      example: true
 *                      type: boolean
 * /api/user:
 *   get:
 *     summary: get users
 *     tags: [User]
 *     description: Get users.
 * 
 *     responses:
 *       201:
 *         description: User Balance.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Success
  *                 id:
 *                   example: 1
 *                   type: number
 *                 username:
 *                   example: username
 *                   type: string
 *                 password:
 *                   example: hashed_password
 *                   type: string
 *                 fullname:
 *                    example: fullname
 *                    type: string
 *                 balance:
 *                    example: 120000
 *                    type: number
 *                 create_at:
 *                     example: 2023-08-29T14:29:48.588Z
 *                     type: string
 *                 is_admin:
 *                      example: true
 *                      type: boolean
 * 
 * 
 * /api/auth/user:
 *   post:
 *     summary: user create is admin
 *     tags: [User]
 *     description: User create.
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 fullname:
 *                   example: Jon Doe
 *                   type: string
 *                   required: true
 *                 username:
 *                   example: Jon777
 *                   type: string
 *                   required: true
 *                 password:
 *                   type: string
 *                   example: 77792003
 *                   required: true
 * 
   *     responses:
 *       201:
 *         description: New User.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Success
 *                 id:
 *                   example: 1
 *                   type: number
 *                 username:
 *                   example: username
 *                   type: string
 *                 password:
 *                   example: hashed_password
 *                   type: string
 *                 fullname:
 *                    example: fullname
 *                    type: string
 *                 balance:
 *                    example: 120000
 *                    type: number
 *                 create_at:
 *                     example: 2023-08-29T14:29:48.588Z
 *                     type: string
 *                 is_admin:
 *                      example: true
 *                      type: boolean
 */