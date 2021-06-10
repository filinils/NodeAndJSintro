import { getTodos } from "../services/dbService.js";
import * as log from "../utils/logger.js";

export function create(entity) {}
export async function read() {
  try {
    return await getTodos();
  } catch (error) {
    log.error(error);
  }
}
export function update(id) {}
export function remove(id) {}
