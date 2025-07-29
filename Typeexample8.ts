/*
Let’s say your /users/1 API returns this JSON:
{
  "id": 1,
  "name": "Atul",
  "email": "atul@example.com",
  "status": "ACTIVE"
}
*/
/*
import { test, request, expect } from '@playwright/test';
import { UserResponse } from './Typeexample7';

test('Validate user API response', async () => {
  const apiContext = await request.newContext();
  const res = await apiContext.get('https://example.com/api/users/1');
  expect(res.ok()).toBeTruthy();
  const body: UserResponse = await res.json(); // ✅ typed response
  expect(body.name).toBeDefined();
  expect(body.status).toBe('ACTIVE');
});
*/

