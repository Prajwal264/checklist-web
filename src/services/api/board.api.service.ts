import RestApiService, { ApiResponse } from './rest.api.service';
import Cookies from 'js-cookie';

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
    super.authorized = true;
    super.updateContextPath('boards');
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
  remove(boardId: string): Promise<ApiResponse<IBoard>> {
    return this.delete(boardId);
  }
}

export const boardAPIService = new BoardAPIService();