import "@emotion/react";

import { DefaultTheme } from "~/models";

declare module "@emotion/react" {
  export interface Theme extends DefaultTheme {}
}
