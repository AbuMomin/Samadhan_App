import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateChatDto } from './dto/chat.dto';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async create(@Body() createChatDto: CreateChatDto) {
    return this.chatService.createChat(createChatDto);
  }

  @Get()
  async findAll() {
    return this.chatService.findAllChats();
  }
}
