// const wsUrl = "ws://localhost:5000/ws";

export default class ChatBus {
  private ws: WebSocket;

  constructor(url: string) {
    this.ws = new WebSocket(url);
    this.ws.onerror = this.onError;
    this.ws.onopen = this.onOpen;
    this.ws.onmessage = this.onMessage;
  }

  private onError(this: WebSocket, event: Event): any {}
  private onOpen(this: WebSocket, ev: Event): any {}
  private onMessage(this: WebSocket, ev: MessageEvent): any {}
}
