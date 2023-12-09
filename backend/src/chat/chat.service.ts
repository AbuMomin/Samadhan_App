import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from '../../models/chat.model';
import { CreateChatDto } from './dto/chat.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,
  ) {}

  async createChat(createChatDto: CreateChatDto): Promise<Chat> {
    const chat = new Chat();
    Object.assign(chat, createChatDto);
    return this.chatRepository.save(chat);
  }

  async findAllChats(): Promise<Chat[]> {
    return this.chatRepository.find();
  }
}
