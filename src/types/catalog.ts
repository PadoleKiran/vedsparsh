export type Category = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  type: "b2c" | "b2b";
};

export type Product = {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  categoryId: string;
  unit?: string;
  attributes?: Record<string, string | number>;
  images?: string[];
  tags?: string[];
  active: boolean;
};
