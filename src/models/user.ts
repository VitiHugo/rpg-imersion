import { Character } from "@prisma/client";

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  beyondUsername: string;
  beyondUrl: string;
  imageUrl: string;
  status: boolean;
  modifiedBy: string;
  createdAt: Date;
  updatedAt: Date;

  characters: Character[];
}