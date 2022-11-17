import User from "../entities/User";
import UserRepository from "../repositories/UserRepository.interface";

export default class UserService {
  constructor(private userRepository: UserRepository) { }

  public async findAll() {
    return this.userRepository.findAll();
  }

  public async findById(id: number) {
    return this.userRepository.findById(id);
  }

  public async create(data: User) {
    return this.userRepository.create(data);
  }

  public async update(id: number, data: User) {
    return this.userRepository.updateById(id, data);
  }

  public async delete(id: number) {
    return this.userRepository.deleteById(id);
  }
}