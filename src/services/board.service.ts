import { readable, Writable, writable } from 'svelte/store';
import { boardAPIService, CreateBoardPayload, IBoard } from './api/board.api.service';

class BoardService {

  allBoards: Writable<IBoard[]> = writable<IBoard[]>([]);

  showAddBoardForm = writable(false);

  async getAllBoards() {
    const allBoards = await boardAPIService.fetchAll();
    if ('error' in allBoards) {
      return [];
    }
    this.allBoards.set(allBoards);
  }


  async addBoard(payload: CreateBoardPayload) {
    const newBoard = await boardAPIService.create(payload);
    if ('error' in newBoard) {
      // throw error
      return;
    }
    this.allBoards.update((v) => [...v, newBoard])
    this.toggleShowAddBoardForm(false);
  }

  toggleShowAddBoardForm(show?: boolean) {
    if (show !== undefined) {
      this.showAddBoardForm.set(show)
      return;
    }
    this.showAddBoardForm.set(!this.showAddBoardForm);
  }
};


export const boardService = new BoardService;