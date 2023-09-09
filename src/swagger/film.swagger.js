/**
 * @swagger
 * /api/film:
 *   post:
 *     summary: create film
 *     tags: [Film]
 *     description: Create film.
 *     requestBody:
 *        content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                 name:
 *                   example: X7
 *                   type: string
 *                   required: true
 *                 description:
 *                   example: Bu X7 filmi
 *                   type: string
 *                   required: true
 *                 year:
 *                   type: number
 *                   example: 2019
 *                   required: true
 *                 price:
 *                    example: 12000
 *                    type: number
 *                    required: true
 *                 file:
 *                    example: File
 *                    type: file
 *                    required: true
 *                 video_url:
 *                    example: https://youtube.com
 *                    type: string uri
 *                    required: true
 *                 release:
 *                     example: 2023-08-29T18:42:07.043Z
 *                     type: date
 *                     required: true
 *     responses:
 *       201:
 *         description: Create film.
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
 *                 name:
 *                   example: "Film_name"
 *                   type: string
 *                 description:
 *                   example: "Filme Description"
 *                   type: string
 *                 year:
 *                    example: 2014
 *                    type: number
 *                 photo:
 *                    example: "foto_url.png"
 *                    type: number
 *                 price:
 *                     example: 120000
 *                     type: number
 *                 video_url:
 *                      example: "http://localhost:4000/docs/#/"
 *                      type: string
 *                 release:
 *                      example: "2023-08-29T18:42:07.043Z"
 *                      type: string   
 * 
 * /api/film/:id:
 *   get:
 *     summary: get one film
 *     tags: [Film]
 *     description: Get one film.
 * 
 *     responses:
 *       201:
 *         description: Get one film.
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
 *                 name:
 *                   example: "Film_name"
 *                   type: string
 *                 description:
 *                   example: "Filme Description"
 *                   type: string
 *                 year:
 *                    example: 2014
 *                    type: number
 *                 photo:
 *                    example: "foto_url.png"
 *                    type: number
 *                 price:
 *                     example: 120000
 *                     type: number
 *                 video_url:
 *                      example: "http://localhost:4000/docs/#/"
 *                      type: string
 *                 release:
 *                      example: "2023-08-29T18:42:07.043Z"
 *                      type: string 
 * /api/films:
 *   get:
 *     summary: get films
 *     tags: [Film]
 *     description: Get films.
 * 
 *     responses:
 *       201:
 *         description: Get films.
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
 *                 name:
 *                   example: "Film_name"
 *                   type: string
 *                 description:
 *                   example: "Filme Description"
 *                   type: string
 *                 year:
 *                    example: 2014
 *                    type: number
 *                 photo:
 *                    example: "foto_url.png"
 *                    type: string
 *                 price:
 *                     example: 120000
 *                     type: number
 *                 video_url:
 *                      example: "http://localhost:4000/docs/#/"
 *                      type: string
 *                 release:
 *                      example: "2023-08-29T18:42:07.043Z"
 *                      type: string 
 */ 