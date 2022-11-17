import { Request, Response } from 'express';
import UserService from "../services/UserService";

export default class UserController {
  constructor(private userService: UserService) { }

  public async findAll(_req: Request, res: Response) {
    return res.status(200).json({
      data: await this.userService.findAll()
    });
  }

  public async findById(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this.userService.findById(Number(id));

    return res.status(200).json({
      data: result
    });
  }

  public async create(req: Request, res: Response) {
    const { name, username, password, admin } = req.body;

    const newUser = await this.userService.create({ name, username, password, admin });

    return res.status(201).json({
      data: newUser
    })
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, username, password, admin } = req.body;

    await this.userService.update(Number(id), { name, username, password, admin });

    return res.status(204).end;
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    await this.userService.delete(Number(id));

    return res.status(204).end;
  }
}
