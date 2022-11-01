import { HttpRestService } from "../services/http/HttpRestService";

export class UniversitiesRepository {
  static universities(payload) {
    return HttpRestService.get(payload);
  }
}
