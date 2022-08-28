import { cardAPISrvice, CreateCardPayload, EditCardPayload } from './api/card.api.service';
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

  async updateCard(payload: EditCardPayload) {
    const updatedCard = await cardAPISrvice.update(payload);
    if ('error' in updatedCard) {
      // throw error
      return;
    }
    columnService.allColumns.update((allColumns) => {
      const alteredColumns = allColumns.map((column) => {
        if (column.columnId === payload.columnId) {
          column.children = column.children.map((child) => {
            if (child.cardId === payload.cardId) {
              return {
                cardId: payload.cardId,
                checked: payload.checked ?? child.checked,
                title: payload.title ?? child.title,
              }
            }
            return child
          })
        }
        return column;
      })
      return alteredColumns;
    })
  }
};


export const cardService = new CardService;