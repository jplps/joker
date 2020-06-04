import { Request, Response } from 'express';
import knex from '../database/connection';

class JokesController {
	async index(req: Request, res: Response) {
		try {
			const jokes = await knex('jokes').select('*');

			return res.status(200).json(jokes);
		} catch (err) {
			return res.status(400).json({ err });
		}
	}

	async create(req: Request, res: Response) {
		const { text } = req.body;

		try {
			const joke = await knex('jokes').insert({ text });

			return res.status(200).json(joke);
		} catch (err) {
			return res.status(400).json({ err });
		}
	}
}

export default JokesController;