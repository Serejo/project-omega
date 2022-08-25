import { HttpRestService } from "../services/http/HttpRestService";

export class AuthRepository {
  static login(payload) {
    return HttpRestService.post(`/login`, payload);
  }

  static logout() {
    return HttpRestService.post(`/logout`);
  }

  static whoami() {
    return HttpRestService.get(`/whoami`);
  }
}
