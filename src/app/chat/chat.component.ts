import { Component, OnInit } from "@angular/core";
import { SocketioService } from "../socketio.service";
@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
})
export class ChatComponent implements OnInit {
  constructor(private socketioService: SocketioService) {}

  ngOnInit() {
    this.socketioService.listen("message").subscribe((data) => {
      console.log(data);
    });
  }
}
