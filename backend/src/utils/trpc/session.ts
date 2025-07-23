import type { SessionOptions } from "iron-session";

export interface UserSession {
  id: number;
  name: string;
  image: string;
  role: string;
  lang: string;
  title: string;
  home: string;
  showPrices: boolean;
  isActive: boolean;
  nameInitials: string | null;
  staffType: string | null;
  isOfficeStaff: boolean;
  isReferralsPageEnabled: boolean;
}

export interface IronSessionData {
  user?: UserSession;
}

import dotenv from "dotenv";
dotenv.config();

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD!,
  cookieName: process.env.COOKIE_NAME!,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
