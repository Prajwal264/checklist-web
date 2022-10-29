import toast from 'svelte-french-toast';
import { cardAPISrvice, CreateCardPayload, EditCardPayload, MoveCardPayload } from './api/card.api.service';
import { columnService } from './column.service';

class CardService {
  async addCard(payload: CreateCardPayload) {
    const newCard = await cardAPISrvice.create(payload);
    if ('error' in newCard) {
      // throw error
      toast.error(newCard.error)
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
      toast.error(updatedCard.error)
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

  async moveCard(payload: MoveCardPayload) {
    cardAPISrvice.move(payload).catch((response) => {
      if ('error' in response) {
        toast.error(response.error)
        // throw error
        return;
      }
    });
    columnService.allColumns.update((allColumns) => {
      const columnForItemToBeMoved = allColumns.find((column) => column.columnId === payload.sourceParentId);
      if (payload.cardId !== payload.referenceNodeId) {
        if (columnForItemToBeMoved) {
          const itemToBeMoved = columnForItemToBeMoved.children.find((item) => item.cardId === payload.cardId);
          if (itemToBeMoved) {
            const alteredColumns = allColumns.map((column) => {
              if (column.columnId === payload.sourceParentId) {
                column.children = column.children.filter((item) => item.cardId !== payload.cardId);
              }
              if (column.columnId === payload.destinationParent) {
                let indexForMovement = column.children.findIndex((item) => item.cardId === payload.referenceNodeId)
                indexForMovement = payload.isDroppedAbove ? indexForMovement : ++indexForMovement;
                column.children.splice(indexForMovement, 0, itemToBeMoved)
              }
              return column;
            })
            return alteredColumns;
          }
        }
      }
      return allColumns;
    })
  }

};


export const cardService = new CardService;