import { createClient } from 'redis';

const redisClient = createClient({ url: process.env.REDIS_URL });
redisClient.connect().catch(console.error);

export async function getCached<T>(key: string): Promise<T | null> {
  const data = await redisClient.get(key);
  return data ? JSON.parse(data) : null;
}

export async function setCached(key: string, data: any, expirationSeconds = 3600) {
  await redisClient.set(key, JSON.stringify(data), { EX: expirationSeconds });
}

export { redisClient };
