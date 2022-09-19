import { HttpRestService } from "../services/http/HttpRestService";

export class AuthRepository {
  static agendamentos(payload) {
    return HttpRestService.post(`/agendamentos`, payload);
  }
}
