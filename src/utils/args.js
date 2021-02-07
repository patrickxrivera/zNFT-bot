import { nonNull, intArg, stringArg } from "@nexus/schema";

export const requiredIntArg = (options) => nonNull(intArg(options));

export const requiredStringArg = (options) => nonNull(stringArg(options));
