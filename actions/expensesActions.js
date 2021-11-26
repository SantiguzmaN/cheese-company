import { http } from '../data/http/http';

export function listExpenses() {
  return http({
    url: `${process.env.NEXT_PUBLIC_URL}/api/v1/expenses`,
    method: 'GET'
  });
}
