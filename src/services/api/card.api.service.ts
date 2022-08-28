import RestApiService, { ApiResponse } from './rest.api.service';

export interface ICard {
  title: string;
  checked: boolean;
  columnId: string;
}

export interface CreateCardPayload {
  title: string;
  checked: boolean;
  columnId: string;
};

export interface EditCardPayload extends Partial<CreateCardPayload> {

}

class CardAPIService extends RestApiService {
  constructor() {
    super();
    super.authorized = true;
    super.updateContextPath('cards');
  }

  create(payload: CreateCardPayload): Promise<ApiResponse<ICard>> {
    return this.post('', payload);
  }
}

export const cardAPISrvice = new CardAPIService();