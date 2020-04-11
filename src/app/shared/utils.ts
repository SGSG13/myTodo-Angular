import {TodoItemFromServer} from "./interfaces";

export function normalizedData(items: TodoItemFromServer[]) {
  if (!items || items.length < 1) return [];
  return items.reverse().map(item => {
    return {
      id: item._id,
      title: item.title,
      done: item.done
    };
  })
}
