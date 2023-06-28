export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}
export interface Month {
  id: string;
  month: string;
  revenue: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
  expenses: number;
}

export interface Day {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}
export interface GetKpisResponses {
  id: string;
  _id: string;
  __V: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  createdAt: string;
  updatedAt: string;
}

export interface GetProductResponse {
  id: string;
  _id: string;
  __V: number;
  price: number;
  expense: number;
  transaction: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export interface GetTransactionsResponse {
  id: string;
  _id: string;
  __V: number;
  buyer: string;
  amount: number;
  productIds: Array<string>;
  createdAt: string;
  updatedAt: string;
}
