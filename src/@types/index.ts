export interface DataProps {
  name: string;
  amount: number;
  mls: number;
  price: number;
  desc: number;
  total?: number;
}

export interface TableProps extends DataProps {
  total: number
}

