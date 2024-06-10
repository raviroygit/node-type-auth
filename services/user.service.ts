import { Response } from "express";
import { redis } from "../utils/redis";

export const getUserByUserId = async (id: string, res: Response) => {
  const user = await redis.get(id);
  if (user) {
    res.status(200).json({
      success: true,
      user: JSON.parse(user),
    });
  }
};
