import RestApiService, { ApiResponse } from './rest.api.service';

export interface IColumn {
  title: string;
  boardId: string;
  description: string;
}

export interface CreateColumnPayload {
  title: string;
  description: string;
  boardId: string;
};

export interface EditColumnPayload extends Partial<CreateColumnPayload> {

}

class ColumnAPIService extends RestApiService {
  constructor() {
    super();
    super.authorized = true;
    super.updateContextPath('columns');
  }

  fetchAll(boardId: string): Promise<ApiResponse<IColumn[]>> {
    let url = '';
    const searchParams = new URLSearchParams();
    if (boardId) {
      searchParams.set('boardId', boardId);
    }
    url += '?' + searchParams.toString();
    return this.get(url);
  }

  create(payload: CreateColumnPayload): Promise<ApiResponse<IColumn>> {
    return this.post('', payload);
  }

  edit(payload: EditColumnPayload): Promise<ApiResponse<IColumn>> {
    return this.patch('', payload);
  }
}

export const columnAPIService = new ColumnAPIService();