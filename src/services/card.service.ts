import { cardAPISrvice, CreateCardPayload } from './api/card.api.service';
import { columnService } from './column.service';

class CardService {
  async addCard(payload: CreateCardPayload) {
    const newCard = await cardAPISrvice.create(payload);
    if ('error' in newCard) {
      // throw error
      return;
    }
    columnService.allColumns.update((allColumns) => {
      const alteredColumns = allColumns.map((column) => {
        if (column.columnId === payload.columnId) {
          column.children.push(newCard);
        }
        return column;
      })
      return alteredColumns;
    })
  }

};


export const cardService = new CardService;