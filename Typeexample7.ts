/*
Let’s say your /users/1 API returns this JSON:
{
  "id": 1,
  "name": "Atul",
  "email": "atul@example.com",
  "status": "ACTIVE"
}
*/

export type UserResponse = {
  id: number;
  name: string;
  email: string;
  status: 'ACTIVE' | 'INACTIVE' | 'BLOCKED';
};
