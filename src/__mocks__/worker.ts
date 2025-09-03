import { sampleHandlers } from "./handlers";
import { setupWorker } from "msw/browser";

export const mockWorker = setupWorker(...sampleHandlers);
