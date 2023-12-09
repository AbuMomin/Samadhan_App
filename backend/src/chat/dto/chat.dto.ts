export class CreateChatDto {
  readonly SENDER_ID: number;
  readonly RECEIVER_ID: number;
  readonly THREAD_ID: number;
  readonly MESSAGE: string;
}
