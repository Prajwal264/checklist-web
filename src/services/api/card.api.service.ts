import RestApiService, { ApiResponse } from './rest.api.service';

export interface ICard {
  title: string;
  checked: boolean;
  cardId: string;
}

export interface CreateCardPayload {
  title: string;
  checked: boolean;
  columnId: string;
};

export interface EditCardPayload extends Partial<CreateCardPayload> {
  cardId: string;
  columnId: string;
}


export interface MoveCardPayload {
  cardId: string;
  sourceParentId: string;
  destinationParent: string;
  referenceNodeId: string;
  isDroppedAbove: boolean;
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

  update(payload: EditCardPayload): Promise<ApiResponse<ICard>> {
    return this.patch(payload.cardId + '?columnId=' + payload.columnId, {
      title: payload.title,
      checked: payload.checked,
    });
  }

  move(payload: MoveCardPayload): Promise<ApiResponse<ICard>> {
    return this.patch(`${payload.cardId}/move?`, payload);
  }
}

export const cardAPISrvice = new CardAPIService();