import User from "../entities/User";
import GenericRepository from "./GenericRepository.interface";

export default interface UserRepository extends GenericRepository<User> { }