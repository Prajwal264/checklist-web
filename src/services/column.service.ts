import { Writable, writable } from 'svelte/store';
import { boardAPIService, CreateBoardPayload, IBoard } from './api/board.api.service';
import { columnAPIService, CreateColumnPayload, IColumn } from './api/column.api.service';

class ColumnService {

  allColumns: Writable<IColumn[]> = writable<IColumn[]>([]);

  async getAllColumns(boardId: string) {
    const allColumns = await columnAPIService.fetchAll(boardId);
    if ('error' in allColumns) {
      return [];
    }
    this.allColumns.set(allColumns);
  }


  async addColumn(payload: CreateColumnPayload) {
    const newColumn = await columnAPIService.create(payload);
    if ('error' in newColumn) {
      // throw error
      return;
    }
    this.allColumns.update((v) => [...v, newColumn])
  }

};


export const columnService = new ColumnService;