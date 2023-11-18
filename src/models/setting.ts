export interface Setting {
  id: string;
  name: string;  
  description: string;
  imageUrl: string;
  status: boolean;
  modifiedBy: string;
  createdAt: Date;
  updatedAt: Date;
}