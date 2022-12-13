import "dotenv/config";

export const env = {
  port: process.env.PORT || 3001,
  mongoURL: process.env.MONGO_URL || "",
};
