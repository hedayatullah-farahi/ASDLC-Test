import { Injectable } from '@nestjs/common';
import { User } from './user.entity'; // Assuming a User entity exists

@Injectable()
export class UsersService {
  private readonly users: User[] = []; // In-memory store for demonstration

  constructor() {
    // Add a dummy user for testing
    this.users.push({
      id: '1',
      email: 'test@example.com',
      password: '$2b$10$somehashedpassword', // Replace with a real hashed password
      // You'll need to generate a hashed password for 'test@example.com'
      // For example, using bcrypt: bcrypt.hashSync('password123', 10)
    });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}