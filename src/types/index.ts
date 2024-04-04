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
  firstName?: string;
  lastName?: string;
  email?: string;
  created: string;
  updated: string;
  permissionsGroup?: string;
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
