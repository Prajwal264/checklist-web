import type { ICard } from './card.api.service';
import RestApiService, { ApiResponse } from './rest.api.service';

export interface IColumn {
  title: string;
  boardId: string;
  columnId: string;
  expanded: boolean;
  description?: string;
  children?: ICard[];
}

export interface CreateColumnPayload {
  title: string;
  description: string;
  boardId: string;
};

export interface EditColumnPayload extends Partial<CreateColumnPayload> {
  expanded?: boolean;
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

  edit(columnId: string, payload: EditColumnPayload): Promise<ApiResponse<IColumn>> {
    return this.patch(columnId, payload);
  }
  remove(columnId: string): Promise<ApiResponse<{ success: boolean }>> {
    return this.delete(columnId);
  }
}

export const columnAPIService = new ColumnAPIService();