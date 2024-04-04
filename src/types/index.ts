export interface CustomFile extends File {
  preview?: string;
}

export type APIResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type User = {
  id: number;
  created: string;
  updated: string;
};

export type Drug = {
  id: number;
  name: string;
  molecule: string;
  stockLevel: number;
  tags: string[];
  inventory: Inventory[];
};

export type Inventory = {
  id: number;
  drug: Drug;
  drugId: number;
  quantity: number;
  location: string;
  expirationDate: Date;
};
