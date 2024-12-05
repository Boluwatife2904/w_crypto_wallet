import { registerSheet, type SheetDefinition } from "react-native-actions-sheet";
import AddWalletSheet from "./Sheets/AddWallet";

registerSheet("add-wallet-sheet", AddWalletSheet);

declare module "react-native-actions-sheet" {
  interface Sheets {
    "add-wallet-sheet": SheetDefinition<{
      payload: {
        action?: "create" | "import";
      };
    }>;
  }
}

export {};
