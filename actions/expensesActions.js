import { http } from '../utils/http';

export function listExpenses() {
  return http({
    url: `${process.env.NEXT_PUBLIC_URL}/api/v1/expenses`,
    method: 'GET'
  });
}
