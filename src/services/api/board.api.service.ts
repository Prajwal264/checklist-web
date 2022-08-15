import RestApiService, { ApiResponse } from './rest.api.service';

export interface IBoard {
  name: string;
  userId: string;
  boardId: string;
}

export interface CreateBoardPayload {
  name: string;
};

export interface EditBoardPayload extends Partial<CreateBoardPayload> {

}

class BoardAPIService extends RestApiService {
  constructor() {
    super();
    super.updateContextPath('boards')
  }

  fetchAll(): Promise<ApiResponse<IBoard[]>> {
    return this.get('');
  }

  create(payload: CreateBoardPayload): Promise<ApiResponse<IBoard>> {
    return this.post('', payload);
  }

  edit(payload: EditBoardPayload): Promise<ApiResponse<IBoard>> {
    return this.patch('', payload);
  }
}

export const boardAPIService = new BoardAPIService();